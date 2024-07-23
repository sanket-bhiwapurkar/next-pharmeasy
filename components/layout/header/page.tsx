import { Link } from "@mui/material";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-screen">
      <div className="flex items-center p-2 border border-solid border-gray-300">
        <Link href="/">
          <Image
            src="/images/stockmed-logos/stockmedLogoRowLightBgLow.png"
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
