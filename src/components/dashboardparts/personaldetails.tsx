"use client";
import Image from "next/image";
import info from "../../assets/info.svg";

export default function PersonalDetails() {
  return (
    <div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
      <div className="grid grid-cols-3 gap-10 justify-between">
        <div className="flex items-center">
          <Image src={info} alt="information" />
          <div className="ms-4">
            <h6 className="text-[#21003D] font-[500] leading-[20px] mb-3 text-[15px]">
              Ajayi Michael Oluwadarasimi
            </h6>
            <p className="text-[#8807F7] font-[500] leading-[12px] text-[12px]">
              &lt;Ajayi/&gt;
            </p>
          </div>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Email
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            AjayiMichael@gmail.com
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Date of Birth
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            10/11/2023
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Phone Number
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            +234 (708) 7708423
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Address
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            29, Oladoyingbr street, Ogba,Ikeja.Lagos.
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Date Joined
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            10/11/2023
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Gender
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            Male
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            BVN
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            22167542341
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Field Officer
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            John Doe
          </h6>
        </div>
      </div>
      <div className="text-end mt-4">
        <button className="px-6 py-3 text-black text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#F3F4F6]">Update Details</button>
      </div>
    </div>
  );
}
