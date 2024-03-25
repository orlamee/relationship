"use client";
import React, { SetStateAction, useState } from "react";
import OtpInput from "react18-input-otp";
import { credSlice } from "@/hook/cred";
import axios from "axios";
import { base_url } from "@/base_url";
import toast from "react-hot-toast";
import { login } from "@/actions";

export default function LoginOTP() {
	const cred = credSlice();
	const [isLoading, setIsloading] = useState(false);
	const [otp, setOtp] = useState("");
	const handleChange = (enteredOtp: SetStateAction<string>) => {
		setOtp(enteredOtp);
	};

	const verify_otp = async () => {
		try {
			if (!otp) {
				return toast.error("otp is required", { id: "verify otp" });
			}
			if (isLoading) return;

			setIsloading(true);
			const { data } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/auth/validate_login_otp`,
				{
					email: cred.cred?.email,
					otp: otp,
				}
			);
			console.log({ data });
			if (data.code === 200) {
				toast.success(`${data.message}`, { id: "verify" });
				await login(
					{
						first_name: data.data.User_details.first_name,
						last_name: data.data.User_details.last_name,
						profile_photo: data.data.User_details.profile_photo,
					},
					data.data.token
				);
			}
			if (data.code !== 200) {
				toast.error(`${data.message}`, { id: "verify" });
			}
		} catch (error: any) {
			console.log(error);
			toast.error(`${error?.message}`, { id: "verify" });
		} finally {
			setIsloading(false);
		}
	};

	const resendOtp = async () => {
		try {
			if (!cred.cred?.email || !cred.cred.password) {
				return toast.error("email and password required ", {
					id: "resend",
				});
			}
			toast.loading("resending otp", { id: "resend" });
			const { data: axiosData } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/auth/login`,
				{ email: cred.cred?.email, password: cred.cred?.password }
			);
			if (axiosData.code === 200) {
				toast.success(`${axiosData.message}`, { id: "resend" });
			}
			if (axiosData.code !== 200) {
				toast.error(`${axiosData.message}`, { id: "resend" });
			}
		} catch (error: any) {
			toast.error(`${error?.message}`, { id: "resend" });
			console.log(error);
		}
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
							<span className="text-[#21003D]">
								{cred.cred?.email || "name@ardilla.africa"}
							</span>
						</p>
						<div className="my-6">
							<OtpInput
								value={otp}
								onChange={handleChange}
								numInputs={7}
								isInputNum={true}
								inputStyle="otp-form"
							/>
						</div>
						<h6 className="text-[#3D0072] font-[500] text-[12px] leading-[20px]">
							Didn’t get an OTP code?{" "}
							<span
								className="text-[#8807F7] cursor-pointer"
								onClick={resendOtp}
							>
								RESEND
							</span>
						</h6>
						<div className="text-center mt-10">
							<button
								className="bg-[#240552] text-white w-full mt-4 p-5 text-center rounded-[8px] font-[500] text-[14px] disabled:bg-[#240552]/50"
								type="submit"
								disabled={!otp || otp.length < 7 || isLoading}
								onClick={verify_otp}
							>
								{isLoading ? "Signing in..." : "Sign In"}
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center bg-login justify-center"></div>
		</section>
	);
}
