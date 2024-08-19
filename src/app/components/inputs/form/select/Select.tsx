import React, { ReactNode } from "react";
import InputWrapper from "../inputWrapper";

const Select = ({ children }: { children: ReactNode }) => {
  return (
    <InputWrapper>
      <select className="bg-gray-200 border border-dark px-2 py-3 rounded w-full">
        {children}
      </select>
    </InputWrapper>
  );
};

export default Select;
