import React, { useState } from "react";
import {
	FieldErrors,
	UseFormGetFieldState,
	UseFormRegister,
	UseFormTrigger,
} from "react-hook-form";
import { userType } from "./main";
type HandleNextFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;
type HandleBackFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepThreeProps {
	handleNext: HandleNextFunction;
	handleBack: HandleBackFunction;
	register: UseFormRegister<userType>;
	errors: FieldErrors<userType>;
	trigger: UseFormTrigger<userType>;
	getFieldState: UseFormGetFieldState<userType>;
}

const StepThree: React.FC<StepThreeProps> = ({
	handleNext,
	handleBack,
	errors,
	register,
	trigger,
	getFieldState,
}) => {
	return (
		<>
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Next of Kin
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div className="mb-6 flex flex-wrap">
						<div className="w-1/2 pr-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								First Name
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("next_of_kin.first_name", {
									required: true,
								})}
							/>
							{errors?.next_of_kin?.first_name && (
								<span className="text-red-500 text-[13px]">
									{errors.next_of_kin.first_name.message}
								</span>
							)}
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Last Name
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("next_of_kin.last_name", {
									required: true,
								})}
							/>
							{errors?.next_of_kin?.last_name && (
								<span className="text-red-500 text-[13px]">
									{errors.next_of_kin.last_name.message}
								</span>
							)}
						</div>
						<div className="w-1/2 mt-5 pr-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Relationship
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("next_of_kin.relationship", {
									required: true,
								})}
							/>
							{errors?.next_of_kin?.relationship && (
								<span className="text-red-500 text-[13px]">
									{errors.next_of_kin.relationship.message}
								</span>
							)}
						</div>
						<div className="w-1/2 mt-5 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Gender
							</label>
							<div className="py-[14px] px-1.5 border border-[#F0F0F0] rounded-[4px] text-[13px] w-full">
								<select
									className="w-full h-full outline-none"
									{...register("next_of_kin.gender", {
										required: true,
									})}
								>
									<option value="" disabled selected hidden>
										Choose Gender
									</option>
									<option value="male">{`Male`}</option>
									<option value="female">{`Female`}</option>
								</select>{" "}
							</div>
							{errors?.next_of_kin?.gender && (
								<span className="text-red-500 text-[13px]">
									{errors.next_of_kin.gender.message}
								</span>
							)}
						</div>
					</div>
					<div className="mb-6 flex flex-wrap">
						<div className="w-1/2 pr-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Email
							</label>
							<input
								type="email"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("next_of_kin.email", {
									required: true,
								})}
							/>
							{errors?.next_of_kin?.email && (
								<span className="text-red-500 text-[13px]">
									{errors.next_of_kin.email.message}
								</span>
							)}
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Phone Number
							</label>
							<input
								type="tel"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("next_of_kin.phone", {
									required: true,
								})}
							/>
							{errors?.next_of_kin?.phone && (
								<span className="text-red-500 text-[13px]">
									{errors.next_of_kin.phone.message}
								</span>
							)}
						</div>
					</div>
					<div className="mb-6">
						<div className="w-full">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Address
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("next_of_kin.address", {
									required: true,
								})}
							/>
							{errors?.next_of_kin?.address && (
								<span className="text-red-500 text-[13px]">
									{errors.next_of_kin.address.message}
								</span>
							)}
						</div>
					</div>
					<div className="flex justify-between items-center">
						<button
							className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
							onClick={handleBack}
						>
							Back
						</button>
						<button
							className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
							onClick={(e) => {
								trigger([
									"next_of_kin.first_name",
									"next_of_kin.last_name",
									"next_of_kin.email",
									"next_of_kin.phone",
									"next_of_kin.gender",
									"next_of_kin.relationship",
									"next_of_kin.address",
								]);
								const firstName = getFieldState(
									"next_of_kin.first_name"
								);
								const lastName = getFieldState("next_of_kin.last_name");
								const email = getFieldState("next_of_kin.email");
								const phone = getFieldState("next_of_kin.phone");
								const gender = getFieldState("next_of_kin.gender");
								const rel = getFieldState("next_of_kin.relationship");
								const addy = getFieldState("next_of_kin.address");

								if (firstName.invalid || !firstName.isDirty) return;
								if (lastName.invalid || !lastName.isDirty) return;
								if (email.invalid || !email.isDirty) return;
								if (phone.invalid || !phone.isDirty) return;
								if (gender.invalid || !gender.isDirty) return;
								if (rel.invalid || !rel.isDirty) return;
								if (addy.invalid || !addy.isDirty) return;

								handleNext(e);
							}}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default StepThree;
