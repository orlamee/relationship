import type { NextRequest } from "next/server";
import { getSession } from "@/actions";

export async function middleware(request: NextRequest) {
	const session = await getSession();

	if (
		session.isLoggedIn &&
		!request.nextUrl.pathname.startsWith("/dashboard")
	) {
		return Response.redirect(new URL("/dashboard", request.url));
	}

	if (
		!session.isLoggedIn &&
		request.nextUrl.pathname.startsWith("/dashboard")
	) {
		return Response.redirect(new URL("/", request.url));
	}
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
