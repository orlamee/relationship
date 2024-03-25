import { create } from "zustand";

interface userDetails {
	user: {
		first_name: string;
		last_name: string;
		profile_photo: string;
		id: string;
		kodhex: string;
	} | null;
	setUser: (data: {
		first_name: string;
		last_name: string;
		kodhex: string;
		profile_photo: string;
		id: string;
	}) => void;
	removeUser: () => void;
}

export const userSlice = create<userDetails>()((set) => ({
	user: null,
	setUser: (data) => {
		set({
			user: {
				first_name: data.first_name,
				last_name: data.last_name,
				kodhex: data.kodhex,
				profile_photo: data.profile_photo,
				id: data.id,
			},
		});
	},
	removeUser: () => set({ user: null }),
}));
