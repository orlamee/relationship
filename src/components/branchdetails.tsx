"use client";
import React, { useState } from "react";
import NavBar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import arrowleft from "../assets/arrow-left-icon.svg";
import { Pen, XCircleIcon } from "lucide-react";
import { base_url } from "@/base_url";
import { useFetcher } from "@/lib/useFetcher";
import { parseDateTime } from "@/lib/parsedatetime";
import FadeLoader from "react-spinners/FadeLoader";
// import Modal from "../modal";

type Props = {
	username: string;
	token: string;
	profile_photo: string;
	branchId: string;
};

export default function BranchDetails({
	username,
	token,
	profile_photo,
	branchId,
}: Props) {
	const [modal, setModal] = useState(false);

	const { data, isLoading, error } = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/branch/${branchId}`,
		token
	);

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

			<NavBar username={username} profile_photo={profile_photo}>
				<div>
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[500]">
						Branch
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 pt-[40px] h-[85vh] bg-[#FAFAFA]">
				<div className="bg-[#FFFFFF] rounded-[16px] min-h-full px-2 pb-5">
					<span>
						<Link href={"/dashboard/branch"} className="inline">
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
					</span>

					<div>
						{isLoading ? (
							<div className="w-full flex justify-center mt-10">
								<FadeLoader
									color={"#240552"}
									loading={true}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							</div>
						) : error?.message ? (
							<p className="text-center mt-10">{error.message}</p>
						) : (
							<div className="p-4 lg:p-8 ">
								<div className="border-[1px] border-[#F3F4F6] pt-[55px] pb-[35px] rounded-[10px] mt-6 h-full">
									<div className="px-8">
										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Branch Id
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.branch_id}
											</p>
										</div>
										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Email
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.email}
											</p>
										</div>
                    <div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												State
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.state}
											</p>
										</div>

										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Lga
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.lga}
											</p>
										</div>
										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Address
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.street_address}
											</p>
										</div>
										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Landmark
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.closest_landmark || "-"}
											</p>
										</div>

										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Phone Number
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.phone}
											</p>
										</div>
									

										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Head Branch
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{data?.data?.head_branch === true && "Yes"}
											</p>
										</div>

										<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-5">
											<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
												Date Created
											</h1>
											<p className="text-[12px] font-[500] leading-[16px]">
												{parseDateTime(
													data?.data.date_created,
													"do-MMM-yyyy"
												)}
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
						)}
					</div>
				</div>
			</main>
		</section>
	);
}
