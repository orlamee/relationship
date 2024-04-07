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
	FieldErrors,
	UseFormTrigger,
	UseFormGetFieldState,
} from "react-hook-form";
import { vaultLiteVal } from "./createVault";

type props = {
	setStep: () => void;
	next: () => void;
	register: UseFormRegister<vaultLiteVal>;
	watch: UseFormWatch<vaultLiteVal>;
	control: Control<vaultLiteVal>;
	errors: FieldErrors<vaultLiteVal>;
	trigger: UseFormTrigger<vaultLiteVal>;
	getFieldState: UseFormGetFieldState<vaultLiteVal>;
};

function Entertarget({
	setStep,
	next,
	watch,
	control,
	errors,
	getFieldState,
	trigger,
}: props) {
	// const target = watch("target_amount");
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
							className="border-b-[1px] border-b-black outline-none w-[300px] mx-auto flex justify-center mt-5 text-center text-[41px] font-[500] text-primary"
							decimalsLimit={2}
							// defaultValue={"0"}
							onValueChange={onChange}
							value={value}
						/>
					)}
				/>
				{errors?.target_amount && (
					<span className="text-red-500 mt-1 text-center block text-[13px]">
						{errors.target_amount.message}
					</span>
				)}

				<p className="text-center text-[11px] font-[500] text-[#9CA3AF] mt-1.5">
					N60,000 -N200,000
				</p>

				<div className="flex justify-between items-center mt-8">
					<p className="text-[12px] font-[500] text-[#9CA3AF]">
						If you want to save above N1,000,000 switch <br />
						your plan to Grit for better rewards.
					</p>
					<button className="text-primary border-[1px] border-primary bg-[#F6F1FE] text-[12px] font-[400] p-3 rounded-[4px]">
						Save on Vault Extra
					</button>
				</div>

				<button
					className="bg-[#240552] text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-14"
					onClick={() => {
						trigger("target_amount");
						const amountState = getFieldState("target_amount");
						if (!amountState.isDirty || amountState.invalid) return;
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
