import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CurvyLines from "../../assets/img/CurvyLines.png";
import Theme from "../../theme/Theme";
import { stepsData } from "../../utils";

const Steps = () => {
  const [steps, setSteps] = useState(stepsData);
  return (
    <Box sx={{ background: "#fff5f8" }}>
      <Box
        sx={{
          background: `url(${CurvyLines})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "center",
          padding: {
            xl: "80px 0px 120px 0px",
            lg: "80px 0px 120px 0px",
            md: "80px 0px 120px 0px",
            sm: "100px 0px",
            xs: "100px 0px",
          },
        }}
      >
        <Container>
          <Typography variant="h4" component="h2" align="center">
            HOW IT WORKS
          </Typography>
          <Box align="center">
            <Box
              sx={{
                width: "25px",
                height: "4px",
                display: "block",
                margin: {
                  xl: "8px 0px 112px 0px",
                  lg: "8px 0px 112px 0px",
                  md: "8px 0px 112px 0px",
                  sm: "8px 0px 50px 0px",
                  xs: "8px 0px 50px 0px",
                },
                background: "#ff3366",
              }}
            />
          </Box>
          <Grid container rowGap={5}>
            {steps.map((items) => {
              const { id, img, title, desc } = items;
              return (
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={id}>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontFamily: Theme.typography.fontFamily,
                      fontWeight: "700",
                      color: "#ff3366",
                    }}
                    align="center"
                  >
                    {title}
                  </Typography>
                  <Box align="center" sx={{ margin: "40px 0px" }}>
                    <Box component="img" src={img} height="55px" />
                  </Box>
                  <Typography
                    sx={{
                      padding: "0px 10px",
                      fontWeight: "300",
                      lineHeight: "1.334",
                    }}
                    align="center"
                  >
                    {desc}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Steps;
