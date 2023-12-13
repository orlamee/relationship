"use client";

import { useState } from "react";
import Modal from "../modal";
import { XCircleIcon } from "lucide-react";

export default function Nextofkin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
      <div className="grid grid-cols-3 gap-10 justify-between">
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            First Name
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            Ajayi
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Last Name
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            Michael
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Phone Number
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            +234 (708) 7708423
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Email
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            AjayiMichael@gmail.com
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Address
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            29, Oladoyingbr street, Ogba,Ikeja.Lagos.
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Relationship
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            Brother
          </h6>
        </div>
        <div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
          <h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
            Gender
          </h4>
          <h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
            Male
          </h6>
        </div>
        
      </div>
      <div className="text-end mt-4">
        <button
          className="px-6 py-3 text-black text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#F3F4F6]"
          onClick={openModal}
        >
          Update Details
        </button>
      </div>
      {isModalOpen && (
        <Modal>
          <div className="bg-white rounded-[16px] px-6 pb-6 w-[700px]">
            <div className="flex justify-between px-4 py-6 border-b-[1px] border-b-[#F5F5F5] items-center">
              <h1 className="text-[14px] font-[500] leading-[18px]">
                Edit Next of Kin Details
              </h1>
              <XCircleIcon
                className="text-[#9CA3AF] cursor-pointer w-[18px]"
                onClick={closeModal}
              />
            </div>
            <div className="my-6">
              <div className="mb-6 flex flex-wrap">
                <div className="w-1/2 pr-2">
                  <label
                    className="block mb-2 text-[12px] font-[500] text-[#21003D]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    className="block mb-2 text-[12px] font-[500] text-[#21003D]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Doe"
                    className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="mb-6 flex flex-wrap">
                <div className="w-1/2 pr-2">
                  <label
                    className="block mb-2 text-[12px] font-[500] text-[#21003D]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="0810209393"
                    className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    className="block mb-2 text-[12px] font-[500] text-[#21003D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="mb-6 flex flex-wrap">
                <div className="w-1/2 pr-2">
                  <label
                    className="block mb-2 text-[12px] font-[500] text-[#21003D]"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    placeholder="Male"
                    className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    className="block mb-2 text-[12px] font-[500] text-[#21003D]"
                  >
                    Relationship
                  </label>
                  <input
                    type="text"
                    placeholder="Cousin"
                    className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-[12px] font-[500] text-[#21003D]"
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Allen Ikeja, Lagos, Nigeria"
                  className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                />
              </div>
              <div className="text-end">
                <button
                  className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
                  onClick={closeModal}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
