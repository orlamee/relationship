"use client";
import NavBar from "@/components/navbar";
import React, { useState } from "react";
import Image from "next/image";
import Datatable from "@/components/tables/datatable";
import {
  planColumns,
  planData,
  savingColumns,
  savingData,
} from "@/components/dummydata";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tablines";
import leaf from "../../../assets/leaf.svg";
import divi from "../../../assets/dividend.svg";
import savedib from "../../../assets/save-dib.svg";
import profile from "../../../assets/profile-2user.svg";
import minivault from "../../../assets/mini-vault.svg";
import minidreams from "../../../assets/mini-dreams.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Modal from "@/components/modal";
import { XCircleIcon } from "lucide-react";
import ModalTable from "@/components/tables/modaltable";

function Savings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
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
      <main className="px-4 lg:px-8 mt-[50px]">
        <div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9">
          <h1 className="text-[20px] font-[500] leading-[20px] text-[#21003D]">
            Statistics
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
            <div className="rounded-[6px] bg-[#FFF9F0] p-5 h-[130px] flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <Image width={14} height={14} src={profile} alt="total" />
                <h2 className="text-[13px] font-[500] leading-[20px]">
                  Total Savers
                </h2>
              </div>
              <h3 className="text-[24px] font-[500] leading-[33px]">0</h3>
            </div>
            <div className="rounded-[6px] bg-[#FEF6F8] p-5 h-[130px] flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <Image width={14} height={14} src={leaf} alt="leaf" />
                <h2 className="text-[13px] font-[500] leading-[20px]">
                  Total Amount Saved
                </h2>
              </div>
              <h3 className="text-[24px] font-[500] leading-[33px]">N0.00</h3>
            </div>
            <div className="rounded-[6px] bg-[#F6FDF9] p-5 h-[130px] flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <Image width={14} height={14} src={divi} alt="total" />
                <h2 className="text-[13px] font-[500] leading-[20px]">
                  Total Dividends
                </h2>
              </div>
              <h3 className="text-[24px] font-[500] leading-[33px]">N0.00</h3>
            </div>

            <div>
              <Swiper
                spaceBetween={5}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <div className="rounded-[6px] bg-[#F5F9FF] p-5 h-[130px] flex flex-col justify-between">
                    <div className="flex items-center gap-3 justify-between">
                      <div className="flex items-center gap-3">
                        <Image width={14} height={14} src={savedib} alt="dib" />
                        <h2 className="text-[13px] font-[500] leading-[20px]">
                          Total Vault
                        </h2>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-[10px] rounded-[7px] bg-[#3B82F6] h-[5px]" />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <h3 className="text-[24px] font-[500] leading-[33px]">
                        N0.00
                      </h3>
                      <div className="bg-[#DAE8FF] rounded-[3px]">
                        <div className="flex items-center gap-3 px-1.5 py-1">
                          <Image
                            width={14}
                            height={14}
                            src={profile}
                            alt="total"
                          />
                          <h2 className="text-[13px] font-[500] leading-[20px]">
                            50 savers
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-[6px] bg-[#F5F9FF] p-5 h-[130px] flex flex-col justify-between">
                    <div className="flex items-center gap-3 justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          width={14}
                          height={14}
                          src={minivault}
                          alt="total"
                        />
                        <h2 className="text-[13px] font-[500] leading-[20px]">
                          Total Vault Extra
                        </h2>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
                        <span className="w-[10px] rounded-[7px] bg-[#3B82F6] h-[5px]" />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <h3 className="text-[24px] font-[500] leading-[33px]">
                        N0.00
                      </h3>
                      <div className="bg-[#DAE8FF] rounded-[3px]">
                        <div className="flex items-center gap-3 px-1.5 py-1">
                          <Image
                            width={14}
                            height={14}
                            src={profile}
                            alt="total"
                          />
                          <h2 className="text-[13px] font-[500] leading-[20px]">
                            50 savers
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-[6px] bg-[#F5F9FF] p-5 h-[130px] flex flex-col justify-between">
                    <div className="flex items-center gap-3 justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          width={14}
                          height={14}
                          src={minidreams}
                          alt="total"
                        />
                        <h2 className="text-[13px] font-[500] leading-[20px]">
                          Total Vault Premium
                        </h2>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
                        <span className="w-[6px] h-[6px] rounded-full bg-[#E5E7EB]" />
                        <span className="w-[10px] rounded-[7px] bg-[#3B82F6] h-[5px]" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <h3 className="text-[24px] font-[500] leading-[33px]">
                        N0.00
                      </h3>
                      <div className="bg-[#DAE8FF] rounded-[3px]">
                        <div className="flex items-center gap-3 px-1.5 py-1">
                          <Image
                            width={14}
                            height={14}
                            src={profile}
                            alt="total"
                          />
                          <h2 className="text-[13px] font-[500] leading-[20px]">
                            50 savers
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] rounded-[10px] p-10 mb-9 relative">
          <h1 className="text-[20px] font-[500] leading-[24px] text-[#21003D] mb-6">
            Savings Plan
          </h1>
          <div className="mt-10">
            <Tabs defaultValue="vault">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="vault">
                    Vault
                  </TabsTrigger>
                  <TabsTrigger value="vault_extra">
                    Vault Extra
                  </TabsTrigger>
                  <TabsTrigger value="vault_premium">
                    Vault Premium
                  </TabsTrigger>
                </TabsList>
                <button
                  className="rounded-[6px] bg-[#240552] text-white px-7 py-4 text-[12px] font-[500] leading-[20px]"
                  onClick={openModal}
                >
                  Create Savings Plan +{" "}
                </button>
              </div>
              <TabsContent value="vault">
                <Datatable data={savingData} columns={savingColumns} />
              </TabsContent>
              <TabsContent value="vault_extra">
                <Datatable data={savingData} columns={savingColumns} />
              </TabsContent>
              <TabsContent value="vault_premium">
                <Datatable data={savingData} columns={savingColumns} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        {isModalOpen && (
          <Modal>
            <div className="bg-white rounded-[16px] px-6 pb-6 w-[700px]">
              <div className="flex justify-between px-4 py-6 border-b-[1px] border-b-[#F5F5F5] items-center">
                <h1 className="text-[14px] font-[500] leading-[18px]">
                  Select a User
                </h1>
                <XCircleIcon
                  className="text-[#9CA3AF] cursor-pointer w-[18px]"
                  onClick={closeModal}
                />
              </div>
              <div className="my-6 relative">
                <ModalTable data={planData} columns={planColumns}/>
              </div>
              <div className="text-end">
                <Link href={'/dashboard/savings/create-vault'}>
                  <button
                    className="px-6 py-3 text-white text-[12px] leading-[22px] font-[500] rounded-[4px] bg-[#240552]"
                  >
                    Proceed
                  </button>
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </main>
    </section>
  );
}

export default Savings;
