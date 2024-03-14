"use client";
import React, { useRef, useState } from "react";
import NavBar from "../navbar";
import lock from "../../assets/static/lock-g.svg";
import {
	Ban,
	CheckCircle,
	CheckCircle2,
	ChevronLeftCircle,
	ChevronRight,
	Code2,
	Eye,
	XCircleIcon,
} from "lucide-react";
import percent from "../../assets/static/percent.svg";
import Image from "next/image";
import withdraw from "../../assets/static/directbox-send.svg";
import withdraw2 from "../../assets/static/directbox-send 2.svg";
import more from "../../assets/static/mi_options-vertical.svg";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import Link from "next/link";
import Modal from "../modal";
import sad from "../../assets/static/sad.svg";
import moody from "../../assets/static/moody.svg";
import happy from "../../assets/static/hapi.svg";
import star from "../../assets/static/star shield.svg";
import report from "../../assets/static/note.svg";
import setting from "../../assets/static/setting.svg";
import faq from "../../assets/static/message-question 2.svg";
import divs from "../../assets/static/divs.svg";
import behaviour from "../../assets/static/behaviour.svg";
import CurrencyInput from "react-currency-input-field";
import kodhhh from "../../assets/static/kodhhh.svg";
import saving from "../../assets/static/savinggggg.svg";
import master from "../../assets/static/Mastercard logo.png";
import diblarge from "../../assets/static/vault.png";
import { AnimatePresence, motion } from "framer-motion";
import success from "../../assets/static/success.png";
import note from "../../assets/static/note.svg";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";

function Existing() {
	const [agreed, setAgreed] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const [amount, setAmount] = useState("");
	const [withdrawStep, setWithDrawStep] = useState<
		"enter amount" | "enter pin" | ""
	>("enter amount");
	const [withdrawAmount, setWithdrawAmount] = useState("");
	const [topupStep, setTopUpStep] = useState<
		| "enter amount"
		| "estimate"
		| "change frequency"
		| "overview"
		| "pin"
		| "success"
		| "day of week"
		| "day of month"
		| ""
	>("enter amount");
	const [dropdown, setDropdown] = useState(false);
	const [modal, setModal] = useState<
		| "behavioural pattern"
		| "topup"
		| "overview"
		| "topup success"
		| "withdraw"
		| "withdraw success"
		| "plan"
		| "complete plan"
		| ""
	>("");
	const Transactions = [
		{
			description: "You missed a deposit",
			date: "1 hr ago",
			amount: "₦250.00 ",
		},
		{
			description: "You missed a deposit",
			date: "1 hr ago",
			amount: "₦250.00 ",
		},
		{
			description: "You missed a deposit",
			date: "1 hr ago",
			amount: "₦250.00 ",
		},
		{
			description: "You missed a deposit",
			date: "1 hr ago",
			amount: "₦250.00 ",
		},
		{
			description: "You missed a deposit",
			date: "1 hr ago",
			amount: "₦250.00 ",
		},
		{
			description: "You missed a deposit",
			date: "1 hr ago",
			amount: "₦250.00 ",
		},
	];
	const Breakdown = [
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
	];

	const Transactiontab = () => (
		<div>
			<Tabs defaultValue="transactions" className="w-full">
				<TabsList className="w-full flex justify-between mb-[10px] h-[50px] px-1 py-4 text-primary">
					<TabsTrigger value="transactions" className=" w-[50%] h-[40px]">
						All Transactions
					</TabsTrigger>
					<TabsTrigger value="missed" className=" w-[50%] h-[40px]">
						Missed Deposits
					</TabsTrigger>
				</TabsList>

				<TabsContent value="transactions">
					<div className="mt-4">
						<Table className="mx-auto">
							<TableHeader className="border-0">
								<TableRow className="border-0">
									<TableHead className="text-[10px] font-[500] uppercase">
										Description
									</TableHead>
									<TableHead className="text-[10px] font-[500] uppercase">
										Date
									</TableHead>
									<TableHead className="text-[10px] font-[500] uppercase">
										Amount
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody className="border-0">
								{Transactions.map((t, i) => (
									<TableRow
										key={i}
										className="border-0 cursor-pointer"
									>
										<TableCell className="text-[12px] font-[500] text-black flex items-center">
											<span className="mr-[10px]">
												<svg
													width="30"
													height="30"
													viewBox="0 0 30 30"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<circle
														cx="15.1953"
														cy="14.6016"
														r="14.5"
														fill="#FFF5F0"
													/>
													<path
														d="M21.6395 10.5781L15.528 16.6896L11.027 12.1885H14.7228V10.5781H8.28125V17.0197H9.89164V13.3238L15.528 18.9602L22.7748 11.7135L21.6395 10.5781Z"
														fill="#FF823B"
													/>
												</svg>
											</span>
											{t.description}
										</TableCell>
										<TableCell className="text-[12px] font-[500] text-black">
											{t.date}
										</TableCell>
										<TableCell className="text-[12px] font-[500] text-black">
											{t.amount}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</TabsContent>
				<TabsContent value="missed">
					<div className="mt-4">
						<Table className="mx-auto">
							<TableHeader className="border-0">
								<TableRow className="border-0">
									<TableHead className="text-[10px] font-[500] uppercase">
										Description
									</TableHead>
									<TableHead className="text-[10px] font-[500] uppercase">
										Date
									</TableHead>
									<TableHead className="text-[10px] font-[500] uppercase">
										Amount
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody className="border-0">
								{Transactions.map((t, i) => (
									<TableRow
										key={i}
										className="border-0 cursor-pointer"
									>
										<TableCell className="text-[12px] font-[500] text-black flex items-center">
											<span className="mr-[10px]">
												<svg
													width="30"
													height="30"
													viewBox="0 0 30 30"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<circle
														cx="15.1953"
														cy="14.6016"
														r="14.5"
														fill="#FFF5F0"
													/>
													<path
														d="M21.6395 10.5781L15.528 16.6896L11.027 12.1885H14.7228V10.5781H8.28125V17.0197H9.89164V13.3238L15.528 18.9602L22.7748 11.7135L21.6395 10.5781Z"
														fill="#FF823B"
													/>
												</svg>
											</span>
											{t.description}
										</TableCell>
										<TableCell className="text-[12px] font-[500] text-black">
											{t.date}
										</TableCell>
										<TableCell className="text-[12px] font-[500] text-black">
											{t.amount}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);

	const SavingsTab = () => (
		<div>
			<Tabs defaultValue="active" className="w-full">
				<div className="px-8">
					<TabsList className="w-full flex justify-between mb-[10px] h-[50px] px-1 py-4 ">
						<TabsTrigger value="active" className=" w-[50%] h-[40px]">
							Active
						</TabsTrigger>
						<TabsTrigger value="completed" className=" w-[50%] h-[40px]">
							Completed
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="active">
					<div className="mt-7 flex flex-col gap-4 px-8 overflow-y-auto h-[300px]">
						<div
							className="bg-[#F3F4F6] rounded-[8px] p-5 border-[1px] border-[#F3F4F6] cursor-pointer"
							onClick={() => setModal("plan")}
						>
							<div className="flex justify-between items-center">
								<div className="flex items-center space-x-4">
									<span>
										{" "}
										<svg
											width="30"
											height="30"
											viewBox="0 0 44 44"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="22.0215"
												cy="22.0449"
												r="21.6504"
												fill="#3B82F6"
											/>
											<path
												d="M21.6994 26.9169L21.6962 26.9157C21.642 26.8951 21.583 26.8617 21.5192 26.8094C20.8535 26.2196 20.3225 25.4834 19.9286 24.5928L19.9285 24.5927C19.5325 23.698 19.3383 22.8086 19.3383 21.9212C19.3383 21.0337 19.5325 20.144 19.9286 19.2486C20.3231 18.3573 20.8466 17.621 21.496 17.0313C21.5607 16.9784 21.6289 16.9372 21.7011 16.9062C21.7573 16.8822 21.8199 16.8686 21.894 16.8686C21.9681 16.8686 22.0219 16.8821 22.063 16.901C22.1296 16.9319 22.1983 16.9749 22.2686 17.0329C22.9344 17.6227 23.4654 18.3586 23.8594 19.2486C24.2555 20.144 24.4497 21.0337 24.4497 21.9212C24.4497 22.8086 24.2555 23.698 23.8594 24.5927L23.8594 24.5928C23.4633 25.4883 22.9372 26.2272 22.2843 26.818L22.2756 26.8259L22.2673 26.8342C22.2407 26.8607 22.2015 26.8876 22.1372 26.9088L22.1358 26.9093C22.058 26.9354 21.9781 26.9485 21.894 26.9485C21.8092 26.9485 21.7464 26.9352 21.6994 26.9169ZM24.6964 28.3949L24.6962 28.3949C24.5717 28.3705 24.4485 28.3423 24.3263 28.3103C25.028 27.6547 25.5949 26.7898 26.0358 25.7344C26.6075 24.3659 26.9045 23.0927 26.9045 21.9212C26.9045 20.7496 26.6075 19.4764 26.0358 18.1079C25.5949 17.0525 25.028 16.1876 24.3263 15.5321C24.4485 15.5001 24.5717 15.4719 24.6962 15.4475L24.6964 15.4475C25.0937 15.3695 25.5045 15.3302 25.9293 15.3302C27.7738 15.3302 29.322 15.9671 30.6022 17.2473C31.8831 18.5282 32.5203 20.0767 32.5203 21.9212C32.5203 23.7656 31.8831 25.3138 30.6023 26.594L30.6021 26.5942C29.3219 27.875 27.7737 28.5122 25.9293 28.5122C25.5045 28.5122 25.0937 28.4729 24.6964 28.3949ZM13.1858 26.5942L13.1857 26.594C11.9048 25.3138 11.2677 23.7656 11.2677 21.9212C11.2677 20.0767 11.9049 18.5282 13.1858 17.2473C14.4659 15.9671 16.0142 15.3302 17.8587 15.3302C18.2834 15.3302 18.6942 15.3695 19.0916 15.4475L19.0917 15.4475C19.2162 15.4719 19.3395 15.5001 19.4616 15.5321C18.76 16.1876 18.193 17.0525 17.7521 18.1079C17.1805 19.4764 16.8835 20.7496 16.8835 21.9212C16.8835 23.0927 17.1805 24.3659 17.7521 25.7344C18.193 26.7898 18.76 27.6547 19.4616 28.3103C19.3395 28.3423 19.2162 28.3705 19.0917 28.3949L19.0916 28.3949C18.6942 28.4729 18.2834 28.5122 17.8587 28.5122C16.0142 28.5122 14.466 27.875 13.1858 26.5942Z"
												stroke="black"
												stroke-width="0.941572"
											/>
										</svg>
									</span>
									<h3 className="text-[20px] font-[600]">Housing</h3>
								</div>
								<p className="text-[#FCB40C] bg-[#FFF4DC] rounded-[4px] px-3 py-2 text-[11px]">
									Dividends Taken
								</p>
							</div>

							<div className="flex flex-col gap-4 mt-7">
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Vault Amount
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Balance
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Dividends
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Payback Date
									</h3>
									<p className="text-[13px] font-[500]">
										10th of september, 2023
									</p>
								</div>
							</div>

							<div className="mt-6 flex items-center space-x-1.5">
								<div className="h-[9px] bg-[#E5E7EB] relative w-full rounded-[10px] overflow-hidden">
									<div className="absolute w-[40%] bg-[#240552] h-full rounded-full"></div>
								</div>
								<p className="text-[13px] font-[500]">40%</p>
							</div>
							<p className="text-[13px] text-[#9CA3AF] font-[500] mt-1">
								19 Days Left
							</p>
						</div>
						<div
							className="bg-[#F3F4F6] rounded-[8px] p-5 border-[1px] border-[#F3F4F6] cursor-pointer"
							onClick={() => setModal("plan")}
						>
							<div className="flex justify-between items-center">
								<div className="flex items-center space-x-4">
									<span>
										{" "}
										<svg
											width="30"
											height="30"
											viewBox="0 0 44 44"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="22.0215"
												cy="22.0449"
												r="21.6504"
												fill="#3B82F6"
											/>
											<path
												d="M21.6994 26.9169L21.6962 26.9157C21.642 26.8951 21.583 26.8617 21.5192 26.8094C20.8535 26.2196 20.3225 25.4834 19.9286 24.5928L19.9285 24.5927C19.5325 23.698 19.3383 22.8086 19.3383 21.9212C19.3383 21.0337 19.5325 20.144 19.9286 19.2486C20.3231 18.3573 20.8466 17.621 21.496 17.0313C21.5607 16.9784 21.6289 16.9372 21.7011 16.9062C21.7573 16.8822 21.8199 16.8686 21.894 16.8686C21.9681 16.8686 22.0219 16.8821 22.063 16.901C22.1296 16.9319 22.1983 16.9749 22.2686 17.0329C22.9344 17.6227 23.4654 18.3586 23.8594 19.2486C24.2555 20.144 24.4497 21.0337 24.4497 21.9212C24.4497 22.8086 24.2555 23.698 23.8594 24.5927L23.8594 24.5928C23.4633 25.4883 22.9372 26.2272 22.2843 26.818L22.2756 26.8259L22.2673 26.8342C22.2407 26.8607 22.2015 26.8876 22.1372 26.9088L22.1358 26.9093C22.058 26.9354 21.9781 26.9485 21.894 26.9485C21.8092 26.9485 21.7464 26.9352 21.6994 26.9169ZM24.6964 28.3949L24.6962 28.3949C24.5717 28.3705 24.4485 28.3423 24.3263 28.3103C25.028 27.6547 25.5949 26.7898 26.0358 25.7344C26.6075 24.3659 26.9045 23.0927 26.9045 21.9212C26.9045 20.7496 26.6075 19.4764 26.0358 18.1079C25.5949 17.0525 25.028 16.1876 24.3263 15.5321C24.4485 15.5001 24.5717 15.4719 24.6962 15.4475L24.6964 15.4475C25.0937 15.3695 25.5045 15.3302 25.9293 15.3302C27.7738 15.3302 29.322 15.9671 30.6022 17.2473C31.8831 18.5282 32.5203 20.0767 32.5203 21.9212C32.5203 23.7656 31.8831 25.3138 30.6023 26.594L30.6021 26.5942C29.3219 27.875 27.7737 28.5122 25.9293 28.5122C25.5045 28.5122 25.0937 28.4729 24.6964 28.3949ZM13.1858 26.5942L13.1857 26.594C11.9048 25.3138 11.2677 23.7656 11.2677 21.9212C11.2677 20.0767 11.9049 18.5282 13.1858 17.2473C14.4659 15.9671 16.0142 15.3302 17.8587 15.3302C18.2834 15.3302 18.6942 15.3695 19.0916 15.4475L19.0917 15.4475C19.2162 15.4719 19.3395 15.5001 19.4616 15.5321C18.76 16.1876 18.193 17.0525 17.7521 18.1079C17.1805 19.4764 16.8835 20.7496 16.8835 21.9212C16.8835 23.0927 17.1805 24.3659 17.7521 25.7344C18.193 26.7898 18.76 27.6547 19.4616 28.3103C19.3395 28.3423 19.2162 28.3705 19.0917 28.3949L19.0916 28.3949C18.6942 28.4729 18.2834 28.5122 17.8587 28.5122C16.0142 28.5122 14.466 27.875 13.1858 26.5942Z"
												stroke="black"
												stroke-width="0.941572"
											/>
										</svg>
									</span>
									<h3 className="text-[20px] font-[600]">Housing</h3>
								</div>
								<p className="text-[#FCB40C] bg-[#FFF4DC] rounded-[4px] px-3 py-2 text-[11px]">
									Dividends Taken
								</p>
							</div>

							<div className="flex flex-col gap-4 mt-7">
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Vault Amount
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Balance
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Dividends
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Payback Date
									</h3>
									<p className="text-[13px] font-[500]">
										10th of september, 2023
									</p>
								</div>
							</div>

							<div className="mt-6 flex items-center space-x-1.5">
								<div className="h-[9px] bg-[#E5E7EB] relative w-full rounded-[10px] overflow-hidden">
									<div className="absolute w-[40%] bg-[#240552] h-full rounded-full"></div>
								</div>
								<p className="text-[13px] font-[500]">40%</p>
							</div>
							<p className="text-[13px] text-[#9CA3AF] font-[500] mt-1">
								19 Days Left
							</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="completed">
					<div className="mt-7 flex flex-col gap-4 px-8 overflow-y-auto h-[300px]">
						<div
							className="bg-[#F3F4F6] rounded-[8px] p-5 border-[1px] border-[#F3F4F6] cursor-pointer"
							onClick={() => setModal("complete plan")}
						>
							<div className="flex justify-between items-center">
								<div className="flex items-center space-x-4">
									<span>
										{" "}
										<svg
											width="30"
											height="30"
											viewBox="0 0 44 44"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="22.0215"
												cy="22.0449"
												r="21.6504"
												fill="#3B82F6"
											/>
											<path
												d="M21.6994 26.9169L21.6962 26.9157C21.642 26.8951 21.583 26.8617 21.5192 26.8094C20.8535 26.2196 20.3225 25.4834 19.9286 24.5928L19.9285 24.5927C19.5325 23.698 19.3383 22.8086 19.3383 21.9212C19.3383 21.0337 19.5325 20.144 19.9286 19.2486C20.3231 18.3573 20.8466 17.621 21.496 17.0313C21.5607 16.9784 21.6289 16.9372 21.7011 16.9062C21.7573 16.8822 21.8199 16.8686 21.894 16.8686C21.9681 16.8686 22.0219 16.8821 22.063 16.901C22.1296 16.9319 22.1983 16.9749 22.2686 17.0329C22.9344 17.6227 23.4654 18.3586 23.8594 19.2486C24.2555 20.144 24.4497 21.0337 24.4497 21.9212C24.4497 22.8086 24.2555 23.698 23.8594 24.5927L23.8594 24.5928C23.4633 25.4883 22.9372 26.2272 22.2843 26.818L22.2756 26.8259L22.2673 26.8342C22.2407 26.8607 22.2015 26.8876 22.1372 26.9088L22.1358 26.9093C22.058 26.9354 21.9781 26.9485 21.894 26.9485C21.8092 26.9485 21.7464 26.9352 21.6994 26.9169ZM24.6964 28.3949L24.6962 28.3949C24.5717 28.3705 24.4485 28.3423 24.3263 28.3103C25.028 27.6547 25.5949 26.7898 26.0358 25.7344C26.6075 24.3659 26.9045 23.0927 26.9045 21.9212C26.9045 20.7496 26.6075 19.4764 26.0358 18.1079C25.5949 17.0525 25.028 16.1876 24.3263 15.5321C24.4485 15.5001 24.5717 15.4719 24.6962 15.4475L24.6964 15.4475C25.0937 15.3695 25.5045 15.3302 25.9293 15.3302C27.7738 15.3302 29.322 15.9671 30.6022 17.2473C31.8831 18.5282 32.5203 20.0767 32.5203 21.9212C32.5203 23.7656 31.8831 25.3138 30.6023 26.594L30.6021 26.5942C29.3219 27.875 27.7737 28.5122 25.9293 28.5122C25.5045 28.5122 25.0937 28.4729 24.6964 28.3949ZM13.1858 26.5942L13.1857 26.594C11.9048 25.3138 11.2677 23.7656 11.2677 21.9212C11.2677 20.0767 11.9049 18.5282 13.1858 17.2473C14.4659 15.9671 16.0142 15.3302 17.8587 15.3302C18.2834 15.3302 18.6942 15.3695 19.0916 15.4475L19.0917 15.4475C19.2162 15.4719 19.3395 15.5001 19.4616 15.5321C18.76 16.1876 18.193 17.0525 17.7521 18.1079C17.1805 19.4764 16.8835 20.7496 16.8835 21.9212C16.8835 23.0927 17.1805 24.3659 17.7521 25.7344C18.193 26.7898 18.76 27.6547 19.4616 28.3103C19.3395 28.3423 19.2162 28.3705 19.0917 28.3949L19.0916 28.3949C18.6942 28.4729 18.2834 28.5122 17.8587 28.5122C16.0142 28.5122 14.466 27.875 13.1858 26.5942Z"
												stroke="black"
												stroke-width="0.941572"
											/>
										</svg>
									</span>
									<h3 className="text-[20px] font-[600]">Housing</h3>
								</div>
								<p className="text-[#23A323] bg-[#E2F9E2] rounded-[4px] px-3 py-2 text-[11px]">
									Matured
								</p>
							</div>

							<div className="flex flex-col gap-4 mt-7">
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Vault Amount
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Balance
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Dividends
									</h3>
									<p className="text-[13px] font-[500]">
										₦1,00,000.00
									</p>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="text-[13px] text-[#9CA3AF] font-[500]">
										Payback Date
									</h3>
									<p className="text-[13px] font-[500]">
										10th of september, 2023
									</p>
								</div>
							</div>

							<div className="mt-6 flex items-center space-x-1.5">
								<div className="h-[9px] bg-[#E5E7EB] relative w-full rounded-[10px] overflow-hidden">
									<div className="absolute w-[100%] bg-[#240552] h-full rounded-full"></div>
								</div>
								<p className="text-[13px] font-[500]">100%</p>
							</div>
							<p className="text-[13px] text-[#9CA3AF] font-[500] mt-1">
								0 Days Left
							</p>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);

	const Behaviour = () => (
		<Modal>
			<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-10 h-full">
				<XCircleIcon
					className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
					onClick={() => setModal("")}
				/>

				<div className="flex flex-col mx-auto pt-[30px]">
					<h1 className="text-primary text-[24px] font-[500] text-center mb-[6px]">
						Behavioural pattern
					</h1>
					<p className="text-[14px] font-[500] text-center text-[#9CA3AF]">
						View how well you’ve been doing
					</p>
				</div>

				<div className="px-[30px] mt-[55px] h-full">
					<div className="h-[8px] w-full bg-[#F9F5FF] rounded-full relative">
						<div
							className="h-full bg-primary rounded-full transition-[width] duration-[1000ms]"
							style={{ width: "70%" }}
						/>
						<div className="absolute rounded-full bg-white flex justify-center items-center w-[38px] h-[38px] top-[-18px] left-0">
							<Image src={sad} width={21} height={21} alt="sad" />
						</div>
						<div className="absolute rounded-full bg-white flex justify-center items-center w-[38px] h-[38px] top-[-18px] left-[45%]">
							<Image src={moody} width={21} height={21} alt="moody" />
						</div>

						<div className="absolute rounded-full bg-white flex justify-center items-center w-[38px] h-[38px] top-[-18px] right-0 border-[1px] border-primary">
							<Image src={happy} width={21} height={21} alt="happy" />
						</div>
					</div>
					<div className="flex justify-between mt-10 items-center">
						<p className="text-[13px] font-[400] text-[#9CA3AF]">
							Streak
						</p>
						<p className="text-[14px] text-primary font-[500] flex items-center">
							<span className="mr-2">
								<Image src={star} width={17} height={17} alt="star" />
							</span>
							₦10,000.00 saved in 2months
						</p>
					</div>
					<div className="flex justify-between mt-8 items-center mb-2">
						<p className="text-[13px] font-[400] text-[#9CA3AF]">
							Missed deposit
						</p>
						<p className="text-[14px] text-[#FCB40C] font-[500] flex items-center">
							₦10,000.00 | 20 days ago
						</p>
					</div>
				</div>
			</div>
		</Modal>
	);

	const TopUpModal = () => (
		<Modal>
			<>
				{topupStep === "enter amount" && (
					<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
							onClick={() => setModal("")}
						/>

						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-primary text-[20px] font-[500] text-center mb-[6px]">
								Enter Amount
							</h1>
							<p className="text-[12px] font-[500] text-center text-[#9CA3AF]">
								How much would you like to start with?
							</p>
						</div>

						<div>
							<div className="flex justify-center">
								<CurrencyInput
									id="input-example"
									prefix="₦"
									name="input-name"
									decimalsLimit={2}
									value={amount}
									ref={inputRef}
									onValueChange={(value) => {
										if (value) {
											setAmount(value);
										}
									}}
									className="mt-5 outline-none bg-[#fff] text-center text-primary border-0 text-[40px]  
                    border-b-[1px] border-b-primary border-[#F0F0F0] rounded-[4px] font-[500] w-[260px]
                    block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								/>
							</div>

							<div className="flex justify-center flex-wrap max-w-[400px] mx-auto gap-3 mt-10">
								<button
									className={`border-[1px] font-medium  rounded-[4px] text-[12px] py-2 px-5 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
										amount === "5000"
											? "bg-[#F6F1FE] border-primary text-primary"
											: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
									}`}
									onClick={() => setAmount("5000")}
								>
									N5,000
								</button>
								<button
									className={`border-[1px] font-medium  rounded-[4px] text-[12px] py-2 px-5 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
										amount === "10000"
											? "bg-[#F6F1FE] border-primary text-primary"
											: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
									}`}
									onClick={() => setAmount("10000")}
								>
									N10,000
								</button>
								<button
									className={`border-[1px] font-medium  rounded-[4px] text-[12px] py-2 px-5 hover:bg-[#F6F1FE] hover:border-primary hover:text-primary duration-300 ${
										amount === "20000"
											? "bg-[#F6F1FE] border-primary text-primary"
											: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
									}`}
									onClick={() => setAmount("20000")}
								>
									N20,000
								</button>
							</div>

							<div className="flex justify-center mb-2">
								<button
									className="mt-9 cursor-pointer w-full mx-7 bg-primary text-[12px] text-white p-5 rounded-[8px]  border-[1px] disabled:bg-primary/60"
									onClick={() => {
										setTopUpStep("estimate");
									}}
									disabled={!amount || Number(amount) < 5000}
								>
									Continue
								</button>
							</div>
						</div>
					</div>
				)}
				{topupStep === "estimate" && (
					<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
							onClick={() => setModal("")}
						/>

						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-primary text-[20px] font-[500] text-center mb-[6px] font-[founder]">
								Estimate
							</h1>
							<p className="text-[12px] font-[500] text-center text-[#9CA3AF]">
								A good consistency would give you this breakdown
							</p>
						</div>

						<Tabs
							defaultValue="details"
							className="w-[400px] mx-auto mt-8"
						>
							<TabsList className="grid w-[320px] mx-auto grid-cols-2 h-[46px] bg-[#F9F9F9]">
								<TabsTrigger
									value="details"
									className="h-full rounded-[8px]"
								>
									Details
								</TabsTrigger>
								<TabsTrigger
									value="breakdown"
									className="h-full rounded-[8px]"
								>
									Breakdown
								</TabsTrigger>
							</TabsList>
							<TabsContent value="details">
								<div className="mt-4">
									<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
										<p className="text-[#9CA3AF] text-[12px] font-medium">
											Amount
										</p>

										<p className="text-[14px] font-medium text-black">
											₦100,000
										</p>
									</div>

									<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
										<div className="flex items-center">
											<p className="text-[#9CA3AF] text-[12px] font-medium">
												Frequency
											</p>
											<span className="mr-[-50px] hidden">
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger asChild>
															<Button
																variant="outline"
																className="outline-none border-none w-full hover:bg-white"
															>
																<svg
																	width="11"
																	height="11"
																	viewBox="0 0 11 11"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																		fill="#9CA3AF"
																	/>
																	<path
																		d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																		fill="#23A323"
																	/>
																	<path
																		d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																		fill="#23A323"
																	/>
																</svg>
															</Button>
														</TooltipTrigger>
														<TooltipContent
															className="top-[6090px] ml-[26px] text-white"
															align="start"
														>
															<div className="p-2">
																<h6 className="text-[12px] font-[500]">
																	Interest Accrued
																</h6>
																<p className="text-[10px] font-[500]">
																	Amount/Dividends * Frequency
																</p>
															</div>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</span>
										</div>

										<p className="text-[14px] font-medium text-black">
											weekly
										</p>
									</div>

									<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
										<div className="flex items-center">
											<p className="text-[#9CA3AF] text-[12px] font-medium">
												Dividends Rate
											</p>
											<span className="mr-[-50px] hidden">
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger asChild>
															<Button
																variant="outline"
																className="outline-none border-none w-full hover:bg-white"
															>
																<svg
																	width="11"
																	height="11"
																	viewBox="0 0 11 11"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																		fill="#9CA3AF"
																	/>
																	<path
																		d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																		fill="#23A323"
																	/>
																	<path
																		d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																		fill="#23A323"
																	/>
																</svg>
															</Button>
														</TooltipTrigger>
														<TooltipContent
															className="top-[6090px] ml-[26px] text-white"
															align="start"
														>
															<div className="p-2">
																<h6 className="text-[12px] font-[500]">
																	Interest Accrued
																</h6>
																<p className="text-[10px] font-[500]">
																	Amount/Dividends * Frequency
																</p>
															</div>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</span>
										</div>

										<p className="text-[14px] font-medium text-black">
											6-10% per annum
										</p>
									</div>

									<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
										<div className="flex items-center">
											<p className="text-[#9CA3AF] text-[12px] font-medium">
												Dividends Accrued
											</p>
											<span className="mr-[-50px] hidden">
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger asChild>
															<Button
																variant="outline"
																className="outline-none border-none w-full hover:bg-white"
															>
																<svg
																	width="11"
																	height="11"
																	viewBox="0 0 11 11"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																		fill="#9CA3AF"
																	/>
																	<path
																		d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																		fill="#23A323"
																	/>
																	<path
																		d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																		fill="#23A323"
																	/>
																</svg>
															</Button>
														</TooltipTrigger>
														<TooltipContent
															className="top-[6090px] ml-[26px] text-white"
															align="start"
														>
															<div className="p-2">
																<h6 className="text-[12px] font-[500]">
																	Interest Accrued
																</h6>
																<p className="text-[10px] font-[500]">
																	Amount/Dividends * Frequency
																</p>
															</div>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</span>
										</div>

										<p className="text-[14px] font-medium text-black">
											₦100,000
										</p>
									</div>

									<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
										<div className="flex items-center">
											<p className="text-[#9CA3AF] text-[12px] font-medium">
												Dividends Upfront
											</p>
											<span className="mr-[-50px] hidden">
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger asChild>
															<Button
																variant="outline"
																className="outline-none border-none w-full hover:bg-white"
															>
																<svg
																	width="11"
																	height="11"
																	viewBox="0 0 11 11"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																		fill="#9CA3AF"
																	/>
																	<path
																		d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																		fill="#23A323"
																	/>
																	<path
																		d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																		fill="#23A323"
																	/>
																</svg>
															</Button>
														</TooltipTrigger>
														<TooltipContent
															className="top-[6090px] ml-[26px] text-white"
															align="start"
														>
															<div className="p-2">
																<h6 className="text-[12px] font-[500]">
																	Interest Accrued
																</h6>
																<p className="text-[10px] font-[500]">
																	Amount/Dividends * Frequency
																</p>
															</div>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</span>
										</div>

										<Switch />
									</div>

									<p className="text-center my-6 text-[13px] font-[500] px-[15%]">
										Saving Tip: Save N16,666 Monthly to achieve
										target. You can also top up anytime
									</p>

									<div className="flex flex-col gap-3">
										<p className="text-[13px] text-[#9CA3AF] font-[500]">
											Preferred amount to save{" "}
										</p>
										<input
											type="text"
											name=""
											id=""
											defaultValue={"N10,000"}
											className="w-full border-[1px] font-[500] text-primary border-[#D1D5DB] rounded-[4px] p-4"
										/>
									</div>

									<div className="w-full flex-row items-center flex mx-auto my-4">
										<input
											type="checkbox"
											className="accent-primary mr-1 cursor-pointer"
											checked={agreed}
											onChange={(e) => {
												if (e.target.checked === true) {
													setAgreed(true);
												} else {
													setAgreed(false);
												}
											}}
										/>
										<p className="text-[12px] font-[500] text-[#9CA3AF] text-center mt-4">
											By clicking you are agreeing to the{" "}
											<span className="text-primary">
												Terms and Conditions Please note: Cannot be
												broken
											</span>
										</p>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="breakdown">
								<div className="mt-5 bg-[#F9F9F9] w-[328px] mx-auto">
									<Table className="mx-auto">
										<TableHeader>
											<TableRow>
												<TableHead className="text-[10px] font-[500]">
													Date
												</TableHead>
												<TableHead className="text-[10px] font-[500]">
													Amount
												</TableHead>
												<TableHead className="text-[10px] font-[500]">
													Dividends
												</TableHead>
												<TableHead className="text-[10px] font-[500]">
													Amounts
												</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody className="bg-[#F9F9F9] rounded-t-[8px] mx-auto">
											{Breakdown.map((b, i) => (
												<TableRow
													key={i}
													className="border-0 cursor-pointer"
												>
													<TableCell className="text-[10px] font-[500]">
														{b.date}
													</TableCell>
													<TableCell className="text-[10px] font-[500]">
														{b.amount}
													</TableCell>
													<TableCell className="text-[10px] font-[500]">
														{b.dividends}
													</TableCell>
													<TableCell className="text-[10px] font-[500] text-[#23A323]">
														{b.amounts}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</div>
							</TabsContent>
						</Tabs>

						<button
							className="mt-8 cursor-pointer w-[390px] block mx-auto bg-primary text-white p-5 rounded-[8px] text-[12px] disabled:bg-primary/60"
							onClick={() => {
								setTopUpStep("overview");
							}}
							disabled={agreed === false}
						>
							Continue
						</button>
					</div>
				)}

				{topupStep === "overview" && (
					<div className="w-[439px] rounded-t-[30px] bg-white  relative h-full pb-5">
						<div
							className="flex items-center top-[34px] left-[30px] cursor-pointer absolute"
							onClick={() => setTopUpStep("estimate")}
						>
							<ChevronLeftCircle className="w-[17px] h-[17px] text-[#9CA3AF]/40" />
							<span className="text-[12px] ml-[6px] text-[#9CA3AF] font-medium">
								Back
							</span>
						</div>
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
							onClick={() => {
								setModal("");
								setTopUpStep("enter amount");
							}}
						/>

						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-primary text-[25px] font-[500] font-[founder] text-center mb-[6px]">
								Overview
							</h1>
							<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
								Summary of your transaction
							</p>
						</div>

						<div className="flex items-center justify-center mt-7 mx-auto h-[90px] w-[86px]">
							<Image src={diblarge} alt="dib" width={90} height={90} />
						</div>

						<div className="mt-7 mb-4 w-[379px] mx-auto h-[60px] bg-[#FAFAFA] px-6 flex justify-between items-center rounded-[4px]">
							<p className="text-[12px] font-medium text-[#9CA3AF]">
								Amount to Pay
							</p>
							<p className="text-primary font-[700] text-[24px] rounded-[4px] mona">
								₦ 50,000{" "}
							</p>
						</div>

						<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
							<p className="text-[#9CA3AF] text-[12px] font-medium">
								KodHex
							</p>
							<p className="text-[12px] font-[500] text-black">
								Levijazz
							</p>
						</div>

						<div className="w-[380px] mx-auto flex justify-between  py-4 mb-5">
							<p className="text-[#9CA3AF] text-[12px] font-medium">
								Plan
							</p>
							<p className="text-[12px] font-medium text-black">DIB</p>
						</div>
						<div className="w-[380px] mx-auto flex justify-between items-center mb-5">
							<p className="text-[14px] font-[500] text-[#9CA3AF]">
								Pay With
							</p>
							<p className="text-[10px] text-primary flex items-center text-right justify-end">
								<span className="mr-2">
									<svg
										width="11"
										height="12"
										viewBox="0 0 11 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.67396 10.6873C8.64021 10.1694 10.0885 8.38188 10.0885 6.25521C10.0885 3.72521 8.05354 1.67188 5.50521 1.67188C2.44812 1.67188 0.921875 4.22021 0.921875 4.22021M0.921875 4.22021V2.13021M0.921875 4.22021H1.84313H2.95688"
											stroke="#23A323"
											stroke-width="0.6875"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M0.921875 6.25391C0.921875 8.78391 2.97521 10.8372 5.50521 10.8372"
											stroke="#23A323"
											stroke-width="0.6875"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-dasharray="1.38 1.38"
										/>
									</svg>
								</span>
								<span> Click here to Refresh</span>
							</p>
						</div>

						<div className="w-[379px] mx-auto">
							<div className="w-[379px] items-center mx-auto h-[60px] flex px-5 rounded-[4px] justify-between border-[1px] border-primary">
								<div className="flex items-center ">
									<Image
										src={kodhhh}
										width={32}
										height={32}
										alt="kodh"
									/>
									<span className="text-[12px] font-medium ml-2">
										KodHex
									</span>
								</div>
								<p className="text-[10px] text-[#9CA3AF]">
									Total Balance:
									<span className="text-[16px] font-medium ml-2 text-black">
										₦ 80,000{" "}
									</span>
								</p>
							</div>
							<div className="flex justify-end mt-[5px] items-center ">
								<CheckCircle2 className="text-[#23A323] w-[11px] h-[11px] mb-[2px] mr-[6px]" />
								<span className="text-[10px] text-[#23A323] font-medium">
									Sufficient Balance
								</span>
							</div>

							<div
								className="hidden justify-end  items-center cursor-pointer mt-[5px]"
								// onClick={() => setModal("insufficient topup")}
							>
								<Ban className="text-[#E8356D] w-[11px] h-[11px] mb-[2px] mr-[6px]" />
								<span className="text-[10px] text-[#E8356D] font-medium">
									Insufficient Balance
								</span>
								<span className="mx-[3px]">-</span>
								<span className="text-[10px] text-[#23A323]">
									Top Up
								</span>
								<span>
									<ChevronRight className="w-[11px] h-[11px] text-[#23A323]" />
								</span>
							</div>

							<div className="w-full mt-3 flex justify-between cursor-pointer items-center mx-auto h-[60px] px-5 rounded-[4px]  border-[1px] border-[#F3F4F6] hover:border-primary">
								<div className="flex items-center ">
									<Image
										src={saving}
										width={32}
										height={32}
										alt="saving"
									/>
									<span className="text-[12px] font-medium ml-2">
										Savings
									</span>
								</div>

								<div>
									<p className="text-[10px] text-[#9CA3AF]">
										Total Balance:
										<span className="text-[16px] font-medium ml-2 text-black">
											₦ 80,000{" "}
										</span>
									</p>
								</div>
							</div>

							<p className="text-left text-[#9CA3AF] text-[14px] font-[500] mt-6 mb-3">
								Use Existing Cards
							</p>

							<div
								className={`px-4 cursor-pointer mb-4 transition w-full border-[1px] h-[60px] hover:border-primary  rounded-[4px] items-center flex justify-between border-[#F3F4F6]
                `}
								// onClick={() => setTopUpMethod("existing card")}
							>
								<div className="flex items-center">
									<Image
										src={master}
										width={28}
										height={22}
										alt="mastercard"
									/>

									<p className="font-medium text-[12px] ml-2">
										GTBank
									</p>
								</div>

								<span className="bg-[#F2FCF2] border-[1px] text-[#23A323] rounded-full px-3 py-2 text-[6px] border-[#23A323] mr-7">
									Active Card
								</span>

								<p className="text-[12px] font-medium">**** . 4789</p>
							</div>
						</div>

						<button
							className="text-[12px] mb-4 w-[86%] mt-4 font-medium full text-white flex justify-center items-center mx-auto rounded-[8px] p-5 bg-primary"
							onClick={() => setTopUpStep("pin")}
						>
							Pay
						</button>
					</div>
				)}
				{topupStep === "pin" && (
					<div className="w-[439px] rounded-t-[30px] bg-white h-[293px] relative">
						<div
							className="flex items-center top-[34px] left-[30px] cursor-pointer absolute"
							onClick={() => setTopUpStep("overview")}
						>
							<ChevronLeftCircle className="w-[17px] h-[17px] text-[#9CA3AF]/40" />
							<span className="text-[12px] ml-[6px] text-[#9CA3AF] font-medium">
								Back
							</span>
						</div>
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
							onClick={() => {
								setModal("");
								setTopUpStep("enter amount");
							}}
						/>
						{/* <div className="bg-red-900">hello</div> */}

						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-black text-[20px] font-semibold text-center mb-[6px]">
								Enter PIN
							</h1>
							<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
								Enter six (6) digit transaction pin
							</p>
						</div>

						<div className="w-[378px] mx-auto mt-8">
							{/* <p className="mb-2 text-[12px] font-medium">PIN</p> */}
							<div className="relative">
								<input
									// type={inputType}
									className="px-4 mb-3 outline-none w-full h-[60px] border-[1px] rounded-[4px] border-[#F3F4F6] text-[12px] font-medium placeholder:text-[#D1D5DB]"
									placeholder="Enter Pin"
									// value={pin}
									// onChange={(e) => setPin(e.target.value)}
									// ref={inputRef}
								/>
								{/* <span
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={toggleInputType}
                >
                  <Eye className="w-[16px] text-[#D1D5DB]" />
                </span> */}
							</div>
						</div>

						<button
							className="text-[12px] w-[87%]  mt-6 font-medium p-5 text-white flex justify-center items-center mx-auto rounded-[8px] bg-primary disabled:bg-primary/60"
							onClick={() => {
								setModal("topup success");
							}}
							// disabled={!pin}
						>
							Done
						</button>
					</div>
				)}
			</>
		</Modal>
	);

	const WithdrawModal = () => (
		<Modal>
			<>
				{withdrawStep === "enter amount" && (
					<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
						<div
							className="flex items-center top-[34px] left-[30px] cursor-pointer absolute"
							onClick={() => setModal("")}
						>
							<ChevronLeftCircle className="w-[17px] h-[17px] text-[#9CA3AF]/40" />
							<span className="text-[12px] ml-[6px] text-[#9CA3AF] font-medium mt-[2px]">
								Back
							</span>
						</div>
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
							onClick={() => {
								setModal("");
								setWithDrawStep("enter amount");
							}}
						/>

						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-primary text-[20px] font-semibold text-center mb-[6px]">
								Enter Amount
							</h1>
							<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
								How much do you want to withdraw?
							</p>
						</div>

						<div>
							<div className="flex justify-center">
								<CurrencyInput
									id="input-example"
									prefix="₦"
									name="input-name"
									decimalsLimit={2}
									value={withdrawAmount}
									// ref={withdrawRef}
									onValueChange={(value) => {
										if (value) {
											setWithdrawAmount(value);
										}
									}}
									className="mt-5 outline-none bg-[#fff] text-center text-primary border-0 text-[40px]  
           border-b-[1px] border-b-primary border-[#F0F0F0] rounded-[4px] font-[500] w-[260px]
           block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								/>
							</div>

							<div className="flex justify-center flex-wrap max-w-[400px] mx-auto gap-3 mt-7">
								<button
									className={`border-[1px] font-medium  rounded-[4px] text-[12px] px-4 py-2 hover:bg-[#F9F5FF] hover:border-primary hover:text-primary duration-300 ${
										withdrawAmount === "5000"
											? "bg-[#F9F5FF] border-primary text-primary"
											: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
									}`}
									onClick={() => setWithdrawAmount("5000")}
								>
									N5,000
								</button>
								<button
									className={`border-[1px] font-medium  rounded-[4px] text-[12px] px-4 py-2 hover:bg-[#F9F5FF] hover:border-primary hover:text-primary duration-300 ${
										withdrawAmount === "10000"
											? "bg-[#F9F5FF] border-primary text-primary"
											: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
									}`}
									onClick={() => setWithdrawAmount("10000")}
								>
									N10,000
								</button>
								<button
									className={`border-[1px] font-medium  rounded-[4px] text-[12px] px-4 py-2 hover:bg-[#F9F5FF] hover:border-primary hover:text-primary duration-300 ${
										withdrawAmount === "20000"
											? "bg-[#F9F5FF] border-primary text-primary"
											: "border-[#F3F4F6] bg-[#F3F4F6] text-[#9CA3AF]"
									}`}
									onClick={() => setWithdrawAmount("20000")}
								>
									N20,000
								</button>
							</div>

							<div className="flex justify-center mb-2">
								<button
									className="mt-9 cursor-pointer bg-primary text-[12px] w-[85%] text-white p-5 rounded-[8px]  border-[1px] disabled:bg-primary/60"
									disabled={!withdrawAmount}
									onClick={() => {
										setWithDrawStep("enter pin");
									}}
								>
									Continue
								</button>
							</div>
						</div>
					</div>
				)}
				{withdrawStep === "enter pin" && (
					<div className="w-[439px] rounded-t-[30px] bg-white h-[293px] relative">
						<div
							className="flex items-center top-[34px] left-[30px] cursor-pointer absolute"
							onClick={() => setWithDrawStep("enter amount")}
						>
							<ChevronLeftCircle className="w-[17px] h-[17px] text-[#9CA3AF]/40" />
							<span className="text-[12px] ml-[6px] text-[#9CA3AF] font-medium">
								Back
							</span>
						</div>
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
							onClick={() => {
								setModal("");
								setWithDrawStep("enter amount");
							}}
						/>
						{/* <div className="bg-red-900">hello</div> */}

						<div className="flex flex-col mx-auto pt-[30px]">
							<h1 className="text-primary text-[26px] font-[500] text-center mb-[6px]">
								Enter PIN
							</h1>
							<p className="text-[12px] font-medium text-center text-[#9CA3AF]">
								Enter six (6) digit transaction pin
							</p>
						</div>

						<div className="w-[378px] mx-auto mt-6">
							{/* <p className="mb-2 text-[12px] font-medium">PIN</p> */}
							<div className="relative">
								<input
									// type={inputType}
									className="px-4 outline-none w-full h-[60px] border-[1px] rounded-[4px] border-[#F3F4F6] text-[12px] font-medium placeholder:text-[#D1D5DB]"
									placeholder="Enter Pin"
									// value={withdrawalPin}
									// onChange={(e) => setWithdrawalPin(e.target.value)}
									// ref={withdrawPinRef}
								/>
								<span
									className="absolute right-4 top-4 cursor-pointer"
									// onClick={toggleInputType}
								>
									<Eye className="w-[16px] text-[#D1D5DB]" />
								</span>
							</div>
						</div>

						<button
							className="text-[12px] mt-7 font-medium w-[85%] p-5 text-white flex justify-center items-center mx-auto rounded-[8px] bg-primary disabled:bg-primary/60"
							onClick={() => {
								setModal("withdraw success");
								// setWithDrawStep("withdrawal");
							}}
							// disabled={!withdrawRef}
						>
							Confirm
						</button>
					</div>
				)}
			</>
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
								setTopUpStep("enter amount");
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

					<h1 className="text-[26px] font-[700] text-center mt-6 mb-2">
						Top Up Successful
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
						Your just attempted top up is been processed, You would
						receive a confirmation message as soon as its done
						successfully
					</p>

					<div
						className="text-primary mt-10 cursor-pointer text-[10px] mx-auto justify-center text-center bg-[#F9FAFB] rounded-[8px] w-[327px] h-[45px] flex items-center"
						// onClick={() => setModal("receipt")}
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

	const WithdrawSuccessModal = () => (
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
								setWithDrawStep("enter amount");
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

					<h1 className="text-[26px] font-[700] text-center mt-6 mb-2">
						Withdrawal Successful
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
						Your withdrawal is successful and has been transferred to your
						Kodhex balance
					</p>

					<div
						className="text-primary mt-7 cursor-pointer mb-5 text-[10px] mx-auto justify-center text-center bg-[#F9FAFB] rounded-[8px] w-[327px] h-[45px] flex items-center"
						// onClick={() => setModal("receipt")}
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

	const Plan = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="relative bg-white rounded-t-[30px] w-[90vw] h-full sm:w-[439px] pt-[34px] px-[30px]"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<XCircleIcon
						className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
						onClick={() => setModal("")}
					/>
					<div className="">
						<div className="flex items-center justify-center space-x-3">
							<span>
								<svg
									width="25"
									height="25"
									viewBox="0 0 44 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="22.0215"
										cy="22.0449"
										r="21.6504"
										fill="#3B82F6"
									/>
									<path
										d="M21.6994 26.9169L21.6962 26.9157C21.642 26.8951 21.583 26.8617 21.5192 26.8094C20.8535 26.2196 20.3225 25.4834 19.9286 24.5928L19.9285 24.5927C19.5325 23.698 19.3383 22.8086 19.3383 21.9212C19.3383 21.0337 19.5325 20.144 19.9286 19.2486C20.3231 18.3573 20.8466 17.621 21.496 17.0313C21.5607 16.9784 21.6289 16.9372 21.7011 16.9062C21.7573 16.8822 21.8199 16.8686 21.894 16.8686C21.9681 16.8686 22.0219 16.8821 22.063 16.901C22.1296 16.9319 22.1983 16.9749 22.2686 17.0329C22.9344 17.6227 23.4654 18.3586 23.8594 19.2486C24.2555 20.144 24.4497 21.0337 24.4497 21.9212C24.4497 22.8086 24.2555 23.698 23.8594 24.5927L23.8594 24.5928C23.4633 25.4883 22.9372 26.2272 22.2843 26.818L22.2756 26.8259L22.2673 26.8342C22.2407 26.8607 22.2015 26.8876 22.1372 26.9088L22.1358 26.9093C22.058 26.9354 21.9781 26.9485 21.894 26.9485C21.8092 26.9485 21.7464 26.9352 21.6994 26.9169ZM24.6964 28.3949L24.6962 28.3949C24.5717 28.3705 24.4485 28.3423 24.3263 28.3103C25.028 27.6547 25.5949 26.7898 26.0358 25.7344C26.6075 24.3659 26.9045 23.0927 26.9045 21.9212C26.9045 20.7496 26.6075 19.4764 26.0358 18.1079C25.5949 17.0525 25.028 16.1876 24.3263 15.5321C24.4485 15.5001 24.5717 15.4719 24.6962 15.4475L24.6964 15.4475C25.0937 15.3695 25.5045 15.3302 25.9293 15.3302C27.7738 15.3302 29.322 15.9671 30.6022 17.2473C31.8831 18.5282 32.5203 20.0767 32.5203 21.9212C32.5203 23.7656 31.8831 25.3138 30.6023 26.594L30.6021 26.5942C29.3219 27.875 27.7737 28.5122 25.9293 28.5122C25.5045 28.5122 25.0937 28.4729 24.6964 28.3949ZM13.1858 26.5942L13.1857 26.594C11.9048 25.3138 11.2677 23.7656 11.2677 21.9212C11.2677 20.0767 11.9049 18.5282 13.1858 17.2473C14.4659 15.9671 16.0142 15.3302 17.8587 15.3302C18.2834 15.3302 18.6942 15.3695 19.0916 15.4475L19.0917 15.4475C19.2162 15.4719 19.3395 15.5001 19.4616 15.5321C18.76 16.1876 18.193 17.0525 17.7521 18.1079C17.1805 19.4764 16.8835 20.7496 16.8835 21.9212C16.8835 23.0927 17.1805 24.3659 17.7521 25.7344C18.193 26.7898 18.76 27.6547 19.4616 28.3103C19.3395 28.3423 19.2162 28.3705 19.0917 28.3949L19.0916 28.3949C18.6942 28.4729 18.2834 28.5122 17.8587 28.5122C16.0142 28.5122 14.466 27.875 13.1858 26.5942Z"
										stroke="black"
										stroke-width="0.941572"
									/>
								</svg>
							</span>
							<h1 className="text-[20px] font-[600]">Housing</h1>
							<p className="text-[#FCB40C] bg-[#FFF4DC] rounded-[4px] px-3 py-2 text-[11px]">
								Running
							</p>
						</div>
						<div className="mt-8 flex items-center space-x-1.5">
							<div className="h-[9px] bg-[#E5E7EB] relative w-full rounded-[10px] overflow-hidden">
								<div className="absolute w-[40%] bg-[#240552] h-full rounded-full"></div>
							</div>
							<p className="text-[13px] font-[500]">40%</p>
						</div>
						<div className="mt-4 flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Balance
							</p>
							<p className="text-[13px] font-[500]">N100,000</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Dividends Accrued
							</p>
							<p className="text-[13px] font-[500]">N100,000</p>
						</div>
						{/* topup button here */}

						<button
							className="bg-[#22C55E] rounded-[8px] text-black px-8 border-[1px] border-black mx-auto my-4 block text-[12px] py-4 shadow-[4px_4px_#000]"
							onClick={() => setModal("topup")}
						>
							Quick Top Up
						</button>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Target Amount
							</p>
							<p className="text-[13px] font-[500]">N100,000</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Dividends Rate
							</p>
							<p className="text-[13px] font-[500]">20% per annum</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Frequency
							</p>
							<p className="text-[13px] font-[500]">
								N1,000,000.00 Daily
							</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Days Left
							</p>
							<p className="text-[13px] font-[500]">120</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Start Date
							</p>
							<p className="text-[13px] font-[500]">
								12 September, 2023
							</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								End Date
							</p>
							<p className="text-[13px] font-[500]">
								12 September, 2023
							</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-primary">
								Dividends Upfront
							</p>
							<p className="text-[13px] font-[500]">
								<Switch />
							</p>
						</div>
						<p className="text-[13px] font-[600] text-[rgb(156,163,175)] mt-6 text-center">
							Interest of
							<span className="text-black">N20,000</span> would be paid
							to your Savings account on{" "}
							<span className="text-black">16th Dec, 2023</span>
						</p>
						<div className="py-5">
							<Link
								href={"./vault/plan/1/settings"}
								className="bg-primary block text-center text-[14px] font-[500] my-5 text-white p-4 w-full rounded-[8px]"
							>
								Go To Plan Settings
							</Link>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const Completeplan = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="relative bg-white rounded-t-[30px] w-[90vw] h-full sm:w-[439px] pt-[34px] px-[30px]"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<XCircleIcon
						className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
						onClick={() => setModal("")}
					/>
					<div className="">
						<div className="flex items-center justify-center space-x-3">
							<span>
								<svg
									width="25"
									height="25"
									viewBox="0 0 44 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="22.0215"
										cy="22.0449"
										r="21.6504"
										fill="#3B82F6"
									/>
									<path
										d="M21.6994 26.9169L21.6962 26.9157C21.642 26.8951 21.583 26.8617 21.5192 26.8094C20.8535 26.2196 20.3225 25.4834 19.9286 24.5928L19.9285 24.5927C19.5325 23.698 19.3383 22.8086 19.3383 21.9212C19.3383 21.0337 19.5325 20.144 19.9286 19.2486C20.3231 18.3573 20.8466 17.621 21.496 17.0313C21.5607 16.9784 21.6289 16.9372 21.7011 16.9062C21.7573 16.8822 21.8199 16.8686 21.894 16.8686C21.9681 16.8686 22.0219 16.8821 22.063 16.901C22.1296 16.9319 22.1983 16.9749 22.2686 17.0329C22.9344 17.6227 23.4654 18.3586 23.8594 19.2486C24.2555 20.144 24.4497 21.0337 24.4497 21.9212C24.4497 22.8086 24.2555 23.698 23.8594 24.5927L23.8594 24.5928C23.4633 25.4883 22.9372 26.2272 22.2843 26.818L22.2756 26.8259L22.2673 26.8342C22.2407 26.8607 22.2015 26.8876 22.1372 26.9088L22.1358 26.9093C22.058 26.9354 21.9781 26.9485 21.894 26.9485C21.8092 26.9485 21.7464 26.9352 21.6994 26.9169ZM24.6964 28.3949L24.6962 28.3949C24.5717 28.3705 24.4485 28.3423 24.3263 28.3103C25.028 27.6547 25.5949 26.7898 26.0358 25.7344C26.6075 24.3659 26.9045 23.0927 26.9045 21.9212C26.9045 20.7496 26.6075 19.4764 26.0358 18.1079C25.5949 17.0525 25.028 16.1876 24.3263 15.5321C24.4485 15.5001 24.5717 15.4719 24.6962 15.4475L24.6964 15.4475C25.0937 15.3695 25.5045 15.3302 25.9293 15.3302C27.7738 15.3302 29.322 15.9671 30.6022 17.2473C31.8831 18.5282 32.5203 20.0767 32.5203 21.9212C32.5203 23.7656 31.8831 25.3138 30.6023 26.594L30.6021 26.5942C29.3219 27.875 27.7737 28.5122 25.9293 28.5122C25.5045 28.5122 25.0937 28.4729 24.6964 28.3949ZM13.1858 26.5942L13.1857 26.594C11.9048 25.3138 11.2677 23.7656 11.2677 21.9212C11.2677 20.0767 11.9049 18.5282 13.1858 17.2473C14.4659 15.9671 16.0142 15.3302 17.8587 15.3302C18.2834 15.3302 18.6942 15.3695 19.0916 15.4475L19.0917 15.4475C19.2162 15.4719 19.3395 15.5001 19.4616 15.5321C18.76 16.1876 18.193 17.0525 17.7521 18.1079C17.1805 19.4764 16.8835 20.7496 16.8835 21.9212C16.8835 23.0927 17.1805 24.3659 17.7521 25.7344C18.193 26.7898 18.76 27.6547 19.4616 28.3103C19.3395 28.3423 19.2162 28.3705 19.0917 28.3949L19.0916 28.3949C18.6942 28.4729 18.2834 28.5122 17.8587 28.5122C16.0142 28.5122 14.466 27.875 13.1858 26.5942Z"
										stroke="black"
										stroke-width="0.941572"
									/>
								</svg>
							</span>
							<h1 className="text-[20px] font-[600]">Housing</h1>
							<p className="text-[#22C55E] bg-[#F2FDF6] rounded-[4px] px-3 py-2 text-[11px]">
								Matured
							</p>
						</div>
						<div className="mt-8 flex items-center space-x-1.5">
							<div className="h-[9px] bg-[#E5E7EB] relative w-full rounded-[10px] overflow-hidden">
								<div className="absolute w-[100%] bg-[#240552] h-full rounded-full"></div>
							</div>
							<p className="text-[13px] font-[500]">100%</p>
						</div>
						<div className="mt-4 flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Balance
							</p>
							<p className="text-[13px] font-[500]">N100,000</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Dividends Accrued
							</p>
							<p className="text-[13px] font-[500]">N100,000</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Target Amount
							</p>
							<p className="text-[13px] font-[500]">N100,000</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Dividends Rate
							</p>
							<p className="text-[13px] font-[500]">20% per annum</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Frequency
							</p>
							<p className="text-[13px] font-[500]">
								N1,000,000.00 Daily
							</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Days Left
							</p>
							<p className="text-[13px] font-[500]">120</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								Start Date
							</p>
							<p className="text-[13px] font-[500]">
								12 September, 2023
							</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-[#9CA3AF]">
								End Date
							</p>
							<p className="text-[13px] font-[500]">
								12 September, 2023
							</p>
						</div>
						<div className="flex justify-between items-center border-b-[1px] py-3 border-b-[#F3F4F6]">
							<p className="text-[13px] font-[500] text-primary">
								Dividends Upfront
							</p>
							<p className="text-[13px] font-[500]">
								<Switch />
							</p>
						</div>
						<p className="text-[13px] font-[600] text-[rgb(156,163,175)] mt-6 text-center">
							Interest of
							<span className="text-black">N20,000</span> would be paid
							to your Savings account on{" "}
							<span className="text-black">16th Dec, 2023</span>
						</p>
						<div className="py-5">
							<Link
								href={"./vault/new"}
								className="bg-primary block text-center text-[14px] font-[500] my-5 text-white p-4 w-full rounded-[8px]"
							>
								Add a New Plan
							</Link>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	return (
		<section>
			{modal === "plan" && <Plan />}
			{modal === "complete plan" && <Completeplan />}
			{modal === "behavioural pattern" && <Behaviour />}
			{modal === "topup" && <TopUpModal />}
			{modal === "topup success" && <TopupSuccessModal />}
			{modal === "withdraw" && <WithdrawModal />}
			{modal === "withdraw success" && <WithdrawSuccessModal />}
			<NavBar>
				<div>
					<h1 className="font-[600] text-primary text-[24px] mb-1">
						Savings
					</h1>
					<p className="text-gray400 text-[12px] font-[500]">
						Set up your account
					</p>
				</div>
			</NavBar>
			<main className="p-4 lg:p-8 bg-[#F9FAFB]">
				<div className="bg-white rounded-t-[16px] h-full">
					<div className="text-[24px] w-[150px] text-primary inline-flex items-center justify-center ite  text-center font-[700] text-rpimary bg-[#F9F5FF] h-[59px] shadow-[5px_5px_#240552] dib-border">
						Vault
					</div>

					<div className="pt-5 px-8 flex justify-between items-center pb-7 flex-wrap gap-5">
						<div className="">
							<h1 className="text-[14px] font-[500] text-primary flex items-center mb-1">
								Total Savings{" "}
								<span className="ml-2">
									<Eye className="text-primary w-[12px]" />
								</span>
							</h1>

							<h1 className="text-primary text-[35px] font-[700] mb-4">
								N 10,000,000.00
							</h1>

							<div className="flex items-center">
								<div className="flex items-center pr-10 border-r-[1px] border-r-[#F3F4F6]">
									<Image
										src={percent}
										width={18}
										height={21}
										alt="percent"
									/>
									<div className="ml-3">
										<p className="text-[8px] font-[400] text-gray400 mb-1 uppercase">
											Dividends in 28 days
										</p>
										<p className="text-[11px] font-[500] text-primary">
											N0.56 at 8% p.a
										</p>
									</div>
								</div>
								<div className="flex items-center pl-7">
									<Image
										src={withdraw}
										width={17}
										height={17}
										alt="percent"
									/>
									<div className="ml-3">
										<p className="text-[8px] font-[400] text-gray400 mb-1 uppercase">
											Withdrawals
										</p>
										<p className="text-[11px] font-[500] text-primary">
											0 of 4 this month
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap gap-5">
							<Link href={"./vault/new"}>
								<button className="bg-[#22C55E] text-black rounded-[8px] border-[1px] border-black inline-flex items-center text-[12px] font-[500] px-14 py-4 shadow-[6px_6px_#000000]">
									<span className="text-[14px] font-[600]">+</span>
									<span className="ml-2">New Plan</span>
								</button>
							</Link>
							<button
								className="bg-[#FCB40C] text-black rounded-[8px] border-[1px] border-black inline-flex items-center text-[12px] font-[500] px-14 py-4 shadow-[6px_6px_#000000]"
								onClick={() => setModal("withdraw")}
							>
								<span>
									<Image
										src={withdraw2}
										width={16}
										height={16}
										alt="withdraw"
									/>
								</span>
								<span className="ml-2">Withdraw</span>
							</button>

							<button
								className="relative"
								onClick={() => setDropdown(!dropdown)}
							>
								<Image src={more} width={36} height={36} alt="more" />
								{dropdown && (
									<div className="absolute py-5 z-10 px-5 top-20 w-[200px] right-0 rounded-[6px] bg-white border-[1px] border-[#E5E7EB] shadow-[0px_3px_12px_0px_#00000]">
										<Link
											href={"/dashboard/savings/settings"}
											className="mb-2"
										>
											<div className="flex items-center mb-4">
												<span className="mr-2">
													<Image
														width={17}
														height={17}
														src={report}
														alt="report"
													/>
												</span>
												<p className="text-[11px] font-[500] text-primary">
													Report
												</p>
											</div>
										</Link>
										<Link href={"/dashboard/vault/settings"}>
											<div className="flex items-center mb-4">
												<span className="mr-2">
													<Image
														width={17}
														height={17}
														src={setting}
														alt="setting"
													/>
												</span>
												<p className="text-[11px] font-[500] text-primary">
													Settings
												</p>
											</div>
										</Link>
										<Link href={"/dashboard/savings/settings"}>
											<div className="flex items-center mb-4">
												<span className="mr-2">
													<Image
														width={17}
														height={17}
														src={faq}
														alt="faq"
													/>
												</span>
												<p className="text-[11px] font-[500] text-primary">
													FAQ
												</p>
											</div>
										</Link>
										<Link href={"/dashboard/vault/dividends"}>
											<div className="flex items-center mb-4">
												<span className="mr-2">
													<Image
														width={17}
														height={17}
														src={divs}
														alt="dividends"
													/>
												</span>
												<p className="text-[11px] font-[500] text-primary">
													Dividends
												</p>
											</div>
										</Link>

										<div
											className="flex items-center cursor-pointer"
											// onClick={() => setModal("behavioural pattern")}
										>
											<div className="flex items-center">
												<span className="mr-2">
													<Image
														width={17}
														height={17}
														src={behaviour}
														alt="behavioural patter"
													/>
												</span>
												<p className="text-[11px] font-[500] text-primary mr-4">
													Behavioural Pattern
												</p>
												<Image
													src={lock}
													alt="lock"
													className="w-[20px]"
												/>
											</div>
										</div>
									</div>
								)}
							</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-x-[60px] mt-9 w-full">
					<div>
						<div className="mb-9 rounded-t-[16px] flex items-center bg-white h-[100px] flex-1">
							<div className="mt-1 text-[12px] font-[500] text-primary bg-[#F3EBFF] rounded-t-[16px] flex justify-center items-center px-7 shadow-[5px_0px_#F9F5FF] h-[50px] md:h-full">
								Updates
							</div>
							<div className="flex justify-around w-full">
								<p className="flex text-[12px] font-[500] text-primary">
									Annie{" "}
									<span className="ml-3 bg-white shadow-md flex justify-center items-center w-5 h-5 rounded-full">
										<Code2 className="text-primary w-[12px]" />
									</span>
								</p>
								<p className="text-[12px] font-[500] text-primary">
									saved N1,000 (10 mins ago)
								</p>
							</div>
						</div>
						<div className="bg-white rounded-b-[16px] border-[1px] border-[#EEEFF2] shadow-[0px_4px_30px_0px_#9494941A] flex-1 py-8">
							<h1 className="text-[12px] font-[700] text-[#9CA3AF] uppercase mb-6 px-8">
								ALL YOUR VAULT SAVINGS
							</h1>

							<SavingsTab />
						</div>
					</div>
					<div className="bg-white rounded-b-[16px] border-[1px] border-[#EEEFF2] shadow-[0px_4px_30px_0px_#9494941A] p-8 flex-1">
						<h1 className="text-[12px] font-[700] text-[#9CA3AF] uppercase mb-6">
							RECENT TRANSACTIONS
						</h1>
						<Transactiontab />
					</div>
				</div>
			</main>
		</section>
	);
}

export default Existing;
