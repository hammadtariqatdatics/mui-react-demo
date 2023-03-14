import React from "react";
import { GoogleLogout } from "react-google-login";
import { Box, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GLogout = () => {
  const navigate = useNavigate();
  const onLogoutSuccess = (response) => {
    console.log("Logout successfully", response);
    localStorage.clear();
    navigate("/");
  };
  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <Stack direction="row" justifyContent="center">
          <GoogleLogout
            clientId="75907282542-ogbs30sm4jr7hl272jf1aq8h13ia2qko.apps.googleusercontent.com"
            buttonText="Logout with Google"
            onLogoutSuccess={onLogoutSuccess}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default GLogout;
