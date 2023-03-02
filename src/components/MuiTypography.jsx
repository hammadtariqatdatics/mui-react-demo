import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" component="h1">
        h1 heading
      </Typography>
      <Typography variant="h2" component="h2">
        h2 heading
      </Typography>
      <Typography variant="h3" component="h3">
        h3 heading
      </Typography>
      <Typography variant="h4" component="h4">
        h4 heading
      </Typography>
      <Typography variant="h5" component="h5">
        h5 heading
      </Typography>
      <Typography variant="h6" component="h6">
        h6 heading
      </Typography>
      <Typography variant="subtitle1" component="h6">
        Subtitle1
      </Typography>
      <Typography variant="subtitle2" component="h6">
        Subtitle2
      </Typography>
      <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad perferendis velit dolor iusto quaerat voluptas provident nesciunt voluptatum ut praesentium nam vero sint consequatur tenetur corporis doloribus, architecto esse beatae!</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequuntur deleniti nostrum fugiat harum voluptatibus, placeat incidunt dolore eaque adipisci ullam facilis beatae provident saepe reprehenderit rem cum laudantium quisquam.</Typography>
    </div>
  );
};

export default MuiTypography;
