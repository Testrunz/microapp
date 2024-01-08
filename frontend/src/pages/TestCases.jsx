import React, { useState } from 'react';
import axios from 'axios';
import { indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TestCases = () => {
  const [title, setTitle] = useState('');
  const [response, setResponse] = useState({ source: '', title_response: '', tests: [], clauses: [] });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:5000/extract-test-cases', {
        title: title
      });
      console.log('Server Response:', response.data);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
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
        <p>For which product would you like to test</p>
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
        <ColorButton type="submit" variant="contained" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </ColorButton>
      </form>

      {!loading && response && !response.error && response.source && (
  <div>
    <h2>Source: {response.source}</h2>
    <h2>Document Title: {response.title_response}</h2>

    <h3>Extracted Test Cases:</h3>
    <ul>
      {response.tests && response.tests.map((test, index) => (
        <li key={index}>{test}</li>
      ))}
    </ul>

    <h3>Extracted Clauses:</h3>
    <ul>
      {response.clauses && response.clauses.map((clause, index) => (
        <li key={index}>{clause}</li>
      ))}
    </ul>
  </div>
)}

{!loading && response && response.error && (
  <div>
    <p>{response.error}</p>
  </div>
)}
    </div>
  );
};

export default TestCases;
