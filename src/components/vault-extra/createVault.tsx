"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../navbar";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Howoften from "./howoften";
import OverView from "./overview";
import { ScrollArea } from "../ui/scroll-area";
import Entername from "./entername";
import Entertarget from "./entertarget";
import ChoosePeriod from "./chooseperiod";
import Image from "next/image";
import avatar from "../../assets/avatar.svg";
import { useForm } from "react-hook-form";
import { userSlice } from "@/hook/user";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type vaultLiteVal = {
	name: string;
	target_amount: string;
	start_date: Date;
	end_date: string;
	time: string;
	trans_pin: string;
};

export type detailsType = {
	amount: number;
	frequency: string;
	dividends_accrued: number;
	dividends_rate: number;
};

function CreateVault({ token }: { token: string }) {
	const user = userSlice();

	const [step, setStep] = useState<
		"enter name" | "how often" | "target" | "period" | "overview"
	>("enter name");
	const [selectedF, setSelectedF] = useState("");
	const [selectedD, setSelectedD] = useState("");
	const [selectedDom, setSelectedDom] = useState("");

	const schema = z.object({
		name: z
			.string({ required_error: "Plan name is required" })
			.min(1, "Plan name is required"),
		target_amount: z
			.string({ required_error: "enter target amount" })
			.min(1, "enter target amount")
			.refine((val) => Number(val) >= 200001, {
				message: "minimum of 200,001",
			})
			.refine((val) => Number(val) <= 600000, {
				message: "maximum of 600,000",
			}),
		start_date: z.string({ required_error: "Start date required" }),
		end_date: z.string({ required_error: "Payback date required" }),
		time: z
			.string({ required_error: "Time required" })
			.min(1, "Time required"),
		trans_pin: z
			.string({ required_error: "Your Transaction pin is required" })
			.max(6, "Your transaction pin is incomplete"),
	});

	const {
		register,
		trigger,
		watch,
		control,
		setValue,
		setFocus,
		getFieldState,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm<vaultLiteVal>({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const [details, setDetails] = useState<detailsType>();

	return (
		<section>
			<header className="sticky top-0 z-[200] px-4 lg:px-8 flex items-center h-[110px] w-full bg-white">
				<nav className="flex justify-between w-full items-center">
					<Link href={"/dashboard/savings"}>
						<div className="flex items-center">
							<ChevronLeft className="w-[24px] text-black" />

							<p className="text-black text-[14px] font-[500] ">
								Create Vault Extra Plan
							</p>
						</div>
					</Link>
					<div className="flex items-center space-x-3">
						<div className="relative rounded-full w-[30px] h-[30px]">
							<Image
								src={user.user?.profile_photo || avatar}
								alt="avatar"
								className="rounded-full"
								fill
							/>
						</div>
						<div>
							<h1 className="text-black font-[500] text-[12px] capitalize">
								{user.user?.last_name} {user?.user?.first_name}
							</h1>
							<p className="text-[12px] font-[400] text-[#9CA3AF]">
								{`<${user.user?.kodhex}/>`}
							</p>
						</div>
					</div>
					<div></div>
				</nav>
			</header>
			<main className="flex items-center justify-center h-[88vh]">
				<div className=" py-4 px-4 w-full mx-4 sm:mx-[10%] lg:mx-0 lg:w-1/2 border-[1px] border-[#E5E7EB] rounded-[8px] container-gradient bg-white">
					<ScrollArea className=" bg-white w-full py-8 rounded-[8px]">
						<div className="h-[4px] w-[450px] bg-[#E5E7EB] rounded-full mx-auto mb-7">
							<div
								className="h-full bg-[#3B82F6] rounded-full transition-[width] duration-[5000ms]"
								style={{
									width: `${
										step === "enter name"
											? "20%"
											: step === "target"
											? "40%"
											: step === "how often"
											? "60%"
											: step === "period"
											? "80%"
											: "100%"
									}`,
								}}
							/>
						</div>

						{step === "enter name" && (
							<Entername
								step={step}
								setStep={() => setStep("target")}
								register={register}
								watch={watch}
								errors={errors}
								trigger={trigger}
								getFieldState={getFieldState}
							/>
						)}
						{step === "target" && (
							<Entertarget
								setStep={() => setStep("enter name")}
								next={() => setStep("how often")}
								register={register}
								watch={watch}
								control={control}
								errors={errors}
								trigger={trigger}
								getFieldState={getFieldState}
							/>
						)}
						{step === "how often" && (
							<Howoften
								setStep={() => setStep("target")}
								selectedF={selectedF}
								setSelectedF={setSelectedF}
								selectedD={selectedD}
								setSelectedD={setSelectedD}
								selectedDom={selectedDom}
								setSelectedDom={setSelectedDom}
								next={() => setStep("period")}
							/>
						)}
						{step === "period" && (
							<ChoosePeriod
								setStep={() => setStep("how often")}
								next={() => setStep("overview")}
								register={register}
								watch={watch}
								selectedF={selectedF}
								token={token}
								setValue={setValue}
								details={details}
								setDetails={setDetails}
								selectedD={selectedD}
								selectedDom={selectedDom}
								errors={errors}
								trigger={trigger}
								getFieldState={getFieldState}
								clearErrors={clearErrors}
							/>
						)}
						{step === "overview" && (
							<OverView
								setStep={() => setStep("period")}
								details={details}
								watch={watch}
								token={token}
								selectedF={selectedF}
								selectedD={selectedD}
								selectedDom={selectedDom}
								register={register}
								setFocus={setFocus}
								resetStep={() => setStep("enter name")}
								resetForm={reset}
							/>
						)}
					</ScrollArea>

					{/* <div className="bg-gradient-to-b from-[#4400A9] from-50% to-90  to-white w-full h-full"></div> */}
				</div>
			</main>
		</section>
	);
}

export default CreateVault;
