import React from "react";
import Nuban from "@/components/nuban/nubancomponent";
import { getSession } from "@/actions";

export default async function NubanPage() {
	const session = await getSession();

	return (
		<Nuban
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
		/>
	);
}
