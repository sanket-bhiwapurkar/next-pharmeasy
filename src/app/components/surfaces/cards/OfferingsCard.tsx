import { TypographyScale } from "@/app/constants/styles";
import Image from "next/image";
import React from "react";

interface OfferingsCardProps {
  className?: string;
  imageClassName?: string;
  imgUrl: string;
  title: string;
  subtext: string;
  url: string;
}

const OfferingsCard: React.FC<OfferingsCardProps> = ({
  className,
  imageClassName,
  imgUrl,
  title,
  subtext,
  url
}) => {
  return (
    <div
      className={`flex flex-col flex-shrink min-w-24 md:min-w-32 lg:min-w-36 lg:aspect-square rounded-lg text-center hover:lg:shadow-lg ${className} p-1`}
    >
      <div
        className={`rounded-lg w-full border border-gray-300 lg:border-0 lg:px-5 mb-1 ${imageClassName} lg:bg-transparent`}
      >
        <Image
          alt="Brand"
          className={`w-full h-full object-cover lg:border-b lg:rounded-none`}
          height={0}
          src={imgUrl}
          width={200}
        />
      </div>
      <p
        className={`font-medium ${TypographyScale.caption} lg:text-base lg:leading-7`}
      >
        {title}
      </p>
      <p
        className={`text-danger font-semibold max-md:text-[10px] ${TypographyScale.caption} lg:leading-7`}
      >
        {subtext}
      </p>
    </div>
  );
};

export default OfferingsCard;
