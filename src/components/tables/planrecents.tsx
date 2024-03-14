"use client";
import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { planRecentsType } from "@/dummy";
import Image from "next/image";

type props = {
	planRecents: planRecentsType[];
};
export default function Planrecents(planRecents: props) {
	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow className="bg-[#FAFAFA] rounded-[4px] h-[30px]">
						<TableHead className="text-[#9CA3AF]">Description</TableHead>
						<TableHead className="text-[#9CA3AF]">Date</TableHead>
						<TableHead className="text-[#9CA3AF]">Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{planRecents.planRecents.map((recent: planRecentsType) => (
						<TableRow key={recent.id}>
							<TableCell className="flex items-center">
								<Image
									src={recent.image}
									alt="recent"
									width={25}
									height={25}
									className="mr-2"
								/>
								<p className="font-[500]">{recent.description}</p>
							</TableCell>
							<TableCell className="">
								<div>
									<p>{recent.date.date}</p>
									<p className="text-[10px] text-[#9CA3AF]">
										{recent.date.time}
									</p>
								</div>
							</TableCell>
							<TableCell className="">
								<p className="font-[500]">{recent.amount}</p>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
