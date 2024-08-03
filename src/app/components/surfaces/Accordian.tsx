import React, { createContext, useContext, useState } from "react";
import { Button } from "../inputs/buttons/Button";
import { FaAngleDown } from "react-icons/fa6";

const theme: { [key: string]: { [key: string]: string } } = {
  primary: {
    outlined: "rounded-md border border-primary",
    underlined: "border-b border-primary",
  },
  dark: {
    outlined: "rounded-md border border-gray-200",
    underlined: "border-b border-gray-200",
  },
  info: {
    outlined: "rounded-md border border-info",
    underlined: "border-b border-info",
  },
};

const bodypx: { [key: string]: string } = {
  small: "px-2",
  medium: "px-4",
  large: "px-6",
};

const Header = ({ children }: any) => {
  const { toggleActive, isActive, size, color } = useContext(AccordianContext);
  return (
    <Button
      className="w-100"
      variant="text"
      endIcon={
        <FaAngleDown
          className={`transition-all duration-600 ease-in ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
        />
      }
      onClick={toggleActive}
      disableRipple={true}
      size={size}
      color={color}
    >
      {children}
    </Button>
  );
};
const Body = ({ children }: any) => {
  const { isActive, size } = useContext(AccordianContext);
  return isActive ? (
    <div className={`${bodypx[size]} py-2`}>{children}</div>
  ) : null;
};

interface AccordianContextProps {
  isActive: boolean;
  toggleActive: () => void;
  size: string;
  color: string;
}

const AccordianContext = createContext<AccordianContextProps | undefined>(
  undefined
);

interface AccordianProps {
  children: React.ReactNode;
  active?: boolean;
  size?: string;
  variant?: string;
  color?: "primary" | "dark" | "info";
}

const Accordian = ({
  active = false,
  children,
  size = "medium",
  variant = "outlined",
  color = "dark",
  ...rest
}: AccordianProps) => {
  const [isActive, setIsActive] = useState(active);
  const toggleActive = () => setIsActive((prev) => !prev);
  return (
    <AccordianContext.Provider value={{ isActive, toggleActive, size, color }}>
      <div className={`flex flex-col w-full py-1 ${theme[color][variant]}`}>
        {children}
      </div>
    </AccordianContext.Provider>
  );
};

Accordian.Header = Header;
Accordian.Body = Body;

export default Accordian;
