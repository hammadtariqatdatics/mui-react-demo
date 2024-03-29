import React from "react";
import HeroBanner from "../components/hero/HeroBanner";
import GLogin from "../components/googleAuth/GLogin";

const Login = () => {
  return (
    <>
      <HeroBanner
        headingText="Login"
        paraText="Here are the Login, you can login here to visit our website"
      />
      <GLogin />
    </>
  );
};

export default Login;
