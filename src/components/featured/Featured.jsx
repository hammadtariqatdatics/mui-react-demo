import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CurvyLines from "../../assets/img/CurvyLines.png";
import Icon1 from "../../assets/img/icon1.svg";
import Icon2 from "../../assets/img/icon2.svg";
import Icon3 from "../../assets/img/icon3.svg";
import Theme from "../../theme/Theme";

const Featured = () => {
  return (
    <Box sx={{ background: "#fff5f8" }}>
      <Box
        sx={{
          background: `url(${CurvyLines})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "center",
          padding: "200px 0px 200px 0px",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box align="center">
                <Box component="img" src={Icon1} height="55px" />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  margin: "40px 0px",
                  fontFamily: Theme.typography.fontFamily,
                }}
                align="center"
              >
                The best luxury hotels
              </Typography>
              <Typography
                sx={{
                  padding: "0px 10px",
                  fontWeight: "300",
                  lineHeight: "1.334",
                }}
              >
                From the latest trendy boutique hotel to the iconic palace with
                XXL pool, go for a mini-vacation just a few subway stops away
                from your home.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box align="center">
                <Box component="img" src={Icon2} height="55px" />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  margin: "40px 0px",
                  fontFamily: Theme.typography.fontFamily,
                }}
                align="center"
              >
                New experiences
              </Typography>
              <Typography
                sx={{
                  padding: "0px 10px",
                  fontWeight: "300",
                  lineHeight: "1.334",
                }}
              >
                Privatize a pool, take a Japanese bath or wake up in 900m2 of
                garden… your Sundays will not be alike.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box align="center">
                <Box component="img" src={Icon3} height="55px" />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  margin: "40px 0px",
                  fontFamily: Theme.typography.fontFamily,
                }}
                align="center"
              >
                Exclusive rates
              </Typography>
              <Typography
                sx={{
                  padding: "0px 10px",
                  fontWeight: "300",
                  lineHeight: "1.334",
                }}
              >
                By registering, you will access specially negotiated rates that
                you will not find anywhere else.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Featured;
