"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<ProgressBar
				height="2px"
				color="#240552"
				options={{ showSpinner: false }}
				shallowRouting
			/>
		</>
	);
};

export default Providers;
