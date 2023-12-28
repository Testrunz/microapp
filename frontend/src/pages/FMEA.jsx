import React, { useState } from "react";
import { indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { saveAs } from "file-saver";

const FMEA = () => {
  const [fmeaName, setFmeaName] = useState("");
  const [fmeaTable, setFmeaTable] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([fmeaTable], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "fmeaTable.txt");
  };

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/generate-fmea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fmeaName: fmeaName }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setFmeaTable(data.fmeaTable);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[900]),
    backgroundColor: indigo[900],
    "&:hover": {
      backgroundColor: indigo[900],
    },
  }));

  return (
    <div>
      <h3>FMEA Generator</h3>
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          fullWidth
          type="text"
          variant="outlined"
          size="small"
          value={fmeaName}
          onChange={(e) => setFmeaName(e.target.value)}
        />
        <br />
        <br />
        <Stack spacing={37} direction="row">
          <ColorButton type="submit" variant="contained">
            Submit
          </ColorButton>
          <ColorButton variant="contained" onClick={handleDownload}>
            Download
          </ColorButton>
        </Stack>
      </form>
      <br />
      <br />
      {loading && <p>Loading...</p>}
      <div>
        <pre>{fmeaTable}</pre>
      </div>
    </div>
  );
};

export default FMEA;
