import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography, Stack, Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import liboex from "../../assests/images/liboex.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {getStartedBtn, homeBtn,libonexCenter,otherBtn,signinBtn,arrowBtn,getStartedBox,linksBox,
  libonexBox,libonexStack,menubarDisplay, menubarBtn,navbarCon,notificationBox} from "./style";

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
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="custom" sx={navbarCon}>
            <Toolbar disableGutters>
              <Box></Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                >
                  <MenuIcon sx={{ width: "50px", height: "50px" }} />
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
                  sx={menubarDisplay}
                >
                  <Stack spacing={1} sx={menubarBtn}>
                    <Link sx={{textDecoration : 'none'}}>Home</Link>
                    <Link sx={{textDecoration : 'none'}}>Exchange</Link>
                   <Link sx={{textDecoration : 'none'}}>Contact us</Link>
                    <Button>Sign in</Button>
                  </Stack>
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: { md: 0, sm: 1, xs: 1 },
                  // display : {xs : 'flex' , md : 'none'}
                }}
              >
                <Box component="img" src={liboex} sx={libonexCenter}></Box>
              </Box>

              <Stack sx={libonexStack}>
                <Box component="img" src={liboex} sx={libonexBox}></Box>
                <Box sx={linksBox}></Box>
                <Link sx={homeBtn}>Home</Link>
                <Link sx={otherBtn}>Exchange</Link>
                <Box
                  sx={notificationBox}
                >
                  <Typography sx={otherBtn}>Notifications</Typography>
                  <Box>
                    <KeyboardArrowDownIcon sx={arrowBtn} />
                  </Box>
                </Box>
                <Link sx={otherBtn}>Apply to list</Link>
                <Link sx={otherBtn}>Contact us</Link>
              </Stack>
              <Button sx={signinBtn}>Sign in</Button>

              <Box>
                <Button sx={getStartedBox}>
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
