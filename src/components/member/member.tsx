"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Datatable from "@/components/tables/datatable";
import { membersCol, membersType } from "@/dummy";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";
import FadeLoader from "react-spinners/FadeLoader";

type Props = {
	username: string;
	token: string;
	profile_photo: string;
};

function Members({ username, profile_photo, token }: Props) {
	const { data, isLoading, error } = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/field_officer/get_field_officers`,
		token
	);

	const {
		data: dataDash,
		isLoading: isLoadingDash,
		error: errorDash,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/member`,
		token
	);

	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Member
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				<div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9">
					<h3 className="text-[#21003D] text-[20px] leading-[20px] font-[500]">
						Statistics
					</h3>
					<div className="mt-9 grid lg:grid-cols-3 grid-cols-1 gap-10">
						<div className="bg-[#FFF9F0] rounded-[6px] p-6">
							<div className="flex items-center">
								<svg
									width="13"
									height="13"
									viewBox="0 0 13 13"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="me-3"
								>
									<path
										d="M5.0793 6.56C5.0643 6.56 5.0543 6.56 5.0393 6.56C5.0143 6.555 4.9793 6.555 4.9493 6.56C3.4993 6.515 2.4043 5.375 2.4043 3.97C2.4043 2.54 3.5693 1.375 4.9993 1.375C6.4293 1.375 7.5943 2.54 7.5943 3.97C7.5893 5.375 6.4893 6.515 5.0943 6.56C5.0893 6.56 5.0843 6.56 5.0793 6.56ZM4.9993 2.125C3.9843 2.125 3.1543 2.955 3.1543 3.97C3.1543 4.97 3.9343 5.775 4.9293 5.81C4.9593 5.805 5.0243 5.805 5.0893 5.81C6.0693 5.765 6.8393 4.96 6.8443 3.97C6.8443 2.955 6.0143 2.125 4.9993 2.125Z"
										fill="black"
									/>
									<path
										d="M8.7692 6.625C8.7542 6.625 8.7392 6.625 8.7242 6.62C8.5192 6.64 8.3092 6.495 8.2892 6.29C8.2692 6.085 8.3942 5.9 8.5992 5.875C8.6592 5.87 8.7242 5.87 8.7792 5.87C9.5092 5.83 10.0792 5.23 10.0792 4.495C10.0792 3.735 9.4642 3.12 8.7042 3.12C8.4992 3.125 8.3292 2.955 8.3292 2.75C8.3292 2.545 8.4992 2.375 8.7042 2.375C9.8742 2.375 10.8292 3.33 10.8292 4.5C10.8292 5.65 9.9292 6.58 8.7842 6.625C8.7792 6.625 8.7742 6.625 8.7692 6.625Z"
										fill="black"
									/>
									<path
										d="M5.08578 12.025C4.10578 12.025 3.12078 11.775 2.37578 11.275C1.68078 10.815 1.30078 10.185 1.30078 9.5C1.30078 8.815 1.68078 8.18 2.37578 7.715C3.87578 6.72 6.30578 6.72 7.79578 7.715C8.48578 8.175 8.87078 8.805 8.87078 9.49C8.87078 10.175 8.49078 10.81 7.79578 11.275C7.04578 11.775 6.06578 12.025 5.08578 12.025ZM2.79078 8.345C2.31078 8.665 2.05078 9.075 2.05078 9.505C2.05078 9.93 2.31578 10.34 2.79078 10.655C4.03578 11.49 6.13578 11.49 7.38078 10.655C7.86078 10.335 8.12078 9.925 8.12078 9.495C8.12078 9.07 7.85578 8.66 7.38078 8.345C6.13578 7.515 4.03578 7.515 2.79078 8.345Z"
										fill="black"
									/>
									<path
										d="M9.66911 11.125C9.49411 11.125 9.33911 11.005 9.30411 10.825C9.26411 10.62 9.39411 10.425 9.59411 10.38C9.90911 10.315 10.1991 10.19 10.4241 10.015C10.7091 9.80001 10.8641 9.53001 10.8641 9.24501C10.8641 8.96001 10.7091 8.69001 10.4291 8.48001C10.2091 8.31001 9.93411 8.19001 9.60911 8.11501C9.40911 8.07001 9.27911 7.87001 9.32411 7.66501C9.36911 7.46501 9.56911 7.33501 9.77411 7.38001C10.2041 7.47501 10.5791 7.64501 10.8841 7.88001C11.3491 8.23001 11.6141 8.72501 11.6141 9.24501C11.6141 9.76501 11.3441 10.26 10.8791 10.615C10.5691 10.855 10.1791 11.03 9.74911 11.115C9.71911 11.125 9.69411 11.125 9.66911 11.125Z"
										fill="black"
									/>
								</svg>
								<h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
									Total Staffs
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
								{dataDash?.data?.Members?.total_staff || 0}
							</h5>
						</div>
						<div className="bg-[#F6FDF9] rounded-[6px] p-6">
							<div className="flex items-center">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="me-3"
								>
									<path
										d="M7.17546 7.50326C8.82674 7.50326 10.1654 6.16463 10.1654 4.51335C10.1654 2.86207 8.82674 1.52344 7.17546 1.52344C5.52417 1.52344 4.18555 2.86207 4.18555 4.51335C4.18555 6.16463 5.52417 7.50326 7.17546 7.50326Z"
										stroke="#EF4444"
										strokeWidth="0.896973"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12.3124 13.4827C12.3124 11.1686 10.0102 9.29688 7.17572 9.29688C4.34129 9.29688 2.03906 11.1686 2.03906 13.4827"
										stroke="#EF4444"
										strokeWidth="0.896973"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
									Total Customer Care
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
							{dataDash?.data?.Members?.total_relationship_officer || 0}
							</h5>
						</div>
						<div className="bg-[#F5F9FF] rounded-[6px] p-6">
							<div className="flex items-center">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="me-3"
								>
									<path
										d="M7.17546 7.50326C8.82674 7.50326 10.1654 6.16463 10.1654 4.51335C10.1654 2.86207 8.82674 1.52344 7.17546 1.52344C5.52417 1.52344 4.18555 2.86207 4.18555 4.51335C4.18555 6.16463 5.52417 7.50326 7.17546 7.50326Z"
										stroke="#22C55E"
										strokeWidth="0.896973"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12.3124 13.4827C12.3124 11.1686 10.0102 9.29688 7.17572 9.29688C4.34129 9.29688 2.03906 11.1686 2.03906 13.4827"
										stroke="#22C55E"
										strokeWidth="0.896973"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
									{/* Savings Plan Created */}
									Total Field Officer
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
							{dataDash?.data?.Members?.total_relationship_officer || 0}
							</h5>
						</div>
					</div>
				</div>
				<div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9 relative">
					<h1 className="text-[20px] font-[500] leading-[24px] text-[#21003D] mb-6">
						Field Officers
					</h1>

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
							<div className="mt-10">
								<Datatable
									data={data?.data || []}
									columns={membersCol}
									placeholder="search for a field officer"
									searchKey="first_name"
								/>
							</div>
						)}
					</div>
				</div>
			</main>
		</section>
	);
}

export default Members;
