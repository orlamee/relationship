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
import { parseDateTime } from "@/lib/parsedatetime";
import credit from "../assets/credit.svg";
import debit from "../assets/withdraw.svg";

// Dashboard

export type FundedDataType = {
	id: string;
	profile_photo: string;
	officer_img: string;
	first_name: string;
	last_name: string;
	officer: string;
	kodhex: string;
	email: string;
	dob: string;
	phone: string;
	residential_address: string;
	date_joined: string;
	status: string;
};

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

export const dashboardColumns: ColumnDef<FundedDataType>[] = [
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
		accessorKey: "first_name",
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
						<div className="relative w-[35px] h-[35px] rounded-full mr-3 flex-shrink-0">
							<Image
								src={data.profile_photo}
								fill
								alt="user"
								className="rounded-full mr-3"
							/>
						</div>

						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.first_name} {data.last_name}
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
		accessorKey: "phone",
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
		accessorKey: "residential_address",
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
						<div className="relative mr-3 w-[30px] h-[30px]">
							<Image
								src={data.officer_img}
								fill
								alt="user"
								className="rounded-full mr-3"
							/>
						</div>

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
					{data.status === "not funded" && (
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
					<DropdownMenuContent align="end" className="bg-white">
						<DropdownMenuItem>
							<Link href={`/dashboard/details/${data.kodhex}`}>
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
export const paymentColumns: ColumnDef<FundedDataType>[] = [
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
		accessorKey: "first_name",
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
						<div className="relative w-[35px] h-[35px] rounded-full mr-3">
							<Image
								src={data.profile_photo}
								fill
								alt="user"
								className="rounded-full mr-3"
							/>
						</div>

						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.first_name} {data.last_name}
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
		accessorKey: "phone",
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
		accessorKey: "residential_address",
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
						<div className="relative mr-3 rounded-full w-[30px] h-[30px]">
							<Image
								src={data.officer_img}
								alt="user"
								className="rounded-full"
								fill
							/>
						</div>

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
					{data.status === "not funded" && (
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
					<DropdownMenuContent align="end" className="bg-white">
						<DropdownMenuItem>
							<Link href={`/dashboard/payment/details/${data.kodhex}`}>
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

export const nubanColumns: ColumnDef<dashboardDataType>[] = [
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
	// {
	// 	id: "actions",
	// 	enableHiding: false,
	// 	cell: ({ row }) => {
	// 		const data = row.original;

	// 		return (
	// 			<DropdownMenu modal={false}>
	// 				<DropdownMenuTrigger asChild>
	// 					<button className="h-8 w-8 p-0 outline-none">
	// 						<span className="sr-only">Open menu</span>
	// 						<MoreVertical className="h-4 w-4 text-[#240552]" />
	// 					</button>
	// 				</DropdownMenuTrigger>
	// 				<DropdownMenuContent align="end">
	// 					<DropdownMenuItem>
	// 						<Link href={`/dashboard/details/${data.id}`}>
	// 							<div className="flex items-center cursor-pointer">
	// 								<Eye className="w-[14px] text-[#9CA3AF] mr-2" />{" "}
	// 								<span className="text-[12px] font-[400] leading-[12px]">
	// 									{" "}
	// 									View More Details
	// 								</span>
	// 							</div>
	// 						</Link>
	// 					</DropdownMenuItem>
	// 				</DropdownMenuContent>
	// 			</DropdownMenu>
	// 		);
	// 	},
	// },
];

export const PaymentdashboardColumns: ColumnDef<dashboardDataType>[] = [
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
							<Link href={`/dashboard/payment/details/${data.id}`}>
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
	transaction_description: string;
	date_created: string;
	amount: string;
	transaction_category: string;
	transaction_type: string;
	status: string;
};

export type plan = {
	amount: string;
	auto_deposit: boolean;
	date_created: string;
	day_of_month: string | undefined;
	day_of_week: string | undefined;
	dividend_percentage: string;
	dividend_total: string;
	dividends_taken: boolean;
	dividends_upfront: boolean;
	duration_days: string;
	end_date: string;
	frequency: string;
	id: number;
	last_payment_date: string | undefined;
	last_topup_date: string;
	name: string;
	next_payment_date: string | null;
	next_topup_date: string;
	payment_method: string;
	start_date: string;
	target_amount: string;
	time: string;
	total_dividend_received: string;
	vault_plan_book_balance: string;
	vault_wallet_id: string;
	vault_wallet_plan_id: string;
	withdrawn: boolean;
};

export type paymentDataType = {
	id: string;
	badge: string;
	description: string;
	date: string;
	amount: string;
	to: string;
	status: string;
};

export type rewardDataType = {
	id: string;
	reward: string;
	title: string;
	location: string;
	date: string;
	amount: string;
	status: string;
};

export const activitiesColumns: ColumnDef<activitiesDataType>[] = [
	{
		accessorKey: "transaction_category",
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
						{data.transaction_type.toLowerCase() === "credit" ? (
							<Image
								src={credit}
								width={30}
								height={30}
								alt="user"
								className="rounded-full mr-3"
							/>
						) : (
							<Image
								src={widthdraw}
								width={30}
								height={30}
								alt="user"
								className="rounded-full mr-3"
							/>
						)}

						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.transaction_description}
							</h1>
						</div>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "date_created",
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
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div>
					<div>{parseDateTime(data.date_created, "d/L/yyyy")}</div>
					<div className="text-[#9ca3af]">
						{parseDateTime(data.date_created, "p")}
					</div>
				</div>
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
		cell: ({ row }) => {
			const data = row.original;
			return <div>₦{Number(data.amount).toFixed(2)}</div>;
		},
	},
	{
		accessorKey: "transaction_category",
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
					{data.status.toLowerCase() === "successful" && (
						<TransferStatus type="successful" text={data.status} />
					)}
					{data.status.toLowerCase() === "pending" && (
						<TransferStatus type="pending" text={data.status} />
					)}
					{data.status.toLowerCase() === "reversed" && (
						<TransferStatus type="reversed" text={data.status} />
					)}
					{data.status.toLowerCase() === "failed" && (
						<TransferStatus type="failed" text={data.status} />
					)}
				</div>
			);
		},
	},
];

export const paymentData: paymentDataType[] = [
	{
		id: "1",
		badge: topup,
		description: "Top up",
		date: "10/11/94",
		amount: "₦150,000",
		to: "Ajayi Michael..",
		status: "successful",
	},
	{
		id: "2",
		badge: widthdraw,
		description: "Withdrawal",
		date: "10/11/94",
		amount: "₦150,000",
		to: "Ajayi Michael..",
		status: "pending",
	},
	{
		id: "2",
		badge: widthdraw,
		description: "Withdrawal",
		date: "10/11/94",
		amount: "₦150,000",
		to: "Ajayi Michael..",
		status: "failed",
	},
	{
		id: "2",
		badge: widthdraw,
		description: "Withdrawal",
		date: "10/11/94",
		amount: "₦150,000",
		to: "Ajayi Michael..",
		status: "reversed",
	},
];

export const rewardColumns: ColumnDef<rewardDataType>[] = [
	{
		accessorKey: "reward",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Rewards <ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		},
	},
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Title <ArrowUpDown className="ml-2 h-4 w-4" />
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
					{data.status === "claimed" && (
						<span className="px-5 py-2.5 bg-[#EFFBEF] text-[#228B22] rounded-[4px] capitalize">
							{data.status}
						</span>
					)}
					{data.status === "unclaimed" && (
						<span className="px-5 py-2.5 bg-[#F9FAFB] text-[#9CA3AF] rounded-[4px] capitalize">
							{data.status}
						</span>
					)}
				</div>
			);
		},
	},
];

export const rewardsData: rewardDataType[] = [
	{
		id: "1",
		reward: "Movie",
		title: "Miseducation",
		date: "10/11/2023",
		location: "Shoprite Cinema, Ikeja.",
		status: "claimed",
		amount: "150,000",
	},
	{
		id: "1",
		reward: "Movie",
		title: "Miseducation",
		date: "10/11/2023",
		location: "Shoprite Cinema, Ikeja.",
		status: "unclaimed",
		amount: "150,000",
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

export type savingsType = {
	id: string;
	kodhex: string;
	first_name: string;
	last_name: string;
	field_officer: {
		first_name: string;
		last_name: string;
		profile_photo: string;
	};
	balance: string;
	profile_photo: string;
	email: string;
	virtual_account_name: string;
	virtual_account_number: string;
};

export const savingColumns: ColumnDef<savingsType>[] = [
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
		accessorKey: "first_name",
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
						<div className="relative mr-3 rounded-full w-[30px] h-[30px]">
							<Image
								src={data.profile_photo}
								fill
								alt="user"
								className="rounded-full"
							/>
						</div>

						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.first_name} {data.last_name}
							</h1>
							<h1 className="text-[#9ca3af]">{`<${data.kodhex}/>`}</h1>
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
	{
		accessorKey: "field_officer",
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
						<div className="relative mr-3 rounded-full w-[30px] h-[30px]">
							<Image
								src={data.field_officer.profile_photo}
								fill
								alt="field officer"
								className="rounded-full"
							/>
						</div>

						<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px] capitalize">
							{data.field_officer.first_name}{" "}
							{data.field_officer.last_name}
						</h1>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "virtual_account_name",
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
		accessorKey: "virtual_account_number",
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
	{
		id: "actions",
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
					<DropdownMenuContent align="end" className="bg-white">
						<DropdownMenuItem>
							<Link href={`/dashboard/savings/vault-lite/${data.id}`}>
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
export const savingColumnsVe: ColumnDef<savingsType>[] = [
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
		accessorKey: "first_name",
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
						<div className="relative mr-3 rounded-full w-[30px] h-[30px]">
							<Image
								src={data.profile_photo}
								fill
								alt="user"
								className="rounded-full"
							/>
						</div>

						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.first_name} {data.last_name}
							</h1>
							<h1 className="text-[#9ca3af]">{`<${data.kodhex}/>`}</h1>
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
	{
		accessorKey: "field_officer",
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
						<div className="relative mr-3 rounded-full w-[30px] h-[30px]">
							<Image
								src={data.field_officer.profile_photo}
								fill
								alt="field officer"
								className="rounded-full"
							/>
						</div>

						<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px] capitalize">
							{data.field_officer.first_name}{" "}
							{data.field_officer.last_name}
						</h1>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "virtual_account_name",
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
		accessorKey: "virtual_account_number",
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
	{
		id: "actions",
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
					<DropdownMenuContent align="end" className="bg-white">
						<DropdownMenuItem>
							<Link href={`/dashboard/savings/vault-extra/${data.id}`}>
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
export const savingColumnsVp: ColumnDef<savingsType>[] = [
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
		accessorKey: "first_name",
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
						<div className="relative mr-3 rounded-full w-[30px] h-[30px]">
							<Image
								src={data.profile_photo}
								fill
								alt="user"
								className="rounded-full"
							/>
						</div>

						<div>
							<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px]">
								{data.first_name} {data.last_name}
							</h1>
							<h1 className="text-[#9ca3af]">{`<${data.kodhex}/>`}</h1>
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
	{
		accessorKey: "field_officer",
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
						<div className="relative mr-3 rounded-full w-[30px] h-[30px]">
							<Image
								src={data.field_officer.profile_photo}
								fill
								alt="field officer"
								className="rounded-full"
							/>
						</div>

						<h1 className="text-[12px] font-[500] text-[#21003D] leading-[16px] capitalize">
							{data.field_officer.first_name}{" "}
							{data.field_officer.last_name}
						</h1>
					</div>
				</>
			);
		},
	},
	{
		accessorKey: "virtual_account_name",
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
		accessorKey: "virtual_account_number",
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
	{
		id: "actions",
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
					<DropdownMenuContent align="end" className="bg-white">
						<DropdownMenuItem>
							<Link href={`/dashboard/savings/vault-premium/${data.id}`}>
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
	branch_id: string;
	state: string;
	lga: string;
	head_branch: boolean;
	email: string;
	street_address: string;
	phone: string;
	date_created: string;
	closest_landmark: string;
};

export const branchData: branchDataType[] = [];

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
		cell: ({ row }) => {
			const data = row.original;
			return <div>{data.head_branch ? "true" : "false"}</div>;
		},
	},

	{
		accessorKey: "lga",
		header: ({ column }) => {
			return (
				<button
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
					className="flex items-center text-[12px] font-[400] text-[#9CA3AF]"
				>
					Lga
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
		accessorKey: "street_address",
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
		accessorKey: "phone",
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
					<DropdownMenuContent align="end" className="bg-white">
						<DropdownMenuItem>
							<Link href={`/dashboard/branch/details/${data.branch_id}`}>
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
							<Link
								href={`/dashboard/branch/location/${data.branch_id}`}
							>
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
