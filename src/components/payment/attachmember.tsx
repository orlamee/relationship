"use client";
import React, { useState } from "react";
import avatar from "../../assets/avatar.svg";
import Image from "next/image";
import { SearchIcon, XCircleIcon } from "lucide-react";
import Modal from "../modal";
import success from "../../assets/ep_success-filled.svg";

type HandleNextFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepFourProps {
	handleNext: HandleNextFunction;
}

const StepFour: React.FC<StepFourProps> = ({ handleNext }) => {
	const [modal, setModal] = useState<"success" | "">("");

	const SuccessModal = () => (
		<Modal>
			<div className="bg-white rounded-[8px] p-7 w-[430px] pb-10">
				<div className="flex items-center justify-between">
					<div />
					<XCircleIcon
						size={18}
						className="text-[#9CA3AF] cursor-pointer"
						onClick={() => setModal("")}
					/>
				</div>

				<div className="">
					<Image src={success} alt="success" className="mx-auto" />
					<p className="text-black font-[600] text-[14px] mb-2 text-center mt-3">
						Account Successfuly Created
					</p>
				</div>
			</div>
		</Modal>
	);
	return (
		<>
			{modal === "success" && <SuccessModal />}
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Attach a Member
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div className="border-[1px] rounded-[4px flex items-center] px-5 py-4 space-x-3 rounded-[4px] mb-6">
						<SearchIcon />
						<input
							type="text"
							className="outline-none w-full text-[13px] placeholder:text-[#D1D5DB]"
							placeholder="Search for members"
						/>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex justify-between items-center bg-gray-50 py-4 cursor-pointer rounded-[4px] px-3">
							<div className="flex items-center space-x-4">
								<Image
									src={avatar}
									alt="avatar"
									className="w-[26px] h-[26px]"
								/>
								<p className="text-[14px] text-black">
									Adebowale Franca
								</p>
							</div>
							<input
								type="radio"
								name=""
								id=""
								className="accent-[#240552]"
							/>
						</div>
					</div>
					<div className="text-end mt-5">
						<button
							className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
							onClick={() => setModal("success")}
						>
							Create Account
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default StepFour;
