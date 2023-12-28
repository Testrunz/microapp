import React from "react";
import { Typography } from "@mui/material";

const SequenceSettings = () => {
  return (
    <div>
      <Typography variant="h4" component="h4">
        SEQUENCE DIAGRAM
      </Typography>
      <br />

      <Typography>
        Generate sequence diagram (mermaid code) for __________(making a coffee
        using a coffee maker). Don"t return any numbers or any unwanted text,
        description of the response. Don"t return flowchart diagram.
      </Typography>
    </div>
  );
};

export default SequenceSettings;
