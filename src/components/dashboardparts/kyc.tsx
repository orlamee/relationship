"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import nin from "../../assets/nin.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";
import axios from "axios";
import success from "../../assets/ep_success-filled.svg";
import failed from "../../assets/failed-ks1ODQxJMt.svg";
import toast from "react-hot-toast";
import FadeLoader from "react-spinners/FadeLoader";

type props = {
	kodhex: string;
	token: string;
};

export default function KYC({ kodhex, token }: props) {
	const [Ninapproved, setNinApproved] = useState(false);
	const [idapproved, setIdApproved] = useState(false);
	const [billapproved, setBillApproved] = useState(false);
	const [NinRejected, setNinRejected] = useState(false);
	const [iDRejected, setIdRejected] = useState(false);
	const [billRejected, setBillRejected] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupImageSrc, setPopupImageSrc] = useState("");
	const [isApprovingNin, setIsApprovingNin] = useState(false);
	const [isApprovingId, setIsApprovingId] = useState(false);
	const [isApprovingBill, setIsApprovingBill] = useState(false);
	const [ninImage, setNinImage] = useState("");
	const [IdImage, setIdImage] = useState("");
	const [utilityImage, setUtilityImage] = useState("");

	const handleImageClick = () => {
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	const {
		data: NinData,
		isLoading: isLoadingNin,
		error: errorNin,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/user/get_nin/${kodhex}`,
		token
	);

	useEffect(() => {
		setNinImage(NinData?.data?.image_upload);
	}, [NinData]);

	const {
		data: IdData,
		isLoading: isLoadingId,
		error: errorId,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/user/get_document/${kodhex}`,
		token
	);

	const {
		data: utilityData,
		isLoading: isLoadingUtility,
		error: errorUtility,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/user/get_utility_bill/${kodhex}`,
		token
	);

	useEffect(() => {
		setUtilityImage(utilityData?.data?.utility_bill_upload);
	}, [utilityData]);

	console.log({ utilityData });

	useEffect(() => {
		setIdImage(IdData?.data?.document);
	}, [IdData]);

	const approve_nin = async () => {
		if (!NinData?.data?.user_id) {
			toast.error("NIN required", { id: "approve" });
			return;
		}
		if (isApprovingNin) {
			return;
		}
		setIsApprovingNin(true);
		toast.loading("approving NIN", { id: "approve" });
		const { data } = await axios.patch(
			`${base_url}/ardilla/retail/admin/api/v1/user/approve_nin`,
			{
				user_id: NinData?.data?.user_id,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (data.code === 200) {
			setNinApproved(true);
		}
		try {
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "approve" });
		} finally {
			setIsApprovingNin(false);
			toast.dismiss("approve");
		}
	};

	const reject_nin = async () => {
		if (!NinData?.data?.user_id) {
			toast.error("NIN required", { id: "reject" });
			return;
		}
		if (isApprovingNin) {
			return;
		}
		setIsApprovingNin(true);
		toast.loading("rejecting NIN", { id: "reject" });
		const { data } = await axios.patch(
			`${base_url}/ardilla/retail/admin/api/v1/user/reject_nin`,
			{
				user_id: NinData?.data?.user_id,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (data.code === 200) {
			setNinRejected(true);
		}
		try {
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "reject" });
		} finally {
			setIsApprovingNin(false);
			toast.dismiss("reject");
		}
	};

	const approve_ID = async () => {
		if (!IdData?.data?.user_id) {
			toast.error("user id required", { id: "approve" });
			return;
		}
		if (isApprovingId) {
			return;
		}
		setIsApprovingId(true);
		toast.loading("approving Id", { id: "approve" });
		const { data } = await axios.patch(
			`${base_url}/ardilla/retail/admin/api/v1/user/approve_document`,
			{
				user_id: IdData?.data?.user_id,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (data.code === 200) {
			setIdApproved(true);
		}
		try {
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "approve" });
		} finally {
			setIsApprovingId(false);
			toast.dismiss("approve");
		}
	};

	const reject_ID = async () => {
		if (!IdData?.data?.user_id) {
			toast.error("id required", { id: "reject" });
			return;
		}
		if (isApprovingId) {
			return;
		}
		setIsApprovingId(true);
		toast.loading("rejecting Id", { id: "reject" });
		const { data } = await axios.patch(
			`${base_url}/ardilla/retail/admin/api/v1/user/reject_document`,
			{
				user_id: IdData?.data?.user_id,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (data.code === 200) {
			setIdRejected(true);
		}
		try {
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "reject" });
		} finally {
			setIsApprovingId(false);
			toast.dismiss("reject");
		}
	};

	const approve_Bill = async () => {
		if (!utilityData?.data?.user_id) {
			toast.error("user id required", { id: "approve" });
			return;
		}
		if (isApprovingBill) {
			return;
		}
		setIsApprovingBill(true);
		toast.loading("approving bill", { id: "approve" });
		const { data } = await axios.patch(
			`${base_url}/ardilla/retail/admin/api/v1/user/approve_utility_bill`,
			{
				user_id: utilityData?.data?.user_id,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (data.code === 200) {
			setBillApproved(true);
		}
		try {
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "approve" });
		} finally {
			setIsApprovingBill(false);
			toast.dismiss("approve");
		}
	};

	const reject_Bill = async () => {
		if (!utilityData?.data?.user_id) {
			toast.error("user id required", { id: "reject" });
			return;
		}
		if (isApprovingBill) {
			return;
		}
		setIsApprovingId(true);
		toast.loading("rejecting bill", { id: "reject" });
		const { data } = await axios.patch(
			`${base_url}/ardilla/retail/admin/api/v1/user/reject_utility_bill`,
			{
				user_id: utilityData?.data?.user_id,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (data.code === 200) {
			setBillRejected(true);
		}
		try {
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "reject" });
		} finally {
			setIsApprovingId(false);
			toast.dismiss("reject");
		}
	};


	return (
		<div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
			<Tabs defaultValue="tier-one" className="w-full">
				<TabsList>
					<TabsTrigger value="tier-one">Tier 1</TabsTrigger>
					<TabsTrigger value="tier-two">Tier 2</TabsTrigger>
					<TabsTrigger value="tier-three">Tier 3</TabsTrigger>
				</TabsList>
				<TabsContent value="tier-one">
					<div>
						{isLoadingNin ? (
							<div className="w-full flex justify-center mt-10">
								<FadeLoader
									color={"#240552"}
									loading={true}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							</div>
						) : errorNin?.message ? (
							<p className="text-center mt-10">{errorNin.message}</p>
						) : (
							<div>
								{NinData?.code === 200 && (
									<div>
										<div className="flex flex-row gap-x-10">
											<div className="w-1/3">
												<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
													National Identification Number (NIN Slip)
												</h3>
												<div className="relative w-full block h-[400px] overflow-hidden">
													{ninImage && (
														<Image
															src={ninImage}
															alt="nin"
															loading="eager"
															className="my-4 w-full cursor-pointer object-cover"
															fill
														/>
													)}

													{ninImage && (
														<button
															className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
															onClick={() => {
																setPopupImageSrc(
																	NinData?.data?.image_upload
																);
																handleImageClick();
															}}
														>
															View
														</button>
													)}
												</div>
												<div className="flex flex-row gap-10">
													<div className="w-2/3">
														<div className="border border-[#F3F4F6] p-[18px] rounded-[2px]">
															<h3>{NinData?.data?.nin}</h3>
														</div>
													</div>
													<div className="w-1/3 hidden">
														<button className="border border-[#16A34A] rounded-[2px] text-[#16A34A] font-[500] leading-[20px] text-[12px] p-5 w-full flex items-center justify-center">
															<Icon
																icon="mdi:tick-circle-outline"
																className="text-[#16A34A] me-2"
															/>
															<span>Approved</span>
														</button>
													</div>
												</div>
												<div className="mt-9 flex flex-row gap-x-5">
													<button
														className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
														disabled={isApprovingNin}
														onClick={approve_nin}
													>
														Approve
													</button>
													<button
														className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
														disabled={isApprovingNin}
														onClick={reject_nin}
													>
														Decline
													</button>
												</div>
												<div className="mt-5 hidden">
													<input
														type="text"
														placeholder="Reason"
														className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
													/>
												</div>
											</div>
											<div className="w-1/3">
												<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
													User Details
												</h3>
												<div className="rounded-[8px] border border-[#E5E7EB] px-6 py-10 mt-4">
													<div>
														<div className="flex items-center justify-between mb-6">
															<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
																First Name
															</h2>
															<h2 className="text-[#000] font-[500] leading-[20px] text-[12px] capitalize">
																{
																	NinData?.data?.full_name?.split(
																		" "
																	)[1]
																}
															</h2>
														</div>
														<div className="flex items-center justify-between mb-6">
															<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
																Last Name
															</h2>
															<h2 className="text-[#000] font-[500] leading-[20px] text-[12px] capitalize">
																{
																	NinData?.data?.full_name?.split(
																		" "
																	)[0]
																}
															</h2>
														</div>
														<div className="flex items-center justify-between mb-6">
															<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
																Date of Birth
															</h2>
															<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
																{NinData?.data?.date_of_birth}
															</h2>
														</div>
														<div className="flex items-center justify-between mb-6">
															<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
																Gender
															</h2>
															<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
																{NinData?.data?.gender}
															</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
										{Ninapproved && (
											<div className="overlay">
												<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
													<span
														className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
														onClick={() => setNinApproved(false)}
													>
														&times;
													</span>
													<Image
														src={success}
														alt="success image"
														className="w-[60px] h-[60px] mx-auto mb-5 mt-7"
													/>

													<h1 className="text-center font-[500] text-[20px] mb-2">
														Nin Approved
													</h1>
													<p className="text-[#9ca3af] text-[12px] text-center mb-5">
														Nin Approved Successfully
														<span className="text-black hidden">
															Ayodeji Michael
														</span>
													</p>
												</div>
											</div>
										)}
										{NinRejected && (
											<div className="overlay">
												<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
													<span
														className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
														onClick={() => setNinRejected(false)}
													>
														&times;
													</span>
													<Image
														src={failed}
														alt="success image"
														className="w-[80px] h-[80px] mx-auto mb-5 mt-7"
													/>

													<h1 className="text-center font-[500] text-[20px] mb-2">
														Nin Rejected
													</h1>
													<p className="text-[#9ca3af] text-[12px] text-center mb-5">
														NIN rejected successfully.
														{/* <span className="text-black">Ayodeji Michael</span> */}
													</p>
												</div>
											</div>
										)}
									</div>
								)}
								{NinData?.code === 400 && (
									<p className="text-center text-black">
										Document not uploaded by user
									</p>
								)}
							</div>
						)}
					</div>
				</TabsContent>
				<TabsContent value="tier-two">
					<div>
						{isLoadingId ? (
							<div className="w-full flex justify-center mt-10">
								<FadeLoader
									color={"#240552"}
									loading={true}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							</div>
						) : errorId?.message ? (
							<p className="text-center mt-10">{errorId.message}</p>
						) : (
							<div>
								<div className="flex flex-row gap-x-10">
									<div className="w-1/3">
										<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Valid ID Card
										</h3>
										<div className="relative w-full block h-[400px] overflow-hidden">
											{IdImage && (
												<Image
													src={IdImage}
													alt="nin"
													loading="eager"
													className="my-4 w-full cursor-pointer object-cover"
													fill
												/>
											)}

											{IdImage && (
												<button
													className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
													onClick={() => {
														setPopupImageSrc(
															IdData?.data?.document
														);
														handleImageClick();
													}}
												>
													View
												</button>
											)}
										</div>
										<div className="flex flex-row gap-10">
											<div className="w-2/3">
												<div className="border border-[#F3F4F6] p-[18px] rounded-[2px]">
													<h3>{IdData?.data?.document_id}</h3>
												</div>
											</div>
											<div className="w-1/3 hidden">
												<button className="border border-[#16A34A] rounded-[2px] text-[#16A34A] font-[500] leading-[20px] text-[12px] p-5 w-full flex items-center justify-center">
													<Icon
														icon="mdi:tick-circle-outline"
														className="text-[#16A34A] me-2"
													/>
													<span>Approved</span>
												</button>
											</div>
										</div>
										<div className="mt-9 flex flex-row gap-x-5">
											<button
												className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
												disabled={isApprovingId}
												onClick={approve_ID}
											>
												Approve
											</button>
											<button
												className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
												disabled={isApprovingId}
												onClick={reject_ID}
											>
												Decline
											</button>
										</div>
										<div className="mt-5 hidden">
											<input
												type="text"
												placeholder="Reason"
												className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
											/>
										</div>
									</div>
									<div className="w-1/3">
										<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											User Details
										</h3>
										<div className="rounded-[8px] border border-[#E5E7EB] px-6 py-10 mt-4">
											<div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														First Name
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px] capitalize">
														{
															IdData?.data?.full_name?.split(
																" "
															)[1]
														}
													</h2>
												</div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														Last Name
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px] capitalize">
														{
															IdData?.data?.full_name?.split(
																" "
															)[0]
														}
													</h2>
												</div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														Date of Birth
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
														{IdData?.data?.date_of_birth}
													</h2>
												</div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														Gender
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
														{IdData?.data?.gender}
													</h2>
												</div>
											</div>
										</div>
									</div>
								</div>
								{idapproved && (
									<div className="overlay">
										<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
											<span
												className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
												onClick={() => setIdApproved(false)}
											>
												&times;
											</span>
											<Image
												src={success}
												alt="success image"
												className="w-[60px] h-[60px] mx-auto mb-5 mt-7"
											/>

											<h1 className="text-center font-[500] text-[20px] mb-2">
												ID Card Approved
											</h1>
											<p className="text-[#9ca3af] text-[12px] text-center mb-5">
												ID Card Approved Successfully
												<span className="text-black hidden">
													Ayodeji Michael
												</span>
											</p>
										</div>
									</div>
								)}
								{iDRejected && (
									<div className="overlay">
										<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
											<span
												className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
												onClick={() => setIdRejected(false)}
											>
												&times;
											</span>
											<Image
												src={failed}
												alt="success image"
												className="w-[80px] h-[80px] mx-auto mb-5 mt-7"
											/>

											<h1 className="text-center font-[500] text-[20px] mb-2">
												ID Card Rejected
											</h1>
											<p className="text-[#9ca3af] text-[12px] text-center mb-5">
												ID Card Rejected successfully.
												{/* <span className="text-black">Ayodeji Michael</span> */}
											</p>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</TabsContent>
				<TabsContent value="tier-three">
					<div>
						{isLoadingUtility ? (
							<div className="w-full flex justify-center mt-10">
								<FadeLoader
									color={"#240552"}
									loading={true}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							</div>
						) : errorUtility?.message ? (
							<p className="text-center mt-10">{errorUtility.message}</p>
						) : (
							<div>
								<div className="flex flex-row gap-x-10">
									<div className="w-1/3">
										<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											Utility Bill ({utilityData?.data?.type})
										</h3>
										<div className="relative w-full block h-[400px] overflow-hidden">
											{utilityImage && (
												<Image
													src={utilityImage}
													alt="utility bill"
													loading="eager"
													className="my-4 w-full cursor-pointer object-cover"
													fill
												/>
											)}

											{utilityImage && (
												<button
													className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
													onClick={() => {
														setPopupImageSrc(
															utilityData?.data
																?.utility_bill_upload
														);
														handleImageClick();
													}}
												>
													View
												</button>
											)}
										</div>
										<div className="flex flex-row gap-10">
											<div className="w-2/3">
												<div className="border border-[#F3F4F6] p-[18px] rounded-[2px]">
													<h3>{utilityData?.data?.document_id}</h3>
												</div>
											</div>
											<div className="w-1/3 hidden">
												<button className="border border-[#16A34A] rounded-[2px] text-[#16A34A] font-[500] leading-[20px] text-[12px] p-5 w-full flex items-center justify-center">
													<Icon
														icon="mdi:tick-circle-outline"
														className="text-[#16A34A] me-2"
													/>
													<span>Approved</span>
												</button>
											</div>
										</div>

										<div className="mt-6 flex flex-wrap">
											<div className="w-1/2 pr-2">
												<label
													htmlFor="date"
													className="block mb-2 text-[12px] font-[500] text-[#000]"
												>
													Address
												</label>
												<input
													type="text"
													className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
													value={utilityData?.data?.address}
													disabled
												/>
											</div>
											<div className="w-1/2 pl-2">
												<label
													htmlFor="last-name"
													className="block mb-2 text-[12px] font-[500] text-[#000]"
												>
													State
												</label>
												<input
													type="text"
													className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
													value={utilityData?.data?.state}
													disabled
												/>
											</div>
										</div>
										<div className="mt-6 flex flex-wrap">
											<div className="w-1/2 pr-2">
												<label
													htmlFor="date"
													className="block mb-2 text-[12px] font-[500] text-[#000]"
												>
													LGA
												</label>
												<input
													type="text"
													className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
													value={utilityData?.data?.lga}
													disabled
												/>
											</div>
											<div className="w-1/2 pl-2">
												<label
													htmlFor="last-name"
													className="block mb-2 text-[12px] font-[500] text-[#000]"
												>
													Nearest Landmark
												</label>
												<input
													type="text"
													className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
													value={
														utilityData?.data?.nearest_landmark
													}
													disabled
												/>
											</div>
										</div>
										<div className="mt-9 flex flex-row gap-x-5">
											<button
												className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
												disabled={isApprovingBill}
												onClick={approve_Bill}
											>
												Approve
											</button>
											<button
												className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full"
												disabled={isApprovingId}
												onClick={reject_Bill}
											>
												Decline
											</button>
										</div>
									</div>
									<div className="w-1/3">
										<h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
											User Details
										</h3>
										<div className="rounded-[8px] border border-[#E5E7EB] px-6 py-10 mt-4">
											<div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														First Name
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px] capitalize">
														{
															utilityData?.data?.full_name?.split(
																" "
															)[1]
														}
													</h2>
												</div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														Last Name
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px] capitalize">
														{
															utilityData?.data?.full_name?.split(
																" "
															)[0]
														}
													</h2>
												</div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														Date of Birth
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
														{utilityData?.data?.date_of_birth}
													</h2>
												</div>
												<div className="flex items-center justify-between mb-6">
													<h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
														Gender
													</h2>
													<h2 className="text-[#000] font-[500] leading-[20px] text-[12px]">
														{utilityData?.data?.gender}
													</h2>
												</div>
											</div>
										</div>
									</div>
								</div>
								{billapproved && (
									<div className="overlay">
										<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
											<span
												className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
												onClick={() => setBillApproved(false)}
											>
												&times;
											</span>
											<Image
												src={success}
												alt="success image"
												className="w-[60px] h-[60px] mx-auto mb-5 mt-7"
											/>

											<h1 className="text-center font-[500] text-[20px] mb-2">
											{utilityData?.data?.type} Approved
											</h1>
											<p className="text-[#9ca3af] text-[12px] text-center mb-5">
											{utilityData?.data?.type} Approved Successfully
												<span className="text-black hidden">
													Ayodeji Michael
												</span>
											</p>
										</div>
									</div>
								)}
								{billRejected && (
									<div className="overlay">
										<div className="w-[450px] bg-white relative rounded-[12px] h-[220px]">
											<span
												className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full absolute right-4 top-2"
												onClick={() => setBillRejected(false)}
											>
												&times;
											</span>
											<Image
												src={failed}
												alt="success image"
												className="w-[80px] h-[80px] mx-auto mb-5 mt-7"
											/>

											<h1 className="text-center font-[500] text-[20px] mb-2">
											{utilityData?.data?.type} Rejected
											</h1>
											<p className="text-[#9ca3af] text-[12px] text-center mb-5">
											{utilityData?.data?.type} Rejected successfully.
												{/* <span className="text-black">Ayodeji Michael</span> */}
											</p>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</TabsContent>
			</Tabs>
			{/* Popup */}
			{showPopup && (
				<div className="overlay">
					<div className="popup relative w-[700px] h-[400px]">
						<Image
							src={popupImageSrc}
							alt="Popup Image"
							className="popup-image mb-5 object-cover"
							fill
						/>
						<span
							className="close-btn cursor-pointer bg-white w-[30px] h-[30px] text-[20px] flex justify-center items-center rounded-full absolute top-[410px] left-0"
							onClick={handleClosePopup}
						>
							&times;
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
