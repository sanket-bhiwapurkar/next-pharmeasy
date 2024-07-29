"use client";

import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { FaAngleDown, FaRegUser } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { flex_456_4 } from "@/app/constants/styles";

const Header = () => {
  return (
    <Box>
      <AppBar
        color="inherit"
        component="header"
        elevation={3}
        position="static"
        sx={{
          ...flex_456_4,
          height: "64px",
          padding: "0px 16px",
        }}
      >
        {renderLogoSection()}
        {renderActionGroup()}
      </AppBar>

      {/* Delivery Mobile */}
      <Paper
        elevation={1}
        sx={{
          bgcolor: "transparent",
          display: { xs: "flex", lg: "none" },
          height: 32,
          borderRadius: 0,
        }}
      >
        {renderDelivery(true)}
      </Paper>
      {/* End Delivery Mobile */}
    </Box>
  );
};

function renderLogoSection() {
  return (
    <Box
      component="div"
      sx={{
        ...flex_456_4,
        gap: { xs: 2, lg: 4 },
        marginRight: "auto",
      }}
    >
      {/* Login Toggle */}
      <IconButton
        aria-label="login"
        color="inherit"
        size="small"
        sx={{ display: { lg: "none" } }}
      >
        <FaRegUser />
      </IconButton>
      {/* End Login Toggle */}

      {/* Logo */}
      <Link aria-label="pharmeasy logo, go to home" href="/">
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
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      >
        {renderDelivery(false)}
      </Box>
      {/* End Delivery */}
    </Box>
  );
}

function renderActionGroup() {
  return (
    <Box
      component="div"
      sx={{
        ...flex_456_4,
        gap: { xs: 2, md: 4 },
      }}
    >
      {/* Download App */}
      <Button
        aria-label="download app"
        color="secondary"
        disableElevation
        startIcon={<FaMobileAlt />}
        sx={{ display: { xs: "none", lg: "flex" }, textTransform: "none" }}
        variant="contained"
      >
        Download App
      </Button>
      {/* End Download App */}

      {/* Login Toggle */}
      <IconButton
        aria-label="login"
        color="inherit"
        size="small"
        sx={{
          gap: 2,
          borderRadius: 1,
          display: { xs: "none", lg: "flex" },
        }}
      >
        <FaRegUser />
        <Typography
          sx={{
            display: { xs: "none", xl: "block" },
          }}
          variant="body2"
        >
          Hello, Log in
        </Typography>
      </IconButton>
      {/* End Login Toggle */}

      {/* Offers */}
      <IconButton
        aria-label="offers"
        color="inherit"
        size="small"
        sx={{
          gap: 2,
          borderRadius: 1,
        }}
      >
        <RiDiscountPercentLine />
        <Typography
          sx={{
            display: { xs: "none", md: "block", lg: "none", xl: "block" },
          }}
          variant="body2"
        >
          Offers
        </Typography>
      </IconButton>
      {/* End Offers */}

      {/* Cart */}
      <IconButton
        aria-label="cart"
        color="inherit"
        size="small"
        sx={{
          gap: 2,
          borderRadius: 1,
        }}
      >
        <BsCart2 />
        <Typography
          sx={{
            display: { xs: "none", md: "block", lg: "none", xl: "block" },
          }}
          variant="body2"
        >
          Cart
        </Typography>
      </IconButton>
      {/* Cart */}
    </Box>
  );
}

function renderDelivery(row: boolean = true) {
  const flexDirection = row ? "row" : "column";
  const variant = row ? "caption" : "body2";
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
      }}
    >
      <Divider flexItem orientation="vertical" variant="middle" />
      <ButtonBase
        aria-label="express delivery select pincode"
        sx={{ display: "flex", flexDirection }}
      >
        <Typography variant="caption">
          <span>⚡ </span> Express delivery to
        </Typography>
        <Typography
          sx={{
            ...flex_456_4,
            fontWeight: 600,
            gap: 1,
            ml: 0.5,
          }}
          variant={variant}
        >
          Select Pincode <FaAngleDown />
        </Typography>
      </ButtonBase>
    </Box>
  );
}

export default Header;
