import React, { memo } from "react";
import { Typography } from "@mui/material";

import { Column } from "../../styled";
import { useProfileContext } from "../../../../containers/Profile/context";

const listStyle = {
  marginTop: 0,
};

const SoftSkills = () => {
  const { languages, strengths } = useProfileContext();

  return (
    <Column>
      <Typography gutterBottom component="em">
        Languages:
      </Typography>
      <ul style={listStyle}>
        {languages.map((item, index) => (
          <li key={index}>
            {item.name} ({item.level})
          </li>
        ))}
      </ul>
      <Typography gutterBottom component="em">
        My strengths:
      </Typography>
      <ul style={listStyle}>
        {strengths.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Column>
  );
};

export default memo(SoftSkills);
