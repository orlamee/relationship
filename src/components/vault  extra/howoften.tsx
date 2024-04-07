import React, { useState } from "react";
import Steptitle from "./steptitle";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../modal";
import { XCircleIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

type prop = {
	selectedF: string;
	setSelectedF: React.Dispatch<React.SetStateAction<string>>;
	selectedD: string;
	setSelectedD: React.Dispatch<React.SetStateAction<string>>;
	selectedDom: string;
	setSelectedDom: React.Dispatch<React.SetStateAction<string>>;
	setStep: () => void;
	next: () => void;
};

function Howoften({
	selectedF,
	setSelectedF,
	selectedD,
	setSelectedD,
	selectedDom,
	setSelectedDom,
	setStep,
	next,
}: prop) {
	const router = useRouter();
	const [modal, setModal] = useState<"estimate" | "">("");
	const [agreed, setAgreed] = useState(false);
	const daysofMonth = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
	];
	const days = [
		"Mondays",
		"Tuesdays",
		"Wednesdays",
		"Thursdays",
		"Fridays",
		"Saturdays",
		"Sundays",
	];

	const frequency = ["Daily", "Weekly", "Monthly", "Anytime/Manual"];

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
					<p className="text-[12px] font-[500] text-center text-[#9CA3AF]">
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

								<p className="text-[14px] font-medium text-black">
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
					className="mt-8 cursor-pointer w-[390px] block mx-auto bg-primary text-white p-5 rounded-[8px] text-[12px] disabled:bg-primary/60"
					onClick={() => {
						router.push("/dashboard/dib/new?step=overview");
					}}
					disabled={agreed === false}
				>
					Continue
				</button>
			</div>
		</Modal>
	);

	return (
		<div className="mt-10">
			{modal === "estimate" && <EstimateModal />}
			<Steptitle
				title="Select Frequency"
				subtitle="How often do you want to save?"
				onClick={setStep}
			/>

			<div className="max-w-[450px] mx-auto mt-14">
				<div className="flex justify-center items-center flex-wrap gap-4 mt-10  pb-10">
					{frequency.map((freq) => (
						<button
							key={freq}
							className={`text-[15px] font-[500] border-[1px]  px-6 py-2 rounded-[4px] ${
								selectedF === freq
									? "border-primary bg-[#F6F1FE] text-primary"
									: "bg-[#F3F4F6] border-[#F3F4F6] text-[#9CA3AF]"
							}`}
							onClick={() => setSelectedF(freq)}
						>
							{freq}
						</button>
					))}

					{/* <button
            className="bg-primary text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-10"
            onClick={() => router.push("./dib?step=how+often")}
          >
            Continue
          </button> */}
				</div>
				<AnimatePresence mode="wait">
					{selectedF === "Weekly" && (
						<motion.div
							className=""
							key={"weekly"}
							initial={{ y: -50, height: 0, opacity: 0 }}
							animate={{ y: 0, height: "auto", opacity: 1 }}
							exit={{ y: -50, height: 0, opacity: 0 }}
							transition={{ duration: 0.5, type: "tween" }}
						>
							<h1 className="text-[30px] font-[700] text-center text-primary mb-[6px]">
								What Day Of The Week
							</h1>
							<p className="text-[#9CA3AF] text-[14px] text-center  font-[500]">
								Choose what day of the week that works for you
							</p>
							<div className="grid grid-cols-3 max-w-[380px] mx-auto gap-4 mt-10">
								{days.map((d) => (
									<button
										key={d}
										className={`text-[15px] font-[500] border-[1px]  px-5 py-2 rounded-[4px] ${
											selectedD === d
												? "border-primary bg-[#F6F1FE] text-primary"
												: "bg-[#F3F4F6] border-[#F3F4F6] text-[#9CA3AF]"
										}`}
										onClick={() => setSelectedD(d)}
									>
										{d}
									</button>
								))}
							</div>
						</motion.div>
					)}

					{selectedF === "Monthly" && (
						<motion.div
							key={"Monthly"}
							initial={{ y: -50, height: 0, opacity: 0 }}
							animate={{ y: 0, height: "auto", opacity: 1 }}
							exit={{ y: -100, height: 0, opacity: 0 }}
							transition={{ duration: 0.5, type: "tween" }}
						>
							<h1 className="font-[700] text-[30px] text-primary text-center">
								What Day Of The Month
							</h1>
							<p className="text-[#9CA3AF] mt-3 text-center text-[14px]">
								Choose what day of the month that works for you
							</p>
							<div className="mx-auto flex justify-center">
								<div className="flex justify-start flex-wrap max-w-[408px]  gap-6 mt-14">
									{daysofMonth.map((d) => (
										<button
											key={d}
											className={`border-[1px] text-[12px] font-medium  w-[24px] h-[24px] rounded-full hover:bg-[#F9F5FF] hover:border-primary hover:text-primary duration-300 ${
												selectedDom === d
													? "bg-[#F9F5FF] border-primary text-primary"
													: "border-[#E5E7EB] bg-white text-[#9CA3AF]"
											}`}
											onClick={() => setSelectedDom(d)}
										>
											{d}
										</button>
									))}
									<button
										className={`border-[1px]  text-[12px] font-medium rounded-full px-4 hover:bg-[#f6f1fe] hover:border-[#240552] hover:text-[#240552] duration-300 ${
											selectedDom === "Last Day"
												? "bg-[#F6F1FE] border-[#240552] text-[#240552]"
												: "border-[#E5E7EB] bg-white text-[#9CA3AF]"
										}`}
										onClick={() => setSelectedDom("Last Day")}
									>
										Last Day
									</button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<div className="flex justify-center">
					{selectedF === "Daily" ? (
						<button
							className=" cursor-pointer text-[14px] w-full font-[500] bg-[#240552] text-white p-5 rounded-[8px]  disabled:bg-primary/60"
							onClick={() => {
								// setProgress((prev) => prev + 14);
								// handleContinue();
								next();
								// setModal("estimate");
							}}
						>
							Continue
						</button>
					) : selectedF === "Anytime/Manual" ? (
						<button
							className=" cursor-pointer text-[14px] w-full font-[500] bg-[#240552] text-white p-5 rounded-[8px]  disabled:bg-primary/60"
							onClick={() => {
								// setProgress((prev) => prev + 14);
								// handleContinue();
								// setModal("estimate");
								next();
							}}
						>
							Continue
						</button>
					) : selectedF === "Weekly" ? (
						<button
							className="mt-8 cursor-pointer text-[14px] w-full font-[500] bg-[#240552] text-white p-5 rounded-[8px]  disabled:bg-primary/60"
							onClick={() => {
								// setProgress((prev) => prev + 14);
								// handleContinue();
								next();
							}}
							disabled={!selectedD}
						>
							Continue
						</button>
					) : selectedF === "Monthly" ? (
						<button
							className="p-5 mt-10  cursor-pointer bg-[#240552] text-white w-full  rounded-[8px] text-[14px] disabled:bg-[#240552]/60"
							onClick={() => {
								// setProgress((prev) => prev + 14);
								// handleContinue();
								// setModal("estimate");
								next();
							}}
							disabled={!selectedDom}
						>
							Continue
						</button>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

export default Howoften;
