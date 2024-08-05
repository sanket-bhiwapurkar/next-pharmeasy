import { TypographyScale } from "@/app/constants/styles";
import React, { ReactNode } from "react";

interface SectionHeaderProps {
  head: string | ReactNode;
  subHead?: string | ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ head, subHead }) => {
  return (
    <div className="flex flex-col gap-">
      <h4 className={`${TypographyScale.h4}`}>{head}</h4>
      {subHead && <h6 className="font-light">{subHead}</h6>}
    </div>
  );
};

export default SectionHeader;
