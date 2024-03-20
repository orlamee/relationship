"use client";
import Image from "next/image";
import React, { useState } from "react";
import bell from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

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
					<Link href="#">
						<Image src={bell} width={30} height={30} alt="bell" />
					</Link>
					<div className="flex items-center gap-3">
						<div className="relative mt-2">
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
							{isDropdownOpen && (
								<div className="absolute top-full right-0 mt-3 bg-white border border-[#E5E7EB] rounded-lg shadow-lg w-[400px]">
									<div className="px-5 py-7">
										<div className="ms-4 mb-4">
											<h3 className="text-[12px] text-[#000] font-[600] leading-[20px]">
												{username || "Olabode Bola"}
											</h3>
											<h4 className="text-[#9CA3AF] text-[11px] font-[500] leading-[20px]">
												Customer Care
											</h4>
										</div>
										<div className="border-t border-[#F9FAFB] my-2"></div>
										<ul>
											<li className="hover:bg-[#F9FAFB] py-2 px-3 mb-4">
												<Link href="/dashboard/account">
													<div className="flex items-center">
														<Icon
															icon="iconoir:profile-circle"
															className="text-[#9CA3AF] text-[20px] me-3"
														/>
														<span className="text-[13px] text-[#051505] font-[500] leading-[16px]">
															Account
														</span>
													</div>
												</Link>
											</li>
											<li className="hover:bg-[#F9FAFB] py-2 px-3 mb-4">
												<Link href={"/"}>
													<div className="flex items-center">
														<Icon
															icon="carbon:login"
															className="text-[#9CA3AF] text-[20px] me-3"
														/>
														<span className="text-[13px] text-[#051505] font-[500] leading-[16px]">
															Logout
														</span>
													</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							)}
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
