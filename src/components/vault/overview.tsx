"use client";
import React, { useState } from "react";
import Steptitle from "./steptitle";
import { useRouter } from "next/navigation";
import dib from "../../assets/vault.svg";
import Image from "next/image";
// import refresh from "../../assets/static/refresh.png";
// import kodhex from "../../assets/static/kodxxx.svg";
// import insufficientKodhex from "../../assets/static/insufficient kodex.svg";
import {
	Ban,
	CheckCircle2,
	ChevronDown,
	ChevronLeftCircle,
	ChevronRight,
	Files,
	XCircleIcon,
} from "lucide-react";
// import savings from "../../assets/static/savingsss.svg";
// import mastercard from "../../assets/static/Mastercard logo.png";
import Modal from "../modal";
import { AnimatePresence, motion } from "framer-motion";
// import note from "../../assets/static/note.svg";
import success from "../../assets/success.png";
// import failed from "../../assets/static/failed-ks1ODQxJMt.png";
// import CurrencyInput from "react-currency-input-field";
// import bank from "../../assets/static/bank.svg";
// import card from "../../assets/static/card.svg";
// import ussd from "../../assets/static/ussd.svg";
// import master from "../../assets/static/Mastercard logo.png";
// import wema from "../../assets/static/wema bank.png";
// import clock from "../../assets/static/clock.png";

type props = {
	setStep: () => void;
};
function OverView({ setStep }: props) {
	const router = useRouter();

	const [overviewStep, setOverviewStep] = useState<"enter pin" | "">(
		"enter pin"
	);
	const [modal, setModal] = useState<
		| "overview"
		| "receipt"
		| "payment sent"
		| "payment failed"
		| "topup success"
		| "topup"
		| "topup failed"
		| "in progress"
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
						Vault savings plan have been successfully created.
					</p>

					<div
						className="text-primary cursor-pointer text-[10px] justify-center text-center bg-[#F9FAFB] rounded-[8px] w-[327px] mx-auto  h-[45px] flex items-center"
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
						className="text-primary mt-5 cursor-pointer mb-5 text-[10px] mx-auto justify-center text-center bg-[#F9FAFB] rounded-[8px] w-[125px] h-[33px] flex items-center"
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

	return (
		<div className="mt-10">
			{modal == "overview" && <OverViewModal />}
			{modal == "payment sent" && <PaymentSentModal />}
			{modal == "payment failed" && <PaymentFailedModal />}
			{modal == "topup" && <TopUpModal />}
			{modal == "topup success" && <TopupSuccessModal />}
			{modal == "topup failed" && <TopupFailedModal />}
			{modal == "in progress" && <InprogressModal />}
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
					<p className="text-[24px] font-[700] text-primary">₦ 50,000</p>
				</div>
				<div className="flex items-center justify-between border-b-[1px] border-b-[#F3F4F6] py-4 rounded-[4px] ">
					<p className="text-[12px] font-[500] text-gray400">KodHex</p>
					<p className="text-[12px] font-[500] text-black">Levijazz</p>
				</div>
				<div className="flex items-center justify-between border-b-[1px] border-b-[#F3F4F6] py-4 rounded-[4px] ">
					<p className="text-[12px] font-[500] text-gray400">Plan</p>
					<p className="text-[12px] font-[500] text-black">Vault</p>
				</div>
				<div className="flex justify-end items-center mt-2 mb-4">
					{/* <Image src={refresh} width={11} height={11} alt="refresh" /> */}
					<p className="text-primary text-[10px] font-[500] ml-2">
						Click here to Refresh
					</p>
				</div>
				<p className="text-[14px] font-[500] text-center mb-4 text-gray400">
					Pay With
				</p>
				<div className="mb-2">
					<div className="flex justify-between items-center p-4 border-[1px] border-primary rounded-[4px]">
						<div className="flex items-center ">
							{/* <Image src={kodhex} width={23} height={23} alt="kodhex" /> */}
							<p className="ml-2 text-[12px] font-[500]">
								KodHex (Wallet)
							</p>
						</div>
						<div className="flex items-center">
							<p className="text-[10px] font-[500] text-gray400 mr-2">
								Total Balance:
							</p>
							<p className="text-[16px] font-[500]">N40,000 </p>
						</div>
					</div>
					<div className=" justify-end items-center hidden">
						<CheckCircle2 className="text-[#23A323] w-[11px] " />
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
							<p className="text-[16px] font-[500]">N40,000 </p>
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
					onClick={() => setModal("payment sent")}
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
