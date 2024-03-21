import { getSession } from "@/actions";
import Members from "@/components/member/member";
import React from "react";
import axios from "axios";
import { base_url } from "@/base_url";

export default async function MembersPage() {
	const session = await getSession();
	const getFieldOfficers = async (token: string) => {
		try {
			const { data } = await axios.get(
				`${base_url}/ardilla/retail/admin/api/v1/field_officer/GetFieldOfficers`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	const fieldOfficers = await getFieldOfficers(session.token);
	return (
		<Members
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
			memberdata={fieldOfficers?.data}
		/>
	);
}
