import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Facebook, Twitter } from "@mui/icons-material";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Footer = () => {
  return (
    <Box sx={{ background: "#fff5f8" }}>
      <Box
        sx={{
          padding: "64px 0px 64px 0px",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Stack direction="row">
                <Box
                  sx={{
                    height: "48px",
                    width: "48px",
                    background: "#ffc071",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  marginRight={2}
                >
                  <Link href="https://www.facebook.com/">
                    <Facebook fontSize="large" />
                  </Link>
                </Box>
                <Box
                  sx={{
                    height: "48px",
                    width: "48px",
                    background: "#ffc071",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link href="https://www.twitter.com/">
                    <Twitter fontSize="large" />
                  </Link>
                </Box>
              </Stack>
              <Typography marginTop={4}>© Haliton 2023</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography variant="h6" component="h2">
                LEGAL
              </Typography>
              <Box>
                <Box
                  sx={{
                    width: "28px",
                    height: "3px",
                    display: "block",
                    margin: "8px 0px",
                    background: "#000",
                  }}
                />
              </Box>
              <MenuList>
                <Link href="#">
                  <ListItemText>Terms</ListItemText>
                </Link>
                <Link href="#">
                  <ListItemText>Privacy</ListItemText>
                </Link>
              </MenuList>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography variant="h6" component="h2">
                LANGUAGE
              </Typography>
              <Box>
                <Box
                  sx={{
                    width: "28px",
                    height: "3px",
                    display: "block",
                    margin: "8px 0px 20px 0px",
                    background: "#000",
                  }}
                />
              </Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Language"
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}></Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
