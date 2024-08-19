import React, { ReactNode } from "react";

const InputWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`relative mt-2 mb-3 ${className}`}>{children}</div>;
};

export default InputWrapper;
