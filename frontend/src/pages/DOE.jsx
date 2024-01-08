import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const DOE = () => {
  const [data, setData] = useState([]);
  const [selectedDoe, setSelectedDoe] = useState(null);
  const [doeValues, setDoeValues] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/doe_options")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[900]),
    backgroundColor: indigo[900],
    "&:hover": {
      backgroundColor: indigo[900],
    },
  }));

  const handleDoeSelection = (event, value) => {
    setSelectedDoe(value);

    // Fetch DOE values based on the selected DOE ID
    axios
      .post("http://localhost:5000/api/variable_values", {
        select_name: value._id,
      })
      .then((response) => {
        setDoeValues(response.data.dict_response);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = () => {
    console.log("Selected DOE:", selectedDoe);
  };

  return (
    <div>
      <h3>DOE Generator</h3>
      <br />
      <br />
      <p>Select preused DOE name</p>
      <br />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => option._id}
        size="small"
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        onChange={handleDoeSelection}
        renderInput={(params) => <TextField {...params} label="DOE ID" />}
      />
      <br />
      <ColorButton variant="contained" onClick={handleSubmit}>
        Submit
      </ColorButton>
      {selectedDoe && doeValues && (
        <div>
          <h4>Selected DOE: {selectedDoe._id}</h4>
          <TextField
            label="DOE Values"
            multiline
            rows={4}
            variant="outlined"
            value={JSON.stringify(doeValues, null, 2)}
          />
        </div>
      )}
    </div>
  );
};

export default DOE;
