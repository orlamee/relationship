import React, { useState } from "react";
type HandleNextFunction = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

interface StepFourProps {
  handleNext: HandleNextFunction;
}

const StepFour: React.FC<StepFourProps> = ({ handleNext }) => {
  return (
    <>
      <div className="mb-4">
        <div className="bg-[#FFFFFF] rounded-t-[16px] p-10 mb-1">
          <h3 className="text-[#000] text-[14px] leading-[20px] font-[500] ">
            Attach a Member
          </h3>
        </div>
        <div className="bg-[#FFFFFF] rounded-b-[16px] p-10">
          <div className="text-end">
            <button
              className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
              // onClick={handleNext}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
