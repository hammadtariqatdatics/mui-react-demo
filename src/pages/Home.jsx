import React from "react";
import AppBar from "../components/header/AppBar";
import Hero from "../components/hero/Hero";
import Featured from "../components/featured/Featured";

const Home = () => {
  return (
    <>
      <AppBar />
      <Hero />
      <Featured />
    </>
  );
};

export default Home;
