import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import mermaid from "mermaid";

const ProcessMap = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [mermaidCode, setMermaidCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      // Generate Mermaid code
      const mermaidResponse = await axios.post(
        "http://3.19.219.191/process-map",
       //  "http://127.0.0.1:5000/process-map",
        { name }
      );
      const generatedMermaidCode = mermaidResponse.data.mermaidImage;

      setMermaidCode(generatedMermaidCode);

      // Render the sequence diagram using mermaid
      mermaid.initialize({ startOnLoad: true });
      mermaid.render("graph", generatedMermaidCode, (svgCode) => {
        // Inject the SVG code into the DOM
        document.getElementById("sequence-diagram").innerHTML = svgCode;
      });
    } catch (error) {
      console.error("Error getting mermaid code:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[900]),
    backgroundColor: indigo[900],
    "&:hover": {
      backgroundColor: indigo[900],
    },
  }));
  return (
    <div>
      <h3>Process Map</h3>
      <br />
      <br />
      <p>
        Please mention with both action and object(Eg Cleaning a coffee maker,
        making coffee using coffee maker). For objects like washing machine
        please mention it by adding a "-" like washing-machine
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          fullWidth
          type="text"
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          // label="Enter FMEA Name"
          variant="outlined"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <ColorButton type="submit" variant="contained" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </ColorButton>
      </form>
      <br />
      <br />
      {/* {loading && <p>Loading...</p>} */}
      {/* <br /> */}
      {mermaidCode && (
        <>
          <h4>Generated Process map:</h4>
          <br />
          <img
            src={`data:image/png;base64,${mermaidCode}`}
            alt="Generated Diagram"
          />
        </>
      )}
      <div id="sequence-diagram"></div>
    </div>
  );
};

export default ProcessMap;
