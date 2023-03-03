import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CurvyLines from "../../assets/img/CurvyLines.png";

const Featured = () => {
  return (
    <Box sx={{ margin: "120px 0px 240px 0px" }}>
      <Container>
        <Box
          sx={{
            background: `url(${CurvyLines})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid container>
            <Grid item spacing={2}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ margin: "40px 0px" }}
              >
                The best luxury hotels
              </Typography>
              <Typography>
                From the latest trendy boutique hotel to the iconic palace with
                XXL pool, go for a mini-vacation just a few subway stops away
                from your home.
              </Typography>
            </Grid>
            <Grid item spacing={2}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ margin: "40px 0px" }}
              >
                New experiences
              </Typography>
              <Typography>
                Privatize a pool, take a Japanese bath or wake up in 900m2 of
                garden… your Sundays will not be alike.
              </Typography>
            </Grid>
            <Grid item spacing={2}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ margin: "40px 0px" }}
              >
                Exclusive rates
              </Typography>
              <Typography>
                By registering, you will access specially negotiated rates that
                you will not find anywhere else.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
