import React from "react";
import UserManagementComponent from "@/components/usermanage/main";
import { getSession } from "@/actions";

export default async function UserManagementPage() {
	const session = await getSession();
	return (
		<div>
			<UserManagementComponent
				username={session.username}
				profile_photo={session.profile_photo}
				token={session.token}
			/>
		</div>
	);
}
