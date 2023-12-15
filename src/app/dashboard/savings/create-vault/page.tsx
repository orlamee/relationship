"use client";

import NavBar from "@/components/navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

export default function CreateVault() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const totalSteps = 5;
  const progressBarWidth = (activeStep / totalSteps) * 100 + "%";

  return (
    <section>
      <NavBar>
        <div className="flex items-center">
          <h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
            Savings
          </h1>
          <h1 className="mx-3 text-[24px] text-[#21003D] leading-[33px] font-[500]">
            -
          </h1>
          <h1 className="text-[14px] text-[#21003D] leading-[33px] mt-1 font-[500]">
            Oshodi Branch
          </h1>
        </div>
      </NavBar>
      <main className="flex items-center justify-center h-[88vh]">
        <div className="md:w-1/2">
          <div className="p-9  border border-[#4400A9] rounded-[4px] container-gradient">
            <div className="w-2/3 mx-auto bg-[#E5E7EB] rounded-full h-1.5 dark:bg-gray-700 mb-9">
              <div
                className="bg-[#3B82F6] h-1.5 rounded-full"
                style={{ width: progressBarWidth }} // Dynamically set the width
              ></div>
            </div>
            {activeStep === 0 && (
              <div className="">
                <div className="w-2/3 mx-auto my-9">
                  <h2 className="text-center text-[#240552] font-[500] text-[30px] font-[founder] leading-[41px]">
                    Enter Name
                  </h2>
                  <h6 className="text-center text-[#9CA3AF] text-[14px] leading-[20px] font-[500]">
                    Give your plan a name
                  </h6>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="outline-none bg-transparent border-b border-[#4400A9] text-[#9CA3AF] text-[19px] text-center focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                    <button
                      className="px-6 py-4 mt-12 text-white text-[12px] leading-[22px] font-[500] rounded-[8px] bg-[#240552] w-full"
                      onClick={handleNext}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeStep === 1 && (
              <div className="w-2/3 mx-auto my-9">
                <h2 className="text-center text-[#240552] font-[500] text-[30px] font-[founder] leading-[41px]">
                  Enter Target
                </h2>
                <h6 className="text-center text-[#9CA3AF] text-[14px] leading-[20px] font-[500]">
                  How much is your overall target?
                </h6>
                <div className="mt-[-49px]">
                  <button onClick={handleBack}>
                    <Icon
                      icon="icon-park-outline:left-c"
                      className="text-[27px] text-[#240552]"
                    />
                  </button>
                </div>
                <div className="mt-3">
                  <CurrencyInput
                    id="input-example"
                    name="input-name"
                    prefix="N"
                    decimalsLimit={2}
                    className="outline-none bg-transparent border-b border-[#4400A9] text-[#240552] text-[19px] text-center focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    onValueChange={(value, name) => console.log(value, name)}
                  />
                  <div className="text-center mt-3">
                    <p className="text-[#9CA3AF] text-[11px] font-[500] leading-[24px]">
                      N30,000 -N999,999
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-x-4 mt-6">
                    <div className="w-3/4">
                      <p className="text-[#9CA3AF] text-[11px] font-[500] leading-[24px]">
                        If you want to save above N1,000,000 switch your plan to
                        Grit for better rewards.
                      </p>
                    </div>
                    <div className="w-1/4">
                      <button className="px-6 py-4 text-[#240552] border border-[#240552] text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#F6F1FE]">
                        Save on Grit
                      </button>
                    </div>
                  </div>
                  <button
                    className="px-6 py-4 mt-12 text-white text-[12px] leading-[22px] font-[500] rounded-[8px] bg-[#240552] w-full"
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className="w-2/3 mx-auto my-9">
                <h2 className="text-center text-[#240552] font-[500] text-[30px] font-[founder] leading-[41px]">
                  Select Frequency
                </h2>
                <h6 className="text-center text-[#9CA3AF] text-[14px] leading-[20px] font-[500]">
                  How often do you want to save?
                </h6>
                <div className="mt-[-49px]">
                  <button onClick={handleBack}>
                    <Icon
                      icon="icon-park-outline:left-c"
                      className="text-[27px] text-[#240552]"
                    />
                  </button>
                </div>
                <div className="mt-3">
                  
                  <button
                    className="px-6 py-4 mt-12 text-white text-[12px] leading-[22px] font-[500] rounded-[8px] bg-[#240552] w-full"
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}
