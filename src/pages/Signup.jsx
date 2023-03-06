import React from "react";
import { Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

const Signup = () => {
  return (
    <Container>
      <Box sx={{ padding: "120px 0px 240px 0px" }}>
        <Typography variant="h4" component="h4">
          Sign up
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
