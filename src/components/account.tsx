"use client";
import NavBar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tablines";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";
import FadeLoader from "react-spinners/FadeLoader";
import { parseDateTime } from "@/lib/parsedatetime";
import { useRouter } from "next/navigation";

type Props = {
	username: string;
	token: string;
	profile_photo: string;
};

export default function Account({
	username,
	token,
	profile_photo,
}: Props) {
	const { data, isLoading, error } = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/rel_officer/get_relationship_officer`,
		token
	);
	console.log({data})

	
  const router = useRouter()

	const {
		data: Target,
		isLoading: loadingTarget,
		error: errorTarget,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/rel_officer/get_target`,
		token
	);

type branch = {
	lga:string

}
	const [branches, setBranches] = useState<branch[]>([])
	useEffect(() => {
		setBranches(data?.data?.branch_details)

		
	}, [data])
	console.log({branches})
	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Account
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				<div className="bg-[#FFFFFF] rounded-[10px] mb-9">
					<div className="p-7">
						<span
						
							className="text-[#21003D] font-[500] leading-[30px] text-[16px] flex items-center cursor-pointer"
              onClick={()=> router.back()}
						>
							<Icon icon="teenyicons:left-outline" className="me-2" />
							<span>Back</span>
						</span>
					</div> 
					<hr />
					<div className="p-7">
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
								<Tabs defaultValue="account">
									<TabsList>
										<TabsTrigger value="account">
											Account Info
										</TabsTrigger>
										<TabsTrigger value="target">Target</TabsTrigger>
									</TabsList>
									<TabsContent value="account">
										<div className="border border-[#F3F4F6] rounded-[10px] p-7">
											<div className="flex flex-row justify-center mb-9">
												<div className="text-center">
													<div className="relative w-[90px] h-[90px]">
														<Image
															src={data?.data.profile_photo}
															alt="acc"
															className="mx-auto rounded-full"
															fill
														/>
													</div>

													<h5 className="text-[12px] text-[#21003D] leading-[16px] font-[500] mt-4 capitalize">
														{data?.data?.first_name}{" "}
														{data?.data?.last_name}
													</h5>
													<p className="text-[#8807F7] bg-[#FAF5FF] p-2 rounded-[4px] text-[11px] mt-3 leading-[10px]">
														Customer Care
													</p>
												</div>
											</div>
											<div className="flex items-center justify-between mb-5">
												<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
													Branch
												</h2>
												<div className="flex items-center gap-3">
													{branches?.map((b, i)=> (
														<h5 className="text-[#EAB308] text-[12px] leading-[16px] font-[500]" key={i}>
														{b.lga}
																								
														</h5>
													))}
												</div>
												
											
											</div>
											<hr className="text-[#F9FAFB]" />
											<div className="flex items-center justify-between my-5">
												<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
													Company Email
												</h2>
												<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
													{data?.data?.email ||
														"hello@ardilla.africa"}
												</h5>
											</div>
											<hr className="text-[#F9FAFB]" />
											<div className="flex items-center justify-between my-5">
												<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
													Phone Number
												</h2>
												<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
													{data?.data?.phone}
												</h5>
											</div>
											<hr className="text-[#F9FAFB]" />
											<div className="flex items-center justify-between my-5">
												<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
													Joined Since
												</h2>
												<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
													{parseDateTime(
														data?.data?.date_created,
														"do MMM, yyyy"
													)}
												</h5>
											</div>
											<hr className="text-[#F9FAFB]" />
											{/* <div className="flex items-center justify-between my-5">
												<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
													Generated ID
												</h2>
												<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
													{data?.data?.field_officer_id}
												</h5>
											</div> */}
											<hr className="text-[#F9FAFB]" />
											<div className="flex items-center justify-between my-5">
												<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
													Guarantor 1
												</h2>
												<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
													{data?.data?.first_guarantor_name}
												</h5>
											</div>
											<hr className="text-[#F9FAFB]" />
											<div className="flex items-center justify-between my-5">
												<h2 className="text-[#9CA3AF] text-[12px] leading-[16px] font-[500]">
													Guarantor 2
												</h2>
												<h5 className="text-[#000] text-[12px] leading-[16px] font-[500]">
													{data?.data?.second_guarantor_name}
												</h5>
											</div>
										</div>
									</TabsContent>
									<TabsContent value="target">
										<div className="border-[1px] border-[#F3F4F6] pt-[55px] pb-[35px] rounded-[10px]">
											<div className="px-8">
												<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-4">
													<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
														Loan
													</h1>
													<div className="border-[1px] rounded-[6px] px-4 py-3 flex items-center w-[230px]">
														<span className="mr-2 text-[12px] ">
															₦
														</span>
														<input
															type="text"
															className="outline-none h-full text-[12px] font-[500] w-full bg-white"
															defaultValue={Target?.data?.loan || 0}
															disabled
														/>
													</div>
												</div>
												<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-4">
													<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
														Account Opening
													</h1>
													<div className="border-[1px] rounded-[6px] px-4 py-3 flex items-center w-[230px]">
														<input
															type="text"
															className="outline-none h-full text-[12px] font-[500] w-full bg-white"
															defaultValue={
																Target?.data?.account_opening || 0
															}
															disabled
														/>
													</div>
												</div>
												<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-4">
													<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
														Savings
													</h1>
													<div className="border-[1px] rounded-[6px] px-4 py-3 flex items-center w-[230px]">
														<span className="mr-2 text-[12px]">
															₦
														</span>
														<input
															type="text"
															className="outline-none h-full text-[12px] font-[500] w-full bg-white"
															defaultValue={
																Target?.data?.savings || 0
															}
															disabled
														/>
													</div>
												</div>
												<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-4">
													<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
														Adital
													</h1>
													<div className="border-[1px] rounded-[6px] px-4 py-3 flex items-center w-[230px]">
														<input
															type="text"
															className="outline-none h-full text-[12px] font-[500] bg-white w-full"
															defaultValue={Target?.data?.adital || 0}
															disabled
														/>
													</div>
												</div>
												<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-4">
													<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
														Mobile
													</h1>
													<div className="border-[1px] rounded-[6px] px-4 py-3 flex items-center w-[230px]">
														<input
															type="text"
															className="outline-none h-full text-[12px] font-[500] w-full bg-white"
															defaultValue={Target?.data?.mobile || 0}
															disabled
														/>
													</div>
												</div>
												<div className="flex justify-between items-center border-b-[1px] border-b-[#F9FAFB] py-4">
													<h1 className="text-[12px] font-[500] leading-[16px] text-[#9CA3AF]">
														ATM Card
													</h1>
													<div className="border-[1px] rounded-[6px] px-4 py-3 flex items-center w-[230px]">
														<input
															type="text"
															className="outline-none h-full text-[12px] font-[500] w-full bg-white"
															defaultValue={
																Target?.data?.atm_card || 0
															}
															disabled
														/>
													</div>
												</div>
												{/* <div className="mt-7">
											<button className="text-[12px] font-[500] bg-[#240552] text-white px-6 py-3 block ml-auto rounded-[2px]">
												Set Target
											</button>
										</div> */}
											</div>
										</div>
									</TabsContent>
								</Tabs>
							)}
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}
