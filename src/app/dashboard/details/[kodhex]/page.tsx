import { getSession } from "@/actions";
import UserManagementDetails from "@/components/dasboard/details";
import { base_url } from "@/base_url";
import axios from "axios";

export default async function DetailsPage({
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
		} catch (error) {
			throw new Error("server error");
		}
	};

	const singleUserData = await getSingleUser(session.token);

	return (
		<UserManagementDetails
			user_name={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
			user={singleUserData}
			kodhex={kodhex}
		/>
	);
}
