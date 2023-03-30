import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import { securedText, reasonsText, iconText } from "./style";
import Icon1 from "../../assests/images/Icon1.png";
import Icon2 from "../../assests/images/Icon2.png";
import Icon3 from "../../assests/images/Icon3.png";

const Secured = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          // backgroundColor : '#fff',
          pt: "150px",
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
            Most trusted and secured platform
          </Typography>
          <Typography sx={reasonsText}>
            Here are a few reasons why you should choose Propersix
          </Typography>
        </Box>

        <Stack
        direction={{md : 'row', xs :'column'}}
        justifyContent='space-around'
        alignItems='center'
        sx={{
            mt :{xlg : '140px' , md : '100px' , sm : '80px', xs :'60px'},
            ml : {sm : '150px' , xs : '80px'},
            mb : {xlg : '140px' , md : '100px'},
        }}
        >
          <Box textAlign='center'>
            <Box component="img" src={Icon1} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
                ml : '-100px',
                width : {xlg : 'auto',  md :'80px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'80px', sm : 'auto', xs : '120px'}

                 }}
             >

             </Box>
            <Box
             sx={{
                width : '70%'
             }}
            >
              <Typography sx={iconText}>
                Customize your own trading panel
              </Typography>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Box component="img" src={Icon2} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
                ml : {sm : '-100px' , lg : '-140px',xs :'-70px'},
                width : {xlg : 'auto',  md :'90px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'90px', sm : 'auto', xs : '120px'}

                 }}
            ></Box>
            <Box
             sx={{
                width : '70%'
             }}
            >
              <Typography sx={iconText}>
                Fully connected and secure with Multi-2FA
              </Typography>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Box component="img" src={Icon3} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
                ml : {sm : '-120px' , lg : '-160px' , xs :'-80px'},
               width : {xlg : 'auto',  md :'80px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'80px', sm : 'auto', xs : '120px'}

                 }}
            ></Box>
            <Box
             sx={{
                width : '70%'
             }}
            >
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
