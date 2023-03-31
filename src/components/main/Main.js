import { IconButton, Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import React, { Fragment , useEffect, useState} from "react";
import backgroundMain from "../../assests/images/backgroundMain.png";
import NotificationImg from "../../assests/images/NotificationImg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import fetchcoinList from "../../api/Api";
import { logoText, negativeTableData, positiveTableData, tableHeadText, tableNum } from "./style";
import { useDispatch, useSelector } from 'react-redux';
import { tableActions } from "../../store/table";
import Alert from '@mui/material/Alert';
import notFound from '../../assests/images/notFound.jpg';

const TableHeaderData = [
  "Rank",
  "Name",
  "Price",
  "Total Supply",
  "Remaning Supply",
  "Start Date",
  "Final Date",
];

const notify = (error) => toast(error);

const Main = () => {
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.table.data);
  const error = useSelector(state => state.table.error);
  const show = useSelector(state => state.table.show);
  const loading = useSelector(state => state.table.loading);
 
  useEffect(() => {
    fetchcoinList(dispatch , tableActions, notify);
  }, []);

  console.log('error message through redux',error);
  console.log('This is component data through redux' , data);
  console.log('Show data through redux' , show);
  console.log('Loading data through redux' , loading);

  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          backgroundImage: `url(${backgroundMain})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: {xlg : '695px' , lg : '565px' , md : '565px' , sm : '810px', xs : '833px'},
          width: "auto",
        }}
      >
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ pt: { xs: "120px", sm: "140px", lg: "140px", xlg: "200px" } }}
        >
          <Box
            sx={{
              // width : '60%',
              ml: { xlg: "120px", md: "50px" },
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                fontFamily: "Helvetica",
                fontSize: { xlg: "72px", lg: "55px", sm: "60px", xs: "50px" },
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: 1.31,
                textAlign: "left",
                pb: { xs: "30px", sm: "0px" },
                ml: { xs: "20px", sm: "0px" },
              }}
            >
              The World's Leading Cryptocurrency Exchange
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={NotificationImg}
              sx={{
                flexGrow: 1,
                // width : '455px',
                // height : '224px',
                width: { xlg: "auto", md: "400px", sm: "auto", xs: "350px" },
                height: { xlg: "auto", md: "224px" },
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: { xs: "45px", sm: "50px" },
                left: { xlg: "65px", md: "50px", sm: "57px", xs: "45px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica",
                  fontSize: { xlg: "26px", md: "22px", sm: "24px", xs: "22px" },
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: { xlg: 1.7, lg: 1.2, sm: 1.5 },
                  letterSpacing: "0.78px",
                  textAlign: "left",
                  color: "#000",
                  width: "80%",
                  mb: { xlg: "70px", lg: "50px", md: "40px", xs: "20px" },
                }}
              >
                Buy, sell and trade digital currency.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Helvetica",
                    fontSize: "19pxpx",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "1.47",
                    letterSpacing: "0.57px",
                    textAlign: "left",
                    color: "#28a0b0",
                  }}
                >
                  Learn more
                </Typography>
                <Typography
                  sx={{
                    color: "#28a0b0",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{ width: "27px", height: "17.9px", mt: "7px" }}
                  />
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                mt: "-10px",
              }}
            >
              <Box
                sx={{
                  width: {xs : '25px' , xlg : '29px'},
                  height: {xs :'7px' , xlg :'8px'},
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#28a0b0",
                }}
              ></Box>
              <Box
                sx={{
                  width: {xs : '25px' , xlg : '29px'},
                  height: {xs :'7px' , xlg :'8px'},
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#e8e8e8",
                }}
              ></Box>
              <Box
                sx={{
                  width: {xs : '25px' , xlg : '29px'},
                  height: {xs :'7px' , xlg :'8px'},
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#28a0b0",
                }}
              ></Box>
              <Box
                sx={{
                  width: {xs : '25px' , xlg : '29px'},
                  height: {xs :'7px' , xlg :'8px'},
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#28a0b0",
                }}
              ></Box>
            </Box>
          </Box>
        </Stack>
        <Box sx={{ mt: "80px", ml: "30px", mr: "30px",position : 'relative'  }}>
          <TableContainer component={Paper}
          sx={{
            boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
            border:'1px solid rgba(0, 0, 0, 0.2)',
            position : 'absolute',
            top : '0px'
          }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {TableHeaderData.map((data) => (
                    <TableCell sx={tableHeadText}>{data}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>


              {/* {data && !show ? (
                  <Typography>Data is found</Typography>
              ) : (
                  <Typography>
                    Data is not found
                  </Typography>
              )} */}
              {!error && !show &&
              <>

               {data.map((data) => (

              
                <TableRow>
                  <TableCell sx={tableNum} component="th" scope="row">
                    {data.rank}
                  </TableCell>
                  <TableCell align="left" sx={{ pr: "100px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={data.imageURL}
                        sx={{
                          width: { xlg: "42px", xs: "32px" },
                          height: { xlg: "42px", xs: "32px" },
                          mr: "10px",
                        }}
                      ></Box>
                      <Typography sx={logoText}>{data.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={positiveTableData} align="left">
                    {data.price}
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    {data.totalSupply}
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    {data.remainingSupply}
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    {data.startDate}
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    {data.FinalDate}
                  </TableCell>
                </TableRow>
                ))}

                </>
              }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {error && show && ( 
          <Box
           sx={{
            display : 'flex' , justifyContent : 'center' , alignItems : 'center',
            flexDirection : {xs :'column' , md :'row'},
            pt : {xs : '60px' , sm  : '40px', md : '0px' , lg : '70px'}
           }}
          >
        <Box
         component='img'
         src = {notFound}
         sx={{width : '250px' , height : '250px' , display : 'inline-block', borderRadius : '100%'}}
        >
        </Box>
        
        <Alert sx={{display : {xs : 'none' , md : 'flex'}}}  severity="info">
        {error}
       </Alert>
        </Box> )}

        
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Main;
