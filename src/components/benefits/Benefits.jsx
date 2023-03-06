import { React, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { benefitsData } from "../../utils";

const Benefits = () => {
  const [benefits, setBenefits] = useState(benefitsData);
  return (
    <Box
      sx={{
        margin: "64px 0px 32px 0px",
      }}
    >
      <Container>
        <Typography variant="h4" component="h2" align="center">
          FOR ALL TASTES AND ALL DESIRES
        </Typography>
        <Box align="center">
          <Box
            sx={{
              width: "25px",
              height: "4px",
              display: "block",
              margin: "8px 0px",
              background: "#ff3366",
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "64px",
          }}
        >
          <ImageList cols={3}>
            {benefits.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    ></IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
