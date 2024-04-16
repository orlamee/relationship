import axios from "axios";
import useSWR from "swr";

export const useFetcher = (url: string, token?: string) => {
	const fetcher = (url: string) =>
		axios
			.get(url, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => res.data)
			.catch((e: any) => {
				const error = new Error(e?.message || "An error occurred while fetching data.");
				throw error;
			});

	const { data, error, isLoading } = useSWR(url, fetcher, {
		revalidateOnFocus: false,
	});
	return { data, error, isLoading };
};
