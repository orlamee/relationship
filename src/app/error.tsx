"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className="flex justify-center items-center min-h-screen">
			<div className="text-center">
				<h2 className="mb-2">Something went wrong!</h2>
				<button
					className="bg-[#240552] text-white px-6 py-3 rounded-[4px] text-[14px]"
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Try again
				</button>
			</div>
		</main>
	);
}
