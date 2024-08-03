import { forwardRef } from "react";

export interface ButtonBaseProps {
  ref?: React.RefObject<HTMLButtonElement>;
  onClick?: any;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    { onClick, children, className, disabled = false, type = "button" },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={`${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

ButtonBase.displayName = "ButtonBase";
