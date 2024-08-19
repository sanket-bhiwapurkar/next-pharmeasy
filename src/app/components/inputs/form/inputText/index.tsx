"use client";
import React, { useState } from "react";
import { InputBase, InputBaseProps } from "../inputBase";
import InputWrapper from "../inputWrapper";

interface InputTextProps extends InputBaseProps {
  className?: string;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({
  className,
  placeholder,
  required,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setfilled] = useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const focusInputClass = focused ? "border-primary" : "border-dark";
  const focusPlaceholderClass =
    focused || filled
      ? `top-0 ${focused ? "text-primary" : ""}`
      : `top-1/2 ${filled ? "text-dark" : ""}`;
  return (
    <InputWrapper>
      <InputBase
        {...props}
        className={`py-1 px-2 rounded h-10 outline-0 outline-none border text-sm w-full ${focusInputClass}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        setFilled={setfilled}
        required={required}
      />
      <label
        htmlFor={props.id}
        className={`px-1 ms-2 bg-white absolute -translate-y-1/2 left-0 transition-all ${focusPlaceholderClass}`}
      >
        {placeholder + `${required ? " *" : ""}`}
      </label>
    </InputWrapper>
  );
};

export default InputText;
