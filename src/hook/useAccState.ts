import { create } from "zustand";

interface Account {
	details: {
		account_bank: string;
		account_name: string;
		account_number: string;
	} | null;
	setDetails: (data: {
		account_bank: string;
		account_name: string;
		account_number: string;
	}) => void;

	removeDetails: () => void;
}

export const useAccState = create<Account>((set) => ({
	details: null,
	setDetails: (data) =>
		set({
			details: {
				account_name: data.account_name,
				account_bank: data.account_bank || "Providus Bank",
				account_number: data.account_number,
			},
		}),
	removeDetails: () => set({ details: null }),
}));
