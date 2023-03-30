import React, {Fragment} from 'react';
import { Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import { footerText } from './style';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Fragment>
     <Container
     maxWidth = 'custom'
     >
      <Box
         sx={{
            display :'flex',
            flexDirection : {xs : 'column-reverse' , sm : 'row'},
            justifyContent : 'space-between',
            alignItems : 'center'
         }}
        >
            <Box>
                <Box
                sx={{
                    ml : {xs : '0px' , sm : '70px'},
                    mb : {xs : '20px' , sm : '0px'}

                }}
                >
                    <InstagramIcon sx={{ mr : '30px', width : '20px ' , height : '20px'}}/>
                    <TwitterIcon sx={{ mr : '30px', width : '20px ' , height : '20px'}}/>
                    <FacebookIcon sx={{ width : '20px ' , height : '20px'}}/>
                    
                </Box>
            </Box>

            <Typography sx={footerText}>
            @propersix.com (2020). All rights reserved.
            </Typography>
        </Box>

     </Container>
      
    </Fragment>
  )
}

export default Footer
