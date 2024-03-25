"use client";
import React from "react";
import Steptitle from "./steptitle";
import CurrencyInput from "react-currency-input-field";
import {
	FieldValues,
	UseFormRegister,
	UseFormWatch,
	Controller,
	Control,
} from "react-hook-form";
import { vaultLiteVal } from "./createVault";

type props = {
	setStep: () => void;
	next: () => void;
	register: UseFormRegister<vaultLiteVal>;
	watch: UseFormWatch<vaultLiteVal>;
	control: Control<vaultLiteVal>;
};

function Entertarget({ setStep, next, watch, control }: props) {
	const target = watch("target_amount");
	return (
		<div className="mt-10">
			<Steptitle
				title="Enter Target"
				subtitle="How much is your overall target?"
				onClick={setStep}
			/>

			<div className="max-w-[450px] mx-auto mt-14">
				<Controller
					control={control}
					name="target_amount"
					render={({ field: { onChange, value } }) => (
						<CurrencyInput
							prefix="₦"
							className="border-b-[1px] border-b-black outline-none w-[290px] mx-auto flex justify-center mt-5 text-center text-[41px] font-[500] text-primary"
							decimalsLimit={2}
							// defaultValue={"0"}
							onValueChange={onChange}
							value={value}
						/>
					)}
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
						Save on Vault Lite
					</button>
				</div>

				<button
					className="bg-[#240552] text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-14"
					onClick={() => {
						if (!target) return;
						if (target === "0") return;
						next();
					}}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default Entertarget;
