"use client";
import React, { useState } from "react";
import PanelHeader from "../Accountcomponents/panelHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

export default function ChangePlan() {
	const [activePanel, setActivePanel] = useState<"home" | "estimate">("home");
	const Breakdown = [
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "9/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "9/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "9/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "9/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
	];

	const EstimateTab = () => (
		<div>
			<Tabs defaultValue="details" className="w-full">
				<div className="">
					<TabsList className="w-[70%] flex justify-between mb-[10px] h-[50px] px-1 py-4 bg-[#F9FAFB]">
						<TabsTrigger value="details" className=" w-[50%] h-[40px]">
							Details
						</TabsTrigger>
						<TabsTrigger value="breakdown" className=" w-[50%] h-[40px]">
							Brealdown
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="details">
					<div className="mt-7">
						<div className="bg-[#FAFAFA] rounded-[8px] p-6 border-[1px] border-[#F3F4F6] cursor-pointer">
							<div className="flex flex-col gap-7">
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Target
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Frequency
									</h3>
									<p className="text-[13px] font-[500]">Monthly</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Dividends Rate
									</h3>
									<p className="text-[13px] font-[500]">6-10% p.a</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Dividends Accrued
									</h3>
									<p className="text-[13px] font-[500]">
										10th of september, 2023
									</p>
								</div>
							</div>
						</div>

						<p className="mt-7 bg-[#F9F5FF] rounded-[6px] text-[#8E50E9] p-4 text-[12px] text-center">
							Saving Tip: Save N16,666 Monthly to achieve target. You can
							also top up anytime
						</p>

						<div className="my-5">
							<p className="text-[14px] font-[400] text-[#9CA3AF] mb-2">
								Preferred amount to save
							</p>
							<input
								type="text"
								className="w-full border-[1px]   text-[12px] outline-none border-[#9CA3AF] p-4 rounded-[4px] text-primary"
								defaultValue={"N10,000.00"}
							/>
						</div>

						<div className="flex items-center flex-row space-x-1.5">
							<input
								type="checkbox"
								name=""
								id=""
								className="accent-primary"
							/>
							<p className="text-[12px] font-[500] text-[#6B7280]">
								By clicking you are agreeing to the{" "}
								<span className="text-primary">
									Terms and Conditions. please note: Cannot be broken{" "}
								</span>
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="breakdown">
					<div className="mt-7">
						<div className=" bg-[#F9F9F9] rounded-[15px]">
							<Table className="mx-auto">
								<TableHeader>
									<TableRow>
										<TableHead className="text-[14px] font-[600] text-[#6B7280] uppercase">
											Date
										</TableHead>
										<TableHead className="text-[14px] text-[#6B7280] font-[600] uppercase">
											Amount
										</TableHead>
										<TableHead className="text-[14px] text-[#6B7280] font-[600] uppercase">
											Dividends
										</TableHead>
										<TableHead className="text-[14px] text-[#6B7280] font-[600] uppercase">
											Amounts
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="bg-[#F9F9F9] rounded-t-[8px] mx-auto text-[20px] text-primary">
									{Breakdown.map((b, i) => (
										<TableRow
											key={i}
											className="border-0 cursor-pointer"
										>
											<TableCell className="text-[14px] font-[500] text-primary">
												{b.date}
											</TableCell>
											<TableCell className="text-[14px] font-[500] text-primary">
												{b.amount}
											</TableCell>
											<TableCell className="text-[14px] font-[500] text-primary">
												{b.dividends}
											</TableCell>
											<TableCell className="text-[14px] font-[500] primary">
												{b.amounts}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);

	return (
		<div className="h-[75vh] relative">
			{activePanel === "home" && (
				<>
					<PanelHeader
						title="Change Savings Plan"
						subtitle="Change your savings plan settings"
					/>
					<div className="mt-6 flex flex-col gap-6">
						<div className="p-5 border-[1px] border-[#F3F4F6] rounded-[4px] ">
							<select className="w-full text-[12px] text-primary outline-none">
								<option value="" disabled selected>
									Choose Frequency
								</option>
								<option value="daily">Daily</option>
								<option value="weekly">Weekly</option>
								<option value="monthly">Monthly</option>
							</select>
						</div>

						<div className="p-5 border-[1px] border-[#F3F4F6] rounded-[4px] ">
							<select className="w-full text-[12px] text-primary outline-none">
								<option value="" disabled selected>
									Days of the month
								</option>
								<option value="monday">Monday</option>
								<option value="tuesday">Tuesday</option>
								<option value="wednesday">Wednesday</option>
								<option value="thursday">thursday</option>
								<option value="fridayday">friday</option>
							</select>
						</div>

						<div className="p-5 border-[1px] border-[#F3F4F6] rounded-[4px] ">
							<select className="w-full text-[12px] text-primary outline-none">
								<option value="" disabled selected>
									Select Start Date
								</option>
								<option>Start Today</option>
								<option>Start Tomorrow</option>
								<option>Start in 2 days</option>
								<option>Start in 3 days</option>
								<option>Start in 4 days</option>
								<option>Start in 29 days</option>
								<option>Start in 30 days</option>
							</select>
						</div>
						<div className="p-5 border-[1px] border-[#F3F4F6] rounded-[4px] ">
							<select className="w-full text-[12px] text-primary outline-none">
								<option value="" disabled selected>
									Select Payback Date
								</option>
								<option>End in 180 days</option>
								<option>End in 181 days</option>
								<option>End in 182 days</option>
								<option>End in 183 days</option>
								<option>End in 184 days</option>
								<option>End in 185 days</option>
								<option>End in 186 days</option>
							</select>
						</div>
						<div className="p-5 border-[1px] border-[#F3F4F6] rounded-[4px] ">
							<select className="w-full text-[12px] text-primary outline-none">
								<option value="" disabled selected>
									Select Payback Time
								</option>
								<option>5:00am</option>
								<option>6:00am</option>
								<option>7:00am</option>
								<option>8:00am</option>
								<option>9:00am</option>
								<option>9:00pm</option>
							</select>
						</div>
					</div>
					<div className="absolute top-[93%] w-full">
						<button
							className="rounded-[8px] text-[14px] text-white bg-primary w-full p-5"
							onClick={() => setActivePanel("estimate")}
						>
							Continue
						</button>
					</div>
				</>
			)}
			{activePanel === "estimate" && (
				<>
					<PanelHeader
						title="Estimate"
						subtitle="A good consistency will give you this"
						withIcon
						onBackClick={() => setActivePanel("home")}
					/>
					<div className="mt-6">
						<EstimateTab />
					</div>

					<div className="absolute top-[93%] w-full">
						<button
							className="rounded-[8px] text-[14px] text-white bg-primary w-full p-5"
							// onClick={() => setActivePanel("estimate")}
						>
							Save Changes
						</button>
					</div>
				</>
			)}
		</div>
	);
}
