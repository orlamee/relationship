"use server";
import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions } from "./lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const tologinOtp = () => {
	redirect("/login-otp");
};

export const toDashboard = () => {
	redirect("/dashboard");
};

export async function getSession() {
	const session = await getIronSession<SessionData>(cookies(), sessionOptions);
	if (!session.isLoggedIn) {
		session.isLoggedIn = defaultSession.isLoggedIn;
		session.username = defaultSession.username;
	}

	return session;
}

export async function login(
	data: { first_name: string; last_name: string; profile_photo: string },
	token: string
) {
	const session = await getSession();

	// session.username = (formData.get("username") as string) ?? "No username";
	session.isLoggedIn = true;
	session.username = `${data.first_name} ${data.last_name}`;
	session.profile_photo = data.profile_photo;
	session.token = token;
	await session.save();
	redirect("/dashboard");
}

export async function logout() {
	const session = await getSession();
	session.destroy();
	redirect("/");
}
