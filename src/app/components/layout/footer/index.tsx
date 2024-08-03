import React from "react";
import { TypographyScale } from "@/app/constants/styles";
import FooterAccordian from "./accordian";
import {
  followUsData,
  footerNavData,
  mobileAppData,
  paymentMethodsData,
} from "./data";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div
      className={`grid grid-cols-12 w-full gap-8 p-4 pb-12 bg-secondary ${className}`}
      // spacing={4}
    >
      {/* Navigations */}
      <div className="col-span-12 lg:hidden">
        <FooterAccordian data={footerNavData} />
      </div>
      <div className="col-span-12 lg:col-span-9 hidden lg:flex">
        <div className="block w-full columns-3">
          {footerNavData.map((eachGroup) => (
            <ul
              className="list-none break-inside-avoid gap-3 p-0 mb-16 flex flex-col"
              key={eachGroup.id}
            >
              <li className="p-0 mb-3">
                <p className={`${TypographyScale.body1} font-semibold`}>
                  {eachGroup.group}
                </p>
              </li>
              {eachGroup.navigations.map((eachNavigation) => (
                <li
                  className={`p-0 ${TypographyScale.body2}`}
                  key={eachNavigation.id}
                >
                  <Link href={eachNavigation.linkUrl}>
                    {eachNavigation.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {/* End Navigations */}

      {/* App Download */}
      <div className="col-span-12 flex lg:hidden">
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Download the App for Free</p>
          <div className="flex gap-4">
            {mobileAppData.map((eachData) => (
              <Link href={eachData.linkUrl} key={eachData.id}>
                <Image
                  alt={eachData.title}
                  height={40}
                  src={eachData.imgUrl}
                  width={135}
                  className="h-10"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* End App Download */}

      {/* Social */}
      <div className="col-span-12 lg:col-span-3 flex">
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Follow us on</p>
          <div className="flex gap-4">
            {followUsData.map((eachData) => (
              <Link href={eachData.linkUrl} key={eachData.id}>
                <Image
                  alt={eachData.title}
                  height={24}
                  src={eachData.imgUrl}
                  width={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* End Social */}

      {/* Payment */}
      <div className="col-span-12 lg:col-span-9">
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Our Payment Partners</p>
          <div className="flex flex-wrap gap-8">
            {paymentMethodsData.map((eachData) => (
              <Image
                key={eachData.id}
                alt={eachData.title}
                height={16}
                src={eachData.imgUrl}
                width={60}
                className="h-4 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
      {/* End Payment */}

      {/* Copyright */}
      <div className="flex items-end col-span-12 lg:col-span-3">
        <p className={`${TypographyScale.caption} justify-self-end`}>
          © 2024 PharmEasy. All Rights Reserved
        </p>
      </div>
      {/* End Copyright */}
    </div>
  );
};

export default Footer;
