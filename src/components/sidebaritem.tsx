import Link from "next/link";
import React from "react";
import Image from "next/image";

type props = {
  title: string;
  link: string;
  isActive: boolean;
  icon?: React.ReactNode | string;
  image?: string;
};

function Sidebaritem({ link, title, icon, isActive, image }: props) {
  return (
    <Link
      href={link}
      className={`px-6 py-4 flex items-center gap-4 rounded-[5px] mb-2 hover:bg-[#F9FAFB] ${
        isActive ? "bg-[#F9FAFB]  border-[#F9FAFB] text-[#000]" : "border-primary"
      }`}
    >
      <span>
        <span>{icon}</span>
      </span>
      <span className="text-[#9CA3AF] text-[12px] font-[500]">{title}</span>
    </Link>
  );
}

export default Sidebaritem;
