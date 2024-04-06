"use client";
import NavBar from "@/components/navbar";
import React, { useState } from "react";
import StepOne from "@/components/usermanage/personaldetails";
import StepTwo from "@/components/usermanage/document";
import StepThree from "@/components/usermanage/nextofkin";
import StepFour from "@/components/usermanage/attachmember";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Accountdetails from "./screenshot";

const userSchema = z.object({
	bvn: z
		.string({ required_error: "bvn is required" })
		.min(1, "bvn is required"),
	first_name: z.string({ required_error: "first name required" }),
	last_name: z.string({ required_error: "last name required" }),
	phone: z
		.string({ required_error: "phone number required" })
		.startsWith("+234", "invalid phone format e.g +234")
		.min(14, "invalid phone number")
		.max(14, "invalid phone number")
		.trim(),
	email: z
		.string({ required_error: "email is required" })
		.min(1, "email is required")
		.email("invalid email"),
	inserted_address: z
		.string({ required_error: "residential address is required" })
		.min(4, "residential address is required"),
	marital_status: z
		.string({ required_error: "marital status is required" })
		.min(1, "marital status required"),
	state_of_origin: z
		.string({ required_error: "state of origin is required" })
		.min(1, "state of origin required"),
	date_of_birth: z
		.string({ required_error: "date of birth is required" })
		.min(1, "date of birth required"),
	nationality: z
		.string({ required_error: "nationality is required" })
		.min(1, "nationality required"),
	gender: z
		.string({ required_error: "gender is required" })
		.min(1, "gender required"),
	kodhex: z
		.string({ required_error: "kodhex is required" })
		.min(1, "kodhex required"),
	identity_document_type: z
		.string({ required_error: "document type required" })
		.min(1, "document type required"),
	identity_document_serial: z
		.string({ required_error: "document serial number required" })
		.min(1, "document serial number required"),
	next_of_kin: z.object({
		first_name: z
			.string({ required_error: "next of kin first name is required" })
			.min(1, "next of kin first name is required"),
		last_name: z
			.string({ required_error: "next of kin last name is required" })
			.min(1, "next of kin last name is required"),
		relationship: z
			.string({
				required_error: "relationship with next of kin is required",
			})
			.min(1, "relationship with next of kin is required"),
		gender: z
			.string({
				required_error: "next of kin gender is required",
			})
			.min(1, "next of kin gender is required"),
		email: z
			.string({ required_error: "email is required" })
			.min(1, "email is required")
			.email("invalid email"),
		phone: z
			.string({ required_error: "phone number required" })
			.min(1, "phone number is required")
			.min(14, "invalid phone number")
			.max(14, "invalid phone number")
			.startsWith("+234", "invalid phone format e.g +234"),
		address: z
			.string({
				required_error: "next of kin residential address is required",
			})
			.min(4, "next of kin residential address is required"),
	}),
});

export type userType = z.infer<typeof userSchema>;

type Props = {
	username: string;
	token: string;
	profile_photo: string;
};

function UserManagementComponent({ username, profile_photo, token }: Props) {
	const [doc, setDocPhoto] = useState<File | undefined>(undefined);
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevStep) => prevStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevStep) => prevStep - 1);
	};

	const {
		register,
		watch,
		trigger,
		setValue,
		getFieldState,
		clearErrors,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm<userType>({
		resolver: zodResolver(userSchema),
		mode: "onChange",
	});

	return (
		<section>
			<NavBar username={username} profile_photo={profile_photo}>
				<div className="flex items-center">
					<h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
						Create Profile
					</h1>
					{/* <h1 className="mx-3 text-[24px] text-[#21003D] leading-[33px] font-[500]">
						-
					</h1> */}
					{/* <h1 className="text-[14px] text-[#21003D] leading-[33px] mt-1 font-[500]">
            Oshodi Branch
          </h1> */}
				</div>
			</NavBar>
			<main className="px-4 lg:px-8 mt-[50px]">
				{activeStep === 0 && (
					<StepOne
						handleNext={handleNext}
						register={register}
						errors={errors}
						watch={watch}
						trigger={trigger}
						setValue={setValue}
						token={token}
						getFieldState={getFieldState}
						clearErrors={clearErrors}
					/>
				)}
				{activeStep === 1 && (
					<StepTwo
						handleNext={handleNext}
						handleBack={handleBack}
						doc={doc}
						setDocPhoto={setDocPhoto}
						register={register}
						trigger={trigger}
						errors={errors}
						getFieldState={getFieldState}
					/>
				)}
				{activeStep === 2 && (
					<StepThree
						handleNext={handleNext}
						handleBack={handleBack}
						errors={errors}
						register={register}
						trigger={trigger}
						getFieldState={getFieldState}
					/>
				)}
				{activeStep === 3 && (
					<StepFour
						handleNext={handleNext}
						handleBack={handleBack}
						token={token}
						doc={doc}
						handleSubmit={handleSubmit}
						getValues={getValues}
						reset={reset}
					/>
				)}
				{activeStep === 4 && (
					<Accountdetails setStep={() => setActiveStep(0)} />
				)}
			</main>
		</section>
	);
}

export default UserManagementComponent;
