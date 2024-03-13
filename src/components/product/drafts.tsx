"use client";
import React from "react";
import NavBar from "../navbar";
import Link from "next/link";
// import arrowleft from "../../assets/arrow-left-icon.svg";
import Image from "next/image";
// import Plaintable from "../table/plaintable";
// import { productdraftData, productDraftCol } from "@/dummy";

export default function Drafts() {
	return (
		<section className="min-h-screen">
			<NavBar>
				<div>
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[500]">
						Member
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:p-8 bg-[#FAFAFA] min-h-screen pb-[25px]">
				<div className="bg-white rounded-[16px] min-h-screen">
					<div className="flex items-center border-b-[2px] border-b-[#F3F4F6] p-10">
						<Link href={"/dashboard/product"}>
							<div className="flex items-center">
								{/* <Image
									src={arrowleft}
									width={10}
									height={10}
									alt="arrow left"
								/> */}
								<h3 className="text-[16px] text-[#21003D] leading-[30px] font-[500] ml-2">
									Edit Draft
								</h3>
							</div>
						</Link>
					</div>

					<div className="px-4 lg:p-8 bg-white mb-4 h-full">
						{/* <Plaintable
							data={productdraftData}
							columns={productDraftCol}
						/> */}
					</div>
				</div>
			</main>
		</section>
	);
}
