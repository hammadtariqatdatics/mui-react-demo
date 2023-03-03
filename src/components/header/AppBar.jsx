import React from "react";
import MuiAppBar from "../MuiAppBar";
import MuiToolbar from "../MuiToolbar";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <MuiAppBar position="fixed">
      <MuiToolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flex: 1 }} />
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "24px",
            textTransform: "uppercase",
          }}
        >
          Haliton
        </Link>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Link
            to="/login"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            style={{
              color: "#ff3366",
              textDecoration: "none",
              fontSize: "18px",
              marginLeft: "24px",
              textTransform: "uppercase",
            }}
          >
            Sign Up
          </Link>
        </Box>
      </MuiToolbar>
    </MuiAppBar>
  );
};

export default AppBar;
