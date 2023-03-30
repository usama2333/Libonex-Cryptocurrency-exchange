import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import { securedText, reasonsText, iconText } from "./style";
import android from "../../assests/images/android.png";
import web from "../../assests/images/web.png";
import apple from "../../assests/images/apple.png";

const Apps = () => {
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
          Get easy access through apps
          </Typography>
          <Typography sx={reasonsText}>
          Our main priority to provide easy access for our users with enhanced security.
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
            <Box component="img" src={android} 
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
              Android App
              </Typography>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Box component="img" src={web} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
                width : {xlg : 'auto',  md :'80px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'80px', sm : 'auto', xs : '120px'}

                 }}
            ></Box>
            <Box
            
            >
              <Typography sx={iconText}>
              Web Application
              </Typography>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Box component="img" src={apple} 
             sx={{
                mb : {xlg : '70px' , md :'45px' , sm :'30px', xs : '30px'} ,
               width : {xlg : 'auto',  md :'80px', sm : 'auto' , xs : '120px'},
                height : {xlg : 'auto',  md :'80px', sm : 'auto', xs : '120px'}

                 }}
            ></Box>
            <Box
           
            >
              <Typography sx={iconText}>
              IOS App
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Apps;
