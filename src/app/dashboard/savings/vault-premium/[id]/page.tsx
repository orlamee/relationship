import React from "react";
import { getSession } from "@/actions";
import SinglePlanVp from "@/components/singleplanVp";

export default async function SingleSavingsPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const session = await getSession();

	return (
		<div>
			<SinglePlanVp
				username={session.username}
				profile_photo={session.profile_photo}
				token={session.token}
				userId={id}
			/>
		</div>
	);
}
