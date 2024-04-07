"use client";
import React from "react";
import Steptitle from "./steptitle";
import CurrencyInput from "react-currency-input-field";
import { useRouter } from "next/navigation";

type props = {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
};
function Enteramount({ amount = "", setAmount }: props) {
  const router = useRouter();
  return (
    <div className="mt-10">
      <Steptitle
        title="Enter Amount"
        subtitle="How much would you like to start with?"
      />

      <div className="max-w-[450px] mx-auto mt-14">
        <CurrencyInput
          prefix="N"
          className="border-b-[1px] border-b-black outline-none w-[290px] mx-auto flex justify-center mt-5 text-center text-[41px] font-[500] text-primary"
          value={amount}
          decimalsLimit={2}
          onValueChange={(value) => {
            if (value) {
              setAmount(value);
            }
          }}
        />

        <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
          <button
            className={`text-[15px] font-[500] border-[1px]  px-6 py-2 rounded-[4px] ${
              amount === "5000"
                ? "border-primary bg-[#F6F1FE] text-primary"
                : "bg-[#F3F4F6] border-[#F3F4F6] text-[#9CA3AF]"
            }`}
            onClick={() => setAmount("5000")}
          >
            N5,000
          </button>
          <button
            className={`text-[15px] font-[500] border-[1px]  px-6 py-2 rounded-[4px] ${
              amount === "10000"
                ? "border-primary bg-[#F6F1FE] text-primary"
                : "bg-[#F3F4F6] border-[#F3F4F6] text-[#9CA3AF]"
            }`}
            onClick={() => setAmount("10000")}
          >
            N10,000
          </button>
          <button
            className={`text-[15px] font-[500] border-[1px]  px-6 py-2 rounded-[4px] ${
              amount === "20000"
                ? "border-primary bg-[#F6F1FE] text-primary"
                : "bg-[#F3F4F6] border-[#F3F4F6] text-[#9CA3AF]"
            }`}
            onClick={() => setAmount("20000")}
          >
            N20,000
          </button>
        </div>

        <button
          className="bg-primary text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-10"
          onClick={() => router.push("/dashboard/dib/new?step=how+often")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Enteramount;
