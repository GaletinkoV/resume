import React, { memo } from "react";
import { Column } from "../../styled";
import WorkExperienceItem from "./WorkExperienceItem";
import { useProfileContext } from "../../../../containers/Profile/context";

const WorkExperience = () => {
  const { workExperience } = useProfileContext();

  return (
    <Column>
      {workExperience.map((item, index) => (
        <WorkExperienceItem item={item} key={index} />
      ))}
    </Column>
  );
};

export default memo(WorkExperience);
