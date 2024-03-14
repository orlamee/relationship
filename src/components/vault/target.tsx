import React from "react";
import PanelHeader from "../Accountcomponents/panelHeader";

export default function Target() {
	return (
		<div className="relative h-[75vh]">
			<PanelHeader
				title="Change Your Target"
				subtitle="Choose what you want to do"
			/>

			<div className="mt-6 flex flex-col gap-5">
				<input
					className="p-5 outline-none w-full border-[1px] border-[#F3F4F6] placeholder:text-[#9CA3AF] text-[14px]"
					placeholder="Give Your Plan a Name"
				/>
				<input
					className="p-5 outline-none w-full border-[1px] border-[#F3F4F6] placeholder:text-[#9CA3AF] text-[14px]"
					placeholder="Increase Target Amount"
				/>
			</div>
			<div className="absolute top-[93%] w-full">
				<button className="rounded-[8px] text-[14px] text-white bg-primary w-full p-5">
					Save Changes
				</button>
			</div>
		</div>
	);
}
