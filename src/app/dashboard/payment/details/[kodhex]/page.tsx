import { getSession } from "@/actions";
import { base_url } from "@/base_url";
import UserManagementDetails from "@/components/payment/singleuserp";
import axios from "axios";
import React from "react";

export default async function UserManagementDetailsPage({
	params: { kodhex },
}: {
	params: { kodhex: string };
}) {
	const session = await getSession();
	const getSingleUser = async (token: string) => {
		try {
			const { data } = await axios.get(
				`${base_url}/ardilla/retail/admin/api/v1/field_officer/get_single_user/${kodhex}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data?.data?.user;
		} catch (error) {}
	};

	const singleUserData = await getSingleUser(session.token);
	return (
		<UserManagementDetails
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
			user={singleUserData}
		/>
	);
}
