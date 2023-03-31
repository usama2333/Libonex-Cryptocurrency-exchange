import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import liboex from "../../assests/images/liboex.png";
import { addressText,bottomLine,supportBox,supportFlex,supportLibonex,SupportStack,
  termsText,upperLine,} from "./style";

const Support = () => {
  return (
    <Fragment>
      <Container maxWidth="custom">
        <Box sx={upperLine}></Box>
        <Box>
          <Stack direction={{ md: "row", sm: "column" }} sx={SupportStack}>
            <Box sx={supportBox}>
              <Box component="img" src={liboex} sx={supportLibonex}></Box>
              <Typography sx={addressText}>
                LiboEX Ltd, Standard House, Level 3 Birkirkara Hill, St. Julians
                STJ 1149 Malta.
              </Typography>

              <Typography sx={addressText}>
                Licensed in Estonia for Exchange, KYC / AML FVR000989 and
                FRK000879
              </Typography>
            </Box>
            <Box sx={supportFlex}>
              <Box
                sx={{
                  mb: "20px",
                  ml: { xs: "-70px", sm: "0px" },
                }}
              >
                <Typography sx={termsText}>Trading</Typography>

                <Typography sx={termsText}>FAQ's</Typography>

                <Typography sx={termsText}>Terms</Typography>

                <Typography sx={termsText}>Privacy</Typography>
              </Box>

              <Box
               sx={{mb: "20px",}}
              >
                <Typography sx={termsText}>Notifications</Typography>

                <Typography sx={termsText}>Apply for Listing</Typography>

                <Typography sx={termsText}>Fees</Typography>
              </Box>

              <Box
                sx={{mb: "20px",}}
              >
                <Typography sx={termsText}>Help Support</Typography>

                <Typography sx={termsText}>Downloads</Typography>

                <Typography sx={termsText}>Contact Us</Typography>
                <Typography sx={termsText}>Submit Request</Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box sx={bottomLine}></Box>
      </Container>
    </Fragment>
  );
};

export default Support;
