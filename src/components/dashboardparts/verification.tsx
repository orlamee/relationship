"use client";
import Image from "next/image";
import nin from "../../assets/nin.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Verification() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setPopupImageSrc(imageSrc);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
      <div className="flex items-center gap-x-20">
        <div className="w-1/3">
          <h3 className="text-[#000] font-[500] leading-[20px] text-[12px]">
            Utility Bill
          </h3>
          <div className="relative inline-block">
            <Image src={nin} alt="nin" className="my-4 w-full cursor-pointer" />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#000] text-[12px] text-white border border-[#fff] rounded-[5px] cursor-pointer z-10"
              onClick={() => handleImageClick(nin)}
            >
              View
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex flex-row gap-x-5">
            <button className="bg-[#F43F5E] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
              Decline
            </button>
            <button className="bg-[#13A046] p-5 rounded-[6px] font-[500] leading-[20px] text-[14px] text-white w-full">
              Approve
            </button>
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <Image
              src={popupImageSrc}
              alt="Popup Image"
              className="popup-image mb-5"
            />
            <span
              className="close-btn cursor-pointer bg-white px-[9px] py-[4px] rounded-full"
              onClick={handleClosePopup}
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
