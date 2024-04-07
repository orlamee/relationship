"use client";
import React, { useEffect, useRef, useState } from "react";
import Steptitle from "./steptitle";
import { useRouter } from "next/navigation";
import dib from "../../assets/vault.svg";
import Image from "next/image";
// import refresh from "../../assets/static/refresh.png";
import kodhex from "../../assets/kodhex (2).svg";
// import insufficientKodhex from "../../assets/static/insufficient kodex.svg";
import withdraw from "../../assets/withdraw.svg";
import {
	Axis3D,
	Ban,
	CheckCircle2,
	ChevronDown,
	ChevronLeftCircle,
	ChevronRight,
	Code2,
	Download,
	Files,
	XCircleIcon,
} from "lucide-react";
// import savings from "../../assets/static/savingsss.svg";
// import mastercard from "../../assets/static/Mastercard logo.png";
import Modal from "../modal";
import { AnimatePresence, motion } from "framer-motion";
import note from "../../assets/note.svg";
import success from "../../assets/success.png";
import { detailsType, vaultLiteVal } from "./createVault";
// import failed from "../../assets/static/failed-ks1ODQxJMt.png";
// import CurrencyInput from "react-currency-input-field";
// import bank from "../../assets/static/bank.svg";
// import card from "../../assets/static/card.svg";
// import ussd from "../../assets/static/ussd.svg";
// import master from "../../assets/static/Mastercard logo.png";
// import wema from "../../assets/static/wema bank.png";
// import clock from "../../assets/static/clock.png";
import { userSlice } from "@/hook/user";
import { base_url } from "@/base_url";
import axios from "axios";
import toast from "react-hot-toast";
import {
	UseFormRegister,
	UseFormReset,
	UseFormSetFocus,
	UseFormWatch,
} from "react-hook-form";
import { PasswordInput } from "../ui/passwordinput";
import { useFetcher } from "@/lib/useFetcher";

type props = {
	setStep: () => void;
	details: detailsType | undefined;
	watch: UseFormWatch<vaultLiteVal>;
	token: string;
	selectedD: string;
	selectedDom: string;
	selectedF: string;
	register: UseFormRegister<vaultLiteVal>;
	setFocus: UseFormSetFocus<vaultLiteVal>;
	resetStep: () => void;
	resetForm: UseFormReset<vaultLiteVal>;
};
function OverView({
	setStep,
	details,
	watch,
	token,
	selectedD,
	selectedDom,
	selectedF,
	register,
	setFocus,
	resetStep,
	resetForm,
}: props) {
	const [isLoading, setIsLoading] = useState(false);
	const user = userSlice();
	const router = useRouter();
	const [balance, setBalance] = useState("");
	const [isRefreshing, setIsRefreshing] = useState(false);

	const pinRef = useRef<HTMLInputElement>(null);

	type transDetailsType = {
		amount: number;
		transaction_type: string;
		transaction_details: {
			credited_to: string;
			remark: string;
			sender_details: string;
		};
		transaction_ref: string;
		transaction_description: string;
		transaction_fee: number;
		status: string;
	};

	const {
		data: userData,
		isLoading: isLoadingUser,
		error: errorUser,
	} = useFetcher(
		`${base_url}/ardilla/retail/admin/api/v1/field_officer/get_single_user/${user.user?.kodhex}`,
		token
	);
	useEffect(() => {
		setBalance(
			userData?.data?.user.user?.ardilla_user_kodhex_wallet
				?.wallet_book_balance
		);
	}, [userData]);

	const onRefresh = async () => {
		try {
			if (isRefreshing) return;
			setIsRefreshing(true);

			toast.loading("refreshing..", { id: "refresh" });
			const { data } = await axios.get(
				`${base_url}/ardilla/retail/admin/api/v1/field_officer/get_single_user/${user.user?.kodhex}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (data.code === 200) {
				toast.success("refreshed", { id: "refresh" });
				setBalance(
					data?.data?.user.user?.ardilla_user_kodhex_wallet
						?.wallet_book_balance
				);
			}
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.messgae}`, { id: "refresh" });
		} finally {
			setIsRefreshing(false);
		}
	};

	const [transDetails, setTransDetails] = useState<transDetailsType>();

	const [overviewStep, setOverviewStep] = useState<"enter pin" | "">(
		"enter pin"
	);
	const [pin, setPin] = useState("");
	const [modal, setModal] = useState<
		| "overview"
		| "receipt"
		| "payment sent"
		| "payment failed"
		| "topup success"
		| "topup"
		| "topup failed"
		| "in progress"
		| "pay"
		| ""
	>("");

	const [topupStep, settopupStep] = useState<
		| "choose method"
		| "debit card"
		| "enter pin"
		| "bank transfer"
		| "ussd"
		| ""
	>("choose method");
	const [selectedBank, setSelectedBank] = useState("");
	const [showDropDown, setShowDropDown] = useState(false);
	const banks = [
		"GTbank",
		"First Bank",
		"Globus Bank",
		"UBA Bank",
		"Union BANK",
	];

	const OverViewModal = () => (
		<Modal>
			<div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px]">
				<>
					<div className="flex justify-between w-full items-center">
						<div></div>
						<div>
							<h1 className="font-[500] text-[26px] text-center text-primary">
								Enter PIN
							</h1>
							<p className="text-[12px] font-[500] text-gray400 text-center">
								Enter six (6) digit transaction pin
							</p>
						</div>
						<XCircleIcon
							className="w-[17px] text-gray400 cursor-pointer"
							onClick={() => setModal("")}
						/>
					</div>

					<div className="mb-5 mt-8">
						<input
							type="text"
							name=""
							id=""
							className="w-full outline-none rounded-[4px] bg-[#F9FAFB] px-5 py-4 text-[12px] font-[500]"
							placeholder="Enter Pin"
						/>

						<button
							className="bg-primary text-white p-4 rounded-[8px] w-full text-[14px] font-[500] mt-10 mb-8"
							onClick={() => {
								setModal("payment sent");
								// setOverviewStep("overview");
							}}
						>
							Confirm
						</button>
					</div>
				</>
			</div>
		</Modal>
	);

	const PaymentSentModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-12"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal("");
								resetForm({
									end_date: "",
									name: "",
									target_amount: "",
									time: "",
									trans_pin: "",
								});
								resetStep();
							}}
						/>
					</div>
					<div className="mx-auto flex justify-center">
						<Image
							src={success}
							width={179}
							height={179}
							alt="success"
							className="flex justify-center"
						/>
					</div>

					<h1 className="text-[20px] text-black font-[700] text-center mt-6 mb-2">
						Success
					</h1>
					<p className="text-center text-[12px] font-[500] text-[#9CA3AF] max-w-[329px] mx-auto mb-5">
						Vault Extra savings plan have been successfully created.
					</p>

					<div
						className="text-[#3D0072] cursor-pointer text-[10px] justify-center text-center bg-[#F9FAFB] rounded-[8px] w-[327px] mx-auto  h-[45px] flex items-center"
						onClick={() => setModal("receipt")}
					>
						<Image
							src={note}
							alt="note"
							width={17}
							height={17}
							className="mr-[6px]"
						/>
						View Receipt
					</div>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const PaymentFailedModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-12"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal("");
							}}
						/>
					</div>
					<div className="mx-auto flex justify-center">
						{/* <Image
							src={failed}
							width={194}
							height={194}
							alt="failed"
							className="flex justify-center"
						/> */}
					</div>

					<h1 className="text-[20px] font-[700] text-center mt-4 mb-2">
						Something Went Wrong
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400 mx-auto max-w-[312px]">
						Transaction failed. Please try again later
					</p>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const TopupSuccessModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-10"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal("");
							}}
						/>
					</div>
					<div className="mx-auto flex justify-center">
						{/* <Image
							src={success}
							width={179}
							height={179}
							alt="success"
							className="flex justify-center"
						/> */}
					</div>

					<h1 className="text-[26px] font-[500] text-center mt-6 mb-2">
						Top Up Successful
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
						Your just attempted top up is been processed, You would
						receive a confirmation message as soon as its done
						successfully
					</p>

					<div
						className="text-[#3D0072] mt-5 cursor-pointer mb-5 text-[10px] mx-auto justify-center text-center bg-[#F9FAFB] rounded-[8px] w-[125px] h-[33px] flex items-center"
						// onClick={() => setModal("receipt")}
					>
						{/* <Image
							src={note}
							alt="note"
							width={17}
							height={17}
							className="mr-[6px]"
						/> */}
						View Receipt
					</div>

					<button
						className="w-full p-5 text-[14px] font-[500] bg-primary text-white rounded-[10px]"
						onClick={() => router.push("./dib?id=ufuhwfhoirwoihiwpo")}
					>
						Return To Overview
					</button>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const InprogressModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-10"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal("");
							}}
						/>
					</div>
					<div className="mx-auto flex justify-center">
						{/* <Image
							src={clock}
							width={138}
							height={138}
							alt="success"
							className="flex justify-center"
						/> */}
					</div>

					<h1 className="text-[20px] font-[700] text-center mt-4 mb-2">
						Payment In Progress
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400  mx-auto">
						We are currently processing your payment and it may <br />{" "}
						take a few minutes.
					</p>

					<button
						className="w-full p-5 text-[14px] font-[500] bg-primary text-white rounded-[10px] mt-11"
						onClick={() => setModal("overview")}
					>
						Return To Overview
					</button>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const TopupFailedModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-10"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal("");
							}}
						/>
					</div>
					<div className="mx-auto flex justify-center">
						{/* <Image
							src={failed}
							width={194}
							height={194}
							alt="failed"
							className="flex justify-center"
						/> */}
					</div>

					<h1 className="text-[20px] font-[700] text-center mb-2">
						Top Up Declined
					</h1>
					<p className="text-center text-[12px] mb-6 font-[500] text-gray400 mx-auto max-w-[312px]">
						Your deposit was not processed successfully, <br /> Please
						retry later.
					</p>

					<button
						className="w-full p-5 text-[14px] font-[500] bg-primary text-white rounded-[10px]"
						onClick={() => setModal("overview")}
					>
						Return To Overview
					</button>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const handleTopUpback = () => {
		if (topupStep === "debit card") {
			settopupStep("choose method");
		} else if (topupStep === "enter pin") {
			settopupStep("debit card");
		} else if (topupStep === "bank transfer") {
			settopupStep("choose method");
		} else if (topupStep === "ussd") {
			settopupStep("choose method");
		} else {
			setModal("overview");
		}
	};

	const closeTopUpModal = () => {
		setModal("");
		settopupStep("choose method");
	};

	const TopUpModal = () => (
		<Modal>
			<div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px] relative">
				{topupStep === "choose method" && (
					<>
						<div className="flex justify-center w-full items-center">
							<div
								className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
								onClick={handleTopUpback}
							>
								<ChevronLeftCircle className="mr-[6px] w-[17px]" />
								<span className="text-[12px] font-[500]">Back</span>
							</div>
							<div>
								<h1 className="font-[500] text-[26px] text-center text-primary">
									Top Up KodHex
								</h1>
								<p className="text-[12px] font-[500] text-gray400 text-center">
									Add money to your KodHex Account
								</p>
								<div className="bg-[#F9F5FF] rounded-[8px] flex justify-center mx-auto w-[180px] text-center text-[#8E50E9] text-[11px] font-[500] px-3 py-3 mt-5">
									KodHex Balance: N200.00
								</div>
							</div>
							<XCircleIcon
								className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
								onClick={closeTopUpModal}
							/>
						</div>

						<div>
							{/* <CurrencyInput
								id="input-example"
								prefix="₦"
								name="input-name"
								decimalsLimit={2}
								// value={""}
								// onValueChange={(value) => {
								//   setAmount(value);
								//   console.log(value);
								// }}
								className="mt-5 outline-none bg-[#fff] text-center text-primary  text-[30px]  
                border-b-[1px] border-b-primary border-[#F0F0F0] font-[700] w-[260px] mx-auto
                   block pb-3"
							/> */}
						</div>
						<p className="text-[14px] font-[500] text-center text-gray400 mb-5 mt-8">
							Choose Top Up Method
						</p>
						<div className="w-full pb-8">
							{/* <Button
								title="Debit Card"
								image={card}
								onClick={() => settopupStep("debit card")}
							/> */}
							{/* <Button
								title="Bank Transfer"
								image={bank}
								onClick={() => settopupStep("bank transfer")}
							/> */}
							{/* <Button
								title="USSD"
								image={ussd}
								onClick={() => settopupStep("ussd")}
							/> */}
						</div>
					</>
				)}
				{topupStep === "debit card" && (
					<>
						<div className="flex justify-center w-full items-center">
							<div
								className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
								onClick={handleTopUpback}
							>
								<ChevronLeftCircle className="mr-[6px] w-[17px]" />
								<span className="text-[12px] font-[500]">Back</span>
							</div>
							<div>
								<h1 className="font-[500] text-[26px] text-center text-primary">
									Debit Card
								</h1>
								<p className="text-[12px] font-[500] text-gray400 text-center">
									Top up kodhex account using debit card
								</p>
							</div>
							<XCircleIcon
								className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
								onClick={closeTopUpModal}
							/>
						</div>

						<div className="w-full pb-7 mt-6">
							{/* <Button
								title="Add Debit Card"
								image={card}
								onClick={() => {}}
							/> */}

							<p className="text-[14px] font-[500] text-center text-gray400 mt-7 mb-4">
								Use Existing Cards
							</p>

							<div
								className="rounded-[4px] bg-[#FAFAFA] px-4 py-5 flex justify-between items-center mb-4 cursor-pointer"
								onClick={() => settopupStep("enter pin")}
							>
								<div className="flex items-center">
									{/* <Image
										src={master}
										width={28}
										height={22}
										alt="mastercard"
									/> */}
									<h1 className="text-[12px] font-[500] ml-3">
										GTBank
									</h1>
								</div>
								<p className="text-[12px] font-[500]">**** . 4789</p>
							</div>
							<div
								className="rounded-[4px] bg-[#FAFAFA] px-4 py-5 flex justify-between items-center mb-4 cursor-pointer"
								onClick={() => settopupStep("enter pin")}
							>
								<div className="flex items-center">
									{/* <Image
										src={master}
										width={28}
										height={22}
										alt="mastercard"
									/> */}
									<h1 className="text-[12px] font-[500] ml-3">
										GTBank
									</h1>
								</div>
								<p className="text-[12px] font-[500]">**** . 4789</p>
							</div>
							<div
								className="rounded-[4px] bg-[#FAFAFA] px-4 py-5 flex justify-between items-center cursor-pointer"
								onClick={() => settopupStep("enter pin")}
							>
								<div className="flex items-center">
									{/* <Image
										src={wema}
										width={30}
										height={30}
										alt="mastercard"
									/> */}
									<h1 className="text-[12px] font-[500] ml-3">
										Wema Bank
									</h1>
								</div>
								<p className="text-[12px] font-[500]">**** . 4789</p>
							</div>
						</div>
					</>
				)}

				{topupStep === "enter pin" && (
					<>
						<div className="flex justify-center w-full items-center">
							<div
								className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
								onClick={handleTopUpback}
							>
								<ChevronLeftCircle className="mr-[6px] w-[17px]" />
								<span className="text-[12px] font-[500]">Back</span>
							</div>
							<div>
								<h1 className="font-[500] text-[26px] text-center text-primary">
									Enter PIN
								</h1>
								<p className="text-[12px] font-[500] text-gray400 text-center">
									Enter six (6) digit transaction pin
								</p>
							</div>
							<XCircleIcon
								className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
								onClick={closeTopUpModal}
							/>
						</div>

						<div className="w-full pb-7 mt-6">
							<input
								type="text"
								name=""
								id=""
								className="w-full outline-none rounded-[4px] bg-[#F9FAFB] px-5 py-5 text-[12px] font-[500]"
								placeholder="Enter Pin"
							/>
							<button
								className="p-5 rounded-[10px] w-full text-white bg-primary text-[14px] font-[500] mt-10"
								onClick={() => {
									setModal("topup success");
									settopupStep("choose method");
								}}
							>
								Continue
							</button>
						</div>
					</>
				)}
				{topupStep === "bank transfer" && (
					<>
						<div className="flex justify-center w-full items-center">
							<div
								className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
								onClick={handleTopUpback}
							>
								<ChevronLeftCircle className="mr-[6px] w-[17px]" />
								<span className="text-[12px] font-[500]">Back</span>
							</div>
							<div>
								<h1 className="font-[500] text-[26px] text-center text-primary">
									Bank Transfer
								</h1>
								<p className="text-[12px] font-[500] text-gray400 text-center">
									Transfer to the designated account
								</p>
							</div>
							<XCircleIcon
								className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
								onClick={closeTopUpModal}
							/>
						</div>

						<div className="w-full mt-10 pb-7">
							<div className="rounded-[4px] bg-[#FAFAFA] flex justify-between items-center py-4 px-5 mb-4">
								<p className="text-[12px] font-[500] text-gray400">
									Amount to Transfer
								</p>
								<p className="text-[24px] font-[700] text-primary">
									₦ 50,000{" "}
								</p>
							</div>
							<div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
								<p className="text-[12px] font-[500] text-gray400">
									Account Number
								</p>
								<p className="text-[14px] font-[500] text-primary flex items-center">
									20076542316{" "}
									<span className="ml-2">
										<Files className="w-[12px]" />
									</span>
								</p>
							</div>
							<div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
								<p className="text-[12px] font-[500] text-gray400">
									Bank
								</p>
								<p className="text-[14px] font-[500] text-primary">
									Curved Microfinance Bank
								</p>
							</div>
							<div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
								<p className="text-[12px] font-[500] text-gray400">
									Name
								</p>
								<p className="text-[14px] font-[500] text-primary">
									Oshodi David - Ardila
								</p>
							</div>
							<div className="flex justify-between items-center py-4 mb-4">
								<p className="text-[12px] font-[500] text-gray400">
									Narration
								</p>
								<p className="text-[14px] font-[500] text-primary">
									Levijazz
								</p>
							</div>
							<div className="flex justify-center w-full items-center mb-9">
								<div className="text-center">
									<h1 className="text-[30px] font-[500] mb-1">3:00</h1>
									<p className="text-gray400 text-[12px] font-[500]">
										MINUTES
									</p>
								</div>
							</div>
							<button
								className="p-5 rounded-[10px] w-full text-white bg-primary text-[14px] font-[500]"
								onClick={() => {
									setModal("topup success");
									settopupStep("choose method");
								}}
							>
								I Have Made The Transfer
							</button>
						</div>
					</>
				)}
				{topupStep === "ussd" && (
					<>
						<div className="flex justify-center w-full items-center">
							<div
								className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
								onClick={handleTopUpback}
							>
								<ChevronLeftCircle className="mr-[6px] w-[17px]" />
								<span className="text-[12px] font-[500]">Back</span>
							</div>
							<div>
								<h1 className="font-[500] text-[26px] text-center text-primary">
									USSD
								</h1>
								<p className="text-[12px] font-[500] text-gray400 text-center">
									Top up your KodHex using ussd
								</p>
							</div>
							<XCircleIcon
								className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
								onClick={closeTopUpModal}
							/>
						</div>

						<div className="w-full mt-10 pb-7">
							<div className="rounded-[4px] bg-[#FAFAFA] flex justify-between items-center py-4 px-5 mb-4">
								<p className="text-[12px] font-[500] text-gray400">
									Amount to Transfer
								</p>
								<p className="text-[24px] font-[700] text-primary">
									₦ 50,000{" "}
								</p>
							</div>
							<div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
								<p className="text-[12px] font-[500] text-gray400">
									Account Number
								</p>
								<p className="text-[14px] font-[500] text-primary flex items-center">
									20076542316{" "}
									<span className="ml-2">
										<Files className="w-[12px]" />
									</span>
								</p>
							</div>
							<div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
								<p className="text-[12px] font-[500] text-gray400">
									Bank
								</p>
								<p className="text-[14px] font-[500] text-primary">
									Curved Microfinance Bank
								</p>
							</div>
							<div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
								<p className="text-[12px] font-[500] text-gray400">
									Name
								</p>
								<p className="text-[14px] font-[500] text-primary">
									Oshodi David - Ardila
								</p>
							</div>

							<div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
								<p className="text-[12px] font-[500] text-gray400">
									Narration
								</p>
								<p className="text-[14px] font-[500] text-primary">
									Levijazz
								</p>
							</div>

							<div className="flex justify-between items-center py-4">
								<p className="text-[12px] font-[500] text-gray400">
									Select Bank
								</p>

								<div className="relative">
									<button
										className="flex items-center"
										onClick={() => setShowDropDown(!showDropDown)}
									>
										<span className="text-[14px] text-[#23A323] mr-[6px]">
											{" "}
											{selectedBank}
										</span>
										<ChevronDown className="w-[14px] h-[14px] text-[#23A323]" />
									</button>
									{showDropDown && (
										<div className="w-[101px] bg-white rounded-[6px] absolute right-0 top-6 dropdown p-[5px] py-[7px] shadow-lg">
											{banks.map((b) => (
												<p
													key={b}
													className={`text-[10px] cursor-pointer font-medium  rounded-[4px] py-[6px] pl-[10px] mb-[5px] last:mb-0 hover:bg-[#F3F4F6] ${
														selectedBank === b
															? "bg-[#F3F4F6]"
															: "bg-white"
													}`}
													onClick={() => setSelectedBank(b)}
												>
													{b}
												</p>
											))}
										</div>
									)}
								</div>
							</div>
							<div className="flex justify-center w-full items-center mb-9">
								<div className="text-center">
									<h1 className="text-[30px] font-[500] mb-1">3:00</h1>
									<p className="text-gray400 text-[12px] font-[500]">
										MINUTES
									</p>
								</div>
							</div>
							<button
								className="p-5 rounded-[10px] w-full text-white bg-primary text-[14px] font-[500]"
								onClick={() => {
									setModal("topup success");
									settopupStep("choose method");
								}}
							>
								I Have Made The Transfer
							</button>
						</div>
					</>
				)}
			</div>
		</Modal>
	);

	const payDate = watch("end_date");
	const time = watch("time");
	const target = watch("target_amount");
	const name = watch("name");
	const transPin = watch("trans_pin");

	const createPlan = async () => {
		try {
			if (isLoading) return;
			setIsLoading(true);
			const { data } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/savings/vault_extra_wallet/plan/${user?.user?.id}`,
				{
					show_estimate: false,
					auto_deposit: true,
					name: name,
					start_date: new Date(Date.now()).toISOString(),
					end_date: new Date(
						Date.now() + Number(payDate) * 24 * 60 * 60 * 1000
					).toISOString(),
					time: time,
					payment_method: "kodhex",
					trans_pin: transPin,
					frequency: selectedF,
					target_amount: target,
					day_of_week: selectedD,
					day_of_month: selectedDom,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (data.code === 200) {
				setTransDetails(data.data);
				setModal("payment sent");
			}
			if (data.code !== 200) {
				toast.error(`${data.message}`, { id: "estimate" });
			}
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "estimate" });
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setFocus("trans_pin");
	}, [transPin, setFocus]);

	const Pin = () => (
		<Modal>
			<div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px] relative">
				<div className="flex justify-center  items-center">
					<div></div>
					<div>
						<h1 className="font-[600] text-[20px] text-center text-[#240552]">
							Enter PIN
						</h1>
						<p className="text-[12px] font-[500] text-[#9ca3af] text-center">
							Enter six (6) digit transaction pin
						</p>
					</div>
					<XCircleIcon
						className="w-[17px] text-[#9ca3af] cursor-pointer absolute right-[30px] top-[30px]"
						onClick={() => setModal("")}
					/>
				</div>

				<div className="w-full pb-7 mt-10">
					<p className="text-black font-[600] text-[13px] mb-1">PIN</p>
					<PasswordInput
						placeholder="Enter pin"
						type="tel"
						// value={pin}
						// ref={pinRef}
						// onChange={(e) => setPin(e.target.value)}
						{...register("trans_pin")}
					/>
					<button
						className="p-5 rounded-[10px] w-full text-white bg-[#240552] text-[14px] font-[500] mt-10 disabled:bg-[#240552]/50"
						onClick={() => {
							createPlan();
							// setModal("topup success");
							// settopupStep("choose method");
						}}
						disabled={!transPin}
					>
						{isLoading ? (
							<div className="flex justify-center">
								<svg
									className="animate-spin h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="2"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
							</div>
						) : (
							"Continue"
						)}
					</button>
				</div>
			</div>
		</Modal>
	);

	const ReceiptModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[25px] w-[439px] px-[30px] pb-12"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-between w-full items-center">
						<div></div>
						<div>
							<h1 className="font-[500] text-[26px] text-center text-[#240552] font-[founder]">
								Transaction Details
							</h1>
							<p className="text-[12px] font-[500] text-[#9ca3af] text-center">
								Here is the summary of all your transactions
							</p>
						</div>
						<XCircleIcon
							className="w-[17px] text-[#9ca3af] cursor-pointer"
							onClick={(e) => {
								setModal("");
								resetForm({
									end_date: "",
									name: "",
									target_amount: "",
									time: "",
									trans_pin: "",
								});
								resetStep();

								e.stopPropagation();
							}}
						/>
					</div>

					<div className="mt-5 mb-7">
						<div className="mx-auto">
							<Image
								src={withdraw}
								alt="transaction"
								className="w-[45px] mx-auto mb-3"
							/>
							<h1 className="text-[24px] font-[600] text-center mb-1 text-primary">
								-₦{transDetails?.amount.toFixed(2)}
							</h1>
							<p
								className={`text-[10px] flex justify-center rounded-[4px] mx-auto items-center text-center w-[74px] h-[26px] font-[500] mb-3 shadow-[3px_3px_#240552] ${
									transDetails?.status.toLocaleLowerCase() ===
									"successful"
										? "bg-[#22C55E] text-primary"
										: transDetails?.status.toLocaleLowerCase() ===
										  "pending"
										? "bg-[#FCB40C] text-primary"
										: transDetails?.status.toLocaleLowerCase() ===
										  "failed"
										? "bg-[#EF4444] text-primary"
										: "bg-[#3B82F6] text-primary"
								}`}
							>
								{transDetails?.status}
							</p>
							<p className="text-[11px] text-center font-[500] mb-3 text-primary">
								{transDetails?.transaction_description}
							</p>
							<div className="flex justify-center mx-auto mt-7 mb-4">
								<div className="flex flex-col items-center border-r-[1px] pr-16 border-r-[#E5E7EB] pt-2">
									<h1 className="text-[10px] font-[500] text-[#9CA3AF] mb-2">
										AMOUNT
									</h1>
									<p className="text-[10px] font-[500] text-primary">
										₦{transDetails?.amount.toFixed(2)}
									</p>
								</div>
								<div className="flex flex-col items-center pl-16 pt-2 ">
									<h1 className="text-[10px] font-[500] text-[#9CA3AF] mb-2">
										FEE
									</h1>
									<p className="text-[10px] font-[500] text-primary">
										₦{transDetails?.transaction_fee}
									</p>
								</div>
							</div>
						</div>

						<div className="px-5 pt-5 pb-7 rounded-[11px] bg-primary back">
							<p className="border-b-[1px] text-white border-dashed border-gray400 pb-4 pt-1 text-center text-[12px] font-[500] mb-4">
								Transaction Summary
							</p>
							<div className="flex justify-between items-center py-2">
								<p className="text-[12px] font-[400] text-white">
									Transaction Type
								</p>
								<p className="text-[12px] font-[500] text-white">
									{transDetails?.transaction_type}
								</p>
							</div>
							<div className="flex justify-between items-center py-2">
								<p className="text-[12px] font-[400] text-white">
									Sender Details
								</p>
								<div className="text-[12px] font-[500] text-white justify-center flex items-center">
									{/* <span className="w-[17px] h-[17px] rounded-full  justify-center items-center bg-white mr-2 hidden">
										<Code2 className="w-[10px] text-primary" />
									</span> */}
									<span>
										{transDetails?.transaction_details.sender_details}
									</span>
								</div>
							</div>
							<div className="flex justify-between items-center py-2">
								<p className="text-[12px] font-[400] text-white">
									Remark
								</p>
								<p className="text-[12px] font-[500] text-white">
									{transDetails?.transaction_details.remark}
								</p>
							</div>

							<div className="flex justify-between items-center py-2">
								<p className="text-[12px] font-[400] text-white">
									Credited to
								</p>
								<div className="text-[12px] font-[500] text-white justify-center flex items-center">
									{transDetails?.transaction_details.credited_to}
								</div>
							</div>
							<div className="flex justify-between items-center py-2 gap-5 ">
								<p className="text-[12px] font-[400] text-white">
									Transaction Number
								</p>
								<p className="text-[12px] font-[500] text-white text-right">
									{transDetails?.transaction_ref}
								</p>
							</div>
							<div className=" justify-between items-center py-2 hidden">
								<p className="text-[12px] font-[400] text-gray400">
									Transaction Date
								</p>
								<p className="text-[12px] font-[500] text-white">
									10:23am | 12th December, 2023
								</p>
							</div>
						</div>
						{/* {categoryDetails()} */}
					</div>
					<button className="flex items-center justify-center p-4 rounded-[10px] text-white bg-[#240552] text-[14px] font-[500] w-full mb-4">
						{/* <Image src={share} width={24} height={24} alt="download" /> */}
						<Download />
						<span className="ml-[10px]">Download Receipt</span>
					</button>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	return (
		<div className="mt-10">
			{modal == "overview" && <OverViewModal />}
			{modal == "payment sent" && <PaymentSentModal />}
			{modal == "payment failed" && <PaymentFailedModal />}
			{modal == "topup" && <TopUpModal />}
			{modal == "topup success" && <TopupSuccessModal />}
			{modal == "topup failed" && <TopupFailedModal />}
			{modal == "in progress" && <InprogressModal />}
			{modal === "pay" && <Pin />}
			{modal === "receipt" && <ReceiptModal />}
			<Steptitle
				title="Overview"
				subtitle="Summary of your transaction"
				onClick={setStep}
			/>
			<Image
				src={dib}
				width={52}
				height={52}
				alt="vault"
				className="mx-auto mt-5"
			/>

			<div className="max-w-[450px] mx-auto mt-8">
				<div className="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-[4px] mb-1 ">
					<p className="text-[12px] font-[500] text-[#9CA3AF]">
						Amount to pay
					</p>
					<p className="text-[24px] font-[700] text-primary">
						₦ {details?.amount.toFixed(2)}
					</p>
				</div>
				<div className="flex items-center justify-between border-b-[1px] border-b-[#F3F4F6] py-4 rounded-[4px] ">
					<p className="text-[12px] font-[500] text-[#9CA3AF]">KodHex</p>
					<p className="text-[12px] font-[500] text-black">
						{user.user?.kodhex}
					</p>
				</div>
				<div className="flex items-center justify-between border-b-[1px] border-b-[#F3F4F6] py-4 rounded-[4px] ">
					<p className="text-[12px] font-[500] text-[#9CA3AF]">Plan</p>
					<p className="text-[12px] font-[500] text-black">
						Vault Premium
					</p>
				</div>
				<div className="flex justify-end items-center mt-2 mb-4">
					{/* <Image src={refresh} width={11} height={11} alt="refresh" /> */}
					<p
						className="text-primary text-[10px] font-[500] ml-2 cursor-pointer"
						onClick={onRefresh}
					>
						Click here to Refresh
					</p>
				</div>
				<p className="text-[14px] font-[500] text-center mb-4 text-[#9CA3AF]">
					Pay With
				</p>
				<div className="mb-2">
					<div className="flex justify-between items-center p-4 border-[1px] border-primary rounded-[4px]">
						<div className="flex items-center ">
							<Image src={kodhex} width={23} height={23} alt="kodhex" />
							<p className="ml-2 text-[12px] font-[500]">
								KodHex (Wallet)
							</p>
						</div>
						<div className="flex items-center">
							<p className="text-[10px] font-[500] text-gray400 mr-2">
								Total Balance:
							</p>
							<p className="text-[14px] font-[500]">
								₦{Number(balance || 0).toFixed(2)}{" "}
							</p>
						</div>
					</div>
					<div className=" justify-end items-center hidden">
						<CheckCircle2 className="text-[#23A323] w-[11px]" />
						<p className="text-[10px] font-[500] text-[#23A323] ml-2">
							Sufficient Balance
						</p>
					</div>
				</div>
				<div className="mb-2 hidden">
					<div className="flex justify-between items-center p-4 border-[1px] border-[#EF4444] rounded-[4px]">
						<div className="flex items-center ">
							{/* <Image
								src={insufficientKodhex}
								width={23}
								height={23}
								alt="kodhex"
							/> */}
							<p className="ml-2 text-[12px] font-[500]">
								KodHex (Wallet)
							</p>
						</div>
						<div className="flex items-center">
							<p className="text-[10px] font-[500] text-gray400 mr-2">
								Total Balance:
							</p>
							<p className="text-[14px] font-[500]">N40,000 </p>
						</div>
					</div>
					<div
						className=" justify-end flex items-center cursor-pointer "
						onClick={() => setModal("topup")}
					>
						<Ban className="text-[#E8356D] w-[11px] h-[11px] mb-[2px] mr-[6px]" />
						<span className="text-[10px] text-[#E8356D] font-medium">
							Insufficient Balance
						</span>
						<span className="mx-[3px]">-</span>
						<span className="text-[10px] text-[#23A323] mr-1">
							Top Up
						</span>
						<span>
							<ChevronRight className="w-[11px] h-[11px] text-[#23A323]" />
						</span>
					</div>
				</div>
				<div
					className="hidden justify-between items-center p-4 border-[1px] border-[#F3F4F6] rounded-[4px] mb-4"
					onClick={() => setModal("overview")}
				>
					<div className="flex items-center ">
						{/* <Image src={savings} width={23} height={23} alt="kodhex" /> */}
						<p className="ml-2 text-[12px] font-[500]">Savings</p>
					</div>
					<div className="flex items-center">
						<p className="text-[10px] font-[500] text-gray400 mr-2">
							Total Balance:
						</p>
						<p className="text-[16px] font-[500]">N50,000 </p>
					</div>
				</div>
				<p className="text-[14px] font-[500] text-center mb-4 text-gray400 hidden">
					Use Existing Cards
				</p>
				<div className="justify-between items-center p-4 border-[1px] border-[#F3F4F6] rounded-[4px] mb-8 hidden">
					<div className="flex items-center ">
						{/* <Image src={mastercard} width={23} height={23} alt="kodhex" /> */}
						<p className="ml-2 text-[12px] font-[500]">GTBank</p>
					</div>
					<div className="flex items-center">
						<p className="text-[10px] font-[500] text-gray400 mr-2">
							Available Card:
						</p>
						<p className="text-[16px] font-[500]">**** . 4789</p>
					</div>
				</div>

				<button
					className="bg-[#240552] mt-8 text-white w-full text-[14px] font-[500] p-5 rounded-[8px]"
					onClick={() => setModal("pay")}
				>
					Pay
				</button>
			</div>
		</div>
	);
}

type ButtonProp = {
	image: string;
	title: string;
	onClick: () => void;
};
function Button({ image, title, onClick }: ButtonProp) {
	return (
		<div
			className="flex justify-between items-center p-5 border-[1px] w-full rounded-[4px] border-primary mb-4 cursor-pointer"
			onClick={onClick}
		>
			<div className="flex items-center flex-1">
				<Image src={image} width={30} height={30} alt="debit card" />
				<h1 className="ml-4 text-[12px] font-[500] text-primary">
					{title}
				</h1>
			</div>
			<ChevronRight className="text-primary" />
		</div>
	);
}

export default OverView;
