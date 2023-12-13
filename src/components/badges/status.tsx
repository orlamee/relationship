import React from "react";

interface BadgeProps {
  type: "funded" | "notfunded" ;
  text: string;
}

const Status: React.FC<BadgeProps> = ({ type, text }: BadgeProps) => {
  let badgeClass = "";
  let badgeText = "";

  if (type === "funded") {
    badgeClass =
      "bg-[#EFFBEF] font-[500] text-[#228B22] text-[11px] py-1 px-2 rounded-[5px]";
    badgeText = "Funded";
  } else if (type === "notfunded") {
    badgeClass =
      "bg-[#F9FAFB] font-[500] text-[#000] text-[11px] py-1 px-2 rounded-[5px]";
    badgeText = "Not funded";
  } 
  return <span className={`badge ${badgeClass}`}>{badgeText}</span>;
};

export default Status;
