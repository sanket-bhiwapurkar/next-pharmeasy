import { iconSize } from "@/app/constants/styles";
import Link from "next/link";
import React from "react";
import { BiClinic, BiPhone } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

const AddressCard = () => {
  return (
    <div className="flex flex-col gap-4 p-3 rounded-lg border border-gray-300">
      <div className="flex gap-3">
        <div>
          <BiClinic className={`${iconSize.medium}`} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            corrupti ipsam animi!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-auto">
        <div className="flex gap-3 col-span-6">
          <div>
            <BiPhone className={`${iconSize.medium}`} />
          </div>
          <p className="text-xs">9873585575</p>
        </div>
        <div className="flex gap-3 col-span-6">
          <div>
            <GrLocation className={`${iconSize.medium}`} />
          </div>
          <Link href="/" className="lit text-xs">
            View on Map
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
