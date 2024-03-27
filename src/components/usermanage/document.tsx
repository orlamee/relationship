import React, { useRef, useState } from "react";
import {
	FieldErrors,
	UseFormGetFieldState,
	UseFormRegister,
	UseFormTrigger,
} from "react-hook-form";
import { userType } from "./main";
import toast from "react-hot-toast";
type HandleNextFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;
type HandleBackFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepTwoProps {
	handleNext: HandleNextFunction;
	handleBack: HandleBackFunction;
	doc: File | undefined;
	setDocPhoto: React.Dispatch<React.SetStateAction<File | undefined>>;
	register: UseFormRegister<userType>;
	errors: FieldErrors<userType>;
	trigger: UseFormTrigger<userType>;
	getFieldState: UseFormGetFieldState<userType>;
}

const StepTwo: React.FC<StepTwoProps> = ({
	handleNext,
	handleBack,
	doc,
	setDocPhoto,
	register,
	trigger,
	errors,
	getFieldState,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<>
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Document
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div className="mb-6 flex flex-wrap">
						<div className="w-1/2 pr-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								ID Type
							</label>
							<div className="py-[14px] px-1.5 border border-[#F0F0F0] rounded-[4px]">
								<select
									className="w-full outline-none select"
									{...register("identity_document_type", {
										required: true,
									})}
								>
									<option
										value=""
										disabled
										selected
										hidden
										className=""
									>
										Choose ID Type
									</option>
									<option value="Voters card">{`Voter’s Card`}</option>
									<option value="Nin">{`Nin`}</option>
									<option value="Drivers license">{`Driver’s License`}</option>
								</select>{" "}
							</div>
							{errors?.identity_document_type && (
								<span className="text-red-500 text-[13px]">
									{errors.identity_document_type.message}
								</span>
							)}
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								ID Number
							</label>
							<input
								type="tel"
								placeholder="Doe"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("identity_document_serial", {
									required: true,
								})}
							/>
							{errors?.identity_document_serial && (
								<span className="text-red-500 text-[13px]">
									{errors.identity_document_serial.message}
								</span>
							)}
						</div>
					</div>
					<div className="mb-6">
						<div className="w-full">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Upload Document
							</label>
							<input
								type="file"
								className="bg-[#fff] hidden border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500  w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								ref={inputRef}
								onChange={() => {
									if (inputRef.current) {
										setDocPhoto(inputRef.current.files?.[0]);
									}
								}}
							/>
							<div
								className="bg-white cursor-pointer w-full mt-1.5 border border-[#F0F0F0] rounded-[4px] p-3 py-4 text-[12px] font-[500] text-center"
								onClick={() => inputRef?.current?.click()}
							>
								<span className="text-[12px] font-[500] text-[#3D0072]">
									{doc ? doc.name : "+ Upload Document"}
								</span>
							</div>
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
									"identity_document_type",
									"identity_document_serial",
								]);
								const docType = getFieldState("identity_document_type");
								const docSerial = getFieldState(
									"identity_document_serial"
								);

								if (!doc) {
									toast.error("please upload the document");
									return;
								}
								if (docType.invalid || !docType.isDirty) return;
								if (docSerial.invalid || !docSerial.isDirty) return;

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

export default StepTwo;
