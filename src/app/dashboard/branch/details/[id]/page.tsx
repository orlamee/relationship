import React from "react";
import BranchDetails from "@/components/branchdetails";
import { getSession } from "@/actions";
// import Modal from "../modal";

export default async function BranchDetailsPage({params: {id}}:{params:{id:string}}) {
	const session = await getSession()
	return (
			<BranchDetails username={session.username} profile_photo={session.profile_photo} token={session.token} branchId={id}/>
	);
}
