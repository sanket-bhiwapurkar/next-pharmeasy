import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { FaAngleDown, FaRegUser } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <AppBar
      color="inherit"
      component="header"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        height: "64px",
        padding: "0px 16px",
      }}
    >
      {renderLogoSection()}
      {renderActionGroup()}
    </AppBar>
  );
};

export default Header;

function renderLogoSection() {
  return (
    <Box
      component="div"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: { xs: 2, lg: 4 },
        marginRight: "auto",
      }}
    >
      <IconButton
        aria-label="login-button"
        color="inherit"
        size="small"
        sx={{ display: { lg: "none" } }}
      >
        <FaRegUser />
      </IconButton>

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

      <Box sx={{
        display: { xs: "none", lg: "flex" },
        gap: 4
      }}>
        <Divider flexItem orientation="vertical" variant="middle" />
        <ButtonBase sx={{ display: "block" }}>
          <span>⚡</span>
          <Typography variant="caption">
            Express delivery to
          </Typography>
          <Typography sx={{
            alignItems: "center",
            display: "flex",
            fontWeight: 500,
            gap: 1,
          }}
            variant="body2"
          >
            Select Pincode <FaAngleDown />
          </Typography>
        </ButtonBase>
      </Box>


    </Box>
  );
}

function renderActionGroup() {
  return (
    <Box
      component="div"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: { xs: 2, md: 4 },
      }}
    >
      <Button
        color="secondary"
        disableElevation
        startIcon={<FaMobileAlt />}
        sx={{ display: { xs: "none", lg: "flex" }, textTransform: "none" }}
        variant="contained"
      >
        Download App
      </Button>

      <IconButton
        aria-label="offers"
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
    </Box>
  );
}
