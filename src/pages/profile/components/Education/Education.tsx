import React, { memo } from "react";

import EducationItem from "./EducationItem";
import { Column } from "../../styled";

import { useProfileContext } from "../../../../containers/Profile/context";

const Education = () => {
  const { education } = useProfileContext();

  return (
    <Column>
      {education.map((item, index) => (
        <EducationItem item={item} key={index} />
      ))}
    </Column>
  );
};

export default memo(Education);
