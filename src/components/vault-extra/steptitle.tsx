"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";

type Props = {
	title: string;
	subtitle: string;
	onClick?: () => void;
};

function Steptitle({ title, subtitle, onClick }: Props) {
	return (
		<div className="max-w-[450px] mx-auto relative">
			<div>
				<h1 className="font-[500] text-[30px] text-center text-[#240552] mb-[6px] mt-1 font-[founder]">
					{title}
				</h1>

				{onClick && (
					<div
						className={`absolute left-0 bottom-[20px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer `}
						onClick={onClick}
					>
						<ChevronLeft className="text-[11px] text-primary" />
					</div>
				)}
			</div>
			<p className=" font-[400] text-[14px] text-center max-w-[450px] mx-auto px-2 text-[#9CA3AF]">
				{subtitle}
			</p>
		</div>
	);
}

export default Steptitle;
