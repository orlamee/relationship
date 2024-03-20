"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "./ui/passwordinput";
import axios from "axios";
import { base_url } from "@/base_url";
import toast from "react-hot-toast";
import { credSlice } from "@/hook/cred";
import { tologinOtp } from "@/actions";

export default function Welcome() {
	const cred = credSlice();
	const schema = z.object({
		email: z
			.string({ required_error: "email is required" })
			.min(1, "email is required")
			.email("invalid email"),
		password: z
			.string({ required_error: "password is required" })
			.min(1, "password is required")
			.min(6, "minimun of six characters"),
	});

	type formInput = {
		email: string;
		password: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<formInput>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: formInput) => {
		try {
			const { data: axiosData } = await axios.post(
				`${base_url}/ardilla/retail/admin/api/v1/auth/login`,
				{ email: data.email, password: data.password }
			);
			if (axiosData.code === 200) {
				cred.setCred(data);
				toast.success(`${axiosData.message}`, { id: "login" });
				tologinOtp();
			}
			if (axiosData.code !== 200) {
				toast.error(`${axiosData.message}`, { id: "login" });
			}
		} catch (error: any) {
			toast.error(`${error?.message}`, { id: "login" });
			console.log(error);
		}
	};

	return (
		<section className="min-h-screen flex items-stretch ">
			<div className="lg:w-1/2 w-full flex items-start pt-[100px] justify-start md:px-16 px-0 z-0 bg-white">
				<div className="sm:w-8/12 w-full px-4 lg:px-0 mx-auto">
					<div className="">
						<h2 className="text-[#240552] font-[founder] font-[500] text-[40px] leading-[55px]">
							Welcome
						</h2>
						<p className=" text-[#9CA3AF] mb-4 font-[500] text-[12px] leading-[14px]">
							Sign In to Ardilla’s admin dashboard and start putting
							things right
						</p>
						<div className="mt-10">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-6">
									<Input
										id="email"
										type="email"
										placeholder="Enter Email Address"
										className="text-black bg-[#fff] outline-none border border-[#E5E7EB]  text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 placeholder-[#D1D5DB]"
										{...register("email")}
									/>
									{errors.email && (
										<span className="text-[13px] text-red-500">
											{errors.email.message}
										</span>
									)}
								</div>

								<div className="mb-6">
									<PasswordInput
										placeholder="Enter Password"
										className="text-black bg-[#fff] outline-none border border-[#E5E7EB]  text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 placeholder-[#D1D5DB]"
										{...register("password")}
									/>
									{errors.password && (
										<span className="text-[13px] text-red-500">
											{errors.password.message}
										</span>
									)}
								</div>

								<button
									className="bg-[#240552] text-white w-full mt-4 p-5 text-center rounded-[8px] font-[500] text-[14px] disabled:bg-[#240552]/50"
									type="submit"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Signing in..." : "Sign In"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center bg-login justify-center"></div>
		</section>
	);
}
