"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import arrowleft from "../assets/arrow-left-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Code2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { planRecents } from "../dummy";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Planrecents from "./tables/planrecents";
import { base_url } from "@/base_url";
import { useFetcher } from "@/lib/useFetcher";
import FadeLoader from "react-spinners/FadeLoader";
import { plan } from "./dummydata";
import { parseDateTime } from "@/lib/parsedatetime";
import { differenceInDays, format } from "date-fns";

type props = {
	username: string;
	profile_photo: string;
	token: string;
	userId: string;
};

export default function SinglePlan({
	username,
	profile_photo,
	token,
	userId,
}: props) {
	const {
		data,
		isLoading: isLoading,
		error: error,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/savings/single_vault_lite_user/${userId}`,
		token
	);

	const [plans, setPlans] = useState<plan[]>();
	const [selectedPlan, setSelectedPlan] = useState<number | undefined>();
	const [selectedPlanName, setSelectedPlanName] = useState<
		string | undefined
	>();

	useEffect(() => {
		setPlans(
			data?.data?.user.ardilla_retail_user_saving_vault_lite_wallet
				?.vault_plan
		);
		setSelectedPlan(
			data?.data?.user.ardilla_retail_user_saving_vault_lite_wallet
				?.vault_plan[0]?.id
		);
	}, [data]);
	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div>
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Savings
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[30px] mb-[30px] h-full">
				<div className="bg-[#fff] rounded-t-[16px]">
					<Link href={"/dashboard/savings"}>
						<div className="inline-flex items-center gap-2 p-10 border-b-[1px] border-b-[#F3F4F6]">
							<Image
								src={arrowleft}
								alt="arrow left"
								className="w-[20px] h-[20px]"
							/>
							<h1 className="text-[17px] font-[500] leading-[30px] text-[#21003D]">
								Plan Details
							</h1>
						</div>
					</Link>
				</div>
				<div className="">
					{isLoading ? (
						<div className="w-full flex justify-center mt-5">
							<FadeLoader
								color={"#240552"}
								loading={true}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						</div>
					) : error?.message ? (
						<p className="text-center mt-5">{error.message}</p>
					) : (
						<div>
							<div className="bg-white rounded-t-[16px] h-full pb-10">
								<div className="bg-[#FFFFFF] hidden">
									<Link href={"/dashboard/savings"}>
										<div className="inline-flex items-center gap-2 p-10 border-b-[1px] border-b-[#F3F4F6]">
											<Image
												src={arrowleft}
												alt="arrow left"
												className="w-[20px] h-[20px]"
											/>
											<h1 className="text-[17px] font-[500] leading-[30px] text-[#21003D]">
												Plan Details
											</h1>
										</div>
									</Link>
								</div>
								<div className="px-10 pt-10">
									<div className="md:flex justify-between items-center gap-5  md:gap-7 lg:gap-12">
										<div className="flex items-center md:basis-1/2 justify-between">
											<div className="flex items-center">
												<div className="relative mr-3 w-[35px] h-[35px]">
													<Image
														src={data?.data?.user?.profile_photo}
														alt="user"
														fill
														className="mr-3 rounded-full"
													/>
												</div>

												<div>
													<h2 className="text-[14px] font-[600] text-[#21003D] leading-[16px] mb-1 capitalize">
														{data?.data?.user?.last_name}{" "}
														{data?.data?.user?.first_name}{" "}
														{data?.data?.user?.middle_name}
													</h2>
													<h3 className="text-[#9CA3AF] text-[13px] font-[500] leading-[16px]">
														{`<${data?.data?.user?.kodhex}/>`}
													</h3>
												</div>
											</div>
											<div>
												<h2 className="mb-6 text-[13px] text-black font-[600]">
													Branch:
												</h2>
												<h2 className="text-[13px] text-black font-[600]">
													{data?.data?.branch?.lga}
												</h2>
											</div>
										</div>

										<div className="flex gap-5 justify-between items-center md:basis-1/2">
											<div>
												<h2 className="mb-6 text-[13px] text-black font-[600]">
													Customer Care:
												</h2>
												<h2 className="text-[13px] text-black font-[600] capitalize">
													{data?.data?.customer_care?.first_name}{" "}
													{data?.data?.customer_care?.last_name}
												</h2>
											</div>
											<div>
												<h2 className="mb-6 text-[13px] text-black font-[600]">
													Field Officer:
												</h2>
												<h2 className="text-[13px] text-black font-[600] capitalize">
													{data?.data?.field_officer?.first_name}{" "}
													{data?.data?.field_officer?.last_name}
												</h2>
											</div>
											<div className="flex items-center space-x-3">
												<button className="outline-none rounded-[8px] border-[#E5E7EB] border-[1px] flex justify-center px-6 py-2.5 gap-2 items-center">
													<span>
														<svg
															width="20"
															height="20"
															viewBox="0 0 17 17"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="8.28708"
																cy="8.44333"
																r="8.20114"
																fill="#3B82F6"
															/>
															<g clipPath="url(#clip0_5744_58562)">
																<path
																	d="M8.15988 10.2935L8.16112 10.294C8.17893 10.3009 8.20269 10.3059 8.23482 10.3059C8.26668 10.3059 8.29696 10.3009 8.32643 10.2911L8.32697 10.2909C8.35129 10.2828 8.36617 10.2726 8.37622 10.2626L8.38252 10.2563L8.38267 10.2565C8.63 10.0327 8.82927 9.75279 8.97932 9.41356L8.97933 9.41352C9.12935 9.0746 9.20291 8.73771 9.20291 8.40156C9.20291 8.0654 9.12935 7.72837 8.97932 7.38918C8.83008 7.05205 8.62894 6.7733 8.37673 6.54987C8.35 6.52784 8.32394 6.51155 8.29861 6.49982L8.37354 6.33799M8.15988 10.2935L7.49032 7.38918C7.63977 7.05156 7.83805 6.77265 8.08405 6.5493C8.10859 6.52924 8.13441 6.51363 8.16176 6.5019C8.18304 6.49279 8.20678 6.48766 8.23482 6.48766C8.263 6.48766 8.2834 6.49282 8.29899 6.5L8.37354 6.33799M8.15988 10.2935C8.13938 10.2857 8.11701 10.273 8.09285 10.2532C7.84068 10.0298 7.63955 9.75094 7.49032 9.41356L7.4903 9.41352M8.15988 10.2935L7.4903 9.41352M8.37354 6.33799C8.41481 6.3571 8.45455 6.38257 8.49276 6.41442M8.37354 6.33799C8.33201 6.31888 8.28577 6.30933 8.23482 6.30933C8.18387 6.30933 8.1361 6.31888 8.09151 6.33799L8.49276 6.41442M8.49276 6.41442C8.76663 6.65644 8.98318 6.95732 9.14241 7.31704C9.30163 7.67702 9.38125 8.03853 9.38125 8.40156L8.49276 6.41442ZM7.4903 9.41352C7.34029 9.0746 7.26672 8.73771 7.26672 8.40156M7.4903 9.41352L7.26672 8.40156M7.26672 8.40156C7.26672 8.06542 7.34028 7.7284 7.4903 7.38922L7.26672 8.40156ZM9.29636 10.8538L9.29631 10.8538C9.24916 10.8445 9.20245 10.8339 9.1562 10.8217C9.42197 10.5734 9.63674 10.2458 9.80375 9.84601C10.0203 9.32764 10.1328 8.84534 10.1328 8.40156C10.1328 7.95778 10.0203 7.47548 9.80375 6.95711C9.63674 6.55732 9.42197 6.22971 9.1562 5.98138C9.20245 5.96925 9.24916 5.95857 9.29631 5.94934L9.29636 5.94933C9.44689 5.91979 9.60249 5.9049 9.76339 5.9049C10.4621 5.9049 11.0485 6.14615 11.5335 6.63109C12.0187 7.11629 12.2601 7.70289 12.2601 8.40156C12.2601 9.10023 12.0187 9.68668 11.5335 10.1716L11.5334 10.1717C11.0485 10.6569 10.4621 10.8982 9.76339 10.8982C9.60249 10.8982 9.44689 10.8833 9.29636 10.8538ZM4.93619 10.1717L4.93613 10.1716C4.45095 9.68668 4.20958 9.10023 4.20958 8.40156C4.20958 7.70289 4.45095 7.11629 4.93616 6.63109C5.42109 6.14615 6.00755 5.9049 6.70625 5.9049C6.86714 5.9049 7.02275 5.91979 7.17328 5.94933L7.17333 5.94934C7.22048 5.95857 7.26718 5.96925 7.31344 5.98138C7.04767 6.22971 6.83289 6.55732 6.66589 6.95711C6.44936 7.47548 6.33684 7.95778 6.33684 8.40156C6.33684 8.84534 6.44936 9.32764 6.66589 9.84601C6.83289 10.2458 7.04767 10.5734 7.31344 10.8217C7.26718 10.8339 7.22048 10.8445 7.17333 10.8538L7.17328 10.8538C7.02275 10.8833 6.86714 10.8982 6.70625 10.8982C6.00758 10.8982 5.42113 10.6569 4.93619 10.1717Z"
																	stroke="black"
																	strokeWidth="0.356666"
																/>
															</g>
															<defs>
																<clipPath id="clip0_5744_58562">
																	<rect
																		width="9.17142"
																		height="9.17142"
																		fill="white"
																		transform="translate(3.64844 3.80469)"
																	/>
																</clipPath>
															</defs>
														</svg>
													</span>
													Vault Lite
												</button>
												<div className="">
													<DropdownMenu modal={false}>
														<DropdownMenuTrigger asChild>
															<button className="outline-none border-[1px] border-[#E5E7EB] px-5 py-2 flex justify-center items-center rounded-[4px] min-w-[100px]">
																{selectedPlanName ||
																	plans?.[0].name}
																<ChevronDown className="text-[#8807F7] w-[13px] ml-2" />
															</button>
														</DropdownMenuTrigger>
														<DropdownMenuContent className="w-full z-[500] bg-white">
															{plans?.map((p) => (
																<DropdownMenuItem key={p?.id}>
																	<div
																		className="flex items-center py-0.5 hover:bg-gray-100 w-full cursor-pointer"
																		onClick={() => {
																			setSelectedPlan(p?.id);
																			setSelectedPlanName(
																				p?.name
																			);
																		}}
																	>
																		<span className="text-[12px] font-[500] text-[#21003D]">
																			{p?.name}
																		</span>
																	</div>
																</DropdownMenuItem>
															))}
														</DropdownMenuContent>
													</DropdownMenu>
												</div>
											</div>
										</div>
									</div>

									<div className="gap-5 md:flex md:gap-7 lg:gap-12 mt-10">
										<div className="rounded-[8px] bg-[#FAFAFA] p-7 w-full md:basis-1/2">
											{plans?.map((p) => (
												<div key={p.id}>
													{selectedPlan &&
														selectedPlan === p.id && (
															<div className="">
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Total Savings Balance
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		₦
																		{Number(
																			p.vault_plan_book_balance
																		).toFixed(2)}
																	</p>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Plan Name
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px] text-[#8807F7]">
																		{p.name}
																	</p>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Target Amount
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		₦ {p?.target_amount}
																	</p>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Frequency
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px] capitalize">
																		{p?.frequency}
																	</p>
																</div>

																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Dividends Rate
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		{p.dividend_percentage}%{" "}
																		per annum
																	</p>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Dividends Accrued
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		₦
																		{Number(
																			p.dividend_total
																		).toFixed(2)}
																	</p>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Dividends Upfront
																	</p>
																	<div className="flex items-center gap-2">
																		<Switch
																			defaultChecked={
																				p.dividends_upfront
																			}
																		/>
																		<p className="text-[13px] font-[600] leading-[20px]">
																			{p.dividends_upfront
																				? "ON"
																				: "OFF"}
																		</p>
																	</div>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Days Left
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		{differenceInDays(
																			p.end_date,
																			Date.now()
																		)}{" "}
																		{differenceInDays(
																			p.end_date,
																			Date.now()
																		) > 2
																			? "Days"
																			: "Day"}{" "}
																	</p>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Start Date
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		{parseDateTime(
																			p.start_date,
																			"do MMM, yyyy"
																		)}
																	</p>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Payback Date
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		{parseDateTime(
																			p.end_date,
																			"do MMM, yyyy"
																		)}
																	</p>
																</div>
																<div className="hidden justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF] ">
																		Savings Rank
																	</p>
																	<p className="text-[13px] font-[600] leading-[20px]">
																		{/* 50 */}
																	</p>
																</div>

																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Auto save
																	</p>
																	<div className="flex items-center gap-2">
																		<Switch
																			defaultChecked={
																				p.auto_deposit
																			}
																		/>
																		<p className="text-[13px] font-[600] leading-[20px]">
																			{p.auto_deposit
																				? "ON"
																				: "OFF"}
																		</p>
																	</div>
																</div>
																<div className="flex justify-between items-center py-2 mb-3">
																	<p className="text-[13px] font-[500] leading-[20px] text-[#9CA3AF]">
																		Payment Method
																	</p>
																	<div className="flex items-center">
																		<span className="flex items-center justify-center rounded-full border-[1px] border-[#240552] w-[30px] h-[30px] mr-2">
																			<Code2 className="text-[#240552] w-[16px]" />
																		</span>
																		<p className="text-[13px] font-[600] leading-[20px]">
																			{p.payment_method}
																		</p>
																	</div>
																</div>
															</div>
														)}
												</div>
											))}
										</div>

										<div className="border-[1px] border-[#E5E7EB] rounded-[8px] md:basis-1/2 p-7">
											<h1 className="text-[14px] font-[500] text-[#9CA3AF] leading-[30px] mb-4">
												Recent Activities
											</h1>
											<Planrecents planRecents={planRecents} />
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</main>
		</section>
	);
}
