import { Icon } from '@iconify/react/dist/iconify.js';
import React, { InputHTMLAttributes, useState } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  type,
  ...inputProps
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="mb-6 relative">
      <label
        htmlFor={inputProps.id || 'default-input'}
        className="block mb-2 text-[12px] font-[500] text-[#21003D]"
      >
        {label}
      </label>
      <input
        {...inputProps}
        type={passwordVisible ? 'text' : type}
        placeholder={placeholder}
        className="bg-[#fff] outline-none border border-[#E5E7EB] text-[#D1D5DB] text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 placeholder-[#D1D5DB]"
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-3 top-[66%] transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? (
            <Icon icon="ph:eye-slash" className="text-[#D1D5DB]" />
          ) : (
            <Icon icon="ph:eye" className="text-[#D1D5DB]" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
