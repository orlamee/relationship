"use client";
import Image from "next/image";
import nin from "../../assets/nin.svg";
import { useState } from "react";
import success from "../../assets/ep_success-filled.svg";
import failed from "../../assets/failed-ks1ODQxJMt.svg";

export default function Verification() {
	const [approved, setApproved] = useState(false);
	const [declined, setDeclined] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupImageSrc, setPopupImageSrc] = useState("");

	const handleImageClick = (imageSrc: string) => {
		setPopupImageSrc(imageSrc);
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};
	return (
		<div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
			<div className="flex items-center gap-x-20">
				<div className="w-1/3">
					<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
						Utility Bill
					</h3>
					<div className="relative inline-block">
						<Image
							src={nin}
							alt="nin"
							className="my-4 w-full cursor-pointer"
						/>
						<button
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
							onClick={() => handleImageClick(nin)}
						>
							View
						</button>
					</div>
				</div>
				<div className="w-1/3">
					<div className="flex flex-row gap-x-5">
						<button
							className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
							onClick={() => setDeclined(true)}
						>
							Decline
						</button>
						<button
							className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
							onClick={() => setApproved(true)}
						>
							Approve
						</button>
					</div>
				</div>
			</div>
			{/* Popup */}
			{showPopup && (
				<div className="overlay">
					<div className="popup">
						<Image
							src={popupImageSrc}
							alt="Popup Image"
							className="popup-image mb-5"
						/>
						<span
							className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full"
							onClick={handleClosePopup}
						>
							&times;
						</span>
					</div>
				</div>
			)}
			{approved && (
				<div className="overlay">
					<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
						<span
							className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
							onClick={() => setApproved(false)}
						>
							&times;
						</span>
						<Image
							src={success}
							alt="success image"
							className="w-[60px] h-[60px] mx-auto mb-5 mt-7"
						/>

						<h1 className="text-center font-[500] text-[20px] mb-2">
							Utility Bill Approved
						</h1>
						<p className="text-[#9ca3af] text-[12px] text-center mb-5">
							You have successfully approved the utility bill of{" "}
							<span className="text-black">Ayodeji Michael</span>
						</p>
					</div>
				</div>
			)}
			{declined && (
				<div className="overlay">
					<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
						<span
							className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
							onClick={() => setDeclined(false)}
						>
							&times;
						</span>
						<Image
							src={failed}
							alt="success image"
							className="w-[80px] h-[80px] mx-auto mb-5 mt-7"
						/>

						<h1 className="text-center font-[500] text-[20px] mb-2">
							Utility Bill Declined
						</h1>
						<p className="text-[#9ca3af] text-[12px] text-center mb-5">
							You have successfully declined the utility bill of{" "}
							<span className="text-black">Ayodeji Michael</span>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
