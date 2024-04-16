"use client";
import NavBar from "@/components/navbar";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

import {
	FundedDataType,
	dashboardColumns,
	dashboardData,
	nubanColumns,
} from "@/components/dummydata";
import Datatable from "@/components/tables/datatable";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useFetcher } from "@/lib/useFetcher";
import { base_url } from "@/base_url";
import FadeLoader from "react-spinners/FadeLoader";

type Props = {
	username: string;
	token: string;
	profile_photo: string;
	officerId: string;
};

function NubanList({ username, profile_photo, token, officerId }: Props) {
	const [fundedLists, setFundedLists] = useState<FundedDataType[]>();
	const {
		data: fieldOfficer,
		isLoading: isLoading,
		error: error,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/field_officer/get_single_field_officer/${officerId}`,
		token
	);

	const {
		data: users,
		isLoading: isLoadingUsers,
		error: errorUsers,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/field_officer/get_users_by_field_officer/${officerId}`,
		token
	);

	useEffect(() => {
		setFundedLists(users?.data);
		if (users) {
			let fl: FundedDataType[] = [];
			for (let i = 0; i < users?.data?.length; i++) {
				const user = users?.data?.[i]?.user;
				const officer = users?.data?.[i]?.field_officer;

				fl.push({
					first_name: user?.first_name,
					last_name: user?.last_name,
					email: user?.email,
					id: user?.user_id,
					profile_photo: user?.profile_photo,
					residential_address: user?.residential_address,
					status: "funded",
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
		}
	}, [users]);
	const [pdfGenerating, setPdfGenerating] = useState(false);
	const tableRef = useRef<HTMLDivElement>(null);

	const handleGeneratePDF = async () => {
		setPdfGenerating(true);

		if (tableRef.current) {
			const canvas = await html2canvas(tableRef.current);
			const tableImage = canvas.toDataURL("image/png");

			const doc = new jsPDF();

			const imgWidth = 210;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			doc.addImage(tableImage, "PNG", 0, 0, imgWidth, imgHeight);

			doc.save("table_data.pdf");
			setPdfGenerating(false);
		}
	};

	useEffect(() => {}, []);
	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Nuban
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				<div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9 relative">
					<Link href={"/dashboard/nuban"} className="flex items-center">
						<Icon icon="teenyicons:left-outline" className="me-2" />
						<h1 className="text-[20px] font-[500] leading-[24px] text-[#21003D]">
							All Users
						</h1>
					</Link>

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
							<div className="mt-12">
								<div className="flex flex-row justify-between">
									<div className="bg-[#F9FAFB] py-3 px-4 rounded-[4px] flex items-center">
										<div className="w-[30px] h-[30px] relative">
											<Image
												src={fieldOfficer?.data?.profile_photo}
												alt="avi"
												className="rounded-full"
												fill
											/>
										</div>

										<p className="text-[12px] text-black leading-[16px] font-[500] ms-3 capitalize">
											{fieldOfficer?.data?.first_name}{" "}
											{fieldOfficer?.data?.last_name}
										</p>
									</div>
									<button
										className="rounded-[6px] bg-[#240552] text-white px-7 py-4 text-[12px] font-[500] leading-[20px]"
										onClick={handleGeneratePDF}
										disabled={pdfGenerating}
									>
										{pdfGenerating
											? "Generating PDF..."
											: "Generate PDF"}
									</button>
								</div>
								
								{isLoadingUsers ? (
							<div className="w-full flex justify-center mt-10">
								<FadeLoader
									color={"#240552"}
									loading={true}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							</div>
						) : errorUsers?.message ? (
							<p className="text-center mt-10">{errorUsers.message}</p>
						) : (
							<div className="mt-5" ref={tableRef}>
							<Datatable data={fundedLists || []} columns={dashboardColumns} />
						</div>
						)}
							</div>
						)}
					</div>

				

				
				</div>
			</main>
		</section>
	);
}

export default NubanList;
