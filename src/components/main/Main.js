import { IconButton, Typography } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import React, { Fragment } from "react";
import backgroundMain from "../../assests/images/backgroundMain.png";
import NotificationImg from "../../assests/images/NotificationImg.png";
import eth from "../../assests/images/eth.png";
import btc from "../../assests/images/btc.png";
import dash from "../../assests/images/dash.png";
import ltc from "../../assests/images/ltc.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { logoText, negativeTableData, positiveTableData, tableHeadText, tableNum } from "./style";

const Main = () => {
  const TableHeaderData = [
    "#",
    "Pair",
    "Last Price",
    "24h Change",
    "24h High",
    "24h Low",
    "24h Volume",
  ];

  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          backgroundImage: `url(${backgroundMain})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "730px",
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
                  width: "29px",
                  height: "8px",
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#28a0b0",
                }}
              ></Box>
              <Box
                sx={{
                  width: "29px",
                  height: "8px",
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#e8e8e8",
                }}
              ></Box>
              <Box
                sx={{
                  width: "29px",
                  height: "8px",
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#28a0b0",
                }}
              ></Box>
              <Box
                sx={{
                  width: "29px",
                  height: "8px",
                  margin: "0 7px 0 0",
                  opacity: 0.6,
                  borderRadius: "50px",
                  backgroundColor: "#28a0b0",
                }}
              ></Box>
            </Box>
          </Box>
        </Stack>
        <Box sx={{ mt: "80px", ml: "30px", mr: "30px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {TableHeaderData.map((data) => (
                    <TableCell sx={tableHeadText}>{data}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={tableNum} component="th" scope="row">
                    1
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
                        src={eth}
                        sx={{
                          width: { xlg: "42px", xs: "32px" },
                          height: { xlg: "42px", xs: "32px" },
                          mr: "10px",
                        }}
                      ></Box>
                      <Typography sx={logoText}>ETH/BTC</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    0.02097
                  </TableCell>
                  <TableCell sx={positiveTableData} align="left">
                    +1.051
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    0.02097
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    0.0201077
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    229107.39
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={tableNum} component="th" scope="row">
                    2
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
                        src={dash}
                        sx={{
                          width: { xlg: "42px", xs: "32px" },
                          height: { xlg: "42px", xs: "32px" },
                          mr: "10px",
                        }}
                      ></Box>
                      <Typography sx={logoText}>DASH/BTC</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    0.010022
                  </TableCell>
                  <TableCell sx={negativeTableData} align="left">
                    -0.421
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    0.009929
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    0.010199
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    27947.873
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={tableNum} component="th" scope="row">
                    3
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
                        src={ltc}
                        sx={{
                          width: { xlg: "42px", xs: "32px" },
                          height: { xlg: "42px", xs: "32px" },
                          mr: "10px",
                        }}
                      ></Box>
                      <Typography sx={logoText}>LTC/BTC</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                  0.005982
                  </TableCell>
                  <TableCell sx={positiveTableData} align="left">
                    1.115
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                  0.005852
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                  0.006011
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                  100472.42
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={tableNum} component="th" scope="row">
                    4
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
                        src={btc}
                        sx={{
                          width: { xlg: "42px", xs: "32px" },
                          height: { xlg: "42px", xs: "32px" },
                          mr: "10px",
                        }}
                      ></Box>
                      <Typography sx={logoText}>PRO6/BTC</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                    0.02097
                  </TableCell>
                  <TableCell sx={positiveTableData} align="left">
                    1.051
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                  0.09929
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                  0.010199
                  </TableCell>
                  <TableCell sx={tableNum} align="left">
                  229107.39
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Main;
