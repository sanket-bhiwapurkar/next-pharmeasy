import React from "react";

interface DividerProps {
  className?: string;
  orienation?: string;
  variant?: string;
}

const orientations: any = {
  fullWidth: {
    vertical: "h-full w-[1px]",
    horizontal: "w-full h-[1px]",
  },
  middle: {
    vertical: "mt-4 h-[calc(100%-32px)] w-[1px]",
    horizontal: "ms-4 w-[calc(100%-32px)] h-[1px]",
  },
};

const variants = {
  fullWidth: "",
};

const Divider: React.FC<DividerProps> = ({
  orienation = "horizontal",
  variant = "fullWidth",
  ...rest
}) => {
  return (
    <hr
      className={`bg-black opacity-50 ${rest.className} ${orientations[variant][orienation]}`}
    />
  );
};

export default Divider;
