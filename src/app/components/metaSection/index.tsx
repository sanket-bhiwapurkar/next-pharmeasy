import React from "react";
import { metaTexts, tags } from "./data";
import { TypographyScale } from "@/app/constants/styles";

const MetaSection = () => {
  return (
    <div className="flex flex-col p-8 gap-8">
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
