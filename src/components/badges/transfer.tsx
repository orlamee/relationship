import React from "react";

interface BadgeProps {
  type: "successful" | "pending" | "failed" | "reversed";
  text: string;
}

const TransferStatus: React.FC<BadgeProps> = ({ type, text }: BadgeProps) => {
  let badgeClass = "";
  let badgeText = "";

  if (type === "successful") {
    badgeClass =
      "bg-[#EFFBEF] font-[500] text-[#228B22] text-[11px] py-1 px-2 rounded-[4px]";
    badgeText = "Successful";
  } else if (type === "pending") {
    badgeClass =
      "bg-[#FFFBEB] font-[500] text-[#FFCA0D] text-[11px] py-1 px-2 rounded-[4px]";
    badgeText = "Pending";
  } else if (type === "failed") {
    badgeClass =
      "bg-[#FEF2F2] font-[500] text-[#EF4444] text-[11px] py-1 px-2 rounded-[4px]";
    badgeText = "Failed";
  } else if (type === "reversed") {
    badgeClass =
      "bg-[#EFF6FF] font-[500] text-[#3B82F6] text-[11px] py-1 px-2 rounded-[4px]";
    badgeText = "Reversed";
  }
  return <span className={`badge ${badgeClass}`}>{badgeText}</span>;
};

export default TransferStatus;
