"use client";
import NavBar from "@/components/navbar";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Datatable from "@/components/tables/datatable";
import { FundedDataType, dashboardColumns } from "@/components/dummydata";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";
import FadeLoader from "react-spinners/FadeLoader";

type Props = {
	username: string;
	token: string;
	profile_photo: string;
};

function Dashboard({ username, profile_photo, token }: Props) {
	type branchType = {
	lga: string 
	}
	const [branch, setBranch] = useState("")
	const [branches, setBranches] = useState<branchType[]>([])
	const [fundedLists, setFundedLists] = useState<FundedDataType[]>();
	const [fundedListsCopy, setFundedListsCopy] = useState<FundedDataType[]>();
	const [unFundedLists, setUnFundedLists] = useState<FundedDataType[]>();
	const [unFundedListsCopy, setUnFundedListsCopy] = useState<FundedDataType[]>();
	const [pdfGenerating, setPdfGenerating] = useState(false);
	const [tab, setTab] = useState<"completed" | "funded" | "not-funded">(
		"funded"
	);
	const completedTableRef = useRef<HTMLDivElement>(null);
	const fundedTableRef = useRef<HTMLDivElement>(null);
	const notfundedTableRef = useRef<HTMLDivElement>(null);

	const handleGenerateCompletedPDF = async () => {
		setPdfGenerating(true);

		if (completedTableRef.current) {
			const canvas = await html2canvas(completedTableRef.current);
			const tableImage = canvas.toDataURL("image/png");

			const doc = new jsPDF();

			const imgWidth = 210;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			doc.addImage(tableImage, "PNG", 0, 0, imgWidth, imgHeight);

			doc.save("completed_data.pdf");
			setPdfGenerating(false);
		}
	};

	const handleGenerateFundedPDF = async () => {
		setPdfGenerating(true);

		if (fundedTableRef.current) {
			const canvas = await html2canvas(fundedTableRef.current);
			const tableImage = canvas.toDataURL("image/png");

			const doc = new jsPDF();

			const imgWidth = 210;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			doc.addImage(tableImage, "PNG", 0, 0, imgWidth, imgHeight);

			doc.save("funded_data.pdf");
			setPdfGenerating(false);
		}
	};

	const handleGenerateNotFundedPDF = async () => {
		setPdfGenerating(true);

		if (notfundedTableRef.current) {
			const canvas = await html2canvas(notfundedTableRef.current);
			const tableImage = canvas.toDataURL("image/png");

			const doc = new jsPDF();

			const imgWidth = 210;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			doc.addImage(tableImage, "PNG", 0, 0, imgWidth, imgHeight);

			doc.save("not_funded_data.pdf");
			setPdfGenerating(false);
		}
	};

	const handleGeneratePdf = async () => {
		if (tab === "completed") {
			await handleGenerateCompletedPDF();
		}
		if (tab === "funded") {
			await handleGenerateFundedPDF();
		}
		if (tab === "not-funded") {
			await handleGenerateNotFundedPDF();
		}
	};

	const {
		data: dataFunded,
		isLoading: isLoadingFundedUsers,
		error: errorFunded,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/payment/get_funded_accounts`,
		token
	);

	const {
		data: dataDash,
		isLoading: isLoadingDash,
		error: errorDash,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/savings/dashboard`,
		token
	);


	const { data:branchData, isLoading:isLoadingBranch, error:errorBranch} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/branch`,
		token
	);

	useEffect(() => {

		setBranches(branchData?.data)
		
	}, [branchData])
	

	useEffect(() => {
		setFundedLists(dataFunded?.data?.funded_users);
		if (dataFunded) {
			let fl: FundedDataType[] = [];
			for (let i = 0; i < dataFunded?.data?.funded_users?.length; i++) {
				const user = dataFunded?.data?.funded_users[i]?.user;
				const officer = dataFunded?.data?.funded_users[i]?.field_officer;
				const branch = dataFunded?.data?.funded_users[i]?.branch;

				fl.push({
					first_name: user?.first_name,
					last_name: user?.last_name,
					email: user?.email,
					id: user?.user_id,
					profile_photo: user?.profile_photo,
					residential_address: user?.residential_address,
					status: "funded",
					branch:branch?.lga,
					kodhex: user?.kodhex,
					phone: user?.phone,
					date_joined: "",
					dob: "",
					officer: `${officer?.first_name} ${officer?.last_name}`,
					officer_img: officer?.profile_photo,
					// officer: officer?.
				});
			}
			setFundedLists(fl);
			setFundedListsCopy(fl);
		}
	}, [dataFunded,]);

	const {
		data: dataUnFunded,
		isLoading: isLoadingUnFundedUsers,
		error: errorUnFunded,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/payment/get_unfunded_accounts`,
		token
	);
	useEffect(() => {
		setUnFundedLists(dataUnFunded?.data?.unfunded_users);
		if (dataUnFunded) {
			let fl: FundedDataType[] = [];
			for (let i = 0; i < dataUnFunded?.data?.unfunded_users?.length; i++) {
				const user = dataUnFunded?.data?.unfunded_users[i]?.user;
				const officer =
					dataUnFunded?.data?.unfunded_users[i]?.field_officer;
				const branch =
					dataUnFunded?.data?.unfunded_users[i]?.branch;

				fl.push({
					first_name: user?.first_name,
					last_name: user?.last_name,
					email: user?.email,
					id: user?.user_id,
					profile_photo: user?.profile_photo,
					residential_address: user?.residential_address,
					status: "not funded",
					kodhex: user?.kodhex,
					phone: user?.phone,
					branch: branch?.lga,
					date_joined: "",
					dob: "",
					officer: `${officer?.first_name} ${officer?.last_name}`,
					officer_img: officer?.profile_photo,
					// officer: officer?.
				});
			}
			setUnFundedLists(fl);
			setUnFundedListsCopy(fl);
		}
	}, [dataUnFunded]);



	useEffect(() => {
		
		if(tab === 'funded') {
			if(branch && branch !== 'All Branches' && fundedLists ) {
				const branches = fundedListsCopy?.filter((item)=> item.branch === branch)
				setFundedLists(branches)
			}
			else setFundedLists(fundedListsCopy)

		}
		if(tab === 'not-funded') {
			if(branch && branch !== 'All Branches' && unFundedLists ) {
				const branches = unFundedListsCopy?.filter((item)=> item.branch === branch)
				setUnFundedLists(branches)
			}
			if (branch  === 'All Branches') {
				setFundedLists(unFundedListsCopy)
			}
			else setFundedLists(unFundedListsCopy)

		}
	}, [branch, tab]) //eslint-disable-line

	
	

	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Dashboard
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
									Total Users Created
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
								{dataDash?.data?.Number_of_Users || 0}{" "}
							</h5>
						</div>
						<div className="bg-[#F6FDF9] rounded-[6px] p-6">
							<div className="flex items-center">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="me-3"
								>
									<path
										d="M6.06219 6.76523C6.05219 6.76523 6.03719 6.76523 6.02719 6.76523C6.01219 6.76523 5.99219 6.76523 5.97719 6.76523C4.84219 6.73023 3.99219 5.84523 3.99219 4.75523C3.99219 3.64523 4.89719 2.74023 6.00719 2.74023C7.11719 2.74023 8.02219 3.64523 8.02219 4.75523C8.01719 5.85023 7.16219 6.73023 6.07719 6.76523C6.06719 6.76523 6.06719 6.76523 6.06219 6.76523ZM6.00219 3.48523C5.30219 3.48523 4.73719 4.05523 4.73719 4.75023C4.73719 5.43523 5.27219 5.99023 5.95219 6.01523C5.96719 6.01023 6.01719 6.01023 6.06719 6.01523C6.73719 5.98023 7.26219 5.43023 7.26719 4.75023C7.26719 4.05523 6.70219 3.48523 6.00219 3.48523Z"
										fill="#22C55E"
									/>
									<path
										d="M5.9965 11.3752C4.6515 11.3752 3.3665 10.8752 2.3715 9.96516C2.2815 9.88516 2.2415 9.76516 2.2515 9.65016C2.3165 9.05516 2.6865 8.50016 3.3015 8.09016C4.7915 7.10016 7.2065 7.10016 8.6915 8.09016C9.3065 8.50516 9.6765 9.05516 9.7415 9.65016C9.7565 9.77016 9.7115 9.88516 9.6215 9.96516C8.6265 10.8752 7.3415 11.3752 5.9965 11.3752ZM3.0365 9.55016C3.8665 10.2452 4.9115 10.6252 5.9965 10.6252C7.0815 10.6252 8.1265 10.2452 8.9565 9.55016C8.8665 9.24516 8.6265 8.95016 8.2715 8.71016C7.0415 7.89016 4.9565 7.89016 3.7165 8.71016C3.3615 8.95016 3.1265 9.24516 3.0365 9.55016Z"
										fill="#22C55E"
									/>
									<path
										d="M6 11.375C3.035 11.375 0.625 8.965 0.625 6C0.625 3.035 3.035 0.625 6 0.625C8.965 0.625 11.375 3.035 11.375 6C11.375 8.965 8.965 11.375 6 11.375ZM6 1.375C3.45 1.375 1.375 3.45 1.375 6C1.375 8.55 3.45 10.625 6 10.625C8.55 10.625 10.625 8.55 10.625 6C10.625 3.45 8.55 1.375 6 1.375Z"
										fill="#22C55E"
									/>
								</svg>
								<h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
									Accounts Credited
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
								{dataDash?.data?.accounts_credited || 0}{" "}
							</h5>
						</div>
						<div className="bg-[#F5F9FF] rounded-[6px] p-6">
							<div className="flex items-center">
								<svg
									width="14"
									height="13"
									viewBox="0 0 14 13"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="me-3"
								>
									<path
										d="M6.72179 2.15234C3.74011 2.15234 1.32299 4.16661 1.32299 6.65134C1.32299 7.88623 1.92002 9.00491 2.88667 9.81788C3.0316 9.93977 3.12259 10.1163 3.12259 10.3057V11.7502H4.32232L4.79852 11.0708C4.87242 10.9653 5.0052 10.9195 5.1299 10.9516C6.16705 11.2183 7.27652 11.2183 8.31368 10.9516C8.43837 10.9195 8.57115 10.9653 8.64505 11.0708L9.12125 11.7502H10.321V10.3198C10.321 10.1225 10.418 9.93789 10.5803 9.82593C11.2251 9.3814 13.3203 8.51175 13.3203 7.58607V6.65134C13.3203 6.29638 13.0517 6.00863 12.7204 6.00863C12.3565 6.00863 12.0595 5.86724 11.9394 5.49124C11.3254 3.56875 9.22211 2.15234 6.72179 2.15234Z"
										stroke="black"
										strokeWidth="1.3406"
										strokeLinejoin="round"
									/>
									<path
										d="M5.81929 3.95228C6.19839 3.75733 6.60132 3.65234 7.01902 3.65234C7.43672 3.65234 7.83965 3.75733 8.21875 3.95228"
										stroke="black"
										strokeWidth="1.3406"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10.0236 5.75391H10.0182"
										stroke="black"
										strokeWidth="1.78747"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M1.91915 4.25391C1.61922 3.95397 1.31929 3.39188 1.31929 2.65258C1.31929 1.71484 2.12499 0.954643 3.11888 0.954643C3.32922 0.954643 3.53112 0.988689 3.71875 1.05126"
										stroke="black"
										strokeWidth="1.3406"
										strokeLinecap="round"
									/>
								</svg>
								<h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
									Savings Plan Created
								</h5>
							</div>
							<h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
								{dataDash?.data?.Savings_plan_created || 0}{" "}
							</h5>
						</div>
					</div>
				</div>
				<div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9 relative">
					<h1 className="text-[20px] font-[500] leading-[24px] text-[#21003D] mb-6">
						All Users
					</h1>

					<div className="mt-10">
						<div className="flex justify-between items-center">
							<div className="inline-flex items-center space-x-10 border-b-[2px] border-b-gray-200">
								<button
									className={`text-[14px] font-[500] text-black py-3 ${
										tab === "funded" &&
										"border-b-black border-b-[2px]"
									}`}
									onClick={() => setTab("funded")}
								>
									Funded
								</button>
								<button
									className={`text-[14px] font-[500] text-black py-3 ${
										tab === "not-funded" &&
										"border-b-black border-b-[2px]"
									}`}
									onClick={() => setTab("not-funded")}
								>
									Not Funded
								</button>
							</div>

							<div className="flex gap-5 items-center">
								<div className="">
									<DropdownMenu modal={false}>
										<DropdownMenuTrigger asChild>
											<button className="w-full justify-center text-center px-6 py-3 outline-none flex items-center border-[1px] border-[#292D32] rounded-[4px]">
												<span className="sr-only">Open menu</span>
												<span className="text-[12px] font-[500] text-[#292D32] flex items-center gap-2">
													<span>
														<svg
															width="15"
															height="15"
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.5 13.8385C7.26083 13.8385 7.0625 13.6402 7.0625 13.401V12.2344C7.0625 11.9952 7.26083 11.7969 7.5 11.7969C7.73917 11.7969 7.9375 11.9952 7.9375 12.2344V13.401C7.9375 13.6402 7.73917 13.8385 7.5 13.8385Z"
																fill="black"
															/>
															<path
																d="M7.5 11.5065C7.26083 11.5065 7.0625 11.3082 7.0625 11.069V9.90234C7.0625 9.66318 7.26083 9.46484 7.5 9.46484C7.73917 9.46484 7.9375 9.66318 7.9375 9.90234V11.069C7.9375 11.3082 7.73917 11.5065 7.5 11.5065Z"
																fill="black"
															/>
															<path
																d="M7.5 9.17318C7.26083 9.17318 7.0625 8.97484 7.0625 8.73568V6.98568C7.0625 4.49484 9.0925 2.46484 11.5833 2.46484H13.3333C13.5725 2.46484 13.7708 2.66318 13.7708 2.90234C13.7708 3.14151 13.5725 3.33984 13.3333 3.33984H11.5833C9.57083 3.33984 7.9375 4.97318 7.9375 6.98568V8.73568C7.9375 8.97484 7.73917 9.17318 7.5 9.17318Z"
																fill="black"
															/>
															<path
																d="M7.49935 9.17318C7.26018 9.17318 7.06185 8.97484 7.06185 8.73568V6.98568C7.06185 4.97318 5.42852 3.33984 3.41602 3.33984H1.66602C1.42685 3.33984 1.22852 3.14151 1.22852 2.90234C1.22852 2.66318 1.42685 2.46484 1.66602 2.46484H3.41602C5.90685 2.46484 7.93685 4.49484 7.93685 6.98568V8.73568C7.93685 8.97484 7.73852 9.17318 7.49935 9.17318Z"
																fill="black"
															/>
															<path
																d="M2.83319 4.5057C2.72236 4.5057 2.61151 4.46487 2.52401 4.37737L1.35734 3.2107C1.18818 3.04154 1.18818 2.76154 1.35734 2.59237L2.52401 1.4257C2.69318 1.25654 2.97321 1.25654 3.14238 1.4257C3.31154 1.59487 3.31154 1.87487 3.14238 2.04404L2.28486 2.90154L3.14238 3.75904C3.31154 3.9282 3.31154 4.2082 3.14238 4.37737C3.05488 4.46487 2.94403 4.5057 2.83319 4.5057Z"
																fill="black"
															/>
															<path
																d="M12.1665 4.5057C12.0557 4.5057 11.9448 4.46487 11.8573 4.37737C11.6882 4.2082 11.6882 3.9282 11.8573 3.75904L12.7149 2.90154L11.8573 2.04404C11.6882 1.87487 11.6882 1.59487 11.8573 1.4257C12.0265 1.25654 12.3065 1.25654 12.4757 1.4257L13.6424 2.59237C13.8115 2.76154 13.8115 3.04154 13.6424 3.2107L12.4757 4.37737C12.3882 4.46487 12.2774 4.5057 12.1665 4.5057Z"
																fill="black"
															/>
														</svg>
													</span>
												
													{branch || 'All Branches'}
												</span>
												<ChevronDown className="h-4 w-4 ml-3" />
											</button>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											align="end"
											className=" bg-white"
										>
											{branches?.length > 0  && (
												<DropdownMenuItem onClick={()=> setBranch('All Branches')}>
												<p>All Branches</p>
											</DropdownMenuItem>
											)}
											{branches?.map((b, i)=> (
												<DropdownMenuItem key={i}  className="cursor-pointer" onClick={()=> setBranch(b.lga)}>
												<p>{b.lga}</p>
												</DropdownMenuItem>
											))}
										
										
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
								<button
									className="rounded-[2px] bg-[#240552] text-white text-[12px] px-6 py-3"
									onClick={handleGeneratePdf}
								>
									{pdfGenerating
										? "Generating PDF..."
										: "Generate PDF"}
								</button>
							</div>
						</div>

						<div className="mt-3">
							{tab === "funded" && (
								<div>
									{isLoadingFundedUsers ? (
										<div className="w-full flex justify-center mt-10">
											<FadeLoader
												color={"#240552"}
												loading={true}
												aria-label="Loading Spinner"
												data-testid="loader"
											/>
										</div>
									) : errorFunded?.message ? (
										<p className="text-center mt-10">
											{errorFunded.message}
										</p>
									) : (
										<div ref={fundedTableRef}>
											<Datatable
												data={fundedLists || []}
												columns={dashboardColumns}
												searchKey="first_name"
											/>
										</div>
									)}
								</div>
							)}

							{tab === "not-funded" && (
								<div>
									{isLoadingUnFundedUsers ? (
										<div className="w-full flex justify-center mt-10">
											<FadeLoader
												color={"#240552"}
												loading={true}
												aria-label="Loading Spinner"
												data-testid="loader"
											/>
										</div>
									) : errorUnFunded?.message ? (
										<p className="text-center mt-10">
											{errorUnFunded.message}
										</p>
									) : (
										<div ref={notfundedTableRef}>
											<Datatable
												data={unFundedLists || []}
												columns={dashboardColumns}
												searchKey="first_name"
											/>
										</div>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

export default Dashboard;
