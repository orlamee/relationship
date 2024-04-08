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
	FieldErrors,
	UseFormClearErrors,
	UseFormGetFieldState,
	UseFormRegister,
	UseFormSetValue,
	UseFormTrigger,
	UseFormWatch,
} from "react-hook-form";
import { detailsType, vaultLiteVal } from "./createVault";
import axios from "axios";
import { base_url } from "@/base_url";
import { userSlice } from "@/hook/user";
import { format } from "date-fns";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import toast from "react-hot-toast";

type props = {
	setStep: () => void;
	next: () => void;
	register: UseFormRegister<vaultLiteVal>;
	watch: UseFormWatch<vaultLiteVal>;
	selectedF: string;
	token: string;
	setValue: UseFormSetValue<vaultLiteVal>;
	details: detailsType | undefined;
	setDetails: React.Dispatch<React.SetStateAction<detailsType | undefined>>;
	selectedD: string;
	selectedDom: string;
	errors: FieldErrors<vaultLiteVal>;
	trigger: UseFormTrigger<vaultLiteVal>;
	getFieldState: UseFormGetFieldState<vaultLiteVal>;
	clearErrors: UseFormClearErrors<vaultLiteVal>;
};

function ChoosePeriod({
	setStep,
	next,
	register,
	watch,
	selectedF,
	token,
	setValue,
	details,
	setDetails,
	selectedD,
	selectedDom,
	errors,
	trigger,
	getFieldState,
	clearErrors,
}: props) {
	const user = userSlice();

	const [agreed, setAgreed] = useState(false);
	const [modal, setModal] = useState<"estimate" | "">("");
	const [isLoading, setIsLoading] = useState(false);

	type scheduleType = {
		date: string;
		principal: string;
		interest: string;
		totalInterestPaid: string;
	};

	const [schedule, setSchedule] = useState<scheduleType[]>();
	const payDate = watch("end_date");
	const time = watch("time");
	const target = watch("target_amount");
	const name = watch("name");

	const getEstimate = async () => {
		try {
			if (isLoading) return;
			setIsLoading(true);
			const { data } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/savings/vault_extra_plan`,
				{
					user_id: user?.user?.id,
					name: name,
					show_estimate: true,
					start_date: new Date(Date.now()).toISOString(),
					end_date: new Date(
						Date.now() + Number(payDate) * 24 * 60 * 60 * 1000
					).toISOString(),
					time: time,
					frequency: selectedF,
					target_amount: target,
					day_of_week: selectedD,
					day_of_month: selectedDom,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (data.code !== 200) {
				toast.error(`${data.message}`, { id: "estimate" });
			}

			if (data.code === 200) {
				setDetails(data.data.details);
				setSchedule(data.data.schedule);
				setModal("estimate");
			}
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "estimate" });
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setValue("start_date", new Date(Date.now()));
	}, [setValue]);

	useEffect(() => {
		if (payDate) {
			clearErrors("end_date");
		}
	}, [payDate, clearErrors]);

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
					<TabsList className=" grid w-[320px] mx-auto grid-cols-2 h-[46px] bg-[#f9f9f9]">
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
									₦ {details?.amount.toFixed(2)}
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Frequency
									</p>
								</div>

								<p className="text-[14px] font-[600] text-black">
									{details?.frequency}
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
									{details?.dividends_rate}% per annum
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
									₦{details?.dividends_accrued.toFixed(2)}
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Upfront
									</p>
									<span className="mr-[-50px] hidden"></span>
								</div>

								<Switch defaultChecked={true} />
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
						<div className="mt-5 bg-[#F9F9F9] mx-auto">
							<Table className="mx-auto">
								<TableHeader>
									<TableRow>
										<TableHead className="text-[12px] font-[500] text-center">
											Date
										</TableHead>
										<TableHead className="text-[12px] font-[500] text-center">
											Principal
										</TableHead>
										<TableHead className="text-[12px] font-[500] text-center">
											Interest
										</TableHead>
										<TableHead className="text-[12px] font-[500] text-center">
											Total Interest Paid
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="bg-[#F9F9F9] rounded-t-[8px] mx-auto">
									{schedule?.map((s, i) => (
										<TableRow
											key={i}
											className="border-0 cursor-pointer text-center"
										>
											<TableCell className="text-[11px] font-[500]">
												{s.date}
											</TableCell>
											<TableCell className="text-[11px] font-[500]">
												₦{s.principal}
											</TableCell>
											<TableCell className="text-[11px] font-[500]">
												₦{s.interest}
											</TableCell>
											<TableCell className="text-[11px] font-[500] text-[#23A323]">
												₦{s.totalInterestPaid}
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

		{
			text: "360 days",
			day: 360,
		},
		{
			text: "390 days",
			day: 390,
		},
		{
			text: "420 days",
			day: 420,
		},
		{
			text: "450 days",
			day: 450,
		},
		{
			text: "480 days",
			day: 480,
		},
		{
			text: "510 days",
			day: 510,
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
					{errors?.start_date && (
						<span className="text-red-500 mt-1 text-left block text-[13px]">
							{errors.start_date.message}
						</span>
					)}
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
										<input
											type="checkbox"
											name=""
											id=""
											readOnly
											checked={p.day.toString() === payDate}
											className="accent-[#240552]"
										/>
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
					{errors?.end_date && (
						<span className="text-red-500 mt-1 text-left block text-[13px]">
							{errors.end_date.message}
						</span>
					)}
				</div>

				<div className="mb-3">
					<p className="mb-1 font-[500] text-[13px] text-[#9ca3af]">
						Select Time
					</p>
					<input
						type={"time"}
						placeholder="Select Time"
						{...register("time")}
						className="w-full border-[1px] p-4 rounded-[4px] border-[#3D0072] outline-none"
					/>
					{errors?.time && (
						<span className="text-red-500 mt-1 text-left block text-[13px]">
							{errors.time.message}
						</span>
					)}
				</div>

				<button
					className="bg-[#3D0072] text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-5"
					onClick={() => {
						if (!payDate || !time) {
							return trigger(["end_date", "time"]);
						}
						// const endState = getFieldState("end_date");
						// const timeState = getFieldState("time");
						// if (endState.invalid || !endState.isDirty) return;
						// if (timeState.invalid || !timeState.isDirty) return;
						getEstimate();
					}}
				>
					{isLoading ? (
						<div className="flex justify-center">
							<svg
								className="animate-spin h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="2"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
					) : (
						"Continue"
					)}
				</button>
			</div>
		</div>
	);
}

export default ChoosePeriod;
