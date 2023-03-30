import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import liboex from "../../assests/images/liboex.png";
import { addressText, termsText } from "./style";

const Support = () => {
  return (
    <Fragment>
      

      <Container maxWidth="custom">
      <Box
        sx={{
          width: "auto",
          height: "0px",
          opacity: 0.5,
          border: "1px solid #000",
          mb: { xlg: "70px",  xs :'40px'},
        }}
      ></Box>
        <Box>
          <Stack
            direction={{md : 'row' , sm :'column'}}
            // justifyContent="space-between"
            sx={{
              ml: { lg: "70px", md: "50px" },
            //   mr: { lg: "100px", md: "40px" },
            }}
          >
            <Box
              sx={{
                mb: "30px",
                textAlign : {xs : 'center' , md : 'left'}
              }}
            >
              <Box
                component="img"
                src={liboex}
                sx={{
                  mb: "10px",
                  width: { xs: "130px", sm: "auto" ,sm : 'auto'},
                  height: { xlg: "auto", lg: "35px", md: "35px" , sm : 'auto' },
                }}
              ></Box>
              <Typography sx={addressText}>
                LiboEX Ltd, Standard House, Level 3 Birkirkara Hill, St. Julians
                STJ 1149 Malta.
              </Typography>

              <Typography sx={addressText}>
                Licensed in Estonia for Exchange, KYC / AML FVR000989 and
                FRK000879
              </Typography>
            </Box>
           <Box
           sx={{
            display : 'flex',
            flexDirection : {sm : 'row' , xs : 'column'},
            justifyContent : 'space-evenly',
            alignItems : {xs : 'center' , sm : 'flex-start'},
            
            width : {lg : '1200px' , md : '1200px'},
            ml : {xlg : '100px' , lg :'0px', md : '0px'},

            
           }}
           >
            <Box
            sx={{
               mb : '20px',
               ml : {xs : '-70px' , sm :'0px'}
            }}
            >
              <Typography sx={termsText}>Trading</Typography>

              <Typography sx={termsText}>FAQ's</Typography>

              <Typography sx={termsText}>Terms</Typography>

              <Typography sx={termsText}>Privacy</Typography>
            </Box>

            <Box 
             sx={{
               mb : '20px'
            }}>
              <Typography sx={termsText}>Notifications</Typography>

              <Typography sx={termsText}>Apply for Listing</Typography>

              <Typography sx={termsText}>Fees</Typography>
            </Box>

            <Box 
             sx={{
               mb : '20px'
            }}>
              <Typography sx={termsText}>Help Support</Typography>

              <Typography sx={termsText}>Downloads</Typography>

              <Typography sx={termsText}>Contact Us</Typography>
              <Typography sx={termsText}>Submit Request</Typography>
            </Box>

            </Box>

          </Stack>

        </Box>
        <Box
        sx={{
          width: "auto",
          height: "0px",
          opacity: 0.5,
          border: "1px solid #000",
          mt: { xlg: "30px", md: "0px", xs : '25px' },
        }}
      ></Box>
      </Container>

      

       
      
    </Fragment>
  );
};

export default Support;
