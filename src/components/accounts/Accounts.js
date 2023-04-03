import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import {securedText,reasonsText,iconText,textBox,stackSx,accountSx, accountsMainCon,} from "./style";
import account from "../../assests/images/account.png";
import bank from "../../assests/images/bank.png";
import buying from "../../assests/images/buying.png";

const Accounts = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={accountsMainCon}
      >
        <Box sx={textBox}>
          <Typography sx={securedText}>How to get started?</Typography>
          <Typography sx={reasonsText}>
            Propersix supports a variety and easy system to open your account in
            few moments.
          </Typography>
        </Box>

        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-around"
          alignItems="center"
          sx={stackSx}
        >
          <Box textAlign="center">
            <Box component="img" src={account} sx={accountSx}></Box>
            <Box>
              <Typography sx={iconText}>Create an account</Typography>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box component="img" src={bank} sx={accountSx}></Box>
            <Box>
              <Typography sx={iconText}>Link your bank account</Typography>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box component="img" src={buying} sx={accountSx}></Box>
            <Box>
              <Typography sx={iconText}>Start buying & selling</Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Accounts;
