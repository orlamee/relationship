"use client";
import Image from "next/image";
import React, { useState } from "react";
import bell from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { logout } from "@/actions";

type Props = {
	children: React.ReactNode;
	username: string;
	profile_photo: string;
};
function NavBar({ children, username, profile_photo }: Props) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<header className="sticky top-0 z-[200] px-4 lg:px-8 flex items-center h-[110px] w-full bg-white">
			<nav className="flex justify-between w-full items-center">
				{children}
				<div className="flex items-center h-full gap-4">
					{/* <Link href="#">
						<Image src={bell} width={30} height={30} alt="bell" />
					</Link> */}
					<div className="flex items-center gap-3">
						<div className="relative mt-2 hidden">
							<button
								onClick={toggleDropdown}
								className="focus:outline-none relative w-[40px] h-[40px] rounded-full"
							>
								<Image
									src={profile_photo || avatar}
									fill
									alt="user"
									className="rounded-full"
								/>
							</button>
						</div>
						<div className="flex items-center h-full gap-5">
							<Image src={bell} width={32} height={32} alt="bell" />

							<div className="flex items-center gap-4">
								<DropdownMenu modal={false}>
									<DropdownMenuTrigger asChild>
										<button className="outline-none relative w-[35px] h-[35px] rounded-full">
											<Image
												src={profile_photo || avatar}
												fill
												alt="user"
												className="rounded-full"
											/>
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="mt-4 z-[200] w-[300px] mr-8 border-[1px] border-[#E5E7EB] py-5 pb-8 rounded-[8px] bg-white">
										<div className="px-4 pb-4">
											<h1 className="text-[14px] font-[600] mb-1">
												{username || "Olabode Bola"}
											</h1>
											<h3 className="text-[#9CA3AF] font-[600] text-[12px]">
												Customer care
											</h3>
										</div>
										<DropdownMenuSeparator />
										<div className="px-2 flex flex-col gap-2 mt-4">
											<Link href={"/dashboard/account"}>
												<div className="flex items-center hover:bg-[#F9FAFB] rounded-[4px] px-1.5 py-1.5 cursor-pointer">
													<Icon
														icon="iconoir:profile-circle"
														className="text-[#9CA3AF] text-[20px] me-3"
													/>
													<h2 className="font-[600] text-[13px]">
														Account
													</h2>
												</div>
											</Link>

											<div
												className="flex items-center hover:bg-[#F9FAFB] rounded-[4px] px-1.5 py-1.5 cursor-pointer"
												onClick={() => logout()}
											>
												<Icon
													icon="carbon:login"
													className="text-[#9CA3AF] text-[20px] me-3"
												/>
												<h2 className="font-[600] text-[13px]">
													Logout
												</h2>
											</div>
										</div>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
						<div>
							<h3 className="text-[#21003D] text-[13px] leading-[15px] font-[600] mb-1.5">
								{username || "Olabode Bola"}
							</h3>
							<h6 className="text-[#9CA3AF] text-[12px] leading-[14px] font-[500]">
								Customer care
							</h6>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
