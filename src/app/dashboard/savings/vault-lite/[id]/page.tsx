import React from "react";
import SinglePlan from "@/components/singleplan";
import { getSession } from "@/actions";

export default async function SingleSavingsPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const session = await getSession();

	return (
		<div>
			<SinglePlan
				username={session.username}
				profile_photo={session.profile_photo}
				token={session.token}
				userId={id}
			/>
		</div>
	);
}
