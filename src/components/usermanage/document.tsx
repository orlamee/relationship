import React, { useState } from "react";
type HandleNextFunction = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepTwoProps {
  handleNext: HandleNextFunction;
}

const StepTwo: React.FC<StepTwoProps> = ({ handleNext }) => {
  return (
    <>
      <div className="mb-4">
        <div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
          <h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
            Document
          </h3>
        </div>
        <div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
          <div className="mb-6 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                ID Type
              </label>
              <input
                type="text"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                ID Number
              </label>
              <input
                type="number"
                placeholder="Doe"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="w-full">
              <label className="block mb-2 text-[12px] font-[500] text-[#21003D]">
                Upload Document
              </label>
              <input
                type="file"
                className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="text-end">
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

export default StepTwo;
