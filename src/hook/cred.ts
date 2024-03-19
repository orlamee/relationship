import { create } from "zustand";

interface credentials {
	cred: {
		email: string;
		password: string;
	} | null;
	setCred: (data: { email: string; password: string }) => void;
	removeCred: () => void;
}

export const credSlice = create<credentials>()((set) => ({
	cred: null,
	setCred: (data) => {
		set({
			cred: {
				email: data.email,
				password: data.password,
			},
		});
	},
	removeCred: () => set({ cred: null }),
}));
