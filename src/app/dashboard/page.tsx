import React from "react";
import Dashboard from "@/components/dasboard/dashboard";
import { getSession } from "@/actions";

export default async function DashboardPage() {
	const session = await getSession();
	return (
		<div>
			<Dashboard
				username={session.username}
				profile_photo={session.profile_photo}
				token={session.token}
			/>
		</div>
	);
}
