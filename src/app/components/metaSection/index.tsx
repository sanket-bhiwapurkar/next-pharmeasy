import React from "react";
import { metaTexts, tags } from "./data";
import { TypographyScale } from "@/app/constants/styles";

interface MetaSectionProps {
  className?: string;
}

const MetaSection: React.FC<MetaSectionProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {tags.map((eachGroup) => (
        <p
          className={`${TypographyScale.body2} font-semibold`}
          key={eachGroup.name}
        >
          {eachGroup.name}: <span>{eachGroup.tags[0]}</span>
          {eachGroup.tags.map((eachTag) => (
            <span
              className={`${TypographyScale.body2} font-normal`}
              key={eachTag}
            >
              {" "}
              | {eachTag}
            </span>
          ))}
        </p>
      ))}
      <p className={`${TypographyScale.body1} font-semibold`}>
        {metaTexts.title}
      </p>
      {metaTexts.content.map((eachContent, i) => (
        <div className="flex flex-col gap-4" key={i}>
          <p className={`${TypographyScale.body2} font-semibold`}>
            {eachContent.title}
          </p>
          <p className={`${TypographyScale.body2}`}>
            {eachContent.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetaSection;
