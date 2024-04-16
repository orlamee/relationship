"use client";
import React, { useEffect, useRef, useState } from "react";
import Modal from "../modal";
import { XCircle, XCircleIcon } from "lucide-react";
import {
	FieldErrors,
	UseFormClearErrors,
	UseFormGetFieldState,
	UseFormRegister,
	UseFormSetValue,
	UseFormTrigger,
	UseFormWatch,
} from "react-hook-form";
import { userType } from "./main";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "@/base_url";

type HandleNextFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepOneProps {
	handleNext: HandleNextFunction;
	register: UseFormRegister<userType>;
	errors: FieldErrors<userType>;
	watch: UseFormWatch<userType>;
	trigger: UseFormTrigger<userType>;
	setValue: UseFormSetValue<userType>;
	token: string;
	getFieldState: UseFormGetFieldState<userType>;
	clearErrors: UseFormClearErrors<userType>;
}

const StepOne: React.FC<StepOneProps> = ({
	handleNext,
	register,
	errors,
	watch,
	trigger,
	setValue,
	token,
	getFieldState,
	clearErrors,
}) => {
	const bvn = watch("bvn");
	const email = watch("email");
	const firstName = watch("first_name");
	const lastName = watch("last_name");
	const kodhex = watch("kodhex");
	const status = watch("marital_status");
	const nationality = watch("nationality");
	const state = watch("state_of_origin");
	const dob = watch("date_of_birth");

	const [generating, setGenerating] = useState(false);
	const [modal, setModal] = useState<"verify" | "">("");
	const [isEmailVerified, setIsEmailVerified] = useState(false);
	const [isVerifying, setIsVerifying] = useState(false);
	const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

	useEffect(() => {
		if (firstName) {
			clearErrors("first_name");
		}
		if (lastName) {
			clearErrors("last_name");
		}
		if (kodhex) {
			clearErrors("kodhex");
		}
		if (status) {
			clearErrors("marital_status");
		}
		if (nationality) {
			clearErrors("nationality");
		}
		if (state) {
			clearErrors("state_of_origin");
		}
		if (dob) {
			clearErrors("date_of_birth");
		}
	}, [
		firstName,
		lastName,
		kodhex,
		status,
		nationality,
		state,
		dob,
		clearErrors,
	]);

	const verify_email = async () => {
		try {
			if (isVerifying) return;
			setIsVerifying(true);
			const { data } = await axios.get(
				`${base_url}/ardilla/retail/admin/api/v1/user/easy_on_board/${bvn}/${email}`
			);
			if (data.code === 200) {
				toast.success(`${data.message}`, { id: "verify-email" });
				setModal("verify");
			} 
			if (data.code === 400 && data.responseCode == 20) {
				setIsEmailVerified(true)
			} 

			if (data.code !== 200) {
				toast.error(`${data.message}`, { id: "verify-email" });
			}
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message},`, { id: "verify-email" });
		} finally {
			setIsVerifying(false);
		}
	};

	const verify_email_otp = async () => {
		try {
			if (isVerifyingOtp) return;
			if (!otp) {
				toast.error("enter otp", { id: "verify-email-otp" });
				return;
			}
			setIsVerifyingOtp(true);
			const { data } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/user/easy_on_board/${bvn}/${email}`,
				{ otp }
			);
			if (data.code === 200) {
				toast.success(`${data.message}`, { id: "verify-email-top" });
				setIsEmailVerified(true);
				setModal("");
			} else if (data.code !== 200) {
				toast.error(`${data.message}`, { id: "verify-email-otp" });
			}
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message},`, { id: "verify-email-otp" });
		} finally {
			setIsVerifyingOtp(false);
		}
	};

	const otpRef = useRef<HTMLInputElement>(null);
	const [otp, setOtp] = useState("");

	useEffect(() => {
		if (otpRef) {
			otpRef.current?.focus();
		}
	}, [otp]);

	const VerifyEmailModal = () => (
		<Modal>
			<div className="bg-white rounded-[8px] p-7 w-[430px] pb-10">
				<div className="flex items-center justify-between">
					<h1 className="text-black text-[20px] font-[600]">
						Enter OTP Code
					</h1>
					<XCircleIcon
						size={18}
						className="text-[#9CA3AF] cursor-pointer"
						onClick={() => {
							setModal("");
							setOtp("");
						}}
					/>
				</div>
				<p className="text-[#9CA3AF] text-[13px] font-[500] mt-2">
					Please enter OTP code sent to{" "}
					<span className="text-black font-[500]">{email}</span>
				</p>

				<div className="mt-[20px]">
					<input
						type="tel"
						className="w-full p-3 rounded-[4px] border-[1px] border-[#E8EAEE] outline-none"
						maxLength={7}
						ref={otpRef}
						value={otp}
						onChange={(e) => setOtp(e.target.value)}
					/>
					<p
						className="text-[#9CA3AF] text-[12px] mt-2 cursor-pointer"
						onClick={verify_email}
					>
						Didn’t get OTP?{" "}
						<span className="text-[#240552]"> Resend</span>
					</p>
				</div>

				<button
					className="rounded-[8px] w-full p-4 text-[14px] text-white bg-[#3D0072] mt-8"
					onClick={verify_email_otp}
				>
					{isVerifyingOtp ? "Verifying Email..." : "Verify Email"}
				</button>
			</div>
		</Modal>
	);

	const verify_bvn = async () => {
		if (!bvn) {
			toast.error("bvn is required");
			return;
		}
		if (generating) return;

		setGenerating(true);

		try {
			const { data } = await axios.get(
				`${base_url}/ardilla/retail/admin/api/v1/user/easy_on_board/${bvn}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (data.code === 200) {
				setValue("first_name", data.data.first_name);
				setValue("last_name", data.data.last_name);
				setValue("date_of_birth", data.data.date_of_birth);
				setValue("kodhex", data.data.kodhex);
				setValue("nationality", data.data.nationality);
				setValue("state_of_origin", data.data.state_of_origin);
				setValue("marital_status", data.data.marital_status);
				toast.success("success");
			}
			if (data.code !== 200) {
				toast.error(`${data.message}`, { id: "verify-bvn" });
			}
		} catch (error: any) {
			console.log(error?.message);
			toast.error(`${error?.messsage}`);
		} finally {
			setGenerating(false);
		}
	};

	return (
		<>
			{modal === "verify" && <VerifyEmailModal />}
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						BVN
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div>
						<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
							BVN
						</label>
						<input
							type="tel"
							placeholder="Enter Bank Verification Number"
							className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							{...register("bvn", { required: true })}
						/>
						{errors?.bvn && (
							<span className="text-red-500 text-[13px]">
								{errors.bvn.message}
							</span>
						)}

						<div className="mt-5">
							<button
								className="px-6 py-4 text-[#000] text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#F3F4F6]"
								onClick={verify_bvn}
							>
								{generating
									? "Generating Details..."
									: "Generate Details"}
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Complete Profile
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
								placeholder="John"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("first_name", { required: true })}
								disabled
							/>
							{errors?.first_name && (
								<span className="text-red-500 text-[13px]">
									{errors?.first_name.message}
								</span>
							)}
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Last Name
							</label>
							<input
								type="text"
								placeholder="Doe"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("last_name", { required: true })}
								disabled
							/>

							{errors?.last_name && (
								<span className="text-red-500 text-[13px]">
									{errors?.last_name.message}
								</span>
							)}
						</div>
					</div>
					<div className="mb-6">
						<div className="w-1/2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Phone Number
							</label>
							<input
								type="tel"
								placeholder="e.g +2340803203232"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("phone", { required: true })}
							/>
							{errors?.phone && (
								<span className="text-red-500 text-[13px]">
									{errors.phone.message}
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Email
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div className="">
						<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
							Email
						</label>
						<div className="relative">
							<input
								type="email"
								placeholder="name@example.com"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("email", { required: true })}
							/>
							<div className="absolute right-2 bottom-4">
								{isEmailVerified ? (
									<span className="bg-[#23A323] text-white rounded-[3px] px-5 py-2 text-[12px] cursor-pointer">
										Verified
									</span>
								) : (
									<span
										className="bg-[#F59E0B] cursor-pointer text-white rounded-[3px] px-5 py-2 text-[12px] outline-none z-[10]  text-center"
										onClick={() => {
											trigger("email");
											const emailState = getFieldState("email");
											if (
												emailState.invalid ||
												!emailState.isDirty
											) {
												return;
											}
											if (!bvn) {
												toast.error("bvn required", {
													id: "verify-email",
												});
												return;
											}

											verify_email();
										}}
									>
										{isVerifying ? "Verifying.." : "Verify"}
									</span>
								)}
							</div>
						</div>

						{errors?.email && (
							<span className="text-red-500 text-[13px]">
								{errors.email.message}
							</span>
						)}
					</div>
				</div>
			</div>
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Create KodHex Name
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div>
						<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
							KodHex Name
						</label>
						<input
							type="text"
							placeholder="Enter KodHex Name"
							className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							{...register("kodhex", { required: true })}
							disabled
						/>
						{errors?.kodhex && (
							<span className="text-red-500 text-[13px]">
								{errors?.kodhex.message}
							</span>
						)}
					</div>
				</div>
			</div>
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Other Details
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div className="mb-6 flex flex-wrap">
						<div className="w-1/2 pr-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Marital Status
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("marital_status", { required: true })}
								disabled
							/>
							{errors?.marital_status && (
								<span className="text-red-500 text-[13px]">
									{errors?.marital_status.message}
								</span>
							)}
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Nationality
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("nationality", { required: true })}
								disabled
							/>
							{errors?.nationality && (
								<span className="text-red-500 text-[13px]">
									{errors?.nationality.message}
								</span>
							)}
						</div>
					</div>
					<div className="mb-6 flex flex-wrap">
						<div className="w-1/2 pr-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								State of Origin
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("state_of_origin", { required: true })}
								disabled
							/>
							{errors?.state_of_origin && (
								<span className="text-red-500 text-[13px]">
									{errors?.state_of_origin.message}
								</span>
							)}
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Date of Birth
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("date_of_birth", { required: true })}
								disabled
							/>
							{errors?.date_of_birth && (
								<span className="text-red-500 text-[13px]">
									{errors?.date_of_birth.message}
								</span>
							)}
						</div>
					</div>
					<div className="mb-6 flex flex-wrap">
						<div className="w-1/2 pr-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Residential Address
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								{...register("inserted_address", { required: true })}
							/>
							{errors?.inserted_address && (
								<span className="text-red-500 text-[13px]">
									{errors.inserted_address.message}
								</span>
							)}
						</div>
					</div>
					<div className="text-end mt-6">
						<button
							className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
							onClick={(e) => {
								trigger([
									"bvn",
									"first_name",
									"last_name",
									"phone",
									"email",
									"kodhex",
									"marital_status",
									"nationality",
									"state_of_origin",
									"date_of_birth",
									"inserted_address",
								]);
								const bvnState = getFieldState("bvn");
								const firstNameState = getFieldState("first_name");
								const lastNameState = getFieldState("last_name");
								const phoneState = getFieldState("phone");
								const emailState = getFieldState("email");
								const kodhexState = getFieldState("kodhex");
								const StateState = getFieldState("marital_status");
								const nationState = getFieldState("nationality");
								const originState = getFieldState("state_of_origin");
								const dateState = getFieldState("date_of_birth");
								const addressState = getFieldState("inserted_address");

								if (bvnState.invalid || !bvnState.isDirty) return;
								if (firstNameState.invalid) return;
								if (lastNameState.invalid) return;
								if (phoneState.invalid || !phoneState.isDirty) return;
								if (emailState.invalid || !emailState.isDirty) return;
								if (kodhexState.invalid) return;
								if (StateState.invalid) return;
								if (nationState.invalid) return;
								if (originState.invalid) return;
								if (dateState.invalid) return;
								if (addressState.invalid) return;

								if (!isEmailVerified) {
									return toast.error("verify email address");
								}

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

export default StepOne;
