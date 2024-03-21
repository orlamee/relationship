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
import PersonalDetails from "@/components/paymentparts/personaldetails";
import KYC from "@/components/paymentparts/kyc";
import Nextofkin from "@/components/paymentparts/nextofkin";
import Activities from "@/components/paymentparts/activities";
import Banks from "@/components/paymentparts/banks";
import Verification from "@/components/paymentparts/verification";

type Props = {
	username: string;
	token: string;
	profile_photo: string;
	user: any;
};

export default function UserManagementDetails({
	username,
	profile_photo,
	token,
	user,
}: Props) {
	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Payment
					</h1>
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				<div className="bg-[#FFFFFF] rounded-[10px] mb-9">
					<div className="p-7">
						<Link
							href={"/dashboard/payment"}
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
								<KYC />
							</TabsContent>
							<TabsContent value="nextofkin">
								<Nextofkin />
							</TabsContent>
							<TabsContent value="activities">
								<Activities />
							</TabsContent>
							<TabsContent value="bank">
								<Banks token={token} />
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
