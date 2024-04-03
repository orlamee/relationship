"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import nin from "../../assets/nin.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";

type props = {
	kodhex: string;
	token: string;
};

export default function KYC({ kodhex, token }: props) {
	const [showPopup, setShowPopup] = useState(false);
	const [popupImageSrc, setPopupImageSrc] = useState("");

	const handleImageClick = (imageSrc: string) => {
		setPopupImageSrc(imageSrc);
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	const {
		data: dataNin,
		isLoading: isLoadingNin,
		error: errorNin,
	} = useFetcher(
		`${base_url}/ardilla/retail/api/v1/user/get_nin/${kodhex}`,
		token
	);

	console.log({ dataNin });

	return (
		<div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
			<Tabs defaultValue="tier-one" className="w-full">
				<TabsList>
					<TabsTrigger value="tier-one">Tier 1</TabsTrigger>
					<TabsTrigger value="tier-two">Tier 2</TabsTrigger>
					<TabsTrigger value="tier-three">Tier 3</TabsTrigger>
				</TabsList>
				<TabsContent value="tier-one">
					<div className="flex flex-row gap-x-10">
						<div className="w-1/3">
							<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
								Valid ID Card
							</h3>
							<div className="relative inline-block">
								<Image
									src={nin}
									alt="nin"
									loading="eager"
									className="my-4 w-full cursor-pointer"
								/>
								<button
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
									onClick={() => handleImageClick(nin)}
								>
									View
								</button>
							</div>
							<div className="flex flex-row gap-10">
								<div className="w-2/3">
									<div className="border border-[#F3F4F6] p-[18px] rounded-[2px]">
										<h3>221657768903</h3>
									</div>
								</div>
								<div className="w-1/3">
									<button className="border border-[#16A34A] rounded-[2px] text-[#16A34A] font-[500] leading-[20px] text-[12px] p-5 w-full flex items-center justify-center">
										<Icon
											icon="mdi:tick-circle-outline"
											className="text-[#16A34A] me-2"
										/>
										<span>Approved</span>
									</button>
								</div>
							</div>
							<div className="mt-9 flex flex-row gap-x-5">
								<button className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
									Approve
								</button>
								<button className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
									Decline
								</button>
							</div>
							<div className="mt-5">
								<input
									type="text"
									placeholder="Reason"
									className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								/>
							</div>
						</div>
						<div className="w-1/3">
							<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
								User Details
							</h3>
							<div className="rounded-[8px] border border-[#E5E7EB] px-6 py-10 mt-4">
								<div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											First Name
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Ajayi
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Last Name
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Oluwadarasimi
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Date of Birth
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											10/11/2023
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Gender
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											M
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="tier-two">
					<div className="flex flex-row gap-x-10">
						<div className="w-1/3">
							<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
								National Identification Number (NIN Slip)
							</h3>
							<div className="relative inline-block">
								<Image
									src={nin}
									alt="nin"
									loading="eager"
									className="my-4 w-full cursor-pointer"
								/>
								<button
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
									onClick={() => handleImageClick(nin)}
								>
									View
								</button>
							</div>
							<div className="flex flex-row gap-10">
								<div className="w-2/3">
									<div className="border border-[#F3F4F6] p-[18px] rounded-[2px]">
										<h3>221657768903</h3>
									</div>
								</div>
								<div className="w-1/3">
									<button className="border border-[#16A34A] rounded-[2px] text-[#16A34A] font-[500] leading-[20px] text-[12px] p-5 w-full flex items-center justify-center">
										<Icon
											icon="mdi:tick-circle-outline"
											className="text-[#16A34A] me-2"
										/>
										<span>Approved</span>
									</button>
								</div>
							</div>
							<div className="mt-9 flex flex-row gap-x-5">
								<button className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
									Approve
								</button>
								<button className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
									Decline
								</button>
							</div>
							<div className="mt-5">
								<input
									type="text"
									placeholder="Reason"
									className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								/>
							</div>
						</div>
						<div className="w-1/3">
							<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
								User Details
							</h3>
							<div className="rounded-[8px] border border-[#E5E7EB] px-6 py-10 mt-4">
								<div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											First Name
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Ajayi
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Last Name
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Oluwadarasimi
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Date of Birth
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											10/11/2023
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Gender
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											M
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="tier-three">
					<div className="flex flex-row gap-x-10">
						<div className="w-1/3">
							<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
								International Passport
							</h3>
							<div className="relative inline-block">
								<Image
									src={nin}
									alt="nin"
									loading="eager"
									className="my-4 w-full cursor-pointer"
								/>
								<button
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
									onClick={() => handleImageClick(nin)}
								>
									View
								</button>
							</div>
							<div className="flex flex-row gap-10">
								<div className="w-2/3">
									<div className="border border-[#F3F4F6] p-[18px] rounded-[2px]">
										<h3>221657768903</h3>
									</div>
								</div>
								<div className="w-1/3">
									<button className="border border-[#16A34A] rounded-[2px] text-[#16A34A] font-[500] leading-[20px] text-[12px] p-5 w-full flex items-center justify-center">
										<Icon
											icon="mdi:tick-circle-outline"
											className="text-[#16A34A] me-2"
										/>
										<span>Approved</span>
									</button>
								</div>
							</div>
							<div className="mt-6 flex flex-wrap">
								<div className="w-1/2 pr-2">
									<label
										htmlFor="date"
										className="block mb-2 text-[12px] font-[500] text-[#000]"
									>
										Address
									</label>
									<input
										type="text"
										placeholder="1, Adegunle close, off Idiora road, Ikeja, Lagos"
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
								<div className="w-1/2 pl-2">
									<label
										htmlFor="last-name"
										className="block mb-2 text-[12px] font-[500] text-[#000]"
									>
										State
									</label>
									<input
										type="text"
										placeholder="Lagos State"
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
							</div>
							<div className="mt-6 flex flex-wrap">
								<div className="w-1/2 pr-2">
									<label
										htmlFor="date"
										className="block mb-2 text-[12px] font-[500] text-[#000]"
									>
										LGA
									</label>
									<input
										type="text"
										placeholder="Alimosho"
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
								<div className="w-1/2 pl-2">
									<label
										htmlFor="last-name"
										className="block mb-2 text-[12px] font-[500] text-[#000]"
									>
										Nearest Landmark
									</label>
									<input
										type="text"
										placeholder="Eden garden, behind white house"
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
							</div>
							<div className="mt-9 flex flex-row gap-x-5">
								<button className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
									Approve
								</button>
								<button className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
									Decline
								</button>
							</div>
						</div>
						<div className="w-1/3">
							<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
								User Details
							</h3>
							<div className="rounded-[8px] border border-[#E5E7EB] px-6 py-10 mt-4">
								<div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											First Name
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Ajayi
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Last Name
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Oluwadarasimi
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Date of Birth
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											10/11/2023
										</h2>
									</div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
											Gender
										</h2>
										<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											M
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
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
		</div>
	);
}
