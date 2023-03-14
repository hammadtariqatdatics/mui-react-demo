import React from "react";
import HeroBanner from "../components/hero/HeroBanner";
import UserDetails from "../components/userdetails/UserDetails";

const Users = () => {
  return (
    <>
      <HeroBanner
        headingText="Users"
        paraText="Here are the best Haliton customers details for the last five years"
      />
      <UserDetails />
    </>
  );
};

export default Users;
