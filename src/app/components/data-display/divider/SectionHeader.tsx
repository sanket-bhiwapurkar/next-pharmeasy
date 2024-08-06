import React, { ReactNode } from "react";

interface SectionHeaderProps {
  head: string | ReactNode;
  subHead?: string | ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ head, subHead, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h4 className={`lg:text-2xl font-semibold`}>{head}</h4>
      {subHead && <h6 className=" text-xs lg:text-base font-light">{subHead}</h6>}
    </div>
  );
};

export default SectionHeader;
