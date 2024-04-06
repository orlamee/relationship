import React from "react";
import html2canvas from "html2canvas";
import providus from "../../assets/providus-logo.svg";
import { useAccState } from "../../hook/useAccState";
import Image from "next/image";

type props = {
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function Accountdetails({ setStep }: props) {
	const takeScreenshot = () => {
		const element = document.getElementById("accountDetailsSection");
		if (element instanceof HTMLElement) {
			html2canvas(element).then((canvas) => {
				const screenshot = canvas.toDataURL("image/png");
				const link = document.createElement("a");
				link.href = screenshot;
				link.download = "accountdetails.png";
				link.click();
			});
		}
	};

	const accountDetails = useAccState((state) => state.details);
	const removeDetails = useAccState((state) => state.removeDetails);

	return (
		<div className="mx-auto max-w-[1000px]">
			<div
				id="accountDetailsSection"
				className="rounded-[16px] shadow-[0px_5px_14px_#3434341F] bg-white  mb-4 mt-4 min-h-[350px]"
			>
				<h1 className="text-[18px] font-[700] leading-[20px] mb-5 px-7 sm:px-9 pt-9">
					Account Information
				</h1>
				<p className="text-[12px] font-[500] px-7 sm:px-9">
					Account have been successfully created. Below are the details to
					login to the app and also bank details for this account
				</p>

				<div className="mt-12 bg-[#FBFBFB] px-7 sm:px-9 py-9 rounded-b-[16px]">
					<h1 className="text-[12px] font-[500] leading-[20px] mb-8 border-b-[1px] border-dashed border-b-[#E5E7EB] pb-4">
						Bank Details
					</h1>

					<div className="mb-6">
						<span className="mr-4 text-[12px] font-[500] text-[#9CA3AF] leading-[16px]">
							Account Name:
						</span>{" "}
						<span className="text-[12px] font-[500] leading-[33px]">
							{accountDetails?.account_name}
						</span>
					</div>
					<div className="mb-6 flex items-center">
						<span className="mr-4 text-[12px] font-[500] text-[#9CA3AF] leading-[16px]">
							Bank Name:
						</span>{" "}
						<span className="text-[12px] font-[500] leading-[33px] flex items-center">
							<Image
								src={providus}
								alt="providus bank"
								width={19}
								height={19}
								className="mr-1"
							/>{" "}
							{accountDetails?.account_bank}
						</span>
					</div>
					<div className="mb-6">
						<span className="mr-4 text-[12px] font-[500] text-[#9CA3AF] leading-[16px]">
							Account Number:
						</span>{" "}
						<span className="text-[12px] font-[500] leading-[33px]">
							{accountDetails?.account_number}
						</span>
					</div>
				</div>
			</div>

			<div className="flex  flex-col items-center md:flex-row md:justify-end mt-7 gap-5 overflow-hidden">
				<button
					className="text-white rounded-[8px] px-4 py-3 md:px-10 md:py-4 block  text-[14px] font-[500] bg-[rgb(249,115,22)]"
					onClick={takeScreenshot}
				>
					Take screenshot
				</button>

				<button
					className="text-white bg-[#240552] rounded-[8px] px-4 py-3 md:px-10 md:py-4 block text-[14px] font-[500] disabled:bg-[#240552]/70"
					onClick={() => {
						setStep(1);
						removeDetails();
					}}
				>
					Back to Create Account
				</button>
			</div>
		</div>
	);
}
