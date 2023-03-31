import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import viewsbackground from "../../assests/images/viewsbackground.png";
import { viewCon, viewsLowerText, viewStackSx, viewsUpperText } from "./style";

const Views = () => {
  return (
    <Fragment>
      <Container maxWidth="custom" sx={viewCon}>
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-around"
            alignItems="center"
            sx={viewStackSx}
          >
            <Box>
              <Typography sx={viewsUpperText}>$130M+</Typography>

              <Typography sx={viewsLowerText}>
                Cryptocurrency exchanged
              </Typography>
            </Box>

            <Box>
              <Typography sx={viewsUpperText}>38</Typography>

              <Typography sx={viewsLowerText}>Countries supported</Typography>
            </Box>

            <Box>
              <Typography sx={viewsUpperText}>2M+</Typography>

              <Typography sx={viewsLowerText}>Customers served</Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Views;
