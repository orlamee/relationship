"use client";
import NavBar from "@/components/navbar";
import React, { useEffect, useRef, useState } from "react";
import navback from "../../assets/static/nav back.svg";
import Image from "next/image";
import Link from "next/link";
import Accounttab from "@/components/Accountcomponents/accounttab";
import { ScrollArea } from "@/components/ui/scroll-area";
import cal from "../../assets/static/cal.svg";
import yourdib from "../../assets/static/your dib.svg";
import PanelHeader from "@/components/Accountcomponents/panelHeader";
import { Switch } from "@/components/ui/switch";
import {
	ChevronDown,
	ChevronLeftCircle,
	Code2,
	XCircleIcon,
} from "lucide-react";
import mastercard from "../../assets/static/Mastercard logo.png";
import Modal from "@/components/modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import CurrencyInput from "react-currency-input-field";
import edit from "../../assets/static/editt.svg";
import Target from "./target";
import ChangePlan from "./changeplan";

function Settings() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [dropdown, setShowDropDown] = useState(false);
	const [activeTab, setActiveTab] = useState<"target" | "plan">("target");
	const [modal, setModal] = useState<
		"edit amount" | "estimate" | "select frequency" | ""
	>("");
	const [frequencyStep, setFrequencyStep] = useState<
		"frequency" | "day of week" | "day of month" | ""
	>("frequency");
	const [amount, setAmount] = useState("");
	const [agreed, setAgreed] = useState(false);
	const Frequency = ["Daily", "weekly", "Monthly", "Anytime/Manual"];
	const [selectedF, setSelectedF] = useState("");
	const [selectedD, setSelectedD] = useState("");
	const [selectedDom, setSelectedDom] = useState("");

	const Breakdown = [
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

	useEffect(() => {
		inputRef?.current?.focus();
	}, [amount]);

	const EstimateModal = () => (
		<Modal>
			<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
				<XCircleIcon
					className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
					onClick={() => setModal("")}
				/>

				<div className="flex flex-col mx-auto pt-[30px]">
					<h1 className="text-primary text-[20px] font-[500] text-center mb-[6px]">
						Estimate
					</h1>
					<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
						A good consistency would give you this breakdown
					</p>
				</div>

				<Tabs defaultValue="details" className="w-[400px] mx-auto mt-8">
					<TabsList className="grid w-[320px] mx-auto grid-cols-2 h-[46px] bg-[#F9F9F9]">
						<TabsTrigger value="details" className="h-full rounded-[8px]">
							Details
						</TabsTrigger>
						<TabsTrigger
							value="breakdown"
							className="h-full rounded-[8px]"
						>
							Breakdown
						</TabsTrigger>
					</TabsList>
					<TabsContent value="details">
						<div className="mt-4">
							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<p className="text-[#9CA3AF] text-[12px] font-medium">
									Amount
								</p>

								<p className="text-[14px] font-medium text-black">
									₦100,000
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Frequency
									</p>
								</div>

								<p className="text-[14px] font-medium text-black">
									Weekly
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Rate
									</p>
								</div>

								<p className="text-[14px] font-medium text-black">
									6-10% per annum
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Accrued
									</p>
								</div>

								<p className="text-[14px] font-medium text-black">
									₦100,000
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between py-4 mb-3">
								<p className="text-black text-[14x] font-[600]">
									Total Amount
								</p>

								<p className="text-[14px] font-[600] text-black">
									₦100,000
								</p>
							</div>

							<div className="w-[380px] mx-auto flex">
								<input
									type="checkbox"
									className="accent-primary mr-[8px] cursor-pointer"
									checked={agreed}
									onChange={(e) => {
										if (e.target.checked === true) {
											setAgreed(true);
										} else {
											setAgreed(false);
										}
									}}
								/>
								<p className="text-[12px] font-[500] text-[#9CA3AF]">
									By clicking you are agreeing to the{" "}
									<span className="text-primary">
										Terms and Conditions
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
					className="mt-8 cursor-pointer block w-[85%] mx-auto  bg-primary text-white p-5  rounded-[8px] text-[12px] disabled:bg-primary/60"
					onClick={() => setModal("")}
					disabled={agreed === false}
				>
					Continue
				</button>
			</div>
		</Modal>
	);

	const EnterAmount = () => (
		<Modal>
			<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
				<XCircleIcon
					className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
					onClick={() => setModal("")}
				/>

				<div className="flex flex-col mx-auto pt-[30px]">
					<h1 className="text-primary text-[20px] font-[500] text-center mb-[6px]">
						Enter Amount
					</h1>
					<p className="text-[12px] font-[500] text-center text-[#9CA3AF]">
						How much would you like to start with?
					</p>
				</div>

				<div>
					<div className="flex justify-center">
						<CurrencyInput
							id="input-example"
							prefix="₦"
							name="input-name"
							decimalsLimit={2}
							value={amount}
							ref={inputRef}
							onValueChange={(value) => {
								if (value) {
									setAmount(value);
								}
							}}
							className="mt-5 outline-none bg-[#fff] text-center text-primary border-0 text-[40px]  
                border-b-[1px] border-b-[#23A323] border-[#F0F0F0] rounded-[4px] font-[500] w-[260px]
                block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						/>
					</div>

					<div className="flex justify-center flex-wrap max-w-[400px] mx-auto gap-3 mt-10">
						<button
							className={`border-[1px] font-medium  rounded-[4px] text-[12px] py-2 px-5 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
								amount === "5000"
									? "bg-[#F6F1FE] border-primary text-primary"
									: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
							}`}
							onClick={() => setAmount("5000")}
						>
							N5,000
						</button>
						<button
							className={`border-[1px] font-medium  rounded-[4px] text-[12px] py-2 px-5 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
								amount === "10000"
									? "bg-[#F6F1FE] border-primary text-primary"
									: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
							}`}
							onClick={() => setAmount("10000")}
						>
							N10,000
						</button>
						<button
							className={`border-[1px] font-medium  rounded-[4px] text-[12px] py-2 px-5 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
								amount === "20000"
									? "bg-[#F6F1FE] border-primary text-primary"
									: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
							}`}
							onClick={() => setAmount("20000")}
						>
							N20,000
						</button>
					</div>

					<div className="flex justify-center mb-2">
						<button
							className="mt-9 cursor-pointer w-full mx-7 bg-primary text-[12px] text-white p-5 rounded-[8px]  border-[1px] disabled:bg-primary/60"
							onClick={() => {
								setModal("select frequency");
							}}
							disabled={!amount || Number(amount) < 5000}
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);

	const days = [
		"Mondays",
		"Tuesdays",
		"Wednesdays",
		"Thursdays",
		"Fridays",
		"Saturdays",
		"Sundays",
	];

	const daysofmonth = [
		"1st",
		"2nd",
		"3rd",
		"4th",
		"5th",
		"6th",
		"7th",
		"8th",
		"9th",
		"10th",
		"11th",
		"12th",
	];

	const handleBack = () => {
		if (frequencyStep === "frequency") {
			setModal("");
		}
		if (frequencyStep === "day of week") {
			setFrequencyStep("frequency");
		}
		if (frequencyStep === "day of month") {
			setFrequencyStep("frequency");
		}
	};
	const SelectFrequency = () => (
		<Modal>
			<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
				<div
					className="flex items-center top-[34px] left-[30px] cursor-pointer absolute"
					onClick={handleBack}
				>
					<ChevronLeftCircle className="w-[17px] h-[17px] text-[#9CA3AF]/40" />
					<span className="text-[12px] ml-[6px] text-[#9CA3AF] font-medium">
						Back
					</span>
				</div>
				<XCircleIcon
					className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
					onClick={() => setModal("")}
				/>

				{frequencyStep === "frequency" && (
					<>
						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-black text-[20px] font-semibold text-center mb-[6px]">
								Select Frequency
							</h1>
							<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
								Choose how often you want to save
							</p>
						</div>
						<div className="flex justify-center">
							<div className="flex justify-center flex-wrap max-w-[330px] gap-3 mt-10">
								{Frequency.map((f) => (
									<button
										key={f}
										className={`border-[1px] font-[500] text-[12px]  rounded-[4px] py-2 px-6 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
											selectedF === f
												? "bg-[#F6F1FE] border-primary text-primary"
												: "border-[#F9FAFB] bg-[#F9FAFB] text-[#9CA3AF]"
										}`}
										onClick={() => setSelectedF(f)}
									>
										{f}
									</button>
								))}
							</div>
						</div>
						<button
							className="block mx-auto text-center rounded-[8px] mt-7 text-[12px] font-[500] p-5 bg-primary text-white disabled:bg-primary/60 w-[85%]"
							disabled={!selectedF}
							onClick={() => {
								if (
									selectedF === "Daily" ||
									selectedF === "Anytime/Manual"
								) {
									setModal("estimate");
								}
								if (selectedF === "weekly") {
									setFrequencyStep("day of week");
								}
								if (selectedF === "Monthly") {
									setFrequencyStep("day of month");
								}
								// const Frequency = [
								//   "Daily",
								//   "weekly",
								//   "Monthly",
								//   "Anytime/Manual",
								// ];
							}}
						>
							Continue
						</button>
					</>
				)}
				{frequencyStep === "day of week" && (
					<>
						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-primary text-[20px] font-[500] text-center mb-[6px] mx-auto">
								What Day of The Week
							</h1>
							<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
								Choose what day works for you?
							</p>
						</div>
						<div className="flex justify-center">
							<div className="grid grid-cols-3 flex-wrap max-w-[350px] mx-auto gap-3 mt-10">
								{days.map((d) => (
									<button
										key={d}
										className={`border-[1px] font-medium  rounded-[4px] text-[12px] py-2 px-5 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
											selectedD === d
												? "bg-[#F6F1FE] border-primary text-primary"
												: "border-[#F9FAFB] bg-[#F9FAFB] text-[#9CA3AF]"
										}`}
										onClick={() => setSelectedD(d)}
									>
										{d}
									</button>
								))}
							</div>
						</div>
						<button
							className="block mx-auto w-[85%] text-center text-white rounded-[8px] bg-primary mt-5 text-[12px] font-[500] p-5 disabled:bg-primary/60"
							disabled={!selectedD}
							onClick={() => {
								setModal("estimate");
							}}
						>
							Continue
						</button>
					</>
				)}

				{frequencyStep === "day of month" && (
					<>
						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-primary text-[20px] font-semibold text-center mb-[6px]  mx-auto">
								What Day of the month
							</h1>
							<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
								Choose what day works for you?
							</p>
						</div>
						<div className="flex items-center mx-auto">
							<ScrollArea className="flex flex-col  text-center px-5 items-center w-full mx-4 gap-3 mt-10 h-[150px]">
								{daysofmonth.map((d) => (
									<button
										key={d}
										className={` block mx-auto font-[500] text-center text-[24px] py-2 px-5 duration-300 hover:text-primary ${
											selectedDom === d
												? " text-primary"
												: "text-[#9CA3AF]"
										}`}
										onClick={() => setSelectedDom(d)}
									>
										{d}
									</button>
								))}
							</ScrollArea>
						</div>
						<button
							className="block mx-auto w-[85%] text-center p-5 text-white rounded-[8px] bg-primary mt-5 text-[12px] font-[500] disabled:bg-primary/60"
							disabled={!selectedDom}
							onClick={() => {
								setModal("estimate");
							}}
						>
							Done
						</button>
					</>
				)}
			</div>
		</Modal>
	);

	const Automation = () => (
		<>
			<PanelHeader
				title="Automation"
				subtitle="Choose what you want to do"
			/>

			<div className="">
				<div className="flex items-center justify-between mb-8">
					<div>
						<h3 className="font-[500] text-[14px] mb-2">
							Automation Status
						</h3>
						<p className="text-[12px] text-[#9CA3AF] font-[500]">
							Automation is ON
						</p>
					</div>
					<Switch />
				</div>
				<div className="flex items-center justify-between mb-12">
					<p className="text-[14px] text-[#9CA3AF] font-[500]">
						Next Saving Date
					</p>

					<p className="text-[14px] font-[500]">15 Nov 2023</p>
				</div>
				<div className="flex items-center justify-between mb-12">
					<p className="text-[14px] text-[#9CA3AF] font-[500]">
						Payment Method
					</p>

					<div
						className="border-[1px] cursor-pointer border-[#E5E7EB] rounded-[4px] w-[210px] sm:w-[300px] h-[60px] items-center px-4 flex justify-between relative"
						onClick={() => setShowDropDown(!dropdown)}
					>
						<div className="flex items-center gap-2">
							<Image
								src={mastercard}
								alt="mastercrad"
								className="w-[20px]"
							/>
							<p className="text-[14px] font-[500]">GTBank</p>
						</div>
						<div className="flex items-center">
							<span className="text-primary text-[14px] font-[500] mr-3 md:mr-5">
								*** 4574
							</span>
							<ChevronDown className="text-primary" />
						</div>

						{dropdown && (
							<div className="absolute px-6 py-1 z-10 top-[68px] right-0  rounded-[4px] w-[373px] bg-white border-[1px] border-[#E5E7EB] shadow-[0px_4px_30px_0px_#9494941A] ">
								<div className="flex border-b-[1px] border-b-[#F3F4F6] py-6">
									<div className="rounded-full border-[1px] border-[#EF4444] w-[33px] h-[33px] flex justify-center items-center mr-5">
										<Code2 className="text-[#EF4444] w-[17px]" />
									</div>
									<div>
										<h3 className="text-[12px] font-[500]">
											Kode Hex
										</h3>
										<p className="text-[10px] font-[500] text-[#EF4444]">
											Balance: N50,000
										</p>
									</div>
								</div>
								<div className="flex border-b-[1px] border-b-[#F3F4F6] py-6">
									<div className="rounded-full border-[1px] border-[#E5E7EB] w-[33px] h-[33px] flex justify-center items-center mr-5">
										<svg
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.3667 8.86917C15.3935 9.07545 15.4073 9.29468 15.4073 9.52771C15.4073 10.8526 15.0059 11.7433 14.6219 12.2965C14.4701 12.5161 14.2935 12.7174 14.0954 12.8963C14.0307 12.9543 13.9627 13.0085 13.8917 13.0586L13.8839 13.0638C13.8219 13.1026 13.7707 13.1565 13.7352 13.2205C13.6997 13.2846 13.6811 13.3565 13.6811 13.4297V14.872C13.6811 14.9864 13.6356 15.0962 13.5547 15.1771C13.4738 15.258 13.364 15.3035 13.2495 15.3035H12.055C12.0285 15.3035 12.003 15.293 11.9842 15.2742C11.9655 15.2554 11.9549 15.2299 11.9549 15.2034C11.9549 14.6709 11.5234 14.2393 10.9917 14.2393H9.46577C8.93411 14.2393 8.50256 14.6709 8.50256 15.2034C8.50256 15.2299 8.49201 15.2554 8.47324 15.2742C8.45446 15.293 8.429 15.3035 8.40244 15.3035H7.20793C7.09347 15.3035 6.98371 15.258 6.90278 15.1771C6.82185 15.0962 6.77638 14.9864 6.77638 14.872V14.1383C6.77613 14.0479 6.74751 13.9599 6.69455 13.8867C6.64159 13.8134 6.56696 13.7587 6.48121 13.7301L6.44668 13.7137C6.37814 13.68 6.31183 13.642 6.24817 13.5998C6.05829 13.4772 5.7588 13.2493 5.35746 12.8428C4.99546 12.4702 4.70392 12.0351 4.49696 11.5586C4.33816 11.1943 4.00587 10.8741 3.56138 10.799C3.49521 10.7879 3.43512 10.7537 3.3917 10.7025C3.34827 10.6514 3.32431 10.5865 3.32403 10.5194V9.21872C3.32403 9.15952 3.34501 9.10224 3.38325 9.05705C3.42149 9.01186 3.47451 8.98168 3.53289 8.97188C4.00759 8.89161 4.3442 8.52825 4.47539 8.12778C4.58759 7.78427 4.78955 7.33374 5.12443 6.99454C5.40683 6.71294 5.72279 6.46712 6.0652 6.26265C6.20239 6.18014 6.34353 6.10438 6.48811 6.03565L6.51055 6.0253L6.51487 6.02357C6.59268 5.99021 6.65896 5.93471 6.70546 5.86396C6.75196 5.79321 6.77663 5.71035 6.77638 5.62569V3.81579C6.99474 4.00567 7.24936 4.21108 7.52382 4.39406C7.8984 4.64608 8.34461 4.88257 8.80292 4.96801C8.90887 4.68016 9.04789 4.40558 9.2172 4.1498C9.16456 4.14422 9.11191 4.13875 9.05925 4.13341C8.75286 4.10233 8.38432 3.93231 8.0037 3.67769C7.661 3.44203 7.33905 3.17754 7.04135 2.8871C6.9482 2.79823 6.83126 2.73829 6.70473 2.71454C6.57819 2.6908 6.44747 2.70427 6.32844 2.75333C6.20628 2.80128 6.10137 2.88487 6.02734 2.99323C5.9533 3.10159 5.91357 3.22971 5.91329 3.36094V5.35813C5.39759 5.63076 4.92474 5.97768 4.50991 6.38779C4.04125 6.86249 3.78664 7.45802 3.65545 7.85936C3.60367 8.01299 3.49147 8.10361 3.38962 8.12088C3.13017 8.16452 2.89455 8.29864 2.72456 8.49944C2.55456 8.70025 2.46117 8.95476 2.46094 9.21786V10.5185C2.4608 10.7899 2.55678 11.0525 2.73184 11.2597C2.9069 11.467 3.14972 11.6056 3.41724 11.6509C3.52513 11.6682 3.64164 11.7562 3.70551 11.9038C3.95494 12.4773 4.30646 13.0008 4.74295 13.4487C5.18226 13.8941 5.52922 14.1625 5.77779 14.3239C5.82698 14.3558 5.87273 14.3834 5.91329 14.4076V14.872C5.91329 15.042 5.94678 15.2103 6.01184 15.3674C6.0769 15.5245 6.17227 15.6672 6.29248 15.7874C6.4127 15.9076 6.55542 16.003 6.71249 16.068C6.86956 16.1331 7.03791 16.1666 7.20793 16.1666H8.40244C8.9341 16.1666 9.36565 15.735 9.36565 15.2034C9.36565 15.1473 9.41053 15.1024 9.46577 15.1024H10.9917C11.0469 15.1024 11.0918 15.1473 11.0918 15.2034C11.0918 15.735 11.5234 16.1666 12.055 16.1666H13.2495C13.5929 16.1666 13.9222 16.0302 14.165 15.7874C14.4078 15.5446 14.5442 15.2153 14.5442 14.872V13.6472C14.8439 13.3984 15.1081 13.1097 15.3296 12.7893C15.8086 12.1014 16.2704 11.0407 16.2704 9.52771C16.2704 8.90111 16.1832 8.3401 16.0175 7.83865C15.856 8.2142 15.6364 8.56197 15.3667 8.86917ZM15.2372 5.14667C15.4962 5.77263 15.5373 6.46747 15.3538 7.11957C15.1704 7.77167 14.7731 8.34318 14.2257 8.7423C13.8546 9.01158 13.3652 8.9926 12.9423 8.81739L10.3185 7.73076C9.89559 7.55555 9.53568 7.22326 9.46404 6.771C9.35236 6.04214 9.51112 5.2976 9.9104 4.67769C10.3097 4.05778 10.9219 3.60532 11.6317 3.40558C12.3415 3.20584 13.0999 3.27262 13.7639 3.59333C14.4278 3.91404 14.9524 4.46652 15.2372 5.14667ZM13.7182 8.04492C14.0281 7.81927 14.2724 7.51511 14.4257 7.16374C14.5791 6.81237 14.6361 6.42648 14.5908 6.04578C14.5456 5.66507 14.3997 5.30331 14.1682 4.9977C13.9367 4.69209 13.628 4.45368 13.2737 4.307C12.9195 4.16031 12.5326 4.11066 12.1529 4.16313C11.7731 4.21561 11.4141 4.36833 11.113 4.60557C10.8118 4.84281 10.5793 5.15601 10.4394 5.51295C10.2994 5.86988 10.2571 6.25765 10.3168 6.63636C10.3269 6.68533 10.3519 6.72996 10.3884 6.7641C10.4436 6.82279 10.5317 6.88493 10.6491 6.93327L13.2729 8.02076C13.3688 8.06218 13.4722 8.08362 13.5767 8.08376C13.6267 8.08575 13.6762 8.07218 13.7182 8.04492ZM6.56061 8.83033C6.73229 8.83033 6.89694 8.76214 7.01833 8.64074C7.13973 8.51934 7.20793 8.3547 7.20793 8.18302C7.20793 8.01134 7.13973 7.84669 7.01833 7.7253C6.89694 7.6039 6.73229 7.5357 6.56061 7.5357C6.38893 7.5357 6.22428 7.6039 6.10289 7.7253C5.98149 7.84669 5.91329 8.01134 5.91329 8.18302C5.91329 8.3547 5.98149 8.51934 6.10289 8.64074C6.22428 8.76214 6.38893 8.83033 6.56061 8.83033Z"
												fill="#23A323"
											/>
										</svg>
									</div>
									<div>
										<h3 className="text-[12px] font-[500]">
											Savings
										</h3>
										<p className="text-[10px] font-[500] text-primary">
											Balance: N50,000
										</p>
									</div>
								</div>

								<div className="flex border-b-[1px] justify-between border-b-[#F3F4F6] py-6">
									<div className="flex items-center">
										<Image
											src={mastercard}
											width={21}
											height={16}
											alt="mastercard"
											className="w-[29px] mr-4"
										/>
										<p className="text-[14px] font-[500]">GTBank</p>
									</div>
									<span className="text-[8px] bg-[#F9F5FF] border-[1px] text-primary px-3 py-1 border-primary rounded-full flex items-center justify-center">
										Active Card
									</span>
									<div>
										<p className="text-[10px] font-[500]">
											Available Card
										</p>
										<p className="text-[12px] font-[500] text-right">
											*** 4574
										</p>
									</div>
								</div>

								<div className="flex border-b-[1px] justify-between border-b-[#F3F4F6] py-6">
									<div className="flex items-center">
										<Image
											src={mastercard}
											alt="mastercard"
											className="w-[29px] mr-4"
										/>
										<p className="text-[14px] font-[500]">GTBank</p>
									</div>

									<div>
										<p className="text-[10px] font-[500]">
											Available Card
										</p>
										<p className="text-[12px] font-[500] text-right">
											*** 4574
										</p>
									</div>
								</div>
								<div className="flex justify-between py-6">
									<div className="flex items-center">
										<Image
											src={mastercard}
											alt="mastercard"
											className="w-[29px] mr-4"
										/>
										<p className="text-[14px] font-[500]">GTBank</p>
									</div>

									<div>
										<p className="text-[10px] font-[500]">
											Available Card
										</p>
										<p className="text-[12px] font-[500] text-right">
											*** 4574
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="h-[390px] flex items-end mt-auto ">
				<button className="text-white bg-primary rounded-[8px] p-5 w-full text-[14px] font-[500]">
					Save Changes
				</button>
			</div>
		</>
	);

	const YourDib = () => (
		<>
			<PanelHeader title="Your DIB" subtitle="Choose what you want to do" />

			<div className="flex items-center justify-between mb-12">
				<p className="text-[14px] text-[#9CA3AF] font-[500]">Amount</p>

				<p className="text-[14px] font-[500] flex items-center">
					₦ 100,000.00
					<span
						className="ml-2 cursor-pointer"
						onClick={() => setModal("edit amount")}
					>
						<Image src={edit} width={16} height={16} alt="edit" />
					</span>
				</p>
			</div>

			<div className="flex items-center justify-between mb-12">
				<p className="text-[14px] text-[#9CA3AF] font-[500]">Frequency</p>

				<p className="text-[14px] font-[500] flex items-center">
					Monthly
					<span
						className="ml-2 cursor-pointer"
						onClick={() => setModal("select frequency")}
					>
						<Image src={edit} width={16} height={16} alt="edit" />
					</span>
				</p>
			</div>

			<div className="flex items-center justify-between mb-12">
				<p className="text-[14px] text-[#9CA3AF] font-[500]">Dividends</p>

				<p className="text-[14px] font-[500]">₦15000 (6-10%/p.a)</p>
			</div>

			<div className="flex items-center justify-between mb-12">
				<p className="text-[14px] text-[#9CA3AF] font-[500]">Last Top Up</p>

				<p className="text-[14px] font-[500]">15 Nov 2023</p>
			</div>
			<div className="flex items-center justify-between mb-12">
				<p className="text-[14px] text-[#9CA3AF] font-[500]">Next Top Up</p>

				<p className="text-[14px] font-[500]">15 Nov 2023</p>
			</div>
		</>
	);
	return (
		<section>
			{modal === "edit amount" && <EnterAmount />}
			{modal === "estimate" && <EstimateModal />}
			{modal === "select frequency" && <SelectFrequency />}
			<NavBar>
				<Link href={"/dashboard/vault"}>
					<div className="flex items-center">
						<Image src={navback} width={17} height={17} alt="back" />
						<p className="text-[12px] font-[500] mb-1 text-[#9CA3AF] ml-2 mt-1">
							Back To Vault Dashboard
						</p>
					</div>
				</Link>
			</NavBar>
			<main className="p-4 lg:px-8 flex py-7 justify-between">
				<div className="basis-[40%] h-[83vh] pr-6">
					<div className="mb-5">
						<h1 className="text-gray400 text-[11px] font-[400] mb-2">
							PLAN SETTINGS
						</h1>

						<Accounttab
							title="Change your Target"
							Icon={
								<Image
									src={yourdib}
									width={34}
									height={34}
									alt="account"
								/>
							}
							isActive={activeTab === "target"}
							onClick={() => setActiveTab("target")}
						/>

						<Accounttab
							title="Change Savings Plan"
							Icon={
								<Image
									src={cal}
									width={34}
									height={34}
									alt="Your DIB"
								/>
							}
							isActive={activeTab === "plan"}
							onClick={() => setActiveTab("plan")}
						/>
					</div>
				</div>
				<ScrollArea className="basis-[55%] p-8 rounded-[8px] bg-white border-[1px] border-primaryborder box-shadow h-[83vh] w-full shadow-[0_4px_30px_0_#9494941A]">
					{/* this page might need to to be changed to a nested layout route in the nearest future when there's 
          api so please always endeavor to make your active tab panel a COMPONENT like the security question component below  */}
					{activeTab === "target" && <Target />}
					{activeTab === "plan" && <ChangePlan />}
				</ScrollArea>
			</main>
		</section>
	);
}

export default Settings;
