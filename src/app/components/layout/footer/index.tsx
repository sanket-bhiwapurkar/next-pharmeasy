import React from "react";
import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import { palette } from "@/app/constants/styles";
import FooterAccordian from "./accordian";
import { followUsData, footerNavData, mobileAppData, paymentMethodsData } from "./data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <Grid container spacing={4} sx={{ bgcolor: palette.secondary, p: 2, pb: 6 }}>
      {/* Navigations */}
      <Grid item xs={12} sx={{ display: { lg: "none" } }}>
        <FooterAccordian data={footerNavData} />
      </Grid>
      <Grid item lg={9} sx={{ display: { xs: "none", lg: "flex" } }}>
        <Box sx={{ display: "block", columnCount: 3, width: "100%" }}>
          {footerNavData.map(eachGroup =>
            <List key={eachGroup.id} sx={{ breakInside: "avoid", gap: 1.5, p: 0, mb: 4, display: "flex", flexDirection: "column" }}>
              <ListItem sx={{ p: 0, mb: 1.5 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }} >{eachGroup.group}</Typography>
              </ListItem>
              {
                eachGroup.navigations.map(eachNavigation =>
                  <ListItem key={eachNavigation.id} sx={{ p: 0 }}>
                    <Link href={eachNavigation.linkUrl}>
                      {eachNavigation.title}
                    </Link>
                  </ListItem>)
              }
            </List>)}
        </Box>
      </Grid>
      {/* End Navigations */}

      {/* App Download */}
      <Grid item xs={12} lg={3} sx={{ display: { xs: "flex", lg: "none" }, }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontWeight: 600 }}>Download the App for Free</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {mobileAppData.map(eachData => <Link href={eachData.linkUrl} key={eachData.id}>
              <Image
                alt={eachData.title}
                height={40}
                src={eachData.imgUrl}
                width={135}
                className="h-10"
              />
            </Link>)}
          </Box>
        </Box>
      </Grid>
      {/* End App Download */}

      {/* Social */}
      <Grid item xs={12} lg={3}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontWeight: 600 }}>Follow us on</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {followUsData.map(eachData => <Link href={eachData.linkUrl} key={eachData.id}>
              <Image
                alt={eachData.title}
                height={24}
                src={eachData.imgUrl}
                width={24}
              />
            </Link>)}
          </Box>
        </Box>
      </Grid>
      {/* End Social */}

      {/* Payment */}
      <Grid item xs={12} lg={9}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontWeight: 600 }}>Our Payment Partners</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {paymentMethodsData.map(eachData =>
              <Image
                key={eachData.id}
                alt={eachData.title}
                height={16}
                src={eachData.imgUrl}
                width={60}
                className="h-4 w-auto"
              />
            )}
          </Box>
        </Box>
      </Grid>
      {/* End Payment */}

      {/* Copyright */}
      <Grid item xs={12} lg={3} sx={{ display: "flex", alignItems: "end" }}>
        <Typography variant="caption" sx={{ justifySelf: "end" }}>© 2024 PharmEasy. All Rights Reserved</Typography>
      </Grid>
      {/* End Copyright */}
    </Grid >
  );
};

export default Footer;
