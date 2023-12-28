import React, { useState } from "react";
type HandleNextFunction = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepOneProps {
  handleNext: HandleNextFunction;
}

const StepOne: React.FC<StepOneProps> = ({ handleNext }) => {
  return (
    <>
      <div className="mb-4">
        <div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
          <h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
            BVN
          </h3>
        </div>
        <div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
          <div>
            <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
              BVN
            </label>
            <input
              type="number"
              placeholder="Enter Bank Verification Number"
              className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <div className="mt-5">
              <button className="px-6 py-4 text-[#000] text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#F3F4F6]">
                Generate Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
          <h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
            Complete Profile
          </h3>
        </div>
        <div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
          <div className="mb-6 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="w-1/2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="0803203232"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
          <h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
            Email
          </h3>
        </div>
        <div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
          <div>
            <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
              Email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
          <h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
            Create KodHex Name
          </h3>
        </div>
        <div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
          <div>
            <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
              KodHex Name
            </label>
            <input
              type="text"
              placeholder="Enter KodHex Name"
              className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
          <h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
            Other Details
          </h3>
        </div>
        <div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
          <div className="mb-6 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Marital Status
              </label>
              <input
                type="text"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Nationality
              </label>
              <input
                type="text"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                State of Origin
              </label>
              <input
                type="text"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Date of Birth
              </label>
              <input
                type="date"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Residential Address
              </label>
              <input
                type="text"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Utility Bill
              </label>
              <input
                type="file"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="text-end mt-6">
            <button
              className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;