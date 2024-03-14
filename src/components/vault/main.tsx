"use client";
import NavBar from "@/components/navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Image from "next/image";
import vector from "../../assets/static/green.svg";
import orange from "../../assets/static/orange.svg";
import divider from "../../assets/static/divider.svg";
import Link from "next/link";
import Modal from "@/components/modal";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "lucide-react";
import banner from "../../assets/static/save-banner.svg";
import withdraw from "../../assets/static/withdraw.png";

export default function Main() {
	const [isAmountVisible, setIsAmountVisible] = useState(false);
	const toggleAmountVisibility = () => {
		setIsAmountVisible(!isAmountVisible);
	};

	const [dropdown, setShowDropDown] = useState(false);

	const [isModalHistoryOpen, setIsModalHistoryOpen] = useState(false);

	function openModalHistory() {
		setIsModalHistoryOpen(true);
	}

	function closeModalHistory() {
		setIsModalHistoryOpen(false);
	}

	return (
		<section>
			<NavBar>
				<div>
					<h1 className="text-[24px] text-[#240552] leading-[33px] font-[700] mb-1">
						Savings
					</h1>
					<p className="text-gray400 text-[12px] font-[500]">
						Set up your account
					</p>
				</div>
			</NavBar>
			<main className="p-4 lg:p-8 bg-[#F9FAFB]">
				<div className="bg-white border border-[#EEEFF2] p-9 rounded-tl-[16px] rounded-tr-[16px] rounded-b-none mb-9">
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-9">
						<div className="flex items-center justify-start">
							<div className="w-7/12">
								<div className="flex flex-row mb-4">
									<span className="text-[#240552] font-[600] text-[14px] leading-[16px] me-2">
										Your Dividends
									</span>
									<button
										onClick={toggleAmountVisibility}
										className="text-[#240552]"
									>
										{isAmountVisible ? (
											<Icon
												icon="pajamas:eye"
												className="text-[#240552]"
											/>
										) : (
											<Icon
												icon="pajamas:eye-slash"
												className="text-[#240552]"
											/>
										)}
									</button>
								</div>
								{isAmountVisible ? (
									<h2 className="text-[#240552] font-[700] text-[40px] leading-[48px]">
										₦ 0.00
									</h2>
								) : (
									<h2 className="text-[#240552] font-[400] text-[40px] leading-[48px]">
										*********
									</h2>
								)}
								<div className="flex flex-row mt-3">
									<div className="flex items-center">
										<h3 className="text-[#000] font-[500] text-[13px] leading-[16px] mt-[3px]">
											Dividends
										</h3>
										<Image
											src={vector}
											alt="vector"
											className="mx-3"
										/>
									</div>
									<Image
										src={divider}
										alt="divide"
										className="mx-5 w-[3px] mt-[5px]"
									/>
									<div className="flex items-center">
										<h3 className="text-[#000] font-[500] text-[13px] leading-[16px] mt-[3px]">
											Withdrawal
										</h3>
										<Image
											src={orange}
											alt="vector"
											className="mx-3"
										/>
									</div>
								</div>
							</div>
							<div className="relative w-1/3">
								<div
									className="cursor-pointer flex-none"
									onClick={() => setShowDropDown(!dropdown)}
								>
									<Icon
										icon="entypo:dots-three-vertical"
										className="text-[#240552]"
									/>
								</div>
								{dropdown && (
									<div className="absolute py-5 shadow z-10 px-5 top-[40px] w-[187px] right-0 lg:right-[40px] rounded-[6px] bg-white border-[1px] border-[#E5E7EB] more-shadow">
										<Link
											href={"/dashboard/savings/settings"}
											className="mb-2"
										>
											<div className="flex items-center mb-4">
												<span className="mr-2">
													<svg
														width="17"
														height="17"
														viewBox="0 0 17 17"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M6.26562 1.92188V3.9072"
															stroke="#240552"
															stroke-width="0.992661"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M11.5625 1.92188V3.9072"
															stroke="#240552"
															stroke-width="0.992661"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M5.60547 9.19531H10.8997"
															stroke="#240552"
															stroke-width="0.992661"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M5.60547 11.8438H8.91434"
															stroke="#240552"
															stroke-width="0.992661"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M11.5601 2.90625C13.7638 3.02537 14.869 3.86582 14.869 6.97616V11.0659C14.869 13.7924 14.2072 15.1557 10.8983 15.1557H6.92767C3.6188 15.1557 2.95703 13.7924 2.95703 11.0659V6.97616C2.95703 3.86582 4.06219 3.03199 6.2659 2.90625H11.5601Z"
															stroke="#240552"
															stroke-width="0.992661"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
												</span>
												<p className="text-[11px] font-[500] text-[#240552]">
													Report
												</p>
											</div>
										</Link>
										<Link href={""}>
											<div className="flex items-center mb-4">
												<span className="mr-2">
													<svg
														width="18"
														height="18"
														viewBox="0 0 18 18"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M3.06641 6.88647V10.9111C3.06641 12.3898 3.06641 12.3898 4.46143 13.3315L8.29773 15.5495C8.87666 15.8844 9.8183 15.8844 10.3903 15.5495L14.2266 13.3315C15.6216 12.3898 15.6216 12.3898 15.6216 10.9181V6.88647C15.6216 5.41473 15.6216 5.41473 14.2266 4.47309L10.3903 2.25501C9.8183 1.92021 8.87666 1.92021 8.29773 2.25501L4.46143 4.47309C3.06641 5.41473 3.06641 5.41473 3.06641 6.88647Z"
															stroke="#240552"
															stroke-width="1.04626"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M9.33862 11.0015C10.4943 11.0015 11.4312 10.0646 11.4312 8.90894C11.4312 7.75326 10.4943 6.81641 9.33862 6.81641C8.18295 6.81641 7.24609 7.75326 7.24609 8.90894C7.24609 10.0646 8.18295 11.0015 9.33862 11.0015Z"
															stroke="#240552"
															stroke-width="1.04626"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
												</span>
												<p className="text-[11px] font-[500] text-[#240552]">
													Settings
												</p>
											</div>
										</Link>
										<Link href={""}>
											<div className="flex items-center">
												<span className="mr-2">
													<svg
														width="18"
														height="18"
														viewBox="0 0 18 18"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M12.8447 13.3047H10.0518L6.94457 15.3715C6.48373 15.6787 5.8623 15.3506 5.8623 14.792V13.3047C3.76758 13.3047 2.37109 11.9082 2.37109 9.81352V5.62402C2.37109 3.5293 3.76758 2.13281 5.8623 2.13281H12.8447C14.9395 2.13281 16.3359 3.5293 16.3359 5.62402V9.81352C16.3359 11.9082 14.9395 13.3047 12.8447 13.3047Z"
															stroke="#240552"
															stroke-width="1.04736"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M9.35047 8.36865V8.22205C9.35047 7.74724 9.64375 7.49586 9.93701 7.29337C10.2233 7.09787 10.5095 6.84651 10.5095 6.38567C10.5095 5.74329 9.99285 5.22656 9.35047 5.22656C8.70809 5.22656 8.19141 5.74329 8.19141 6.38567"
															stroke="#240552"
															stroke-width="1.04736"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M9.34598 10.0366H9.35226"
															stroke="#240552"
															stroke-width="1.04736"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
												</span>
												<p className="text-[11px] font-[500] text-[#240552]">
													FAQ
												</p>
											</div>
										</Link>
									</div>
								)}
							</div>
						</div>
						<div className="flex flex-row justify-end mt-10">
							<div className="flex-row flex">
								<p
									className="text-[#240552] font-[500] text-[12px] leading-[16px] cursor-pointer"
									onClick={openModalHistory}
								>
									View History
								</p>
								<Icon
									icon="mingcute:right-line"
									className="ms-1 text-[#240552]"
								/>
							</div>
							{isModalHistoryOpen && (
								<Modal>
									<AnimatePresence>
										<motion.div
											className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[687px] z-[50]"
											initial={{ scale: 0.7, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{ type: "tween", ease: "backOut" }}
										>
											<div className="flex justify-end w-full">
												<div>
													<XCircleIcon
														className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
														onClick={closeModalHistory}
													/>
												</div>
											</div>
											<div className="px-5 pb-6 text-center flex flex-col justify-center items-center">
												<h2 className="text-[#000] text-[20px] leading-[24px] font-[600]">
													History
												</h2>
												<p className="text-[#9CA3AF] text-[12px] leading-[20px] font-[500]">
													All your saving history
												</p>
											</div>
											<div className="border border-[#F3F4F6] rounded-[8px] px-3 py-4 mx-2">
												<div className="flex flex-row mb-5">
													<div className="flex-none">
														<Image
															src={withdraw}
															alt="with"
															className="w-[40px]"
														/>
													</div>
													<div className="grow mx-3">
														<h3 className="text-black text-[12px] leading-[20px] font-[500] mb-[2px]">
															DIB Withdrawal
														</h3>
														<h6 className="text-[#9CA3AF] text-[10px] leading-[16px] font-[500]">
															Tue, 22nd December, 2023 09:40 PM
														</h6>
													</div>
													<div>
														<p className="text-[#000] text-[12px] leading-[20px] font-[500]">
															-₦ 4,000.00{" "}
														</p>
													</div>
												</div>
												<div className="flex flex-row mb-5">
													<div className="flex-none">
														<div className="flex-none">
															<Image
																src={withdraw}
																alt="with"
																className="w-[40px]"
															/>
														</div>
													</div>
													<div className="grow mx-3">
														<h3 className="text-black text-[12px] leading-[20px] font-[500] mb-[2px]">
															DIB Withdrawal
														</h3>
														<h6 className="text-[#9CA3AF] text-[10px] leading-[16px] font-[500]">
															Tue, 22nd December, 2023 09:40 PM
														</h6>
													</div>
													<div>
														<p className="text-[#000] text-[12px] leading-[20px] font-[500]">
															-₦ 4,000.00{" "}
														</p>
													</div>
												</div>
											</div>
										</motion.div>
									</AnimatePresence>
								</Modal>
							)}
						</div>
					</div>
				</div>
				<div className="bg-white border border-[#EEEFF2] px-6 py-4 rounded-tl-[16px] rounded-tr-[16px] rounded-b-none mb-4">
					<h6 className="text-[#240552] font-[500] text-[14px] leading-[19px]">
						Select a Savings Plan
					</h6>
				</div>
				<div className="bg-white border border-[#EEEFF2] p-9 mb-4">
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
						<Link href={"/dashboard/dib"}>
							<div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
								<div className="flex items-center mb-4">
									<div className="flex-none">
										<svg
											width="47"
											height="46"
											viewBox="0 0 47 46"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="23.5203"
												cy="23.1219"
												r="22.7117"
												fill="#FF823B"
											/>
											<path
												d="M26.3677 15.2695H20.1259C17.2037 15.2695 15.7431 15.2695 14.6934 15.9707C14.2389 16.2744 13.8486 16.6646 13.5449 17.1192C12.8438 18.1689 12.8438 19.6284 12.8438 22.5517C12.8438 25.4739 12.8438 26.9345 13.5449 27.9841C13.8486 28.4387 14.2389 28.829 14.6934 29.1326C15.0544 29.374 15.4632 29.5321 15.9647 29.6361M20.1259 29.8338H26.3677C29.2899 29.8338 30.7505 29.8338 31.8002 29.1326C32.2547 28.8289 32.6449 28.4386 32.9487 27.9841C33.6499 26.9345 33.6499 25.4749 33.6499 22.5517C33.6499 19.6294 33.6499 18.1689 32.9487 17.1192C32.645 16.6647 32.2547 16.2744 31.8002 15.9707C31.4392 15.7293 31.0304 15.5712 30.5289 15.4672"
												stroke="black"
												stroke-width="1.56046"
												stroke-linecap="round"
											/>
											<path
												d="M20.1287 19.4297C19.301 19.4297 18.5072 19.7585 17.9219 20.3438C17.3366 20.9291 17.0078 21.7229 17.0078 22.5506C17.0078 23.3783 17.3366 24.1721 17.9219 24.7574C18.5072 25.3427 19.301 25.6715 20.1287 25.6715M26.3706 19.4297C27.1983 19.4297 27.9921 19.7585 28.5774 20.3438C29.1627 20.9291 29.4915 21.7229 29.4915 22.5506C29.4915 23.3783 29.1627 24.1721 28.5774 24.7574C27.9921 25.3427 27.1983 25.6715 26.3706 25.6715"
												stroke="black"
												stroke-width="1.56046"
											/>
											<path
												d="M20.1211 15.2695V29.8338M26.3629 15.2695V29.8338"
												stroke="black"
												stroke-width="1.56046"
												stroke-linecap="round"
											/>
										</svg>
									</div>
									<div className="grow ms-3">
										<h3>DIB</h3>
									</div>
									<div className="flex-none">
										<button className="bg-[#FF823B] rounded-[7px] p-3 font-[500] text-[13px] leading-[18px]">
											Create DIB Plan
										</button>
									</div>
								</div>
								<h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
									Your money saved for whenever you need it, take a 15%
									Dividends when you fulfil your savings goals
								</h6>
							</div>
						</Link>
						<div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
							<div className="flex items-center mb-4">
								<div className="flex-none">
									<svg
										width="44"
										height="45"
										viewBox="0 0 44 45"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="22.2148"
											cy="22.4551"
											r="21.6504"
											fill="#23A323"
										/>
										<path
											d="M31.9669 13.3906H14.2402C13.8662 13.3906 13.5075 13.5392 13.2431 13.8036C12.9786 14.0681 12.8301 14.4267 12.8301 14.8007V28.4987C12.8301 28.8726 12.9786 29.2313 13.2431 29.4957C13.5075 29.7602 13.8662 29.9087 14.2402 29.9087H16.0531V31.7217C16.0531 31.882 16.1168 32.0357 16.2301 32.149C16.3435 32.2624 16.4972 32.326 16.6574 32.326C16.8177 32.326 16.9714 32.2624 17.0848 32.149C17.1981 32.0357 17.2618 31.882 17.2618 31.7217V29.9087H28.9453V31.7217C28.9453 31.882 29.009 32.0357 29.1223 32.149C29.2356 32.2624 29.3894 32.326 29.5496 32.326C29.7099 32.326 29.8636 32.2624 29.9769 32.149C30.0903 32.0357 30.1539 31.882 30.1539 31.7217V29.9087H31.9669C32.3409 29.9087 32.6995 29.7602 32.964 29.4957C33.2284 29.2313 33.377 28.8726 33.377 28.4987V14.8007C33.377 14.4267 33.2284 14.0681 32.964 13.8036C32.6995 13.5392 32.3409 13.3906 31.9669 13.3906ZM31.9669 28.7001H14.2402C14.1867 28.7001 14.1355 28.6789 14.0977 28.6411C14.0599 28.6033 14.0387 28.5521 14.0387 28.4987V14.8007C14.0387 14.7473 14.0599 14.696 14.0977 14.6583C14.1355 14.6205 14.1867 14.5993 14.2402 14.5993H31.9669C32.0203 14.5993 32.0716 14.6205 32.1094 14.6583C32.1471 14.696 32.1684 14.7473 32.1684 14.8007V21.4482H30.1137C29.9602 20.2819 29.3689 19.2176 28.4596 18.4713C27.5503 17.725 26.3912 17.3525 25.2173 17.4293C24.0435 17.5062 22.9428 18.0267 22.1386 18.8853C21.3345 19.7439 20.887 20.8762 20.887 22.0526C20.887 23.2289 21.3345 24.3612 22.1386 25.2198C22.9428 26.0784 24.0435 26.5989 25.2173 26.6758C26.3912 26.7527 27.5503 26.3802 28.4596 25.6338C29.3689 24.8875 29.9602 23.8232 30.1137 22.6569H32.1684V28.4987C32.1684 28.5521 32.1471 28.6033 32.1094 28.6411C32.0716 28.6789 32.0203 28.7001 31.9669 28.7001ZM26.7929 21.4482C26.6557 21.159 26.4241 20.925 26.1363 20.7848C25.8485 20.6447 25.5215 20.6066 25.2092 20.6769C24.8968 20.7472 24.6177 20.9218 24.4177 21.1718C24.2178 21.4218 24.1088 21.7324 24.1088 22.0526C24.1088 22.3727 24.2178 22.6833 24.4177 22.9334C24.6177 23.1834 24.8968 23.3579 25.2092 23.4282C25.5215 23.4985 25.8485 23.4605 26.1363 23.3203C26.4241 23.1801 26.6557 22.9461 26.7929 22.6569H28.8909C28.7399 23.4992 28.279 24.2544 27.599 24.7739C26.919 25.2933 26.0692 25.5394 25.2168 25.4636C24.3645 25.3878 23.5714 24.9956 22.9937 24.3643C22.4161 23.733 22.0957 22.9083 22.0957 22.0526C22.0957 21.1968 22.4161 20.3721 22.9937 19.7408C23.5714 19.1095 24.3645 18.7173 25.2168 18.6415C26.0692 18.5657 26.919 18.8118 27.599 19.3313C28.279 19.8507 28.7399 20.606 28.8909 21.4482H26.7929Z"
											fill="black"
										/>
									</svg>
								</div>
								<div className="grow ms-3">
									<h3>Grit</h3>
								</div>
								<div className="flex-none">
									<button className="bg-[#23A323] rounded-[7px] p-3 font-[500] text-[13px] leading-[18px]">
										Create Grit Plan
									</button>
								</div>
							</div>
							<h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
								Save with determination! You get to save for a short
								term and grow your goals
							</h6>
						</div>
						<div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
							<div className="flex items-center mb-4">
								<div className="flex-none">
									<svg
										width="44"
										height="44"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="21.8379"
											cy="22.0449"
											r="21.6504"
											fill="#A855F7"
										/>
										<path
											d="M14.0898 23.4188C14.0898 21.2016 14.0898 20.0923 14.779 19.404C15.4673 18.7148 16.5766 18.7148 18.7938 18.7148H25.0657C27.2828 18.7148 28.3921 18.7148 29.0805 19.404C29.7696 20.0923 29.7696 21.2016 29.7696 23.4188C29.7696 25.6359 29.7696 26.7452 29.0805 27.4336C28.3921 28.1227 27.2828 28.1227 25.0657 28.1227H18.7938C16.5766 28.1227 15.4673 28.1227 14.779 27.4336C14.0898 26.7452 14.0898 25.6359 14.0898 23.4188Z"
											stroke="black"
											stroke-width="1.17598"
										/>
										<path
											d="M17.2324 18.7133V17.1453C17.2324 15.8978 17.728 14.7013 18.6102 13.8192C19.4923 12.937 20.6888 12.4414 21.9363 12.4414C23.1839 12.4414 24.3804 12.937 25.2625 13.8192C26.1447 14.7013 26.6403 15.8978 26.6403 17.1453V18.7133"
											stroke="black"
											stroke-width="1.17598"
											stroke-linecap="round"
										/>
									</svg>
								</div>
								<div className="grow ms-3">
									<h3>Dreams</h3>
								</div>
								<div className="flex-none">
									<button className="bg-black rounded-full text-white p-2 text-start font-[500] text-[12px] leading-[18px]">
										Coming Soon
									</button>
								</div>
							</div>
							<h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
								Savings and investment? A definite mix that gives you
								20% returns
							</h6>
						</div>
						<div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
							<div className="flex items-center mb-4">
								<div className="flex-none">
									<svg
										width="44"
										height="44"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="22.0215"
											cy="22.0449"
											r="21.6504"
											fill="#3B82F6"
										/>
										<path
											d="M21.6994 26.9169L21.6962 26.9157C21.642 26.8951 21.583 26.8617 21.5192 26.8094C20.8535 26.2196 20.3225 25.4834 19.9286 24.5928L19.9285 24.5927C19.5325 23.698 19.3383 22.8086 19.3383 21.9212C19.3383 21.0337 19.5325 20.144 19.9286 19.2486C20.3231 18.3573 20.8466 17.621 21.496 17.0313C21.5607 16.9784 21.6289 16.9372 21.7011 16.9062C21.7573 16.8822 21.8199 16.8686 21.894 16.8686C21.9681 16.8686 22.0219 16.8821 22.063 16.901C22.1296 16.9319 22.1983 16.9749 22.2686 17.0329C22.9344 17.6227 23.4654 18.3586 23.8594 19.2486C24.2555 20.144 24.4497 21.0337 24.4497 21.9212C24.4497 22.8086 24.2555 23.698 23.8594 24.5927L23.8594 24.5928C23.4633 25.4883 22.9372 26.2272 22.2843 26.818L22.2756 26.8259L22.2673 26.8342C22.2407 26.8607 22.2015 26.8876 22.1372 26.9088L22.1358 26.9093C22.058 26.9354 21.9781 26.9485 21.894 26.9485C21.8092 26.9485 21.7464 26.9352 21.6994 26.9169ZM24.6964 28.3949L24.6962 28.3949C24.5717 28.3705 24.4485 28.3423 24.3263 28.3103C25.028 27.6547 25.5949 26.7898 26.0358 25.7344C26.6075 24.3659 26.9045 23.0927 26.9045 21.9212C26.9045 20.7496 26.6075 19.4764 26.0358 18.1079C25.5949 17.0525 25.028 16.1876 24.3263 15.5321C24.4485 15.5001 24.5717 15.4719 24.6962 15.4475L24.6964 15.4475C25.0937 15.3695 25.5045 15.3302 25.9293 15.3302C27.7738 15.3302 29.322 15.9671 30.6022 17.2473C31.8831 18.5282 32.5203 20.0767 32.5203 21.9212C32.5203 23.7656 31.8831 25.3138 30.6023 26.594L30.6021 26.5942C29.3219 27.875 27.7737 28.5122 25.9293 28.5122C25.5045 28.5122 25.0937 28.4729 24.6964 28.3949ZM13.1858 26.5942L13.1857 26.594C11.9048 25.3138 11.2677 23.7656 11.2677 21.9212C11.2677 20.0767 11.9049 18.5282 13.1858 17.2473C14.4659 15.9671 16.0142 15.3302 17.8587 15.3302C18.2834 15.3302 18.6942 15.3695 19.0916 15.4475L19.0917 15.4475C19.2162 15.4719 19.3395 15.5001 19.4616 15.5321C18.76 16.1876 18.193 17.0525 17.7521 18.1079C17.1805 19.4764 16.8835 20.7496 16.8835 21.9212C16.8835 23.0927 17.1805 24.3659 17.7521 25.7344C18.193 26.7898 18.76 27.6547 19.4616 28.3103C19.3395 28.3423 19.2162 28.3705 19.0917 28.3949L19.0916 28.3949C18.6942 28.4729 18.2834 28.5122 17.8587 28.5122C16.0142 28.5122 14.466 27.875 13.1858 26.5942Z"
											stroke="black"
											stroke-width="0.941572"
										/>
									</svg>
								</div>
								<div className="grow ms-3">
									<h3>Vault</h3>
								</div>
								<div className="flex-none">
									<button className="bg-[#3B82F6] rounded-[7px] p-3 font-[500] text-[13px] leading-[18px]">
										Create Vault Plan
									</button>
								</div>
							</div>
							<h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
								Turn your little savings into a massive pot of gold.
								Break only at due dates.
							</h6>
						</div>
						<div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
							<div className="flex items-center mb-4">
								<div className="flex-none">
									<svg
										width="44"
										height="44"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="21.8379"
											cy="21.7402"
											r="21.6504"
											fill="#FFBD00"
										/>
										<path
											d="M19.4496 26.5689V21.1461C19.4496 21.0308 19.4878 20.9188 19.5584 20.8277C19.6289 20.7365 19.7277 20.6714 19.8393 20.6425C19.9508 20.6136 20.0688 20.6225 20.1748 20.6679C20.2807 20.7134 20.3685 20.7927 20.4244 20.8935L23.4281 26.3005C23.484 26.4012 23.5719 26.4805 23.6778 26.526C23.7837 26.5714 23.9017 26.5804 24.0133 26.5515C24.1248 26.5225 24.2236 26.4574 24.2942 26.3662C24.3647 26.2751 24.4029 26.1631 24.4029 26.0478V20.625M18.459 22.6063H25.3936M18.459 24.5876H25.3936"
											stroke="black"
											stroke-width="0.990653"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M18.1153 12.6113L20.162 15.0062L19.9409 15.2531C15.7285 16.1978 12.582 19.9599 12.582 24.4574C12.582 28.4112 15.7909 31.6201 19.7448 31.6201H24.2775C28.2313 31.6201 31.4402 28.4119 31.4402 24.4581C31.4475 19.9599 28.3011 16.1978 24.0887 15.2531C24.1058 15.0978 24.0777 14.941 24.0079 14.8013L25.749 12.8082L25.8614 12.6348C25.9926 12.3486 26.0262 12.0271 25.9569 11.7199C25.8877 11.4127 25.7194 11.1367 25.478 10.9345C25.2366 10.7322 24.9354 10.6149 24.6208 10.6005C24.3063 10.5861 23.9956 10.6755 23.7368 10.8548L23.1175 10.1202C22.9786 9.9647 22.8084 9.84026 22.6182 9.75494C22.428 9.66962 22.2219 9.62535 22.0134 9.625C21.8049 9.62466 21.5987 9.66825 21.4082 9.75293C21.2177 9.83761 21.0471 9.96149 20.9077 10.1165L20.259 10.8408C20.0008 10.6578 19.6895 10.5649 19.3732 10.5765C19.0569 10.5881 18.7532 10.7037 18.5092 10.9052C18.2652 11.1068 18.0943 11.3831 18.0231 11.6915C17.9519 11.9999 17.9843 12.3232 18.1153 12.6113ZM20.9062 13.6288L19.6603 12.1889C19.9497 12.3284 20.2773 12.368 20.5916 12.3015C20.906 12.2351 21.1895 12.0663 21.3977 11.8216L21.9854 11.059L22.6378 11.8319C22.8412 12.0684 23.1156 12.2329 23.42 12.3008C23.7245 12.3687 24.0428 12.3364 24.3274 12.2087L23.0874 13.6288H20.9062ZM14.0513 24.4574C14.0513 20.0584 17.6158 16.4939 22.0148 16.4939C26.4138 16.4939 29.9783 20.0584 29.9709 24.4559V24.4574C29.9703 25.9672 29.3703 27.415 28.3027 28.4826C27.2351 29.5502 25.7873 30.1502 24.2775 30.1508H19.7448C18.2349 30.1502 16.7871 29.5502 15.7195 28.4826C14.6519 27.415 14.0519 25.9672 14.0513 24.4574Z"
											fill="black"
										/>
									</svg>
								</div>
								<div className="grow ms-3">
									<h3>Shopwise</h3>
								</div>
								<div className="flex-none">
									<button className="bg-black rounded-full text-white p-2 text-start font-[500] text-[12px] leading-[18px]">
										Coming Soon
									</button>
								</div>
							</div>
							<h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
								Shop. Save. Smile. Every transaction rewards you with
								automatic cashback, transfor
							</h6>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}
