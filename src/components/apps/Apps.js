import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import { securedText, reasonsText, iconText } from "./style";
import android from "../../assests/images/android.png";
import web from "../../assests/images/web.png";
import apple from "../../assests/images/apple.png";
import { accountSx, stackSx, textBox } from "../accounts/style";

const Apps = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          pt: { xs: "80px", sm: "100px" },
        }}
      >
        <Box sx={textBox}>
          <Typography sx={securedText}>Get easy access through apps</Typography>
          <Typography sx={reasonsText}>
            Our main priority to provide easy access for our users with enhanced
            security.
          </Typography>
        </Box>

        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-around"
          alignItems="center"
          sx={stackSx}
        >
          <Box textAlign="center">
            <Box component="img" src={android} sx={accountSx}></Box>
            <Box>
              <Typography sx={iconText}>Android App</Typography>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box component="img" src={web} sx={accountSx}></Box>
            <Box>
              <Typography sx={iconText}>Web Application</Typography>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box component="img" src={apple} sx={accountSx}></Box>
            <Box>
              <Typography sx={iconText}>IOS App</Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Apps;
