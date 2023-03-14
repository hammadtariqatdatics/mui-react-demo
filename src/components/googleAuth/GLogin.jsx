import React from "react";
import { GoogleLogin } from "react-google-login";
import { Box, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GLogin = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log("Login Successfully", response);
    const loggedInUser = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      familyName: response.profileObj.familyName,
      givenName: response.profileObj.givenName,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      accessToken: response.accessToken,
    };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    navigate("/home");
  };
  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <Stack direction="row" justifyContent="center">
          <GoogleLogin
            clientId="75907282542-ogbs30sm4jr7hl272jf1aq8h13ia2qko.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default GLogin;
