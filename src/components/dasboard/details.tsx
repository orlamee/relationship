"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tablines";
import PersonalDetails from "@/components/dashboardparts/personaldetails";
import KYC from "@/components/dashboardparts/kyc";
import Nextofkin from "@/components/dashboardparts/nextofkin";
import Activities from "@/components/dashboardparts/activities";
import Banks from "@/components/dashboardparts/banks";
import Verification from "@/components/dashboardparts/verification";

type Props = {
	user_name: string;
	profile_photo: string;
	token: string;
	user: any;
	kodhex: string;
};

export default function UserManagementDetails({
	user_name,
	profile_photo,
	token,
	user,
	kodhex,
}: Props) {
	return (
		<section>
			<NavBar username={user_name} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Dashboard
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				<div className="bg-[#FFFFFF] rounded-[10px] mb-9">
					<div className="p-7">
						<Link
							href={"/dashboard"}
							className="text-[#21003D] font-[500] leading-[30px] text-[16px] flex items-center"
						>
							<Icon icon="teenyicons:left-outline" className="me-2" />
							<span> User Details</span>
						</Link>
					</div>
					<hr />
					<div className="p-7">
						<Tabs defaultValue="details">
							<TabsList>
								<TabsTrigger value="details" className="">
									Personal Details
								</TabsTrigger>
								<TabsTrigger value="kyc">KYC Verfication</TabsTrigger>
								<TabsTrigger value="nextofkin">Next of Kin</TabsTrigger>
								<TabsTrigger value="activities">Activities</TabsTrigger>
								<TabsTrigger value="bank">Bank</TabsTrigger>
								<TabsTrigger value="verification">
									Verification
								</TabsTrigger>
							</TabsList>
							<TabsContent value="details">
								<PersonalDetails user={user} />
							</TabsContent>
							<TabsContent value="kyc">
								<KYC token={token} kodhex={kodhex} />
							</TabsContent>
							<TabsContent value="nextofkin">
								<Nextofkin user={user} />
							</TabsContent>
							<TabsContent value="activities">
								<Activities token={token} user={user} />
							</TabsContent>
							<TabsContent value="bank">
								<Banks user={user} />
							</TabsContent>
							<TabsContent value="verification">
								<Verification />
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</main>
		</section>
	);
}
