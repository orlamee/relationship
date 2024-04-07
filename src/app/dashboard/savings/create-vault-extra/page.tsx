import { getSession } from "@/actions";
import CreateVault from "@/components/vault-extra/createVault";
import React from "react";

export default async function CreateVaultPage() {
	const session = await getSession();
	return (
		<div>
			<CreateVault token={session.token} />
		</div>
	);
}
