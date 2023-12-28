import React from "react";
import { Typography } from "@mui/material";

const ProcessmapSettings = () => {
  return (
    <div>
      <Typography variant="h4" component="h4">
        PROCESS MAP
      </Typography>
      <br />

      <Typography>
        Generate graph map (mermaid code) for “________” cleaning a washing
        machine including output for each step . The output should be in between
        vertical slash and the input should be in between square brackets. The
        process should be ending with only a input and don"t include yes or no
        outputs or any questioning outputs or inputs. The graph map should be in
        sequence. Don"t return any numbers or any unwanted text, description of
        the response. Don"t return flowchart diagram
      </Typography>
    </div>
  );
};

export default ProcessmapSettings;
