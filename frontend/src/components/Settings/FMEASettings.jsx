import React from "react";
import { Typography } from "@mui/material";

const FMEASettings = () => {
  return (
    <div>
      <Typography variant="h4" component="h4">
        FMEA
      </Typography>
      <br />

      <Typography>
        Generate full design FMEA for ______(ebike) in a table format and add
        atleast 3 failure modes for each of the item/function?. Only return the
        generated FMEA table and don"t return any unwanted texts.
      </Typography>
    </div>
  );
};

export default FMEASettings;
