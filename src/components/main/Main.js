import { IconButton, Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
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
import { absoluteBox,dashBox,dashFlexBox,dashWhiteBox,digitalCurrency,errorBox,flexBox, imgFlex,
  leadingText,learnMore,logoText,mainCon,negativeTableData,notFoundImg,positiveTableData,
  tableCellFlex,tableCellImg,tableCon,tableHeadText,tableNum,textFlex,} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import Alert from "@mui/material/Alert";
import notFound from "../../assests/images/notFound.jpg";

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
  const data = useSelector((state) => state.table.data);
  const error = useSelector((state) => state.table.error);
  const show = useSelector((state) => state.table.show);
  const loading = useSelector((state) => state.table.loading);

  useEffect(() => {
    fetchcoinList(dispatch, tableActions, notify);
  }, []);

  return (
    <Fragment>
      <Container maxWidth="custom" sx={mainCon}>
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ pt: { xs: "124px", sm: "145px", lg: "141px", xlg: "200px" } }}
        >
          <Box sx={textFlex}>
            <Typography sx={leadingText}>
              The World's Leading Cryptocurrency Exchange
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box component="img" src={NotificationImg} sx={imgFlex}></Box>
            <Box sx={absoluteBox}>
              <Typography sx={digitalCurrency}>
                Buy, sell and trade digital currency.
              </Typography>
              <Box sx={flexBox}>
                <Typography sx={learnMore}>Learn more</Typography>
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
            <Box sx={dashFlexBox}>
              <Box sx={dashBox}></Box>
              <Box sx={dashWhiteBox}></Box>
              <Box sx={dashBox}></Box>
              <Box sx={dashBox}></Box>
            </Box>
          </Box>
        </Stack>
        <Box sx={{ mt: "80px", ml: "30px", mr: "30px", position: "relative" }}>
          <TableContainer component={Paper} sx={tableCon}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {TableHeaderData.map((data) => (
                    <TableCell sx={tableHeadText}>{data}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!error && !show && data.length !== 0 && (
                  <>
                    {data.map((data) => (
                      <TableRow>
                        <TableCell sx={tableNum} component="th" scope="row">
                          {data.rank}
                        </TableCell>
                        <TableCell align="left" sx={{ pr: "100px" }}>
                          <Box sx={tableCellFlex}>
                            <Box
                              component="img"
                              src={data.imageURL}
                              sx={tableCellImg}
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
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {error && show && (
          <Box sx={errorBox}>
            <Box component="img" src={notFound} sx={notFoundImg}></Box>

            <Alert
              sx={{ display: { xs: "none", md: "flex" } }}
              severity="error"
            >
              {error}
            </Alert>
          </Box>
        )}
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Main;
