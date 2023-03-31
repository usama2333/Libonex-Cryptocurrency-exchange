import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import { footerFlexBox, footerFlexBoxInner, footerText, iconSx } from "./style";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Fragment>
      <Container maxWidth="custom">
        <Box sx={footerFlexBox}>
          <Box>
            <Box sx={footerFlexBoxInner}>
              <InstagramIcon sx={iconSx} />
              <TwitterIcon sx={iconSx} />
              <FacebookIcon sx={{ width: "20px ", height: "20px" }} />
            </Box>
          </Box>

          <Typography sx={footerText}>
            @propersix.com (2020). All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Footer;
