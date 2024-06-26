"use client";
import Image from "next/image";
import info from "../../assets/info.svg";
import { useState } from "react";
import Modal from "../modal";
import { XCircleIcon } from "lucide-react";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod';
import { error } from "console";
import axios from "axios";
import { base_url } from "@/base_url";
import toast from "react-hot-toast";

type props = {
	user: any;
	token:string;
	kodhex:string;
};

export default function PersonalDetails({ user, token, kodhex }: props) {
	const Schema = z.object({
		email:z.string().min(1, 'new email is required').email()
	})

	type dataType = z.infer<typeof Schema>
	const {register, formState:{errors, isSubmitting}, handleSubmit} = useForm<dataType>({resolver: zodResolver(Schema)})


	const updateDetails = async (details:dataType)=> {
		try {
		const {data} = await axios.patch(`${base_url}/ardilla/retail/admin/api/v1/user/email_update`, {kodhex:kodhex, email:details.email}, {
			headers:{
				Authorization: `Bearer ${token}`
			}})

			if(data.code === 200) {
				toast.success(`${data.message}`)
			}
			else if(data.code !== 200) {
				toast.error(`${data.message}`)
			}

		} catch (error:any) {
			toast.error(`${error?.message}`)
			
		}
		
	}
	const [isModalOpen, setIsModalOpen] = useState(false);
	function openModal() {
		setIsModalOpen(true);
	}
	function closeModal() {
		setIsModalOpen(false);
	}
	return (
		<div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
			<div className="grid grid-cols-3 gap-10 justify-between">
				<div className="flex items-center">
					<div className="relative w-[100px] h-[100px] rounded-full">
						<Image
							src={user?.user?.profile_photo}
							alt="user image"
							fill
							className="rounded-full object-center"
						/>
					</div>

					<div className="ms-4">
						<h6 className="text-[#21003D] font-[500] leading-[20px] mb-3 text-[15px]">
							{user?.user?.last_name} {user?.user?.first_name}
						</h6>
						<p className="text-[#8807F7] font-[500] leading-[12px] text-[12px]">
							&lt;{user?.user?.kodhex}/&gt;
						</p>
					</div>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Email
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.user?.email}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Date of Birth
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.user?.date_of_birth}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Phone Number
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.user?.phone}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Address
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.user?.residential_address}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Date Joined
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						10/11/2023
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Gender
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.user?.gender}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						BVN
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.user?.bvn_hash}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Field Officer
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px] capitalize">
						{user?.field_officer?.first_name}{" "}
						{user?.field_officer?.last_name}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Customer Care
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px] capitalize">
						{user?.customer_care?.first_name}{" "}
						{user?.customer_care?.last_name}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Branch
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.branch?.lga}
					</h6>
				</div>
			</div>
			<div className="text-end mt-4">
				<button
					className="px-6 py-3 text-black text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#F3F4F6]"
					onClick={openModal}
				>
					Update Details
				</button>
			</div>
			{isModalOpen && (
				<Modal>
					<form className="bg-white rounded-[16px] px-6 pb-6 w-[700px]" onSubmit={handleSubmit(updateDetails)} >
					<fieldset disabled={isSubmitting}>
						<div className="flex justify-between px-4 py-6 border-b-[1px] border-b-[#F5F5F5] items-center">
							<h1 className="text-[14px] font-[500] leading-[18px]">
								Edit User Details
							</h1>
							<XCircleIcon
								className="text-[#9CA3AF] cursor-pointer w-[18px]"
								onClick={closeModal}
							/>
						</div>
						<div className="my-6">
							<div className="mb-6 flex flex-wrap">
								<div className="w-1/2 pr-2">
									<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
										First Name
									</label>
									<input
										type="text"
										placeholder={user?.user?.first_name}
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
								<div className="w-1/2 pl-2">
									<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
										Last Name
									</label>
									<input
										type="text"
										id="last-name"
										placeholder={user?.user?.last_name}
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
							</div>
							<div className="mb-6 flex flex-wrap">
								<div className="w-1/2 pr-2">
									<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
										Phone Number
									</label>
									<input
										type="tel"
										placeholder={user?.user?.phone}
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
								<div className="w-1/2 pl-2">
									<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
										Email
									</label>
									<input
										type="email"
										placeholder={		user?.user?.email}
										{...register("email", {required:true})}
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
									{errors.email && <span className="text-red-500 text-[13px]">{errors.email.message}
										</span>}
								</div>
							</div>
							<div className="mb-6 flex flex-wrap">
								<div className="w-1/2 pr-2">
									<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
										Gender
									</label>
									<input
										type="text"
										placeholder=			{user?.user?.gender}
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
								<div className="w-1/2 pl-2">
									<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
										BVN
									</label>
									<input
										type="number"
										placeholder=				{user?.user?.bvn_hash}
										className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
									/>
								</div>
							</div>
							<div className="mb-6">
								<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
									Address
								</label>
								<input
									type="text"
									placeholder=	{user?.user?.residential_address}
									className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								/>
							</div>
							<div className="mb-6">
								<label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
									Upload Utility Bill
								</label>
								<input
									type="file"
									placeholder="Allen Ikeja, Lagos, Nigeria"
									className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								/>
							</div>
							<div className="text-end">
								<button
									className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552] disabled:bg-[#240552]/40"
								type="submit"
								disabled={isSubmitting}
								>
									

									{isSubmitting ? "Processing..." : "Save"}
								</button>
							</div>
						</div>
						</fieldset>
					</form>
				</Modal>
			)}
		</div>
	);
}
