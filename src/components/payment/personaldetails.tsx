"use client";
import React, { useState } from "react";
import Modal from "../modal";
import { XCircle, XCircleIcon } from "lucide-react";

type HandleNextFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepOneProps {
	handleNext: HandleNextFunction;
}

const StepOne: React.FC<StepOneProps> = ({ handleNext }) => {
	const [modal, setModal] = useState<"verify" | "">("");

	const VerifyEmailModal = () => (
		<Modal>
			<div className="bg-white rounded-[8px] p-7 w-[430px] pb-10">
				<div className="flex items-center justify-between">
					<h1 className="text-black text-[22px] font-[600]">
						Enter OTP Code
					</h1>
					<XCircleIcon
						size={18}
						className="text-[#9CA3AF] cursor-pointer"
						onClick={() => setModal("")}
					/>
				</div>
				<p className="text-[#9CA3AF] text-[13px] font-[500] mt-2">
					Please enter OTP code sent to{" "}
					<span className="text-black font-[500]">
						davidoshodi@gmail.com
					</span>
				</p>

				<div className="mt-[20px]">
					<p className="text-black font-[600] text-[14px] mb-2">
						Enter OTP Code
					</p>
					<input
						type="tel"
						className="w-full p-3 rounded-[4px] border-[1px] border-[#E8EAEE] outline-none"
						maxLength={4}
					/>
					<p className="text-[#9CA3AF] text-[12px] mt-2">
						Didn’t get OTP?{" "}
						<span className="text-[#240552]"> Resend in 40 secs</span>
					</p>
				</div>

				<button className="rounded-[8px] w-full p-4 text-[14px] text-white bg-[#3D0072] mt-8">
					Verify Email
				</button>
			</div>
		</Modal>
	);

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
							type="number"
							placeholder="Enter Bank Verification Number"
							className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						/>
						<div className="mt-5">
							<button className="px-6 py-4 text-[#000] text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#F3F4F6]">
								Generate Details
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
							/>
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Last Name
							</label>
							<input
								type="text"
								placeholder="Doe"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							/>
						</div>
					</div>
					<div className="mb-6">
						<div className="w-1/2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Phone Number
							</label>
							<input
								type="tel"
								placeholder="0803203232"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							/>
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
					<div className="relative">
						<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
							Email
						</label>
						<input
							type="email"
							placeholder="name@example.com"
							className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						/>
						<div className="absolute right-2 bottom-4">
							<span
								className="bg-[#F59E0B] cursor-pointer text-white rounded-[3px] px-5 py-2 text-[12px] outline-none z-[10]"
								onClick={() => setModal("verify")}
							>
								Verify
							</span>
							<span className="bg-[#23A323] text-white rounded-[3px] px-5 py-2 text-[12px] hidden cursor-pointer">
								Verified
							</span>
						</div>
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
						/>
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
							/>
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Nationality
							</label>
							<input
								type="text"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							/>
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
							/>
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Date of Birth
							</label>
							<input
								type="date"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							/>
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
							/>
						</div>
						<div className="w-1/2 pl-2">
							<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
								Utility Bill
							</label>
							<input
								type="file"
								className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							/>
						</div>
					</div>
					<div className="text-end mt-6">
						<button
							className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
							onClick={handleNext}
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
