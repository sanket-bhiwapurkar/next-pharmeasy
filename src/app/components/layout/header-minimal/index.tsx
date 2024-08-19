import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderMinimal = () => {
  return (
    <header className="bg-primary">
      {/* Logo */}
      <Link href="/">
        <Image
          alt="logo"
          className="px-4 py-2"
          height={50}
          src="/images/pharmeasy-logos/pharmeasy-logo-white.png"
          width={130}
        />
      </Link>
    </header>
  );
};

export default HeaderMinimal;
