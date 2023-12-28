import React from "react";
import { Typography } from "@mui/material";

const DOESettings = () => {
  return (
    <div>
      <Typography variant="h4" component="h4">
        DOE
      </Typography>
      <br />
      <Typography variant="h6" component="h6">
        For generating table
      </Typography>

      <Typography>
        Generate a full design of experiment matrix in a table for a
        _________(coffee baking) example. Factors = 2, __________(fractional
        factorial design), level 2, Resolution is 5. Update the table with
        actual factor values instead of the coded +1 and -1.The actual values
        are oven _________(temp: 10,20, bakingtime: 5,10 each Taste,color) with
        empty values. Return the response in a json format having each factor
        and response has key and its respective values in a list and only return
        the dictionary.Return full table. Don't return the generated table, any
        asumption text or any other texts.
      </Typography>

      <br />
      <Typography variant="h6" component="h6">
        For assuming reasonable values
      </Typography>

      <Typography>
        Assume reasonable value for the response variables based on the other
        features/inputs(values must be in range 0 to 10) and return the response
        in json format with each feature and response in separate key and its
        corresponsing values in a list. Don't return any unwanted text and any
        unicode text.
      </Typography>
    </div>
  );
};

export default DOESettings;
