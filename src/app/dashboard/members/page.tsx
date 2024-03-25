import { getSession } from "@/actions";
import Members from "@/components/member/member";
import React from "react";

export default async function MembersPage() {
	const session = await getSession();
	return (
		<Members
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
		/>
	);
}
