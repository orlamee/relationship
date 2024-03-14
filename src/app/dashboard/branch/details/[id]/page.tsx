"use client";
import React, { useState } from "react";
import NavBar from "../../../../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import arrowleft from "../../../../../assets/arrow-left-icon.svg";
import { Pen, XCircleIcon } from "lucide-react";
// import Modal from "../modal";

export default function BranchDetailsCopmponent() {
	const [modal, setModal] = useState(false);
	// const EditModal = () => (
	// 	<Modal>
	// 		<div className="bg-white rounded-[16px] w-1/2">
	// 			<div className="flex justify-between px-8 py-6 border-b-[1px] border-b-[#F5F5F5] items-center">
	// 				<h1 className="text-[14px] font-[500] leading-[18px]">
	// 					Edit Details
	// 				</h1>
	// 				<XCircleIcon
	// 					className="text-[#9CA3AF] cursor-pointer w-[18px]"
	// 					onClick={() => setModal(false)}
	// 				/>
	// 			</div>
	// 			<div className="p-8 grid grid-cols-1  sm:grid-cols-2 gap-5 ">
	// 				<div>
	// 					<label
	// 						htmlFor="location"
	// 						className="text-[12px] font-[500] text-[#21003D] leading-[22px]"
	// 					>
	// 						Location
	// 					</label>
	// 					<input
	// 						type="text"
	// 						id="location"
	// 						className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-[12px] font-[500] rounded-[4px] mt-2 text-black"
	// 						placeholder="Enter Location"
	// 					/>
	// 				</div>
	// 				<div>
	// 					<label
	// 						htmlFor="branch"
	// 						className="text-[12px] font-[500] text-[#21003D] leading-[22px] mb-[10px]"
	// 					>
	// 						Branch
	// 					</label>
	// 					<input
	// 						type="text"
	// 						id="branch"
	// 						className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-black text-[12px] font-[500] rounded-[4px] mt-2"
	// 						placeholder="Enter Branch"
	// 					/>
	// 				</div>
	// 				<div>
	// 					<label
	// 						htmlFor="group"
	// 						className="text-[12px] font-[500] text-[#21003D] leading-[22px] mb-[10px]"
	// 					>
	// 						Group
	// 					</label>
	// 					<input
	// 						type="text"
	// 						id="group"
	// 						className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-black text-[12px] font-[500] rounded-[4px] mt-2"
	// 						placeholder="Enter Group"
	// 					/>
	// 				</div>
	// 			</div>
	// 			<div className="p-8 pt-0">
	// 				<button className="block ml-auto text-white bg-[#240552] rounded-[4px] px-6 py-3 text-[12px] font-[500]">
	// 					Save Update
	// 				</button>
	// 			</div>
	// 		</div>
	// 	</Modal>
	// );

	return (
		<section className="bg-[#FAFAFA] min-h-screen">
			{/* {modal && <EditModal />} */}

			<NavBar>
				<div>
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[500]">
						Branch
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 pt-[40px] h-[85vh] bg-[#FAFAFA]">
				<div className="bg-[#FFFFFF] rounded-[16px] min-h-full px-2 pb-5">
					<Link href={"/dashboard/branch"}>
						<div className="flex items-center border-b-[2px] border-b-[#F3F4F6] p-8">
							<Image
								src={arrowleft}
								width={10}
								height={10}
								alt="arrow left"
							/>
							<h3 className="text-[16px] text-[#21003D] leading-[30px] font-[500] ml-2">
								Details
							</h3>
						</div>
					</Link>
					<div className="p-4 lg:p-8 ">
						<div className="border-[1px] border-[#F3F4F6] pt-[55px] pb-[35px] rounded-[10px] mt-6 h-full">
							<div className="px-8">
								<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
									<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
										Location
									</h1>
									<p className="text-[12px] font-[500] leading-[16px]">
										10/12/2023
									</p>
								</div>

								<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
									<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
										Group
									</h1>
									<p className="text-[12px] font-[500] leading-[16px]">
										Adetola Victor
									</p>
								</div>
								<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
									<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
										Branch
									</h1>
									<p className="text-[12px] font-[500] leading-[16px]">
										₦200,000
									</p>
								</div>
								{/* <div className="flex justify-center my-10">
									<span
										className=" cursor-pointer  rounded-[5px]  text-[16px] font-[500] gap-2 text-white bg-[#240552] h-[33px] px-4 py-2 flex items-center justify-center"
										onClick={() => setModal(true)}
									>
										<Pen className="w-[12px]" />
										Edit
									</span>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}
