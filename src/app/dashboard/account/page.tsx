import React from "react";
import { getSession } from "@/actions";

import Account from "@/components/account";

export default async function AccountPage() {
  const session = await getSession()
  return (
    <Account username={session.username} profile_photo={session.profile_photo} token={session.token} />
  );
}
