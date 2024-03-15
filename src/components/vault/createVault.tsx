"use client";
import React, { useState } from "react";
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

function CreateVault() {
	// const step = useSearchParams().get("step") || "enter amount";
	const [step, setStep] = useState<
		"enter name" | "how often" | "target" | "period" | "overview"
	>("enter name");
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("0");
	const [selectedF, setSelectedF] = useState("");
	const [selectedD, setSelectedD] = useState("");
	const [selectedDom, setSelectedDom] = useState("");

	return (
		<section>
			<header className="sticky top-0 z-[200] px-4 lg:px-8 flex items-center h-[110px] w-full bg-white">
				<nav className="flex justify-between w-full items-center">
					<Link href={"/dashboard/savings"}>
						<div className="flex items-center">
							<ChevronLeft className="w-[24px] text-black" />

							<p className="text-black text-[14px] font-[500] ">
								Create Vault Plan
							</p>
						</div>
					</Link>
					<div className="flex items-center space-x-3">
						<Image src={avatar} alt="avatar" className="w-[30px]" />
						<div>
							<h1 className="text-black font-[500] text-[12px]">
								Ajayi Michael Olaoluwa
							</h1>
							<p className="text-[12px] font-[400] text-[#9CA3AF]">{`<Ajayi/>`}</p>
						</div>
					</div>
					<div></div>
				</nav>
			</header>
			<main className="flex items-center justify-center h-[80vh]">
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
							<Entername step={step} setStep={() => setStep("target")} />
						)}
						{step === "target" && (
							<Entertarget
								amount={amount}
								setAmount={setAmount}
								setStep={() => setStep("enter name")}
								next={() => setStep("how often")}
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
							/>
						)}
						{step === "overview" && (
							<OverView setStep={() => setStep("period")} />
						)}
					</ScrollArea>

					{/* <div className="bg-gradient-to-b from-[#4400A9] from-50% to-90  to-white w-full h-full"></div> */}
				</div>
			</main>
		</section>
	);
}

export default CreateVault;
