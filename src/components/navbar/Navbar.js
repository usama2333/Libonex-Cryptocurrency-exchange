import React, { Fragment, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {getStartedBtn, homeBtn,libonexCenter,otherBtn,signinBtn,arrowBtn,getStartedBox,linksBox,
  libonexBox,libonexStack,menubarDisplay, menubarBtn,navbarCon,notificationBox, notificationList, navAppbar, iconButtonBox, menuIconBox, menuBarLinks, navButtonsRow} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
const notify = (error) => toast('Sign in Successfully');

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const log = useSelector((state) => state.table.log);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
const signInHandler = () => {
  dispatch(tableActions.setLog());
  notify();
  setTimeout(() => {
    dispatch(tableActions.setLog());
  }, 10000); 
}
  return (
  
  
    <Fragment>
      <Container maxWidth="custom" sx={{ position: "relative" }}>
        <AppBar
          position="absolute"
          sx={navAppbar}
        >
          <Container maxWidth="custom" sx={navbarCon}>
            <Toolbar disableGutters>
              <Box></Box>

              <Box sx={iconButtonBox}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                >
                  <MenuIcon sx={menuIconBox} />
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
                    <Link sx={menuBarLinks}>Home</Link>
                    <Link sx={menuBarLinks}>Exchange</Link>
                   <Link sx={menuBarLinks}>Contact us</Link>
                    <Button>Sign in</Button>
                  </Stack>
                </Menu>
              </Box>

              <Box sx={navButtonsRow}>
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
                    <KeyboardArrowDownIcon onClick={handleClick} sx={arrowBtn} />
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <Typography sx={notificationList} onClick={handleClose}>Libonex</Typography>
                    <Typography sx={notificationList} onClick={handleClose}>50% off</Typography>
                    <Typography sx={notificationList} onClick={handleClose}>Currency</Typography>
                    </Menu>
                  </Box>
                </Box>
                <Link sx={otherBtn}>Apply to list</Link>
                <Link sx={otherBtn}>Contact us</Link>
              </Stack>
              {!log && <Button onClick={signInHandler} sx={signinBtn}>Sign in</Button>}
              {log && <Button disabled onClick={signInHandler} sx={signinBtn}>Sign in</Button>}
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
