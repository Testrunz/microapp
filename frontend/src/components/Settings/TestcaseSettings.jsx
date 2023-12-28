import React from "react";
import { Typography } from "@mui/material";

const TestcaseSettings = () => {
  return (
    <div>
      <Typography variant="h4" component="h4">
      TEST CASES
      </Typography>
      <br />
      <Typography variant="h6" component="h6">
      Extracting headers
      </Typography>

      <Typography>
      Extract all the headers which is present at the start of new line and present only after a integer. Don't consider the text as heading if the integer which is present before the heading is not continuous and don't include its sub-headings. Don't include 'Scope','references','general requirements','test','annexes','TERMINOLOGY','instructions','purpose','Definitions','testing','instruments','Requirements' and other related words as headings. Return the response as dictionary with its respection clauses. Don't return any unwanted texts. Final answer should be in the following format: '''json 'text':[headings],'clause':[respective clauses]'''. Ensure that all strings are enclosed in double quotes. Don't return any unwanted quotes like ``` json
      </Typography>

      <br />
      <Typography variant="h6" component="h6">
      For extracting text present below the selected test cases:
      </Typography>

      <Typography>
      Extract text which is present below the title "test_name" keeping the format as it is in the context. For some headings text will be available from the contents page but don"t include those text available in the content page. If you can"t extract the answer or if you don"t the answer, just say we don"t have answer for this test_name, don"t try to make up an answer
      </Typography>
    </div>
  );
};

export default TestcaseSettings;
