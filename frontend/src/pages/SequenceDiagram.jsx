import React, { useState } from "react";
import axios from "axios";
import { indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import mermaid from "mermaid";

function SequenceDiagram() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [mermaidCode, setMermaidCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      // Generate Mermaid code
      const mermaidResponse = await axios.post(
        "http://3.19.219.191/generate-sequence-diagram",
       //  "http://127.0.0.1:5000/generate-sequence-diagram",
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
    <div className="SequenceDiagram">
      <h3>Sequence Diagram Generator</h3>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          fullWidth
          type="text"
          name="name"
          variant="outlined"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
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
      {/* <br/> */}
      {mermaidCode && (
        <>
          <h4>Generated Mermaid Diagram:</h4>
          <br/>
          <img
            src={`data:image/png;base64,${mermaidCode}`}
            alt="Generated Diagram"
          />
        </>
      )}
      <div id="sequence-diagram"></div>
    </div>
  );
}

export default SequenceDiagram;
