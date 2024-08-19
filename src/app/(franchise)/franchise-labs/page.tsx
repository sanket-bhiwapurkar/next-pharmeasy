import React from "react";
import "../../globals.css";
import HeadingSection from "@/app/components/surfaces/heading-section";
import AddressCard from "@/app/components/surfaces/cards/addressCard";
import { BiClinic, BiPhone } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import { iconSize } from "@/app/constants/styles";

const FranchiseLabs = () => {
  return (
    <main>
      <HeadingSection />
      <div className="flex justify-center mt-24 lg:mt-4 mx-auto">
        <div className="grid lg:grid-cols-4 gap-4 px-4 max-w-fit">
          <AddressCard />
        </div>
      </div>
    </main>
  );
};

export default FranchiseLabs;
