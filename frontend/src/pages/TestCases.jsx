import React, { useState } from "react";
import axios from "axios";
import { indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const TestCases = () => {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState({
    source: "",
    title_response: "",
    tests: [],
    clauses: [],
    error: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serverResponse = await fetchDataFromServer();

      if (serverResponse.data.error) {
        setResponse({ error: serverResponse.data.error });
      } else {
        const responseData = serverResponse.data;

        if (responseData && !responseData.error) {
          setResponse({
            source: responseData.source || "",
            title_response: responseData.title_response || "",
            tests: responseData.tests || [],
            clauses: responseData.clauses || [],
            error: "",
          });
        } else {
          setResponse({ error: "Invalid server response format" });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse({ error: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const fetchDataFromServer = async () => {
    const serverResponse = await axios.post(
       "http://3.19.219.191/extract-test-cases",
     // "http://127.0.0.1:5000/extract-test-cases",
      {
        title: title,
      }
    );
    return serverResponse;
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
      <h3>Extract Test cases</h3>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <p>For which product would you like to test</p>
        <br />
        <TextField
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          id="outlined-basic"
          fullWidth
          type="text"
          variant="outlined"
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <ColorButton type="submit" variant="contained" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </ColorButton>
      </form>
      <br />
      <br />
      {!loading && response && !response.error && response.source && (
        <div>
          <h4>Source: {response.source}</h4>
          <br />
          <h4>Document Title: {response.title_response}</h4>
          <br />
          <h4>Extracted Test Cases and Clauses:</h4>
          {response.tests && response.tests.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Extracted Test Case</th>
                  <th>Clause</th>
                </tr>
              </thead>
              <tbody>
                {response.tests.map((test, index) => (
                  <tr key={index}>
                    <td>{test}</td>
                    <td>
                      {response.clauses && response.clauses.length > index
                        ? response.clauses[index]
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No test cases extracted</p>
          )}
        </div>
      )}

      {response.error && <p style={{ color: "red" }}>{response.error}</p>}
    </div>
  );
};

export default TestCases;
