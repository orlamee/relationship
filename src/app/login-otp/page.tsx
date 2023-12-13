"use client";

import React, { SetStateAction, useState } from "react";
import Link from "next/link";
import OtpInput from "react18-input-otp";

export default function LoginOTP() {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp: SetStateAction<string>) => {
    setOtp(enteredOtp);
  };
  return (
    <section className="min-h-screen flex items-stretch ">
      <div className="lg:w-1/2 w-full flex items-start pt-[100px] justify-start md:px-16 px-0 z-0 bg-white">
        <div className="sm:w-8/12 w-full px-4 lg:px-0 mx-auto">
          <div className="">
            <h2 className="text-[#240552] font-[founder] font-[500] text-[40px] leading-[55px]">
              OTP Verification
            </h2>
            <p className=" text-[#9CA3AF] mb-4 font-[500] text-[14px] leading-[24px]">
              We sent you an OTP code to this email{" "}
              <span className="text-[#21003D]">name@ardilla.africa</span>
            </p>
            <div className="my-6">
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                isInputNum={true}
                inputStyle="otp-form"
              />
            </div>
            <h6 className="text-[#3D0072] font-[500] text-[12px] leading-[20px]">
              Didn’t get an OTP code?{" "}
              <Link href="#" className="text-[#8807F7]">
                RESEND
              </Link>
            </h6>
            <div className="text-center mt-10">
              <Link href="/dashboard">
                <button
                  className="bg-[#240552] text-white w-full mt-4 p-4 text-center rounded-[8px] font-[500] text-[14px]"
                  type="submit"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center bg-login justify-center"></div>
    </section>
  );
}
