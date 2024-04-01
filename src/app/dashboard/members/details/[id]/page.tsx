import React from "react";
import MemberDetails from "@/components/member/memberdetails";
import { getSession } from "@/actions";

export default async function MemberDetailsPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const session = await getSession();
	return (
		<MemberDetails
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
			officer_id={id}
		/>
	);
}
