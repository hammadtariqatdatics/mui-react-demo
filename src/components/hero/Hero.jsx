import React from "react";
import MuiButton from "../MuiButton";
import HeroLayout from "./HeroLayout";
import { Typography } from "@mui/material";
import heroBg from "../../assets/img/hero-bg.jpg";
import { Link } from "react-router-dom";
import Theme from "../../theme/Theme";

const Hero = () => {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${heroBg})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={heroBg} alt="increase priority" />
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        sx={{
          fontFamily: Theme.typography.fontFamily,
          fontWeight: Theme.typography.fontWeightMedium,
        }}
      >
        Upgrade your Sundays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <MuiButton
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>
          Register
        </Link>
      </MuiButton>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </HeroLayout>
  );
};

export default Hero;
