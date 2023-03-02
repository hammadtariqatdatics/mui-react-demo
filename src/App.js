import React from "react";
import MuiTypography from "./components/MuiTypography";
import MuiGrid from "./components/MuiGrid";
import MuiResponsive from "./components/MuiResponsive";
import MuiThemeCustomize from "./components/MuiThemeCustomize";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from '@mui/material/colors';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  });

  return (
    <>
      <MuiTypography />
      <MuiGrid />
      <MuiResponsive />
      <ThemeProvider theme={theme}>
        <MuiThemeCustomize />
      </ThemeProvider>
    </>
  );
};

export default App;
