import React, { ReactNode } from "react";

interface SectionHeaderProps {
  head: string | ReactNode;
  subHead?: string | ReactNode;
  size?: "small" | "large" | "string";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  head,
  subHead,
  size = "small",
  className,
}) => {
  const getTextSizeClass = (size: string) => {
    let textSizeInLarge;
    switch (size) {
      case "small":
        return ["lg:text-3xl font-semibold", "text-xs lg:text-base"];
      case "large":
        return ["lg:text-4xl font-semibold", "text-xs lg:text-2xl"];
      default:
        return "";
    }
  };
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h4 className={`${getTextSizeClass(size)[0]} font-semibold`}>{head}</h4>
      {subHead && <h6 className={`${getTextSizeClass(size)[1]}`}>{subHead}</h6>}
    </div>
  );
};

export default SectionHeader;
