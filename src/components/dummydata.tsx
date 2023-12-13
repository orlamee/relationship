import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowUpDown,
  Eye,
  MoreVertical,
} from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import user from "../assets/user_img.svg";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import Status from "./badges/status";

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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
            <DropdownMenuItem
            >
              <Link
                href={`/dashboard/details/${data.id}`}
              >
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