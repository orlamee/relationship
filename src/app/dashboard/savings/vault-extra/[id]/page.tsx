import React from "react";
import { getSession } from "@/actions";
import SinglePlanVe from "@/components/singleplanVe";

export default async function SingleSavingsPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const session = await getSession();

	return (
		<div>
			<SinglePlanVe
				username={session.username}
				profile_photo={session.profile_photo}
				token={session.token}
				userId={id}
			/>
		</div>
	);
}
