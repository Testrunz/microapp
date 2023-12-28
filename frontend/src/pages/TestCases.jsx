import React, { useState } from 'react';
import axios from 'axios';
import { indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TestCases = () => {
  const [title, setTitle] = useState('');
  const [response, setResponse] = useState({ source: '', title_response: '', tests: [], clauses: [] });

  const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:5000/extract-test-cases', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });

        const data = await response.json();
        setResponse(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[900]),
    backgroundColor: indigo[900],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  }));

  return (
    <div>
      <h3>Extract Test cases</h3>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <p>For which product you would like to test</p>
        <br />
        <TextField
          sx={{
            width: 500,
            maxWidth: '100%',
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
        <ColorButton onClick={handleSubmit} type="submit" variant="contained" value="Generate">
          Submit
        </ColorButton>
      </form>

      <div>Response: {JSON.stringify(response)}</div>
      {response.source && (
        <div>
          <h2>Source: {response.source}</h2>
          <h2>Document Title: {response.title_response}</h2>

          <h3>Extracted Test Cases:</h3>
          <ul>
            {response.tests.map((test, index) => (
              <li key={index}>{test}</li>
            ))}
          </ul>

          <h3>Extracted Clauses:</h3>
          <ul>
            {response.clauses.map((clause, index) => (
              <li key={index}>{clause}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestCases;
