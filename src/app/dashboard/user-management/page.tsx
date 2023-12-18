"use client";
import NavBar from "@/components/navbar";
import React, { useState } from "react";
import Image from "next/image";
import StepOne from "@/components/usermanage/personaldetails";
import StepTwo from "@/components/usermanage/document";
import StepThree from "@/components/usermanage/nextofkin";
import StepFour from "@/components/usermanage/attachmember";

function UserManage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  return (
    <section>
      <NavBar>
        <div className="flex items-center">
          <h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
            Create Profile
          </h1>
          <h1 className="mx-3 text-[24px] text-[#21003D] leading-[33px] font-[500]">
            -
          </h1>
          <h1 className="text-[14px] text-[#21003D] leading-[33px] mt-1 font-[500]">
            Oshodi Branch
          </h1>
        </div>
      </NavBar>
      <main className="px-4 lg:px-8 mt-[50px]">
        {activeStep === 0 && <StepOne handleNext={handleNext} />}
        {activeStep === 1 && <StepTwo handleNext={handleNext} />}
        {activeStep === 2 && <StepThree handleNext={handleNext} />}
        {activeStep === 3 && <StepFour handleNext={handleNext} />}
      </main>
    </section>
  );
}

export default UserManage;
