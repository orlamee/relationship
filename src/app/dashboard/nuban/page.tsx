"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Image from "next/image";

function Nuban() {
  return (
    <section>
      <NavBar>
        <div className="flex items-center">
          <h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
            Nuban
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
        <div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9">
          <h3 className="text-[#21003D] text-[20px] leading-[20px] font-[500]">
            Statistics
          </h3>
          <div className="mt-9 grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className="bg-[#FFF9F0] rounded-[6px] p-6">
              <div className="flex items-center">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <path
                    d="M8.15323 4.908C9.42023 2.636 10.0532 1.5 11.0002 1.5C11.9472 1.5 12.5802 2.636 13.8472 4.908L14.1752 5.496C14.5352 6.142 14.7152 6.465 14.9952 6.678C15.2752 6.891 15.6252 6.97 16.3252 7.128L16.9612 7.272C19.4212 7.829 20.6502 8.107 20.9432 9.048C21.2352 9.988 20.3972 10.969 18.7202 12.93L18.2862 13.437C17.8102 13.994 17.5712 14.273 17.4642 14.617C17.3572 14.962 17.3932 15.334 17.4652 16.077L17.5312 16.754C17.7842 19.371 17.9112 20.679 17.1452 21.26C16.3792 21.842 15.2272 21.311 12.9252 20.251L12.3282 19.977C11.6742 19.675 11.3472 19.525 11.0002 19.525C10.6532 19.525 10.3262 19.675 9.67223 19.977L9.07623 20.251C6.77323 21.311 5.62124 21.841 4.85624 21.261C4.08924 20.679 4.21623 19.371 4.46923 16.754L4.53523 16.078C4.60723 15.334 4.64323 14.962 4.53523 14.618C4.42923 14.273 4.19024 13.994 3.71424 13.438L3.28024 12.93C1.60324 10.97 0.765235 9.989 1.05723 9.048C1.35024 8.107 2.58024 7.828 5.04024 7.272L5.67624 7.128C6.37524 6.97 6.72424 6.891 7.00524 6.678C7.28524 6.465 7.46523 6.142 7.82523 5.496L8.15323 4.908Z"
                    stroke="#F59E0B"
                    stroke-width="1.5"
                  />
                </svg>
                <h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
                  Plans Created
                </h5>
              </div>
              <h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
                0
              </h5>
            </div>
            <div className="bg-[#F5F9FF] rounded-[6px] p-6">
              <div className="flex items-center">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <path
                    d="M6.72179 2.15234C3.74011 2.15234 1.32299 4.16661 1.32299 6.65134C1.32299 7.88623 1.92002 9.00491 2.88667 9.81788C3.0316 9.93977 3.12259 10.1163 3.12259 10.3057V11.7502H4.32232L4.79852 11.0708C4.87242 10.9653 5.0052 10.9195 5.1299 10.9516C6.16705 11.2183 7.27652 11.2183 8.31368 10.9516C8.43837 10.9195 8.57115 10.9653 8.64505 11.0708L9.12125 11.7502H10.321V10.3198C10.321 10.1225 10.418 9.93789 10.5803 9.82593C11.2251 9.3814 13.3203 8.51175 13.3203 7.58607V6.65134C13.3203 6.29638 13.0517 6.00863 12.7204 6.00863C12.3565 6.00863 12.0595 5.86724 11.9394 5.49124C11.3254 3.56875 9.22211 2.15234 6.72179 2.15234Z"
                    stroke="black"
                    stroke-width="1.3406"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.81929 3.95228C6.19839 3.75733 6.60132 3.65234 7.01902 3.65234C7.43672 3.65234 7.83965 3.75733 8.21875 3.95228"
                    stroke="black"
                    stroke-width="1.3406"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0236 5.75391H10.0182"
                    stroke="black"
                    stroke-width="1.78747"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.91915 4.25391C1.61922 3.95397 1.31929 3.39188 1.31929 2.65258C1.31929 1.71484 2.12499 0.954643 3.11888 0.954643C3.32922 0.954643 3.53112 0.988689 3.71875 1.05126"
                    stroke="black"
                    stroke-width="1.3406"
                    stroke-linecap="round"
                  />
                </svg>
                <h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
                  Savings Plan Created
                </h5>
              </div>
              <h5 className="mt-7 text-[#000] text-[28px] leading-[39px] font-[500]">
                0
              </h5>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9 relative">
          <h1 className="text-[20px] font-[500] leading-[24px] text-[#21003D] mb-6">
            All Users
          </h1>
          <div className="mt-10"></div>
        </div>
      </main>
    </section>
  );
}

export default Nuban;
