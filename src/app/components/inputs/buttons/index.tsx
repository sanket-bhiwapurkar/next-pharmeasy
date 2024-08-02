"use client";
import { elevations, TypographyScale } from "@/app/constants/styles";
import React, { forwardRef, MouseEvent, useRef, useState } from "react";

interface ButtonBaseProps {
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

interface ButtonProps extends ButtonBaseProps {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "dark"
    | "danger"
    | "disabled"
    | string;
  variant?: "contained" | "outlined" | "text" | "flipped";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "small" | "meduim" | "large";
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  fab?: boolean;
}

const colors: { [key: string]: { [key: string]: string } } = {
  inherit: {
    inherit: "",
    contained: "",
    outlined: "",
    text: "",
    ripple: "",
  },
  primary: {
    inherit: "",
    contained: "border-0 bg-primary hover:bg-teal-700 text-white",
    outlined:
      "border border-primary bg-transparent hover:bg-teal-50 text-primary",
    text: "border-0 bg-transparent hover:bg-teal-50 text-primary",
    ripple: "bg-teal-50",
  },
  secondary: {
    inherit: "",
    contained: "border-0 bg-secondary hover:bg-blue-100 text-dark",
    outlined: "border border-dark hover:bg-secondary text-dark",
    text: "border-0 bg-transparent hover:bg-secondary text-dark",
    ripple: "bg-secondary",
  },
  dark: {
    inherit: "",
    contained: "border-0 bg-dark hover:bg-black text-white",
    outlined: "border border-dark hover:bg-gray-100 text-dark",
    text: "border-0 bg-transparent hover:bg-gray-100 text-dark",
  },
  danger: {
    inherit: "",
    contained: "border-0 bg-danger hover:bg-red-500 text-white",
    outlined: "border border-danger hover:bg-red-50 text-danger",
    text: "border-0 bg-transparent hover:bg-red-50 text-danger",
  },
  disabled: {
    inherit: "",
    contained: "border-0 bg-disabled text-white cursor-not-allowed",
    outlined: "border border-disabled  text-disabled cursor-not-allowed",
    text: "border-0 bg-transparent text-disabled cursor-not-allowed",
  },
  info: {
    inherit: "",
    contained: "border-0 bg-info hover:bg-violet-600 text-white",
    outlined: "border border-info hover:bg-violet-50 text-info",
    text: "border-0 bg-transparent hover:bg-violet-50 text-info",
  },
  warning: {
    inherit: "",
    contained: "border-0 bg-warning hover:bg-orange-600 text-white",
    outlined: "border border-warning hover:bg-orange-50 text-warning",
    text: "border-0 bg-transparent hover:bg-orange-50 text-warning",
  },
};

const sizes: { [key: string]: string } = {
  small: "min-w-7 min-h-7 py-1 px-2",
  medium: "min-w-9 min-h-9 py-1 px-4",
  large: "min-w-11 min-h-11 py-2 px-6",
};

interface rippleStates {
  show: boolean;
  x: number;
  y: number;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "primary",
      variant = "contained",
      size = "medium",
      elevation = 0,
      fab = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    const [ripple, setRipple] = useState<rippleStates>({
      show: false,
      x: 0,
      y: 0,
    });
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const rippleEffect = (e: MouseEvent<HTMLButtonElement>) => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipple({ show: true, x, y });
      setTimeout(() => setRipple({ show: false, x: 0, y: 0 }), 500);
    };
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      rippleEffect(e);
      // Call the passed onClick handler if it exists
      setTimeout(() => {
        if (onClick) {
          onClick(e); // Call the passed onClick handler
        }
      }, 0);
    };
    return (
      <ButtonBase
        ref={(node: HTMLButtonElement | null) => {
          // Set the ref for ButtonBase and also update local buttonRef
          if (typeof ref === "function") {
            ref(node); // Handle ref if it's a function
          } else if (ref && "current" in ref) {
            ref.current = node; // Handle ref if it's an object
          }
          buttonRef.current = node; // Update local buttonRef
        }}
        onClick={handleClick}
        {...rest}
        className={`flex items-center justify-center gap-2 relative overflow-hidden ${
          fab ? "rounded-full" : "rounded"
        } shadow-gray-600 font-medium text-nowrap ${TypographyScale.button} ${
          colors[color][variant]
        } ${sizes[size]} ${elevations[elevation]} ${rest.className}`}
      >
        {rest.startIcon}
        {children}
        {rest.endIcon}
        {ripple.show && (
          <span
            className={`ripple`}
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: "20px",
              height: "20px",
            }}
          ></span>
        )}
      </ButtonBase>
    );
  }
);
Button.displayName = "Button";

interface IconButtonProps extends ButtonProps {
  startIcon?: null;
  endIcon?: null;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <Button
      color="dark"
      variant="text"
      {...rest}
      className={`${rest.className} rounded-full !p-0`}
    >
      {children}
    </Button>
  );
};
