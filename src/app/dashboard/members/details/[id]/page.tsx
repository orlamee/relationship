"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import acc from "../../../../../assets/acc.svg";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tablines";

export default function MemberDetails() {
	return (
		<section>
			<NavBar>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Member
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				<div className="bg-[#FFFFFF] rounded-[10px] mb-9">
					<div className="p-7">
						<Link
							href={"/dashboard/members"}
							className="text-[#21003D] font-[500] leading-[30px] text-[16px] flex items-center"
						>
							<Icon icon="teenyicons:left-outline" className="me-2" />
							<span>Details</span>
						</Link>
					</div>
					<hr />
					<div className="p-7">
						<Tabs defaultValue="account">
							<TabsList>
								<TabsTrigger value="account">Account Info</TabsTrigger>
								<TabsTrigger value="target">Target</TabsTrigger>
							</TabsList>
							<TabsContent value="account">
								<div className="border border-[#F3F4F6] rounded-[10px] p-7">
									<div className="flex flex-row justify-center mb-9">
										<div className="text-center">
											<Image
												src={acc}
												alt="acc"
												className="mx-auto"
											/>
											<h5 className="text-[12px] text-[#21003D] leading-[16px] font-[500] mt-4">
												Adebowale Franca
											</h5>
											<p className="text-[#8807F7] bg-[#FAF5FF] p-2 rounded-[4px] text-[11px] mt-3 leading-[10px]">
												Field Officer
											</p>
										</div>
									</div>
									<div className="flex items-center justify-between mb-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Branch
										</h2>
										<h5 className="text-[#EAB308] text-[12px] leading-[16px] font-[500]">
											Oshodi
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Company Email
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											hello@ardilla.africa
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Phone Number
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											08930304033
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Joined Since
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											10/12/2023
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Generated ID
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											4567
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Guarantor 1
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											John Doe
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Guarantor 2
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											John Doe
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Loan
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											200,000
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Account Opening
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											4567
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Savings
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											200,000
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Adital
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											100
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Mobile
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											10
										</h5>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											ATM Card
										</h2>
										<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
											20
										</h5>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="target">
								<div className="border border-[#F3F4F6] rounded-[10px] p-7">
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Loan
										</h2>
										<div className="border border-[#E5E7EB] p-3 rounded-[6px] bg-[#F9FAFB] text-[#6B7280] text-[12px] leading-[10px]">
											200,000
										</div>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Account Opening
										</h2>
										<div className="border border-[#E5E7EB] p-3 rounded-[6px] bg-[#F9FAFB] text-[#6B7280] text-[12px] leading-[10px]">
											200,000
										</div>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Savings
										</h2>
										<div className="border border-[#E5E7EB] p-3 rounded-[6px] bg-[#F9FAFB] text-[#6B7280] text-[12px] leading-[10px]">
											200,000
										</div>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Adital
										</h2>
										<div className="border border-[#E5E7EB] p-3 rounded-[6px] bg-[#F9FAFB] text-[#6B7280] text-[12px] leading-[10px]">
											200,000
										</div>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											Mobile
										</h2>
										<div className="border border-[#E5E7EB] p-3 rounded-[6px] bg-[#F9FAFB] text-[#6B7280] text-[12px] leading-[10px]">
											200,000
										</div>
									</div>
									<hr className="text-[#F9FAFB]" />
									<div className="flex items-center justify-between my-5">
										<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
											ATM Card
										</h2>
										<div className="border border-[#E5E7EB] p-3 rounded-[6px] bg-[#F9FAFB] text-[#6B7280] text-[12px] leading-[10px]">
											200,000
										</div>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</main>
		</section>
	);
}
