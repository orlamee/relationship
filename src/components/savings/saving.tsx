"use client";
import NavBar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Datatable from "@/components/tables/datatable";
import {
	planColumns,
	planData,
	savingColumns,
	// savingData,
	savingsType,
} from "@/components/dummydata";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tablines";
import leaf from "../../assets/leaf.svg";
import divi from "../../assets/dividend.svg";
import savedib from "../../assets/save-dib.svg";
import profile from "../../assets/profile-2user.svg";
import minivault from "../../assets/mini-vault.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Modal from "@/components/modal";
import { XCircleIcon } from "lucide-react";
import ModalTable from "@/components/tables/modaltable";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";
import FadeLoader from "react-spinners/FadeLoader";

type props = {
	username: string;
	profile_photo: string;
	token: string;
};

function Savings({ username, profile_photo, token }: props) {
	const [vlList, setVlList] = useState<savingsType[]>();
	const [veList, setVeList] = useState<savingsType[]>();
	const [vpList, setVpList] = useState<savingsType[]>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	function openModal() {
		setIsModalOpen(true);
	}
	function closeModal() {
		setIsModalOpen(false);
	}

	const {
		data: dataVl,
		isLoading: isLoadingVl,
		error: errorVl,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/savings/vault_lite_users`,
		token
	);

	useEffect(() => {
		if (dataVl) {
			let fl: savingsType[] = [];
			for (let i = 0; i < dataVl?.data?.length; i++) {
				const fOfficer = dataVl?.data[i]?.field_officer;
				const details = dataVl?.data[i]?.user;
				const bank = dataVl?.data[i]?.bank;

				fl.push({
					id: details?.user_id,
					email: details?.email,
					kodhex: details?.kodhex,
					field_officer: {
						first_name: fOfficer?.first_name,
						last_name: fOfficer?.last_name,
						profile_photo: fOfficer?.profile_photo,
					},
					balance:
						details?.ardilla_retail_user_saving_vault_lite_wallet
							?.wallet_book_balance,
					first_name: details?.first_name,
					last_name: details?.last_name,
					profile_photo: details?.profile_photo,
					virtual_account_name: bank?.virtual_account_name,
					virtual_account_number: bank?.virtual_account_number,
				});
			}
			setVlList(fl);
		}
	}, [dataVl]);

	const {
		data: dataVe,
		isLoading: isLoadingVe,
		error: errorVe,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/savings/vault_extra_users`,
		token
	);

	useEffect(() => {
		if (dataVe) {
			let fl: savingsType[] = [];
			for (let i = 0; i < dataVe?.data?.length; i++) {
				const fOfficer = dataVe?.data[i]?.field_officer;
				const details = dataVe?.data[i]?.user;
				const bank = dataVe?.data[i]?.bank;

				fl.push({
					id: details?.user_id,
					email: details?.email,
					kodhex: details?.kodhex,
					field_officer: {
						first_name: fOfficer?.first_name,
						last_name: fOfficer?.last_name,
						profile_photo: fOfficer?.profile_photo,
					},
					balance:
						details?.ardilla_retail_user_saving_vault_extra_wallet
							?.wallet_book_balance,
					first_name: details?.first_name,
					last_name: details?.last_name,
					profile_photo: details?.profile_photo,
					virtual_account_name: bank?.virtual_account_name,
					virtual_account_number: bank?.virtual_account_number,
				});
			}
			setVeList(fl);
		}
	}, [dataVe]);

	const {
		data: dataVp,
		isLoading: isLoadingVp,
		error: errorVp,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/savings/vault_premium_users`,
		token
	);

	useEffect(() => {
		if (dataVp) {
			let fl: savingsType[] = [];
			for (let i = 0; i < dataVp?.data?.length; i++) {
				const fOfficer = dataVp?.data[i]?.field_officer;
				const details = dataVp?.data[i]?.user;
				const bank = dataVp?.data[i]?.bank;

				fl.push({
					id: details?.user_id,
					email: details?.email,
					kodhex: details?.kodhex,
					field_officer: {
						first_name: fOfficer?.first_name,
						last_name: fOfficer?.last_name,
						profile_photo: fOfficer?.profile_photo,
					},
					balance:
						details?.ardilla_retail_user_saving_vault_premium_wallet
							?.wallet_book_balance,
					first_name: details?.first_name,
					last_name: details?.last_name,
					profile_photo: details?.profile_photo,
					virtual_account_name: bank?.virtual_account_name,
					virtual_account_number: bank?.virtual_account_number,
				});
			}
			setVpList(fl);
		}
	}, [dataVp]);

	const [tab, setTab] = useState<
		"vault-lite" | "vault-extra" | "vault-premium"
	>("vault-lite");
	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Savings
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				<div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9">
					<h1 className="text-[20px] font-[500] leading-[20px] text-[#21003D]">
						Statistics
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
						<div className="rounded-[6px] bg-[#FFF9F0] p-5 h-[130px] flex flex-col justify-between">
							<div className="flex items-center gap-3">
								<Image
									width={14}
									height={14}
									src={profile}
									alt="total"
								/>
								<h2 className="text-[13px] font-[500] leading-[20px]">
									Total Savers
								</h2>
							</div>
							<h3 className="text-[24px] font-[500] leading-[33px]">
								0
							</h3>
						</div>
						<div className="rounded-[6px] bg-[#FEF6F8] p-5 h-[130px] flex flex-col justify-between">
							<div className="flex items-center gap-3">
								<Image width={14} height={14} src={leaf} alt="leaf" />
								<h2 className="text-[13px] font-[500] leading-[20px]">
									Total Amount Saved
								</h2>
							</div>
							<h3 className="text-[24px] font-[500] leading-[33px]">
								N0.00
							</h3>
						</div>
						<div className="rounded-[6px] bg-[#F6FDF9] p-5 h-[130px] flex flex-col justify-between">
							<div className="flex items-center gap-3">
								<Image width={14} height={14} src={divi} alt="total" />
								<h2 className="text-[13px] font-[500] leading-[20px]">
									Total Dividends
								</h2>
							</div>
							<h3 className="text-[24px] font-[500] leading-[33px]">
								N0.00
							</h3>
						</div>

						<div>
							<Swiper
								spaceBetween={5}
								slidesPerView={1}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								modules={[Autoplay]}
							>
								<SwiperSlide>
									<div className="rounded-[6px] bg-[#F5F9FF] p-5 h-[130px] flex flex-col justify-between">
										<div className="flex items-center gap-3 justify-between">
											<div className="flex items-center gap-3">
												<Image
													width={14}
													height={14}
													src={savedib}
													alt="dib"
												/>
												<h2 className="text-[13px] font-[500] leading-[20px]">
													Total Vault
												</h2>
											</div>
											<div className="flex items-center space-x-1">
												<span className="w-[10px] rounded-[7px] bg-[#3B82F6] h-[5px]" />
												<span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
												<span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
											</div>
										</div>

										<div className="flex justify-between items-center">
											<h3 className="text-[24px] font-[500] leading-[33px]">
												N0.00
											</h3>
											<div className="bg-[#DAE8FF] rounded-[3px]">
												<div className="flex items-center gap-3 px-1.5 py-1">
													<Image
														width={14}
														height={14}
														src={profile}
														alt="total"
													/>
													<h2 className="text-[13px] font-[500] leading-[20px]">
														50 savers
													</h2>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="rounded-[6px] bg-[#F5F9FF] p-5 h-[130px] flex flex-col justify-between">
										<div className="flex items-center gap-3 justify-between">
											<div className="flex items-center gap-3">
												<Image
													width={14}
													height={14}
													src={minivault}
													alt="total"
												/>
												<h2 className="text-[13px] font-[500] leading-[20px]">
													Total Vault Extra
												</h2>
											</div>
											<div className="flex items-center space-x-1">
												<span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
												<span className="w-[10px] rounded-[7px] bg-[#3B82F6] h-[5px]" />
												<span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
											</div>
										</div>

										<div className="flex justify-between items-center">
											<h3 className="text-[24px] font-[500] leading-[33px]">
												N0.00
											</h3>
											<div className="bg-[#DAE8FF] rounded-[3px]">
												<div className="flex items-center gap-3 px-1.5 py-1">
													<Image
														width={14}
														height={14}
														src={profile}
														alt="total"
													/>
													<h2 className="text-[13px] font-[500] leading-[20px]">
														50 savers
													</h2>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="rounded-[6px] bg-[#F5F9FF] p-5 h-[130px] flex flex-col justify-between">
										<div className="flex items-center gap-3 justify-between">
											<div className="flex items-center gap-3">
												<Image
													width={14}
													height={14}
													src={minivault}
													alt="total"
												/>
												<h2 className="text-[13px] font-[500] leading-[20px]">
													Total Vault Premium
												</h2>
											</div>
											<div className="flex items-center space-x-1">
												<span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
												<span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
												<span className="w-[10px] rounded-[7px] bg-[#3B82F6] h-[5px]" />
											</div>
										</div>

										<div className="flex justify-between items-center">
											<h3 className="text-[24px] font-[500] leading-[33px]">
												N0.00
											</h3>
											<div className="bg-[#DAE8FF] rounded-[3px]">
												<div className="flex items-center gap-3 px-1.5 py-1">
													<Image
														width={14}
														height={14}
														src={profile}
														alt="total"
													/>
													<h2 className="text-[13px] font-[500] leading-[20px]">
														50 savers
													</h2>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9 relative">
					<h1 className="text-[20px] font-[500] leading-[24px] text-[#21003D] mb-6">
						Savings Plan
					</h1>
					<div className="mt-10">
						<div className="flex justify-between items-center">
							<div className="inline-flex items-center space-x-10 border-b-[2px] border-b-gray-200">
								<button
									className={`text-[14px] font-[500] text-black py-3 flex items-center ${
										tab === "vault-lite" &&
										"border-b-black border-b-[2px]"
									}`}
									onClick={() => setTab("vault-lite")}
								>
									<span className="mr-1.5">
										<svg
											width="17"
											height="17"
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
								<button
									className={`text-[14px] font-[500] text-black py-3 flex items-center ${
										tab === "vault-extra" &&
										"border-b-black border-b-[2px]"
									}`}
									onClick={() => setTab("vault-extra")}
								>
									<span className="mr-1.5">
										<svg
											width="17"
											height="17"
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
									Vault Extra
								</button>
								<button
									className={`text-[14px] font-[500] text-black py-3 flex items-center ${
										tab === "vault-premium" &&
										"border-b-black border-b-[2px]"
									}`}
									onClick={() => setTab("vault-premium")}
								>
									<span className="mr-1.5">
										<svg
											width="17"
											height="17"
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
									Vault Premium
								</button>
							</div>
							<button
								className="rounded-[6px] bg-[#240552] text-white px-7 py-4 text-[12px] font-[500] leading-[20px]"
								onClick={openModal}
							>
								Create Savings Plan +{" "}
							</button>
						</div>

						<div>
							{tab === "vault-lite" && (
								<div className="mt-5">
									{isLoadingVl ? (
										<div className="w-full flex justify-center">
											<FadeLoader
												color={"#240552"}
												loading={true}
												aria-label="Loading Spinner"
												data-testid="loader"
											/>
										</div>
									) : errorVl?.message ? (
										<p className="text-center">{errorVl.message}</p>
									) : (
										<Datatable
											data={vlList || []}
											columns={savingColumns}
											searchKey="first_name"
										/>
									)}
								</div>
							)}

							{tab === "vault-extra" && (
								<div className="mt-5">
									{isLoadingVe ? (
										<div className="w-full flex justify-center">
											<FadeLoader
												color={"#240552"}
												loading={true}
												aria-label="Loading Spinner"
												data-testid="loader"
											/>
										</div>
									) : errorVe?.message ? (
										<p className="text-center">{errorVe.message}</p>
									) : (
										<Datatable
											data={veList || []}
											columns={savingColumns}
											searchKey="first_name"
										/>
									)}
								</div>
							)}

							{tab === "vault-premium" && (
								<div className="mt-5">
									{isLoadingVp ? (
										<div className="w-full flex justify-center">
											<FadeLoader
												color={"#240552"}
												loading={true}
												aria-label="Loading Spinner"
												data-testid="loader"
											/>
										</div>
									) : errorVp?.message ? (
										<p className="text-center">{errorVp.message}</p>
									) : (
										<Datatable
											data={vpList || []}
											columns={savingColumns}
											searchKey="first_name"
										/>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				{isModalOpen && (
					<Modal>
						<div className="bg-white rounded-[16px] px-6 pb-6 w-[700px]">
							<div className="flex justify-between px-4 py-6 border-b-[1px] border-b-[#F5F5F5] items-center">
								<h1 className="text-[14px] font-[500] leading-[18px]">
									Select a User
								</h1>
								<XCircleIcon
									className="text-[#9CA3AF] cursor-pointer w-[18px]"
									onClick={closeModal}
								/>
							</div>
							<div className="my-6 relative">
								<ModalTable data={planData} columns={planColumns} />
							</div>
							<div className="text-end">
								<Link href={"/dashboard/savings/create-vault"}>
									<button className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]">
										Proceed
									</button>
								</Link>
							</div>
						</div>
					</Modal>
				)}
			</main>
		</section>
	);
}

export default Savings;
