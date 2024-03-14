"use client";
import React from "react";
import Steptitle from "./steptitle";
import CurrencyInput from "react-currency-input-field";
import { useRouter } from "next/navigation";

type props = {
	amount: string;
	setAmount: React.Dispatch<React.SetStateAction<string>>;
	setStep: () => void;
	next: () => void;
};
function Entertarget({ amount = "", setAmount, setStep, next }: props) {
	return (
		<div className="mt-10">
			<Steptitle
				title="Enter Target"
				subtitle="How much is your overall target?"
				onClick={setStep}
			/>

			<div className="max-w-[450px] mx-auto mt-14">
				<CurrencyInput
					prefix="N"
					className="border-b-[1px] border-b-black outline-none w-[290px] mx-auto flex justify-center mt-5 text-center text-[41px] font-[500] text-primary"
					value={amount}
					decimalsLimit={2}
					onValueChange={(value) => {
						if (value) {
							setAmount(value);
						}
					}}
				/>
				<p className="text-center text-[11px] font-[500] text-[#9CA3AF] mt-1.5">
					N30,000 -N999,999
				</p>

				<div className="flex justify-between items-center mt-8">
					<p className="text-[12px] font-[500] text-[#9CA3AF]">
						If you want to save above N1,000,000 switch <br />
						your plan to Grit for better rewards.
					</p>
					<button className="text-primary border-[1px] border-primary bg-[#F6F1FE] text-[12px] font-[400] p-3 rounded-[4px]">
						Save on Vault
					</button>
				</div>

				<button
					className="bg-[#240552] text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-14"
					onClick={next}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default Entertarget;
