import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, Eye, MoreVertical } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import user from "../assets/user_img.svg";
import topup from "../assets/topup.svg";
import widthdraw from "../assets/withdrawal.svg";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import Status from "./badges/status";
import TransferStatus from "./badges/transfer";

// Dashboard
export type dashboardDataType = {
	id: string;
	profile_img: string;
	officer_img: string;
	name: string;
	officer: string;
	kodhex: string;
	email: string;
	dob: string;
	phone_number: string;
	address: string;
	date_joined: string;
	status: string;
};

export type CompletedDataType = {
	id: string;
	profile_img: string;
	officer_img: string;
	name: string;
	officer: string;
	kodhex: string;
	email: string;
	account_name: string;
	account_number: string;
	dob: string;
	phone_number: string;
	address: string;
	date_joined: string;
	status: string;
};

export const CompletedData: CompletedDataType[] = [
	{
		id: "1",
		profile_img: user,
		name: "Ajayi Michael",
		officer_img: user,
		officer: "Ajayi Michael",
		kodhex: "<Ajayi/>",
		email: "john@example.com",
		dob: "10/11/94",
		phone_number: "08165342678",
		address: "29, Oladoyingbe street, Ogba,Ikeja.Lagos.",
		date_joined: "10/11/2023",
		account_name: "Ardillatech (Michael Ayo...)",
		account_number: "0153567893",
		status: "funded",
	},
];

export const CompletedColumns: ColumnDef<CompletedDataType>[] = [
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
					Users <ArrowUpDown className="ml-2 h-4 w-4" />
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
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.name}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "kodhex",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Kodhex
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "phone_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Phone Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "account_name",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "account_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "address",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Address
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "officer",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Field Officer <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<>
					<div className="flex items-center">
						<Image
							src={data.officer_img}
							width={30}
							height={30}
							alt="user"
							className="rounded-full mr-3"
						/>
						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.officer}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "date_joined",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Date Joined
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "date_joined",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Date Joined
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="flex items-center">
					{data.status === "funded" && (
						<Status type="funded" text={data.status} />
					)}
					{data.status === "notfunded" && (
						<Status type="notfunded" text={data.status} />
					)}
				</div>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const data = row.original;

			return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<button className="h-8 w-8 p-0 outline-none">
							<span className="sr-only">Open menu</span>
							<MoreVertical className="h-4 w-4 text-[#240552]" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Link href={`/dashboard/details/${data.id}`}>
								<div className="flex items-center cursor-pointer">
									<Eye className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
									<span className="text-[12px] font-[400] leading-[12px]">
										{" "}
										View More Details
									</span>
								</div>
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export const dashboardData: dashboardDataType[] = [
	{
		id: "1",
		profile_img: user,
		name: "Ajayi Michael",
		officer_img: user,
		officer: "Ajayi Michael",
		kodhex: "<Ajayi/>",
		email: "john@example.com",
		dob: "10/11/94",
		phone_number: "08165342678",
		address: "29, Oladoyingbe street, Ogba,Ikeja.Lagos.",
		date_joined: "10/11/2023",
		status: "funded",
	},
	{
		id: "2",
		profile_img: user,
		name: "Elon Musk",
		officer_img: user,
		officer: "Ajayi Michael",
		kodhex: "<Ajayi/>",
		email: "elon@example.com",
		dob: "10/11/94",
		phone_number: "08165342678",
		address: "29, Oladoyingbe street, Ogba,Ikeja.Lagos.",
		date_joined: "10/11/2023",
		status: "funded",
	},
];
export const dashboardNotFundedData: dashboardDataType[] = [
	{
		id: "1",
		profile_img: user,
		name: "Ajayi Michael",
		officer_img: user,
		officer: "Ajayi Michael",
		kodhex: "<Ajayi/>",
		email: "john@example.com",
		dob: "10/11/94",
		phone_number: "08165342678",
		address: "29, Oladoyingbe street, Ogba,Ikeja.Lagos.",
		date_joined: "10/11/2023",
		status: "notfunded",
	},
];

export const dashboardColumns: ColumnDef<dashboardDataType>[] = [
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
					Users <ArrowUpDown className="ml-2 h-4 w-4" />
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
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.name}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "kodhex",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Kodhex
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "phone_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Phone Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "address",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Address
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "officer",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Field Officer <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<>
					<div className="flex items-center">
						<Image
							src={data.officer_img}
							width={30}
							height={30}
							alt="user"
							className="rounded-full mr-3"
						/>
						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.officer}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "date_joined",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Date Joined
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="flex items-center">
					{data.status === "funded" && (
						<Status type="funded" text={data.status} />
					)}
					{data.status === "notfunded" && (
						<Status type="notfunded" text={data.status} />
					)}
				</div>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const data = row.original;

			return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<button className="h-8 w-8 p-0 outline-none">
							<span className="sr-only">Open menu</span>
							<MoreVertical className="h-4 w-4 text-[#240552]" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Link href={`/dashboard/details/${data.id}`}>
								<div className="flex items-center cursor-pointer">
									<Eye className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
									<span className="text-[12px] font-[400] leading-[12px]">
										{" "}
										View More Details
									</span>
								</div>
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

//Activities
export type activitiesDataType = {
	id: string;
	badge: string;
	description: string;
	date: string;
	amount: string;
	source: string;
	status: string;
};

export const activitiesData: activitiesDataType[] = [
	{
		id: "1",
		badge: topup,
		description: "Top up",
		date: "10/11/94",
		amount: "₦150,000",
		source: "DIB",
		status: "successful",
	},
	{
		id: "2",
		badge: widthdraw,
		description: "Withdrawal",
		date: "10/11/94",
		amount: "₦150,000",
		source: "DIB",
		status: "pending",
	},
	{
		id: "2",
		badge: widthdraw,
		description: "Withdrawal",
		date: "10/11/94",
		amount: "₦150,000",
		source: "DIB",
		status: "failed",
	},
	{
		id: "2",
		badge: widthdraw,
		description: "Withdrawal",
		date: "10/11/94",
		amount: "₦150,000",
		source: "DIB",
		status: "reversed",
	},
];

export const activitiesColumns: ColumnDef<activitiesDataType>[] = [
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
		accessorKey: "description",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400]"
				>
					Description <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<>
					<div className="flex items-center">
						<Image
							src={data.badge}
							width={30}
							height={30}
							alt="user"
							className="rounded-full mr-3"
						/>
						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.description}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "date",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Date
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "amount",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Amount
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "source",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Source
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="flex items-center">
					{data.status === "successful" && (
						<TransferStatus type="successful" text={data.status} />
					)}
					{data.status === "pending" && (
						<TransferStatus type="pending" text={data.status} />
					)}
					{data.status === "reversed" && (
						<TransferStatus type="reversed" text={data.status} />
					)}
					{data.status === "failed" && (
						<TransferStatus type="failed" text={data.status} />
					)}
				</div>
			);
		},
	},
];

//Savings
export type savingDataType = {
	id: string;
	profile_img: string;
	officer_img: string;
	name: string;
	officer: string;
	kodhex: string;
	email: string;
	balance: string;
	account_number: string;
	account_name: string;
};

export const savingData: savingDataType[] = [
	{
		id: "1",
		profile_img: user,
		name: "Ajayi Michael",
		officer_img: user,
		officer: "Ajayi Michael",
		kodhex: "<Ajayi/>",
		email: "john@example.com",
		balance: "150,000",
		account_name: "Ardillatech",
		account_number: "234567890",
	},
];

export const savingColumns: ColumnDef<savingDataType>[] = [
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
					Users <ArrowUpDown className="ml-2 h-4 w-4" />
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
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.name}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "kodhex",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Kodhex
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "officer",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Field Officer <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<>
					<div className="flex items-center">
						<Image
							src={data.officer_img}
							width={30}
							height={30}
							alt="user"
							className="rounded-full mr-3"
						/>
						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.officer}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "account_name",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "account_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "balance",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Balance
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
];

//Savings plan
export type planDataType = {
	id: string;
	profile_img: string;
	name: string;
	balance: string;
	account_number: string;
	account_name: string;
};

export const planData: planDataType[] = [
	{
		id: "1",
		profile_img: user,
		name: "Ajayi Michael",
		balance: "150,000",
		account_name: "Ardillatech",
		account_number: "234567890",
	},
	{
		id: "2",
		profile_img: user,
		name: "Shallipopi",
		balance: "150,000",
		account_name: "Ardillatech",
		account_number: "234567890",
	},
];

export const planColumns: ColumnDef<planDataType>[] = [
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
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
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
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.name}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "account_name",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "account_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "balance",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Account Balance
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
];

// Generate List
export type generatelistDataType = {
	id: string;
	officer_img: string;
	officer: string;
	email: string;
};

export const generatelistData: generatelistDataType[] = [
	{
		id: "1",
		officer_img: user,
		officer: "Ajayi Michael",
		email: "john@example.com",
	},
];

export const generatelistColumns: ColumnDef<generatelistDataType>[] = [
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
		accessorKey: "officer",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Field Officer <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<>
					<div className="flex items-center">
						<Image
							src={data.officer_img}
							width={30}
							height={30}
							alt="user"
							className="rounded-full mr-3"
						/>
						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.officer}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
];

//Branch
export type branchDataType = {
	id: string;
	state: string;
	head_branch: string;
	branch: string;
	email: string;
	address: string;
	phone_number: string;
	group: string;
};

export const branchData: branchDataType[] = [
	{
		id: "1",
		state: "Lagos",
		head_branch: "Yes",
		branch: "Ikeja",
		email: "Ardillatech",
		address: "29, Oladoyingbr street, Ogba,Ikeja.Lagos.",
		phone_number: "09012345673",
		group: "Ardilla",
	},
];

export const branchColumns: ColumnDef<branchDataType>[] = [
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
		accessorKey: "state",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					State <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "head_branch",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Head Branch
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "branch",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Branch
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "address",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Address
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "phone_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Phone Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "group",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Group
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		header: ({ column }) => {
			return (
				<button className="flex items-center text-[12px] font-[400] text-[#9CA3AF]">
					Action
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<button className="h-8 w-8 p-0 outline-none">
							<span className="sr-only">Open menu</span>
							<MoreVertical className="h-4 w-4 text-[#240552]" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Link href={`/dashboard/branch/details/${data.id}`}>
								<div className="flex items-center cursor-pointer">
									<Eye className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
									<span className="text-[12px] font-[400] leading-[12px]">
										{" "}
										View Details
									</span>
								</div>
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const LocationColumns: ColumnDef<branchDataType>[] = [
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
		accessorKey: "state",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					State <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "head_branch",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Head Branch
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "branch",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Branch
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "address",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Address
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "phone_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Phone Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "group",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Group
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		header: ({ column }) => {
			return (
				<button className="flex items-center text-[12px] font-[400] text-[#9CA3AF]">
					Action
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<button className="h-8 w-8 p-0 outline-none">
							<span className="sr-only">Open menu</span>
							<MoreVertical className="h-4 w-4 text-[#240552]" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Link href={`/dashboard/branch/location/${data.id}`}>
								<div className="flex items-center cursor-pointer">
									<Eye className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
									<span className="text-[12px] font-[400] leading-[12px]">
										{" "}
										View Details
									</span>
								</div>
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

//Group
export type groupDataType = {
	id: string;
	group_name: string;
	strength: string;
	location: string;
	address: string;
	date: string;
	phone_number: string;
};

export const groupData: groupDataType[] = [
	{
		id: "1",
		group_name: "Ardilla",
		strength: "-",
		location: "Ikeja",
		address: "29, Oladoyingbr street, Ogba,Ikeja.Lagos.",
		date: "10/08/2023",
		phone_number: "09012345673",
	},
];

export const groupColumns: ColumnDef<groupDataType>[] = [
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
		accessorKey: "group_name",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Group Name <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "strength",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Strength
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "location",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Location
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		accessorKey: "address",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Address
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "date",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Date
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "phone_number",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Phone Number
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},

	{
		id: "actions",
		enableHiding: false,
		header: () => {
			return (
				<button className="flex items-center text-[12px] font-[400] text-[#9CA3AF]">
					Action
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<button className="h-8 w-8 p-0 outline-none">
							<span className="sr-only">Open menu</span>
							<MoreVertical className="h-4 w-4 text-[#240552]" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Link href={`/dashboard/branch/group/${data.id}`}>
								<div className="flex items-center cursor-pointer">
									<Eye className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
									<span className="text-[12px] font-[400] leading-[12px]">
										{" "}
										View Details
									</span>
								</div>
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
