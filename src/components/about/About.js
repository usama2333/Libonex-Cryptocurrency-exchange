import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import boxesbackground from "../../assests/images/boxesbackground.png";
import boxes from "../../assests/images/boxes.png";
import { aboutPara, aboutText } from "./style";

const About = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          backgroundImage: `url(${boxesbackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: {xlg : '525px',lg : '380px', md : '380px', sm : '1000px' },
          width: {xlg : 'auto'}
        }}
      >
        <Stack
         direction={{xs : 'column' , md : 'row'}}
         justifyContent={{xs :'center' , md : 'space-between'}}
         alignItems ={{xs : 'center' , md:'normal'}}
         
        >
          <Box
           sx={{
            width : {xs : '80%' , md :'38%'},
            ml : {xlg : '140px' , lg : '100px', md :'50px', sm :'20px'}
           }}
          >
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
             position : 'relative'
           }}
          >
            <Box
             component='img'
             src={boxes}
             sx={{
                position : {md : 'absolute' , sm : 'none'},
                left : {xlg : '-800px' , lg : '-610px', md : '-530px'},
                top : {xlg : '-108px', lg : '-81px',md : '-81px'},
                height : {xlg  : 'auto', lg : '511px',md : '511px',sm : '490px',xs :'250px'},
                width : {xlg : 'auto', lg : '511px', md : '511px',sm :'490px',xs : '250px'},
            //    ml :{sm : '60px' , md : '0px'},
               mt :{sm : '80px' , md : '0px'},
             }}
            >

            </Box>

          </Box>


        </Stack>
      </Container>
    </Fragment>
  );
};

export default About;
