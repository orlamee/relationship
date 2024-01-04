"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Image from "next/image";

function Products() {
  return (
    <section>
      <NavBar>
        <div className="flex items-center">
          <h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
            Products
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
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <path
                    d="M9.27823 5.908C10.5452 3.636 11.1782 2.5 12.1252 2.5C13.0722 2.5 13.7052 3.636 14.9722 5.908L15.3002 6.496C15.6602 7.142 15.8402 7.465 16.1202 7.678C16.4002 7.891 16.7502 7.97 17.4502 8.128L18.0862 8.272C20.5462 8.829 21.7752 9.107 22.0682 10.048C22.3602 10.988 21.5222 11.969 19.8452 13.93L19.4112 14.437C18.9352 14.994 18.6962 15.273 18.5892 15.617C18.4822 15.962 18.5182 16.334 18.5902 17.077L18.6562 17.754C18.9092 20.371 19.0362 21.679 18.2702 22.26C17.5042 22.842 16.3522 22.311 14.0502 21.251L13.4532 20.977C12.7992 20.675 12.4722 20.525 12.1252 20.525C11.7782 20.525 11.4512 20.675 10.7972 20.977L10.2012 21.251C7.89823 22.311 6.74624 22.841 5.98124 22.261C5.21424 21.679 5.34123 20.371 5.59423 17.754L5.66023 17.078C5.73223 16.334 5.76823 15.962 5.66023 15.618C5.55423 15.273 5.31524 14.994 4.83924 14.438L4.40524 13.93C2.72824 11.97 1.89023 10.989 2.18223 10.048C2.47524 9.107 3.70524 8.828 6.16524 8.272L6.80124 8.128C7.50024 7.97 7.84924 7.891 8.13024 7.678C8.41024 7.465 8.59023 7.142 8.95023 6.496L9.27823 5.908Z"
                    stroke="#3B82F6"
                    stroke-width="1.5"
                  />
                </svg>

                <h5 className="text-[#000] text-[12px] leading-[20px] font-[500]">
                  Plans Active
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
            Products
          </h1>
          <div className="mt-10"></div>
        </div>
      </main>
    </section>
  );
}

export default Products;
