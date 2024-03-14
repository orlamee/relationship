"use client";
import React from "react";
import Steptitle from "./steptitle";
import { useRouter } from "next/navigation";

type props = {
	step: string;
	setStep: () => void;
};
function Entername({ step, setStep }: props) {
	const router = useRouter();
	return (
		<>
			<Steptitle title="Enter Name" subtitle="Give your plan a name" />

			<div className="w-full md:w-[450px] mx-auto mt-16">
				<input
					type="text"
					className="border-b-[1px] border-b-primary w-full outline-none pb-1 text-center "
				/>

				<button
					className="bg-[#240552] text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-10"
					onClick={setStep}
				>
					Continue
				</button>
			</div>
		</>
	);
}

export default Entername;
