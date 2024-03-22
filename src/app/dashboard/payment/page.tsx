import React, { useEffect, useState } from "react";
import Payment from "@/components/payment/payment";
import { getSession } from "@/actions";

export default async function PaymentPage() {
	const session = await getSession();
	return (
		<Payment
			username={session.username}
			profile_photo={session.profile_photo}
			token={session.token}
		/>
	);
}
