import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import boxesbackground from "../../assests/images/boxesbackground.png";
import boxes from "../../assests/images/boxes.png";
import {aboutContainer,aboutPara,aboutText,boxImgSx,textBox} from "./style";

const About = () => {
  return (
    <Fragment>
      <Container maxWidth="custom" sx={aboutContainer}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={{ xs: "center", md: "normal" }}
        >
          <Box sx={textBox}>
            <Typography sx={aboutText}>About us</Typography>

            <Typography sx={aboutPara}>
              The ProperSix exchange is a crypto trading platform where users
              can trade at a much faster transaction speed. ProperSix exchange
              is secured by advanced architectural solutions such as inclusion
              of hot and cold wallet with the encryption and limited access of
              the database.
            </Typography>

            <Typography sx={aboutPara}>
              Our IP verification and 2fa verification for withdrawal will
              ensure maximum security at the exchange.
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box component="img" src={boxes} sx={boxImgSx}></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default About;
