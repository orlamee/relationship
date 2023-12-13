"use client";

import React, { useState } from "react";
import Input from "@/components/ui/inputapp";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="min-h-screen flex items-stretch ">
      <div className="lg:w-1/2 w-full flex items-start pt-[100px] justify-start md:px-16 px-0 z-0 bg-white">
        <div className="sm:w-8/12 w-full px-4 lg:px-0 mx-auto">
          <div className="">
            <h2 className="text-[#240552] font-[founder] font-[500] text-[40px] leading-[55px]">
              Welcome
            </h2>
            <p className=" text-[#9CA3AF] mb-4 font-[500] text-[12px] leading-[14px]">
              Sign In to Ardilla’s admin dashboard and start putting things right
            </p>
            <div className="mt-10">
              <form>
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter Email Address"
                />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter Password"
                />
                <Link href="/login-otp">
                  <button
                    className="bg-[#240552] text-white w-full mt-4 p-4 text-center rounded-[8px] font-[500] text-[14px]"
                    type="submit"
                  >
                    Sign In
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center bg-login justify-center"></div>
    </section>
  );
}
