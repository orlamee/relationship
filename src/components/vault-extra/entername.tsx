"use client";
import React from "react";
import Steptitle from "./steptitle";
import {
	FieldErrors,
	FieldValues,
	UseFormGetFieldState,
	UseFormRegister,
	UseFormTrigger,
	UseFormWatch,
} from "react-hook-form";
import { vaultLiteVal } from "./createVault";

type props = {
	step: string;
	register: UseFormRegister<vaultLiteVal>;
	watch: UseFormWatch<vaultLiteVal>;
	setStep: () => void;
	errors: FieldErrors<vaultLiteVal>;
	trigger: UseFormTrigger<vaultLiteVal>;
	getFieldState: UseFormGetFieldState<vaultLiteVal>;
};

function Entername({
	step,
	setStep,
	register,
	watch,
	errors,
	trigger,
	getFieldState,
}: props) {
	return (
		<>
			<Steptitle title="Enter Name" subtitle="Give your plan a name" />

			<div className="w-full md:w-[450px] mx-auto mt-16">
				<input
					type="text"
					className="border-b-[1px] border-b-primary w-full outline-none pb-2 text-center p-4"
					{...register("name")}
				/>
				{errors?.name && (
					<span className="text-red-500 mt-1 text-center block text-[13px]">
						{errors.name.message}
					</span>
				)}

				<button
					className="bg-[#240552] text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-8"
					onClick={() => {
						trigger("name");
						const nameState = getFieldState("name");
						if (!nameState.isDirty || nameState.invalid) return;

						setStep();
					}}
				>
					Continue
				</button>
			</div>
		</>
	);
}

export default Entername;
