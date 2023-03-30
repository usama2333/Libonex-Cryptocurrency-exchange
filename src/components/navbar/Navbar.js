import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography, Stack } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import liboex from "../../assests/images/liboex.png";
import {getStartedBtn,homeBtn,libonexCenter,otherBtn,signinBtn } from "./style";


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ position: "relative" }}>
        <AppBar
         position="absolute"
          sx={{ backgroundColor: "transparent", boxShadow: "none",color : 'red' }}
        >
          <Container maxWidth="custom"
           sx={{ 
             boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
             backgroundColor: '#fff',
             pt :{xlg : '15px' , lg : '5px'},
             pb : {xlg : '15px' , lg : '5px'},
             }}
           >             
            <Toolbar disableGutters>
              <Box >
                
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                >
                  <MenuIcon sx={{width : '50px' , height : '50px'}} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {
                      xs: "inline-block",
                      md: "none",
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <Stack
                    spacing={1}

                    sx={{
                      flexDirection: "column",
                      alignItems: "center",
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                <Typography sx={homeBtn}>Home</Typography>
                <Typography sx={otherBtn}>Exchange</Typography>
                <Typography sx={otherBtn}>Notifications</Typography>
                <Typography sx={otherBtn}>Apply to list</Typography>
                <Typography sx={otherBtn}>Contact us</Typography>
                <Button sx={signinBtn}>Sign in</Button>
                  </Stack>
                </Menu>
              </Box>
            
              <Box sx={{ 
                flexGrow: { md: 0, sm: 1, xs: 1 } ,
                // display : {xs : 'flex' , md : 'none'}
                }}>
                <Box
                  component="img"
                  src={liboex}
                  sx={libonexCenter}
                ></Box>
              </Box>

              <Stack
                sx={{
                  flexGrow: 1,
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Box
                  component="img"
                  src={liboex}
                  sx={{
                    // display: { xs: "none", md: "flex" },
                    mt : '20px',
                    height : {xlg : 'auto' , lg : '35px' , md : '35px'}
                  }}
                ></Box>
                <Box
                 sx={{
                    width : '0px',
                    height : {xlg : '52px' , lg : '40px', xs :'35px'},
                    opacity: '0.5',
                    border: 'solid 1px #000'
                 }}
                >

                </Box>
                <Typography sx={homeBtn}>Home</Typography>
                <Typography sx={otherBtn}>Exchange</Typography>
                <Typography sx={otherBtn}>Notifications</Typography>
                <Typography sx={otherBtn}>Apply to list</Typography>
                <Typography sx={otherBtn}>Contact us</Typography>
              
                
              </Stack>
              <Button sx={signinBtn}>Sign in</Button>

              <Box>
                <Button
                  sx={{
                    mr: { xlg: "70px",lg : '20px' ,md: "0px" },
                    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
                    borderRadius: '5px',
                    backgroundColor : '#28a0b0',
                    boxSizing : 'border-box'
                  }}
                >
                  <Typography sx={getStartedBtn}>get started</Typography>
                </Button>
              </Box>
            </Toolbar>
         
          </Container>
        </AppBar>
      </Container>
    </Fragment>
  );
};

export default Navbar;
