"use client";

import React from "react";
import Image from "next/image";
import { FaAngleDown, FaRegUser } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { flex_456_4, iconSize, TypographyScale } from "@/app/constants/styles";
import { Button, IconButton, ButtonBase } from "../../inputs/buttons";
import Link from "next/link";
import Divider from "../../data-display/divider";

const classes = {
  hoverDashedUnderline: "border-black border-dashed hover:border-b",
};

const Header = () => {
  return (
    <header>
      <div className="flex items-center h-16 px-4 shadow">
        {renderLogoSection()}
        {renderActionGroup()}
      </div>
      <div className="bg-transparent flex items-center lg:none h-8 shadow">
        {renderDelivery(true)}
      </div>
    </header>
  );
};

function renderLogoSection() {
  return (
    <div className="flex items-center gap-4 lg:gap-8 me-auto">
      {/* Login Toggle */}
      <IconButton className={"lg:hidden"}>
        <FaRegUser className={iconSize.medium} />
      </IconButton>
      {/* End Login Toggle */}

      {/* Logo */}
      <Link href="/">
        <Image
          alt="logo"
          className="lg:hidden"
          height={0}
          src="/images/pharmeasy-logos/logo-wo-slogan.svg"
          width={106}
        />
        <Image
          alt="logo"
          className="hidden lg:block"
          height={0}
          src="/images/pharmeasy-logos/logo_big.svg"
          width={150}
        />
      </Link>
      {/* End Logo */}

      {/* Delivery */}
      <div className="hidden lg:flex">{renderDelivery(false)}</div>
      {/* End Delivery */}
    </div>
  );
}

function renderActionGroup() {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      {/* Download App */}
      <Button
        color="secondary"
        startIcon={<FaMobileAlt className={iconSize.medium} />}
        className="hidden lg:flex"
        variant="contained"
      >
        Download App
      </Button>
      {/* End Download App */}

      {/* Login Toggle */}
      <IconButton size="small" className="gap-4 hidden lg:flex rounded">
        <FaRegUser className={iconSize.medium} />
        <p className={`hidden xl:block ${classes.hoverDashedUnderline}`}>
          Hello, Log in
        </p>
      </IconButton>
      {/* End Login Toggle */}

      {/* Offers */}
      <IconButton color="inherit" size="small">
        <RiDiscountPercentLine className={iconSize.medium} />
        <p
          className={`hidden md:block lg:hidden xl:block ${classes.hoverDashedUnderline}`}
        >
          Offers
        </p>
      </IconButton>
      {/* End Offers */}

      {/* Cart */}
      <IconButton color="inherit" size="small">
        <BsCart2 className={iconSize.medium} />
        <p
          className={`hidden md:block lg:hidden xl:block ${classes.hoverDashedUnderline}`}
        >
          Cart
        </p>
      </IconButton>
      {/* Cart */}
    </div>
  );
}

function renderDelivery(row: boolean = true) {
  const flexDirection = row ? "flex-row" : "flex-col";
  const size = row ? "caption" : "body2";
  return (
    <div className="flex gap-8">
      <Divider orienation="vertical" variant="fullWidth" />
      <ButtonBase className={`flex ${flexDirection}`}>
        <p className={TypographyScale.caption}>⚡ Express delivery to </p>
        <p
          className={`flex items-center ${TypographyScale[size]} ms-1 gap-2 font-semibold`}
        >
          Select Pincode <FaAngleDown />
        </p>
      </ButtonBase>
    </div>
  );
}

export default Header;
