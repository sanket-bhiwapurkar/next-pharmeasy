import Image from "next/image";
import React from "react";

const HeadingSection = () => {
  return (
    <header className="bg-[url('/images/bg/franchise-labs.png')] bg-cover p-3 lg:p-24 max-h-56 lg:max-h-full">
      <div className="max-w-xl">
        <div className="bg-white bg-opacity-65 rounded-lg backdrop-blur-lg w-48 lg:w-full p-3 lg:px-9 py-2">
          <p className="text-lg lg:text-5xl leading-snug lg:leading-normal font-bold">
            PharmEasy Labs Collection Centres near you
          </p>
          <p className="text-xs lg:text-lg lg:leading-relaxed mt-1">
            Walk-in to our nearest centre to get all kinds of Blood tests, Urine
            tests and Covid tests done
          </p>
        </div>
        <div className="bg-white rounded-lg flex items-center justify-between shadow-lg mt-14 lg:mt-3 p-3 lg:px-9 py-2">
          <div className="flex items-center lg:gap-4 text-xsm lg:text-sm">
            <Image
              alt="icon"
              height={26}
              src="/images/icons/9ca0b159.svg"
              width={26}
            />
            <p className="">
              Lorem, ipsum <br /> dolor.
            </p>
          </div>
          <div className="flex items-center lg:gap-4 text-xsm lg:text-sm">
            <Image
              alt="icon"
              height={26}
              src="/images/icons/9ca0b159.svg"
              width={26}
            />
            <p>
              Lorem, ipsum <br /> dolor.
            </p>
          </div>
          <div className="flex items-center lg:gap-4 text-xsm lg:text-sm">
            <Image
              alt="icon"
              height={26}
              src="/images/icons/9ca0b159.svg"
              width={26}
            />
            <p>
              Lorem, ipsum <br /> dolor.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeadingSection;
