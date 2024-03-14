import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "./components/ui/checkbox";
import { ArrowUpDown, MoreHorizontal, Trash2 } from "lucide-react";
import Image from "next/image";
import topup from "./assets/topup icon.svg";
import withdraw from "./assets/withdrawal-Icon.svg";
import dividends from "./assets/dividends-icon.svg";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import vault from "./assets/vault.svg";

export type productDraftType = {
	id: string;
	profile_img: string;
	name: string;
	target: string;
	interest: string;
	account: string;
	sms: string;
	relationship_officer: string;
	atm: string;
};

export const productDataCol: ColumnDef<productDraftType>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value: boolean) =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400]"
				>
					Name <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<>
					<div className="flex items-center">
						<Image
							src={data.profile_img}
							width={30}
							height={30}
							alt="user"
							className="rounded-full mr-3"
						/>
						<div>
							<h1 className="text-[14px] text-black leading-[16px]">
								{data.name}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "target",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Target
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "interest",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					S.interest
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "account",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "sms",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					SMS
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "relationship_officer",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Customer Care
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "atm",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					ATM
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	// {
	// 	id: "actions",
	// 	enableHiding: false,
	// 	header: ({ column }) => {
	// 		return (
	// 			<button className="flex items-center text-[12px] font-[400] text-[#9CA3AF]">
	// 				Action
	// 			</button>
	// 		);
	// 	},
	// 	cell: ({ row }) => {
	// 		const data = row.original;

	// 		return (
	// 			<DropdownMenu modal={false}>
	// 				<DropdownMenuTrigger asChild>
	// 					<button className="h-8 w-8 p-0 outline-none">
	// 						<span className="sr-only">Open menu</span>
	// 						<MoreHorizontal className="h-4 w-4" />
	// 					</button>
	// 				</DropdownMenuTrigger>
	// 				<DropdownMenuContent align="end">
	// 					{/* <DropdownMenuItem>
	// 						<Link href={`/dashboard/product/draft/edit/${data.id}`}>
	// 							<div className="flex items-center cursor-pointer">
	// 								<Pen className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
	// 								<span className="text-[12px] font-[400] leading-[12px] text-[#21003D]">
	// 									{" "}
	// 									Edit Plan
	// 								</span>
	// 							</div>
	// 						</Link>
	// 					</DropdownMenuItem> */}
	// 					<DropdownMenuItem>
	// 						<div className="flex items-center cursor-pointer bg-gray-100">
	// 							<Trash2 className="w-[14px] text-[#EF4444] mr-2" />{" "}
	// 							<span className="text-[12px] font-[400] leading-[12px] text-[#21003D]">
	// 								{" "}
	// 								Delete Plan
	// 							</span>
	// 						</div>
	// 					</DropdownMenuItem>
	// 				</DropdownMenuContent>
	// 			</DropdownMenu>
	// 		);
	// 	},
	// },
];
export const productdraftData: productDraftType[] = [
	{
		id: "1",
		account: "Yes",
		atm: "1500",
		interest: "20%",
		sms: "Yes",
		target: "100,000-500,000",
		relationship_officer: "Yes",
		name: "Vault",
		profile_img: vault,
	},
	{
		id: "1",
		account: "Yes",
		atm: "1500",
		interest: "20%",
		sms: "Yes",
		target: "100,000-500,000",
		relationship_officer: "Yes",
		name: "Vault Extra",
		profile_img: vault,
	},
];

export type planRecentsType = {
	id: string;
	image: string;
	description: string;
	amount: string;
	date: {
		date: string;
		time: string;
	};
};

export const planRecents: planRecentsType[] = [
	{
		id: "1",
		image: topup,
		description: "Top Up",
		amount: "₦ 150,000",
		date: {
			date: "10/11/2023",
			time: "10:00am",
		},
	},
	{
		id: "2",
		image: withdraw,
		description: "Withdrawal",
		amount: "₦ 150,000",
		date: {
			date: "10/11/2023",
			time: "10:00am",
		},
	},
	{
		id: "3",
		image: dividends,
		description: "Dividends Payout",
		amount: "₦ 150,000",
		date: {
			date: "10/11/2023",
			time: "10:00am",
		},
	},
	{
		id: "4",
		image: topup,
		description: "Top Up",
		amount: "₦ 150,000",
		date: {
			date: "10/11/2023",
			time: "10:00am",
		},
	},
	{
		id: "5",
		image: withdraw,
		description: "Withdrawal",
		amount: "₦ 150,000",
		date: {
			date: "10/11/2023",
			time: "10:00am",
		},
	},
	{
		id: "6",
		image: topup,
		description: "Top Up",
		amount: "₦ 150,000",
		date: {
			date: "10/11/2023",
			time: "10:00am",
		},
	},
];
