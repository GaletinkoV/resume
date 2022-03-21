import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import HardSkillItem from "./HardSkillItem";

import { useProfileContext } from "../../../../containers/Profile/context";
import { StyledStack, Column, SearchSkillInput } from "../../styled";

const HardSkills = () => {
  const [search, setSearch] = useState<string>("");
  const { hardSkills } = useProfileContext();

  const hardSkillsWithId = useMemo(() => {
    return hardSkills.map((skill) => ({
      id: uuidv4(),
      value: skill,
    }));
  }, [hardSkills]);

  const filteredHardSkills = useMemo(() => {
    if (!search) {
      return hardSkillsWithId;
    }

    return hardSkillsWithId.filter((item) =>
      item.value.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, hardSkillsWithId]);

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Column>
      <SearchSkillInput
        id="skills-searching"
        label="Search skills"
        placeholder="Enter skill name"
        variant="outlined"
        value={search}
        onChange={onChangeSearchValue}
      />
      <StyledStack direction="row">
        {filteredHardSkills.map(({ value, id }) => (
          <HardSkillItem item={value} key={id} />
        ))}
      </StyledStack>
    </Column>
  );
};

export default HardSkills;
