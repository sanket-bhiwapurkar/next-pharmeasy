import {
  Button,
  IconButton,
  Link,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center w-screen h-16 shadow-lg shadow-zinc-100 px-4">
      <div className="flex items-center me-auto">
        <IconButton
          aria-label="login-button"
          size="small"
          className="me-5 lg:hidden"
          color="inherit"
          sx={{display: {lg: "none"}, marginRight:"16px"}}
        >
          <FaRegUser />
        </IconButton>

        <Link href="/">
          <Image
            src="/images/pharmeasy-logos/logo-wo-slogan.svg"
            alt="logo"
            width={106}
            height={0}
            className="lg:hidden"
          />
          <Image
            src="/images/pharmeasy-logos/logo_big.svg"
            alt="logo"
            width={150}
            height={0}
            className="hidden lg:block"
          />
        </Link>
      </div>

      <div className="flex gap-4 md:gap-8">
        <Button
          variant="contained"
          startIcon={<FaMobileAlt />}
          disableElevation
          color="secondary"
          sx={{display: {xs: "none", lg: "flex"}, textTransform: "none"}}
        >
          Download App
        </Button>

        <Button
          variant="text"
          startIcon={<FaRegUser />}
          disableElevation
          color="inherit"
          sx={{display: {xs: "none", xl: "flex"}, textTransform: "none"}}
        >
          Hello, Log in
        </Button>

        <IconButton
          aria-label="login"
          size="small"
          color="inherit"
          sx={{display: {xs: "none", lg: "block"}}}
        >
          <FaRegUser />
        </IconButton>

        <IconButton aria-label="offers" size="small" color="inherit">
          <RiDiscountPercentLine />
          <span className="text-sm font-medium ms-4 hidden md:block lg:hidden">
            Offers
          </span>
        </IconButton>

        <IconButton aria-label="cart" size="small" color="inherit">
          <BsCart2 />
          <span className="text-sm font-medium ms-4 hidden md:block lg:hidden">
            Cart
          </span>
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
// why choose; footer: #eef4ff
