import React, { FC } from "react";
import { Column, StyledStack } from "../../styled";
import { Chip, Typography } from "@mui/material";
import { WorkExperienceType } from "../../../../types/profile";
import { TypographyWithLink } from "../../../../styles/theme";

const listStyle = {
  marginTop: 0,
};

interface WorkExperienceItemProps {
  item: WorkExperienceType;
}

const WorkExperienceItem: FC<WorkExperienceItemProps> = ({
  item: {
    fromDate,
    toDate,
    position,
    company,
    companyLink,
    responsibilities,
    techStack,
  },
}) => {
  return (
    <Column marginBottom={16}>
      <Typography variant="h6" gutterBottom>
        {position}
      </Typography>
      <TypographyWithLink
        gutterBottom
        component="a"
        href={companyLink || "#"}
        target="_blank"
      >
        {company}
      </TypographyWithLink>
      <Typography gutterBottom component="em">
        {fromDate} - {toDate}
      </Typography>
      <Typography gutterBottom component="em">
        Responsibilities:
      </Typography>
      <ul style={listStyle}>
        {responsibilities.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
      <Typography gutterBottom component="em">
        Tech Stack:
      </Typography>
      <StyledStack direction="row">
        {techStack.map((stack, index) => (
          <Chip label={stack} color="primary" variant="outlined" key={index} />
        ))}
      </StyledStack>
    </Column>
  );
};

export default WorkExperienceItem;
