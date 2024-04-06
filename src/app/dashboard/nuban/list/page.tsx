import React from "react";
import NubanList from "@/components/nuban/nubanlist";
import { getSession } from "@/actions";

export default async function NubanListPage({
	searchParams: { id },
}: {
	searchParams: { id: string };
}) {
	console.log({ id });
	const session = await getSession();
	return (
		<NubanList
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
			officerId={id}
		/>
	);
}
