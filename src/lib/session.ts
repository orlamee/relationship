import { SessionOptions } from "iron-session";

export interface SessionData {
	username: string;
	isLoggedIn: boolean;
	token: string;
	profile_photo: string;
}

export const defaultSession: SessionData = {
	username: "",
	isLoggedIn: false,
	token: "",
	profile_photo: "",
};

export const sessionOptions: SessionOptions = {
	password: process.env.SECRET_KEY!,
	cookieName: "ardilla-cc-session",
	ttl: 24 * 60 * 60,
	cookieOptions: {
		httpOnly: true,

		// secure only works in `https` environments
		// if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
		secure: process.env.NODE_ENV === "production",
	},
};
