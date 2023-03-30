import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import { securedText, reasonsText, iconText } from "./style";
import account from "../../assests/images/account.png";
import bank from "../../assests/images/bank.png";
import buying from "../../assests/images/buying.png";

const Accounts = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          // backgroundColor : '#fff',
          pt: {xs : '80px' , sm :'100px'},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt : {sm : '30px', lg :'0px'}
          }}
        >
          <Typography sx={securedText}>
          How to get started?
          </Typography>
          <Typography sx={reasonsText}>
          Propersix supports a variety and easy system to open your account in few moments.
          </Typography>
        </Box>

        <Stack
        direction={{md : 'row', xs :'column'}}
        justifyContent='space-around'
        alignItems='center'
        sx={{
            mt :{xlg : '140px' , md : '100px' , sm : '80px', xs :'60px'},
            ml : {sm : '150px' ,xs : '0px', sm :'0px'},
            mb : {xlg : '140px' , md : '100px'},
        }}
        >
          <Box textAlign='center'>
            <Box component="img" src={account} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
                width : {xlg : 'auto',  md :'80px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'80px', sm : 'auto', xs : '120px'}

                 }}
             >

             </Box>
            <Box
           
            >
              <Typography sx={iconText}>
              Create an account
              </Typography>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Box component="img" src={bank} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
                width : {xlg : 'auto',  md :'80px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'80px', sm : 'auto', xs : '120px'}

                 }}
            ></Box>
            <Box
            
            >
              <Typography sx={iconText}>
              Link your bank account
              </Typography>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Box component="img" src={buying} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
               width : {xlg : 'auto',  md :'80px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'80px', sm : 'auto', xs : '120px'}

                 }}
            ></Box>
            <Box
           
            >
              <Typography sx={iconText}>
              Start buying & selling
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Accounts;
