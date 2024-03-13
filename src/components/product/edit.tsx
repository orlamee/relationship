import React from "react";
import NavBar from "../navbar";
import Image from "next/image";
import Link from "next/link";
import arrowleft from "../../assets/arrow-left-icon.svg";

export default function EditDraft() {
	return (
		<section>
			<NavBar>
				<div>
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[500]">
						Product
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:p-9 bg-[#FAFAFA] h-full">
				<div className="bg-[#FFFFFF] rounded-[16px]">
					<Link href={"/dashboard/product"}>
						<div className="flex items-center border-b-[2px] border-b-[#F3F4F6] p-10">
							<Image
								src={arrowleft}
								width={10}
								height={10}
								alt="arrow left"
							/>
							<h3 className="text-[16px] text-[#21003D] leading-[30px] font-[500] ml-2">
								Edit Plan
							</h3>
						</div>
					</Link>
					<div className="px-4 lg:p-8 bg-white">
						<div className="bg-[#FAFAFA] rounded-[16px] py-3 mt-5">
							<div className="w-3/4  mx-auto bg-white rounded-[10px] my-7 p-10 ">
								<div className="mb-8 gap-6 grid grid-cols-2">
									<div className="">
										<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-2">
											Name
										</h1>
										<input
											type="text"
											className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
											placeholder="Enter Plan Name "
										/>
									</div>
									<div />
									<div className="col-span-2">
										<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-2">
											Enter Target
										</h1>
										<div className="grid grid-cols-2 gap-7">
											<input
												type="text"
												className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
												placeholder="From "
											/>
											<input
												type="text"
												className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
												placeholder="to "
											/>
										</div>
									</div>
									<div className="">
										<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-2">
											Savings Interest
										</h1>
										<input
											type="text"
											className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
											placeholder="20% "
										/>
									</div>
									<div />
								</div>
								<div className="mb-8">
									<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-5">
										Account
									</h1>
									<div className="flex items-center gap-7">
										<div className="flex items-center gap-3">
											<label>Yes</label>
											<input
												type="radio"
												name="account"
												id="account"
												className="accent-[#21003D]"
											/>
										</div>
										<div className="flex items-center gap-3">
											<label>No</label>
											<input
												type="radio"
												name="account"
												id="account"
												className="accent-[#21003D]"
											/>
										</div>
									</div>
								</div>
								<div className="mb-8">
									<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-5">
										SMS
									</h1>
									<div className="flex items-center gap-7">
										<div className="flex items-center gap-3">
											<label>Yes</label>
											<input
												type="radio"
												name="sms"
												id="sms"
												className="accent-[#21003D]"
											/>
										</div>
										<div className="flex items-center gap-3">
											<label>No</label>
											<input
												type="radio"
												name="sms"
												id="sms"
												className="accent-[#21003D]"
											/>
										</div>
									</div>
								</div>
								<div className="mb-8">
									<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-5">
										Relationship Officer
									</h1>
									<div className="flex items-center gap-7">
										<div className="flex items-center gap-3">
											<label>Yes</label>
											<input
												type="radio"
												name="ro"
												id="ro"
												className="accent-[#21003D]"
											/>
										</div>
										<div className="flex items-center gap-3">
											<label>No</label>
											<input
												type="radio"
												name="ro"
												id="ro"
												className="accent-[#21003D]"
											/>
										</div>
									</div>
								</div>
								<div className="mb-8 gap-6 grid grid-cols-2">
									<div className="">
										<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-2">
											ATM
										</h1>
										<input
											type="text"
											className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
											placeholder="1,500 "
										/>
									</div>
									<div />
									<div className="">
										<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-2">
											Loan (Frequently)
										</h1>
										<input
											type="text"
											className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
											placeholder="2 "
										/>
									</div>
									<div />
									<div className="col-span-2">
										<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-2">
											Loan Amount
										</h1>
										<div className="grid grid-cols-2 gap-7">
											<input
												type="text"
												className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
												placeholder="From "
											/>
											<input
												type="text"
												className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
												placeholder="to "
											/>
										</div>
									</div>
									<div className="">
										<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-2">
											Loan Interest
										</h1>
										<input
											type="text"
											className="outline-none w-full border-[1px] border-[#F0F0F0] rounded-[4px] p-4 text-[12px] font-[500] placeholder:text-[#9CA3AF]"
											placeholder="2"
										/>
									</div>
									<div />
								</div>
								<div className="mb-8">
									<h1 className="text-[12px] font-[600] text-[#21003D] leading-[22px] mb-5">
										Mobile
									</h1>
									<div className="flex items-center gap-7">
										<div className="flex items-center gap-3">
											<label>Yes</label>
											<input
												type="radio"
												name="mb"
												id="mb"
												className="accent-[#21003D]"
											/>
										</div>
										<div className="flex items-center gap-3">
											<label>No</label>
											<input
												type="radio"
												name="mb"
												id="mb"
												className="accent-[#21003D]"
											/>
										</div>
									</div>
								</div>
								<div className="flex items-center justify-end mt-5 gap-9">
									<button className="border-[1.5px] bg-white text-[#240552] border-[#240552] rounded-[2px] text-[12px] font-[500] px-5 py-3">
										Save as Draft
									</button>
									<button className=" bg-[#240552] text-white rounded-[2px] text-[12px] font-[500] px-5 py-3">
										Create Plan
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}
