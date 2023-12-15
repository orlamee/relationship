"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Sidebaritem from "./sidebaritem";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden xl:block h-screen w-[330px] fixed left-0 z-[100] aside bg-[#fff] box-shadow shadow-[0_4px_30px_0_#9494941A]">
      <ScrollArea className="h-full">
        <div className="flex h-[110px] items-center pl-[40px]">
          <Image src={logo} alt="ardilla logo" width={95} height={32} />
        </div>
        <div className="mx-[20px] mt-6">
          <Sidebaritem
            title="Dashboard"
            link="/dashboard"
            icon={
              <Icon
                icon="iwwa:dashboard"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === "/dashboard"}
          />
          <Sidebaritem
            title="User Management"
            link=""
            icon={
              <Icon
                icon="heroicons:users"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === ""}
          />
          <Sidebaritem
            title="Member"
            link="/dashboard/members"
            icon={
              <Icon icon="bx:user" className="text-[#21003D] text-[24px]" />
            }
            isActive={pathname === "/dashboard/members"}
          />
          <Sidebaritem
            title="Savings"
            link="/dashboard/savings"
            icon={
              <Icon
                icon="clarity:savings-line"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/savings"}
          />
          <Sidebaritem
            title="Loan"
            link="/dashboard/wallet"
            icon={
              <Icon
                icon="ion:wallet-outline"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/wallet"}
          />
          <Sidebaritem
            title="Payment"
            link="/dashboard/payment"
            icon={
              <Icon
                icon="solar:card-send-outline"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/payment"}
          />
          <Sidebaritem
            title="Branch"
            link="/dashboard/rewards"
            icon={
              <Icon
                icon="solar:branching-paths-up-linear"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/rewards"}
          />
          <Sidebaritem
            title="Aditall"
            link=""
            icon={
              <Icon
                icon="heroicons:users"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === ""}
          />
          <Sidebaritem
            title="Product"
            link="/dashboard/savings-rank"
            icon={
              <Icon
                icon="la:shopping-bag"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/savings-ranks"}
          />
          <Sidebaritem
            title="Schedule"
            link="/dashboard/savings-rank"
            icon={
              <Icon
                icon="material-symbols-light:event-note-outline"
                className="text-[#21003D] text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/savings-ranks"}
          />
          {/* <Accordion type="single" collapsible className="w-full outline-none">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="text-[#9CA3AF] text-[12px] font-[500] hover:bg-[#F9FAFB] py-4 px-6 hover:no-underline">
                <div className="flex gap-4">
                  <Icon
                    icon="nimbus:marketing"
                    className="text-[#21003D] text-[24px]"
                  />
                  <p>Marketing</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href={"/dashboard/email"}
                  className={`block mt-2  ml-[50px] text-[#9CA3AF] text-[12px] font-[500] hover:text-[#21003D] hover:bg-[#F9FAFB] px-4 py-2 rounded-[5px] mb-1 ${
                    pathname === "/dashboard/email" ||
                    pathname.startsWith("/dashboard/email")
                      ? "bg-[#F9FAFB] text-[#21003D]"
                      : "text-[#a9b1bc]"
                  }`}
                >
                  Email
                </Link>
                <Link
                  href={"/dashboard/prompt"}
                  className={`block mt-2  ml-[50px] text-[#9CA3AF] text-[12px] font-[500]  hover:text-[#21003D] hover:bg-[#F9FAFB] px-4 py-2 rounded-[5px] mb-1 ${
                    pathname === "/dashboard/prompt" ||
                    pathname.startsWith("/dashboard/prompt")
                      ? "bg-[#F9FAFB] text-[#21003D]"
                      : "text-[#a9b1bc]"
                  }`}
                >
                  Prompt
                </Link>
                <Link
                  href={"/marketing/email"}
                  className={`block mt-2  ml-[50px] text-[#9CA3AF] text-[12px] font-[500] hover:text-[#21003D] hover:bg-[#F9FAFB] px-4 py-2 rounded-[5px] mb-1 ${
                    pathname === "/marketing" ||
                    pathname.startsWith("/marketing/email")
                      ? "bg-[#F9FAFB] text-[#21003D]"
                      : "text-[#a9b1bc]"
                  }`}
                >
                  Settings
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </ScrollArea>
    </aside>
  );
}

export default Sidebar;
