import React from "react";
import Savings from "@/components/savings/saving";
import { getSession } from "@/actions";

export default async function SavingsPage() {
	const session = await getSession();

	return (
		<Savings
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
		/>
	);
}
