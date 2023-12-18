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

  const [selectedButton, setSelectedButton] = useState("");
  const [showWeeklyContent, setShowWeeklyContent] = useState(false);
  const [showMonthlyContent, setShowMonthlyContent] = useState(false);

  const selectButton = (btnId: string) => {
    setSelectedButton(btnId);
    if (btnId === "weeklyBtn") {
      setShowWeeklyContent(true);
      setShowMonthlyContent(false);
    } else if (btnId === "monthlyBtn") {
      setShowWeeklyContent(false);
      setShowMonthlyContent(true);
    } else {
      setShowWeeklyContent(false);
      setShowMonthlyContent(false);
    }
  };

  const [inputType, setInputType] = useState("text");

  const [inputTypeDate, setInputTypeDate] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlurDate = () => {
    setInputTypeDate("time");
  };

  const handleDate = () => {
    setInputTypeDate("time");
  };

  const handleBlur = () => {
    setInputType("text");
  };

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
      <main className="flex items-center justify-center h-[88vh] bg-white">
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
                  <div className="flex items-center justify-between gap-x-2 mt-6">
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
                <div className="mt-10">
                  <div className="flex items-center gap-x-4 justify-between">
                    <div className="w-1/3">
                      <button
                        className={`px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] ${
                          selectedButton === "dailyBtn"
                            ? "bg-[#F9F5FF] text-[#000] border-[#240552]"
                            : "bg-[#F9FAFB] text-[#9CA3AF] border-[#F9FAFB]"
                        } w-full`}
                        onClick={() => selectButton("dailyBtn")}
                      >
                        Daily
                      </button>
                    </div>
                    <div className="w-1/3">
                      <button
                        className={`px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] ${
                          selectedButton === "weeklyBtn"
                            ? "bg-[#F9F5FF] text-[#000] border-[#240552]"
                            : "bg-[#F9FAFB] text-[#9CA3AF] border-[#F9FAFB]"
                        } w-full`}
                        onClick={() => selectButton("weeklyBtn")}
                      >
                        Weekly
                      </button>
                    </div>
                    <div className="w-1/3">
                      <button
                        className={`px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] ${
                          selectedButton === "monthlyBtn"
                            ? "bg-[#F9F5FF] text-[#000] border-[#240552]"
                            : "bg-[#F9FAFB] text-[#9CA3AF] border-[#F9FAFB]"
                        } w-full`}
                        onClick={() => selectButton("monthlyBtn")}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 justify-center mt-4">
                    <div className="w-1/3">
                      <button
                        className={`px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] ${
                          selectedButton === "manualBtn"
                            ? "bg-[#F9F5FF] text-[#000] border-[#240552]"
                            : "bg-[#F9FAFB] text-[#9CA3AF] border-[#F9FAFB]"
                        } w-full`}
                        onClick={() => selectButton("manualBtn")}
                      >
                        Anytime/Manual
                      </button>
                    </div>
                  </div>
                  {showWeeklyContent && (
                    <div className="mt-10">
                      <h2 className="text-center text-[#240552] font-[500] text-[30px] font-[founder] leading-[41px]">
                        What Day Of The Week
                      </h2>
                      <h6 className="text-center text-[#9CA3AF] text-[14px] leading-[20px] font-[500]">
                        How much is your overall target?
                      </h6>
                      <div className="flex items-center gap-x-4 justify-between mt-10">
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Tuesdays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Wednesdays
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-4 justify-between mt-4">
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Thursdays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Fridays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Saturdays
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-4 justify-center mt-4">
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Sundays
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {showMonthlyContent && (
                    <div className="mt-10">
                      <h2 className="text-center text-[#240552] font-[500] text-[30px] font-[founder] leading-[41px]">
                        What Day Of The Month
                      </h2>
                      <h6 className="text-center text-[#9CA3AF] text-[14px] leading-[20px] font-[500]">
                        Choose what day of the month that works for you
                      </h6>
                      <div className="flex items-center gap-x-4 justify-between mt-10">
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-4 justify-between mt-4">
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-4 justify-center mt-4">
                        <div className="w-1/3">
                          <button className="px-6 py-3 text-[#9CA3AF] border border-[#F9FAFB] text-[14px] leading-[22px] font-[500] rounded-[4px] bg-[#F9FAFB] w-full">
                            Mondays
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    className="px-6 py-4 mt-12 text-white text-[12px] leading-[22px] font-[500] rounded-[8px] bg-[#240552] w-full"
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div className="">
                <div className="w-2/3 mx-auto my-9">
                  <h2 className="text-center text-[#240552] font-[500] text-[30px] font-[founder] leading-[41px]">
                    Choose Period
                  </h2>
                  <h6 className="text-center text-[#9CA3AF] text-[14px] leading-[20px] font-[500]">
                    Tell us how long you wish to save for
                  </h6>
                  <div className="mt-[-49px]">
                    <button onClick={handleBack}>
                      <Icon
                        icon="icon-park-outline:left-c"
                        className="text-[27px] text-[#240552]"
                      />
                    </button>
                  </div>
                  <div className="mt-12">
                    <div className="mb-6">
                      <input
                        type={inputType}
                        placeholder="Select Start Date"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="bg-[#fff] border border-[#240552] text-[#240552] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type={inputType}
                        placeholder="Select Payback Date"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="bg-[#fff] border border-[#240552] text-[#240552] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type={inputTypeDate}
                        placeholder="Select Time"
                        onFocus={handleDate}
                        onBlur={handleBlurDate}
                        className="bg-[#fff] border border-[#240552] text-[#240552] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      />
                    </div>
                    <button
                      className="px-6 py-4 mt-6 text-white text-[12px] leading-[22px] font-[500] rounded-[8px] bg-[#240552] w-full"
                      onClick={handleNext}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}
