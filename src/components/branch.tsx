"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Datatable from "@/components/tables/datatable";
import {
	LocationColumns,
	branchColumns,
	branchData,
	groupColumns,
	groupData,
} from "@/components/dummydata";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tablines";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";
import FadeLoader from "react-spinners/FadeLoader";

type props = {
	username: string;
	profile_photo: string;
	token: string;
};

function Branch({ username, profile_photo, token }: props) {
	const { data, isLoading, error } = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/branch`,
		token
	);

	const { data:branchDash, isLoading:LoadingBDash, error:errorBDash } = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/branch/dashboard`,
		token
	);
	
	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Branch
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
									Location
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
								{branchDash?.data?.Total_branch || 0}
							</h5>
						</div>
						<div className="bg-[#F6FDF9] rounded-[6px] p-6">
							<div className="flex items-center space-x-2">
								<svg
									width="19"
									height="18"
									viewBox="0 0 19 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.34766 15.2578C8.57682 15.2578 7.84815 15.1314 7.16162 14.8784C6.4751 14.6255 5.85482 14.2762 5.30078 13.8306L4.37939 14.752C4.23486 14.8965 4.06624 14.9656 3.87354 14.9594C3.68083 14.9536 3.51221 14.8784 3.36768 14.7339C3.22314 14.5894 3.15088 14.4176 3.15088 14.2186C3.15088 14.0201 3.22314 13.8486 3.36768 13.7041L4.271 12.8008C3.82536 12.2467 3.47607 11.6233 3.22314 10.9305C2.97021 10.2382 2.84375 9.5127 2.84375 8.75391C2.84375 6.94727 3.47921 5.41162 4.75012 4.14697C6.02055 2.88232 7.55306 2.25 9.34766 2.25H14.4063C14.8037 2.25 15.1441 2.3914 15.4274 2.6742C15.7102 2.95748 15.8516 3.29785 15.8516 3.69531V8.75391C15.8516 10.5485 15.2192 12.0813 13.9546 13.3522C12.6899 14.6226 11.1543 15.2578 9.34766 15.2578ZM9.34766 13.8125C10.7568 13.8125 11.9521 13.3187 12.9335 12.3311C13.9153 11.3434 14.4063 10.151 14.4063 8.75391V3.69531H9.34766C7.95052 3.69531 6.75814 4.186 5.77051 5.16736C4.78288 6.14921 4.28906 7.34473 4.28906 8.75391C4.28906 10.151 4.78288 11.3434 5.77051 12.3311C6.75814 13.3187 7.95052 13.8125 9.34766 13.8125ZM8.39014 12.2769L12.1299 8.93457C12.2503 8.82617 12.2865 8.69658 12.2383 8.54578C12.1901 8.39547 12.0817 8.30827 11.9131 8.28418L8.98633 7.99512L10.7388 5.59229C10.7869 5.53206 10.8079 5.46871 10.8016 5.40223C10.7959 5.33622 10.7689 5.27311 10.7207 5.21289C10.6605 5.15267 10.5913 5.12256 10.5133 5.12256C10.4348 5.12256 10.3654 5.15267 10.3052 5.21289L6.5835 8.55518C6.46305 8.66358 6.42692 8.79293 6.4751 8.94324C6.52328 9.09404 6.63167 9.18148 6.80029 9.20557L9.72705 9.49463L7.95654 11.8975C7.92041 11.9577 7.90234 12.021 7.90234 12.0875C7.90234 12.1535 7.93246 12.2166 7.99268 12.2769C8.0529 12.3371 8.11914 12.3672 8.19141 12.3672C8.26367 12.3672 8.32992 12.3371 8.39014 12.2769Z"
										fill="#E8356D"
									/>
								</svg>

								<h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
									Staffs
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
							{branchDash?.data?.Total_staff || 0}
							</h5>
						</div>
						<div className="bg-[#F5F9FF] rounded-[6px] p-6">
							<div className="flex items-center space-x-2">
								<svg
									width="11"
									height="10"
									viewBox="0 0 11 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.99338 2.84475C4.99338 4.12875 4.08138 5.05275 2.79738 5.05275C1.52538 5.05275 0.613375 4.12875 0.613375 2.84475C0.613375 1.54875 1.52538 0.624749 2.79738 0.624749C4.08138 0.624749 4.99338 1.54875 4.99338 2.84475ZM9.56538 0.804749L2.97738 9.46875H1.82538L8.41338 0.804749H9.56538ZM4.06938 2.84475C4.06938 2.06475 3.55338 1.52475 2.79738 1.52475C2.05338 1.52475 1.53738 2.06475 1.53738 2.84475C1.53738 3.61275 2.05338 4.15275 2.79738 4.15275C3.54138 4.15275 4.06938 3.61275 4.06938 2.84475ZM10.8014 7.41675C10.8014 8.70075 9.87738 9.62475 8.60538 9.62475C7.33338 9.62475 6.40938 8.70075 6.40938 7.41675C6.40938 6.12075 7.33338 5.20875 8.60538 5.20875C9.87738 5.20875 10.8014 6.12075 10.8014 7.41675ZM9.86538 7.41675C9.86538 6.63675 9.36138 6.09675 8.60538 6.09675C7.86138 6.09675 7.34538 6.63675 7.34538 7.41675C7.34538 8.18475 7.86138 8.72475 8.60538 8.72475C9.34938 8.72475 9.86538 8.18475 9.86538 7.41675Z"
										fill="#22C55E"
									/>
								</svg>

								<h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
									Head Branch
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
							{branchDash?.data?.Total_head_branches || 0}
							</h5>
						</div>
					</div>
				</div>
				<div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9 relative">
					<h1 className="text-[20px] font-[500] leading-[24px] text-[#21003D] mb-6">
						Report
					</h1>
					<div className="mt-10">
						<div>
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
									<Datatable
										data={data.data || []}
										columns={branchColumns}
										placeholder="search for branch"
										searchKey="street_address"
									/>
								)}
							</div>
						</div>
						{/* <Tabs defaultValue="details">
							<TabsList>
								<TabsTrigger value="details">Details</TabsTrigger>
								<TabsTrigger value="location">Location</TabsTrigger>
								<TabsTrigger value="group">Group</TabsTrigger>
							</TabsList>
							<TabsContent value="details">
								<Datatable data={branchData} columns={branchColumns} />
							</TabsContent>
							<TabsContent value="location">
								<Datatable
									data={branchData}
									columns={LocationColumns}
								/>
							</TabsContent>
							<TabsContent value="group">
								<Datatable data={groupData} columns={groupColumns} />
							</TabsContent>
						</Tabs> */}
					</div>
				</div>
			</main>
		</section>
	);
}

export default Branch;
