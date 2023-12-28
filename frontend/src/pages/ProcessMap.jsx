import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";

const ProcessMap = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [graph, setGraph] = useState("");

  const [loading, setLoading] = useState(false);

  // async function onSubmit(event) {
  //   event.preventDefault();
  //   setError(null);
  //   setLoading(true);

  //   try {
  //     const response = await fetch("/generate-sequencediagram", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ processmapName: processmapName }),
  //     });

  //     const data = await response.json();
  //     console.log("Received data:", data);

  //     if (response.status !== 200) {
  //       throw (
  //         data.error ||
  //         new Error(`Request failed with status ${response.status}`)
  //       );
  //     }
  //     setProcessmapImage(`data:image/png;base64,${data.processmapImage.toString("base64")}`);
  //     // setProcessmapImage(`data:image/png;base64, ${data.processmapImage}`);
  //     // setProcessmapImage(data.processmapImage);
  //     setProcessmapName("");
  //     console.log("After setting processmapImage:", processmapImage);

  //     console.log("Response:", data);
  //     console.log("Response Text:", await response.text());
  //   } catch (error) {
  //     // Consider implementing your own error handling logic here
  //     console.error(error);
  //     setError(error.message || "An unexpected error occurred.");
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/generate-sequencediagram", { name });
      setGraph(response.data.base64Graph);
    } catch (error) {
      console.error("Error generating sequence diagram:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Log the base64-encoded graph when 'graph' changes
    if (graph) {
      console.log(
        "Base64-encoded graph:",
        Buffer.from(graph, "base64").toString("utf-8")
      );
    }
  }, [graph]);
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
        <ColorButton type="submit" variant="contained">
          Submit
        </ColorButton>
      </form>
      <br />
      <br />
      {/* {processmapImage && (
        <div>
          <h3>Generated Process Map:</h3>
          <img
            src={`data:image/png;base64,${processmapImage}`}
            alt="Process Map"
          />
        </div>
      )} */}
      {loading && <p>Loading...</p>}
      <div dangerouslySetInnerHTML={{ __html: atob(graph) }} />
      {/* {graph ? (
        <img
          src={`data:image/png;base64,${graph}`}
          alt="Generated Sequence Diagram"
        />
      ) : (
        <p>Error: Unable to display the sequence diagram.</p>
      )} */}
    </div>
  );
};

export default ProcessMap;
