import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import {securedText,reasonsText,iconText,securedTextBox,securedStack,securedIcon1,
  securedIcon2,securedIcon3,} from "./style";
import Icon1 from "../../assests/images/Icon1.png";
import Icon2 from "../../assests/images/Icon2.png";
import Icon3 from "../../assests/images/Icon3.png";

const Secured = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{pt: "150px", }}>
        <Box sx={securedTextBox}>
          <Typography sx={securedText}>
            Most trusted and secured platform
          </Typography>
          <Typography sx={reasonsText}>
            Here are a few reasons why you should choose Propersix
          </Typography>
        </Box>

        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-around"
          alignItems="center"
          sx={securedStack}
        >
          <Box textAlign="center">
            <Box component="img" src={Icon1} sx={securedIcon1}></Box>
            <Box sx={{width: "70%",}}>
              <Typography sx={iconText}>
                Customize your own trading panel
              </Typography>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box component="img" src={Icon2} sx={securedIcon2}></Box>
            <Box sx={{width: "70%",}}>
              <Typography sx={iconText}>
                Fully connected and secure with Multi-2FA
              </Typography>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box component="img" src={Icon3} sx={securedIcon3}></Box>
            <Box sx={{width: "70%",}}>
              <Typography sx={iconText}>
                Fully Secured With 6 Levels Account Security
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Secured;
