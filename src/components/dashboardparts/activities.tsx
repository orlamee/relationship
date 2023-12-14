"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import green from "../../assets/green.svg";
import red from "../../assets/red.svg";
import samsung from "../../assets/samsung.svg";
import globe from "../../assets/globe.svg";
// import { activitiesColumns, activitiesData } from "@/dummy";
import Datatable from "../tables/datatable";
import { activitiesColumns, activitiesData } from "../dummydata";

export default function Activities() {
  return (
    <div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
      <Tabs defaultValue="savings" className="w-full">
        <TabsList>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
        </TabsList>
        <TabsContent value="savings">
          <div>
            <div className="flex flex-row">
              <div className="w-1/5 me-5">
                <div className="border border-[#E0FBEA] bg-[#FBFEFC] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={green} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#22C55E] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 me-3">
                <div className="border border-[#FEEAEA] bg-[#FFFAFA] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={red} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#EF4444] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Datatable data={activitiesData} columns={activitiesColumns} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="payment">
          <div>
            <div className="flex flex-row">
              <div className="w-1/5 me-5">
                <div className="border border-[#E0FBEA] bg-[#FBFEFC] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={green} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#22C55E] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 me-3">
                <div className="border border-[#FEEAEA] bg-[#FFFAFA] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={red} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#EF4444] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Datatable data={activitiesData} columns={activitiesColumns} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="wallet">
          <div>
            <div className="flex flex-row">
              <div className="w-1/5 me-5">
                <div className="border border-[#E0FBEA] bg-[#FBFEFC] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={green} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#22C55E] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 me-3">
                <div className="border border-[#FEEAEA] bg-[#FFFAFA] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={red} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#EF4444] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Datatable data={activitiesData} columns={activitiesColumns} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="rewards">
          <div>
            <div className="flex flex-row">
              <div className="w-1/5 me-5">
                <div className="border border-[#E0FBEA] bg-[#FBFEFC] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={green} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#22C55E] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 me-3">
                <div className="border border-[#FEEAEA] bg-[#FFFAFA] p-4 rounded-[4px]">
                  <div className="flex items-center">
                    <Image src={red} alt="" className="me-3" />
                    <div>
                      <h3 className="text-[#EF4444] text-[10px] leading-[13px] font-[500]">Inflow</h3>
                      <h3 className="text-black text-[12px] leading-[16px] font-[500]">N500,000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Datatable data={activitiesData} columns={activitiesColumns} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="devices">
          <div>
            <h4 className="text-[#9CA3AF] text-[10px] leading-[23px] font-[500]">PRIMARY DEVICE</h4>
            <hr className="text-[#F3F4F6] mt-5" />
            <div className="flex items-center mt-6 mb-10">
              <Image src={samsung} alt="samsung" className="me-3" />
              <div>
                <h2 className="text-[#000000] text-[13px] leading-[23px] font-[500]">Samsung s23 | Andriod 13</h2>
                <p className="text-[#9CA3AF] text-[10px] leading-[23px] font-[500]">Currently active</p>
              </div>
            </div>
            <h4 className="text-[#9CA3AF] text-[10px] leading-[23px] font-[500]">DEVICE HISTORY</h4>
            <hr className="text-[#F3F4F6] mt-5" />
            <div className="flex items-center mt-6">
              <Image src={globe} alt="globe" className="me-3" />
              <div>
                <h2 className="text-[#000000] text-[13px] leading-[23px] font-[500]">Google chrome | Windows 11</h2>
                <p className="text-[#9CA3AF] text-[10px] leading-[23px] font-[500]">Last used 25th August, 2023 | 11:23am</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

    </div>
  );
}