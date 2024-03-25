"use client";
import React, { useEffect, useState } from "react";
import Steptitle from "./steptitle";
import { CalendarIcon, ChevronDown, XCircleIcon } from "lucide-react";
import Modal from "../modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { Switch } from "../ui/switch";
import {
	Control,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from "react-hook-form";
import { vaultLiteVal } from "./createVault";
import axios from "axios";
import { base_url } from "@/base_url";
import { userSlice } from "@/hook/user";
import { Calendar } from "../ui/calendar";
import { Controller } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

type props = {
	setStep: () => void;
	next: () => void;
	register: UseFormRegister<vaultLiteVal>;
	watch: UseFormWatch<vaultLiteVal>;
	selectedF: string;
	token: string;
	control: Control<vaultLiteVal>;
	setValue: UseFormSetValue<vaultLiteVal>;
};

function ChoosePeriod({
	setStep,
	next,
	register,
	watch,
	selectedF,
	token,
	control,
	setValue,
}: props) {
	const user = userSlice();

	const [agreed, setAgreed] = useState(false);
	const [modal, setModal] = useState<"estimate" | "">("");

	type breakdown = {
		date: string;
		amount: string;
		dividends: string;
		amounts: string;
	};
	const Breakdown: breakdown[] = [
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
	];

	const startDate = watch("start_date");
	const payDate = watch("end_date");
	const time = watch("time");
	const target = watch("target_amount");
	const name = watch("name");

	const getEstimate = async () => {
		try {
			const { data } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/savings/vault_lite_wallet/plan/${user?.user?.id}`,
				{
					name: name,
					show_estimate: true,
					start_date: new Date(Date.now()).toISOString(),
					end_date: new Date(
						Date.now() + Number(payDate) * 24 * 60 * 60 * 1000
					).toISOString(),
					time: time,
					frequency: selectedF,
					target_amount: target,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (data.code === 200) {
				setModal("estimate");
			}
			console.log({ data });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setValue("start_date", new Date(Date.now()));
	}, [setValue]);

	console.log();
	const EstimateModal = () => (
		<Modal>
			<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
				<XCircleIcon
					className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
					onClick={() => setModal("")}
				/>

				<div className="flex flex-col mx-auto pt-[30px]">
					<h1 className="text-[#3D0072] text-[20px] font-[600] text-center mb-1 font-[founder]">
						Estimate
					</h1>
					<p className="text-[12px] font-[500] text-center text-[#9CA3AF]">
						A good consistency would give you this breakdown
					</p>
				</div>

				<Tabs defaultValue="details" className="w-[400px] mx-auto mt-8">
					<TabsList className=" grid w-[320px] mx-auto grid-cols-2 h-[46px] bg-[#e4baba]">
						<TabsTrigger
							value="details"
							className="h-full rounded-[8px] font-[600]"
						>
							Details
						</TabsTrigger>
						<TabsTrigger value="breakdown" className="h font-[600]">
							Breakdown
						</TabsTrigger>
					</TabsList>
					<TabsContent value="details">
						<div className="mt-4">
							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<p className="text-[#9CA3AF] text-[12px] font-medium">
									Amount
								</p>

								<p className="text-[14px] font-[600] text-black">
									₦{watch("target_amount")}
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Frequency
									</p>
								</div>

								<p className="text-[14px] font-[600] text-black">
									{selectedF}
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Rate
									</p>
									<span className="mr-[-50px] hidden"></span>
								</div>

								<p className="text-[14px] font-[600] text-black">
									6-10% per annum
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Accrued
									</p>
									<span className="mr-[-50px] hidden"></span>
								</div>

								<p className="text-[14px] font-[600] text-black">
									₦100,000
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Upfront
									</p>
									<span className="mr-[-50px] hidden"></span>
								</div>

								<Switch />
							</div>

							<p className="text-center my-6 text-[13px] font-[500] px-[15%]">
								Saving Tip: Save N16,666 Monthly to achieve target. You
								can also top up anytime
							</p>

							<div className="flex flex-col gap-3">
								<p className="text-[13px] text-[#9CA3AF] font-[500]">
									Preferred amount to save{" "}
								</p>

								<input
									type="text"
									defaultValue={`₦${watch("target_amount")}`}
									className="w-full border-[1px] font-[500] text-primary border-[#D1D5DB] rounded-[4px] p-4"
									disabled
								/>
							</div>

							<div className="w-full flex-row items-center flex mx-auto my-4">
								<input
									type="checkbox"
									className="accent-[#3D0072] mr-1 cursor-pointer"
									checked={agreed}
									onChange={(e) => {
										if (e.target.checked === true) {
											setAgreed(true);
										} else {
											setAgreed(false);
										}
									}}
								/>
								<p className="text-[12px] font-[500] text-[#9CA3AF] text-center mt-4">
									By clicking you are agreeing to the{" "}
									<span className="text-primary">
										Terms and Conditions Please note: Cannot be broken
									</span>
								</p>
							</div>
						</div>
					</TabsContent>
					<TabsContent value="breakdown">
						<div className="mt-5 bg-[#F9F9F9] w-[328px] mx-auto">
							<Table className="mx-auto">
								<TableHeader>
									<TableRow>
										<TableHead className="text-[10px] font-[500]">
											Date
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											Amount
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											Dividends
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											Amounts
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="bg-[#F9F9F9] rounded-t-[8px] mx-auto">
									{Breakdown.map((b, i) => (
										<TableRow
											key={i}
											className="border-0 cursor-pointer"
										>
											<TableCell className="text-[10px] font-[500]">
												{b.date}
											</TableCell>
											<TableCell className="text-[10px] font-[500]">
												{b.amount}
											</TableCell>
											<TableCell className="text-[10px] font-[500]">
												{b.dividends}
											</TableCell>
											<TableCell className="text-[10px] font-[500] text-[#23A323]">
												{b.amounts}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</TabsContent>
				</Tabs>

				<button
					className="mt-8 cursor-pointer w-[390px] block mx-auto bg-[#3D0072] text-white p-5 rounded-[8px] text-[12px] disabled:bg-[#3D0072]/60"
					onClick={() => {
						next();
					}}
					disabled={agreed === false}
				>
					Continue
				</button>
			</div>
		</Modal>
	);
	const [inputType, setInputType] = useState("text");
	const [inputType2, setInputType2] = useState("text");

	const [inputTypeDate, setInputTypeDate] = useState("text");

	const handleFocus = () => {
		setInputType("date");
	};
	const handleFocus2 = () => {
		setInputType2("date");
	};

	const handleBlurDate = () => {
		setInputTypeDate("time");
	};

	const handleDate = () => {
		setInputTypeDate("time");
	};

	const handleBlur = () => {
		setInputType("text");
	};
	const handleBlur2 = () => {
		setInputType2("text");
	};

	const oneEighhty = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000);
	const payback_dates = [
		{
			text: "180 days",
			day: 180,
		},
		{
			text: "210 days",
			day: 210,
		},
		{
			text: "240 days",
			day: 240,
		},
		{
			text: "270 days",
			day: 270,
		},
		{
			text: "300 days",
			day: 300,
		},

		{
			text: "330 days",
			day: 330,
		},
	];

	return (
		<div className="mt-10">
			{modal === "estimate" && <EstimateModal />}

			<Steptitle
				title="Choose Period"
				subtitle="Tell us how long you wish to save for"
				onClick={setStep}
			/>

			<div className="max-w-[450px] mx-auto mt-10">
				<div className="mb-4">
					<button className="w-full  text-left px-6 py-5 outline-none border-[1px] border-[#292D32] rounded-[4px]">
						<span className="sr-only">Open menu</span>
						<span className="text-[12px] font-[500] text-[#292D32] flex items-center gap-2">
							<div className="flex items-center gap-2 text-[13px]">
								<p>Start Today</p>{" "}
								<div>
									{format(new Date(Date.now()), "do MMMM, yyyy")}
								</div>
							</div>
						</span>
					</button>
				</div>
				<div className="mb-4">
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<button className="w-full  text-left px-6 py-5 outline-none border-[1px] border-[#292D32] rounded-[4px]">
								<span className="sr-only">Open menu</span>
								<span className="text-[12px] font-[500] text-[#292D32] flex items-center gap-2">
									{payDate
										? format(
												new Date(
													Date.now() +
														Number(payDate) * 24 * 60 * 60 * 1000
												),
												"do MMMM, yyyy"
										  )
										: "Select Payback Date"}
								</span>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="center"
							className=" bg-white w-[450px] p-3"
						>
							{payback_dates.map((p) => (
								<DropdownMenuItem
									key={p.day}
									className="mb-2 cursor-pointer"
								>
									<div
										className="flex items-center gap-4 text-[13px]"
										onClick={() => {
											setValue("end_date", p.day.toString());
										}}
									>
										<p>{p.text}</p>{" "}
										<div>
											{format(
												new Date(
													Date.now() + p.day * 24 * 60 * 60 * 1000
												),
												"do MMMM, yyyy"
											)}
										</div>
									</div>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="mb-3">
					<p className="mb-1 font-[500] text-[13px] text-[#9ca3af]">
						Select Time
					</p>
					<input
						type={"time"}
						placeholder="Select Time"
						{...register("time")}
						// onFocus={handleDate}
						// onBlur={handleBlurDate}
						className="w-full border-[1px] p-4 rounded-[4px] border-[#3D0072] outline-none"
					/>
				</div>

				<button
					className="bg-[#3D0072] text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-5"
					onClick={() => {
						if (!startDate) return;
						if (!payDate) return;
						if (!time) return;
						getEstimate();
						// setModal("estimate");
					}}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default ChoosePeriod;
