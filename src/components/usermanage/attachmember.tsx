"use client";
import React, { useEffect, useState } from "react";
import avatar from "../../assets/avatar.svg";
import Image from "next/image";
import { SearchIcon, XCircleIcon } from "lucide-react";
import Modal from "../modal";
import success from "../../assets/ep_success-filled.svg";
import { base_url } from "@/base_url";
import axios from "axios";
import toast from "react-hot-toast";
import { userType } from "./main";
import {
	UseFormGetValues,
	UseFormHandleSubmit,
	UseFormReset,
} from "react-hook-form";
import { useAccState } from "../../hook/useAccState";

type HandleBackFunction = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepFourProps {
	handleNext: () => void;
	handleBack: HandleBackFunction;
	token: string;
	doc: File | undefined;
	reset: UseFormReset<userType>;
	getValues: UseFormGetValues<userType>;
}

const StepFour: React.FC<StepFourProps> = ({
	handleNext,
	handleBack,
	token,
	doc,
	reset,
	getValues,
}) => {
	const [loadingDsa, setLoadingDsa] = useState<"idle" | "loading" | "error">(
		"idle"
	);

	const setDetails = useAccState((state) => state.setDetails);

	const [q, setQ] = useState("");

	type DsaType = {
		field_officer_id: string;
		first_name: string;
		last_name: string;
		profile_photo: string;
	};
	const [filteredData, setFilteredData] = useState<DsaType[]>([]);
	const [field_officer_id, setFieldOfficerId] = useState("");
	const [fieldOfficerPhone, setFieldOfficerPhone] = useState("");
	const [onboarding, setOnBoarding] = useState(false);

	useEffect(() => {
		const getDsa = async () => {
			setLoadingDsa("loading");
			try {
				const { data } = await axios.get(
					`${base_url}/ardilla/retail/admin/api/v1/field_officer/get_field_officers`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (data.code === 200) {
					setFilteredData(data.data);
				}
			} catch (error) {
				setLoadingDsa("error");
				console.log(error);
			} finally {
				setLoadingDsa("idle");
			}
		};
		getDsa();

		// return () => controller.abort();
	}, []); //eslint-disable-line

	const [modal, setModal] = useState<"success" | "">("");

	const SuccessModal = () => (
		<Modal>
			<div className="bg-white rounded-[8px] p-7 w-[430px] pb-10">
				<div className="flex items-center justify-between">
					<div />
					<XCircleIcon
						size={18}
						className="text-[#9CA3AF] cursor-pointer"
						onClick={() => setModal("")}
					/>
				</div>

				<div className="">
					<Image src={success} alt="success" className="mx-auto" />
					<p className="text-black font-[600] text-[14px] mb-2 text-center mt-3">
						Account Successfuly Created
					</p>
				</div>
			</div>
		</Modal>
	);

	const dsafilter = () => {
		if (q) {
			let data: DsaType[];
			data = [...filteredData];
			data = data.filter((t) => {
				return t.first_name
					.toLocaleLowerCase()
					.includes(q.toLocaleLowerCase());
			});
			return data;
		} else return filteredData;
	};

	const onBoard = async () => {
		if (onboarding) return;
		setOnBoarding(true);

		try {
			const values = getValues();
			toast.loading("processing", { id: "onboarding" });
			const form_data = new FormData();

			Object.entries(values).forEach(([key, value]) => {
				if (typeof value === "string") {
					form_data.append(key, value);
				}
			});
			form_data.append("field_officer_id", field_officer_id);
			form_data.append(
				"next_of_kin",
				JSON.stringify({
					first_name: values.next_of_kin.first_name,
					last_name: values.next_of_kin.last_name,
					phone: values.next_of_kin.phone,
					relationship: values.next_of_kin.phone,
					email: values.next_of_kin.email,
					address: values.next_of_kin.address,
					gender: values.next_of_kin.gender,
				})
			);

			if (doc) {
				form_data.append("identity_document_photo", doc);
			}

			const { data } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/user/easy_on_board`,
				form_data,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (data.code === 200) {
				toast.success(`${data.message}`, { id: "onboarding" });
				reset();
				setDetails({
					account_bank: data.data.account_bank,
					account_name: data.data.account_name,
					account_number: data.data.account_number,
				});
				setFieldOfficerPhone(data.dsa_phone);
				handleNext();
				// otpModal.onOpen();
			}
			console.log(data);
			if (data.code !== 200) {
				toast.error(`${data.message}`, { id: "onboarding" });
			}
		} catch (error) {
			console.log(error);
			toast.error("network error", { id: "onboarding" });
		} finally {
			setOnBoarding(false);
		}
	};

	return (
		<>
			{modal === "success" && <SuccessModal />}
			<div className="mb-4">
				<div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
					<h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
						Attach a Member
					</h3>
				</div>
				<div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
					<div className="border-[1px] rounded-[4px flex items-center] px-5 py-4 space-x-3 rounded-[4px] mb-6">
						<SearchIcon />
						<input
							type="text"
							className="outline-none w-full text-[13px] placeholder:text-[#D1D5DB]"
							value={q}
							placeholder="Search for members"
							onChange={(e) => {
								setQ(e.target.value);
							}}
						/>
					</div>
					<div className="flex flex-col gap-2 overflow-y-auto h-[350px]">
						{loadingDsa === "loading" && (
							<p className="text-center">Loading...</p>
						)}

						{dsafilter()?.map((d: DsaType) => (
							<div
								key={d.field_officer_id}
								className="flex items-center justify-between bg-neutral-100/50 py-3 px-2 rounded-[2px] cursor-pointer mb-1.5"
								onClick={() => setFieldOfficerId(d.field_officer_id)}
							>
								<div className="flex items-center">
									<div className="relative mr-4 w-[32px] h-[32px] rounded-full">
										<Image
											src={d.profile_photo}
											alt="user"
											className="rounded-full"
											fill
											loading="lazy"
										/>
									</div>
									<h4 className="text-[13px] font-[500] capitalize">
										{d.first_name} {d.last_name}
									</h4>
								</div>
								<input
									type="radio"
									name=""
									id=""
									className="accent-[#21003D] w-4 h-4"
									readOnly
									checked={field_officer_id === d.field_officer_id}
								/>
							</div>
						))}
					</div>
					<div className="flex justify-between items-center mt-6">
						<button
							className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
							onClick={handleBack}
							disabled={onboarding}
						>
							Back
						</button>

						<button
							className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
							onClick={onBoard}
						>
							Create Account
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default StepFour;
