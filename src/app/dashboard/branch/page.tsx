import { getSession } from "@/actions";
import Branch from "@/components/branch";

export default async function BranchPage() {
	const session = await getSession();

	return (
		<Branch
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
		/>
	);
}
