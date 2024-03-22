"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false);

		return (
			<div className="relative">
				<input
					type={showPassword ? type : "password"}
					className={cn(
						"flex h-14 w-full  rounded-[6px] border border-gray200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray300 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
						className
					)}
					ref={ref}
					{...props}
				/>

				<button
					className="absolute right-3 top-1/2 -translate-y-1/2 outline-none"
					onClick={() => setShowPassword((prev) => !prev)}
					type="button"
				>
					{showPassword ? (
						<EyeOffIcon
							className="text-[#9ca3af] w-[16px]"
							aria-hidden="true"
						/>
					) : (
						<EyeIcon
							className="text-[#9ca3af] w-[16px]"
							aria-hidden="true"
						/>
					)}
				</button>
			</div>
		);
	}
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
