import React, { FC } from "react";
import { EducationType } from "../../../../types/profile";
import { Column } from "../../styled";
import { Typography } from "@mui/material";

interface EducationItemProps {
  item: EducationType;
}

const EducationItem: FC<EducationItemProps> = ({
  item: { fromDate, toDate, faculty, university, department },
}) => {
  return (
    <Column marginBottom={16}>
      <Typography gutterBottom variant="h6">
        {university}
      </Typography>
      <Typography gutterBottom>{faculty}</Typography>
      <Typography gutterBottom component="em">
        {fromDate} - {toDate}
      </Typography>
      <Typography gutterBottom component="em">
        Department:
      </Typography>
      <Typography gutterBottom>{department}</Typography>
    </Column>
  );
};

export default EducationItem;
