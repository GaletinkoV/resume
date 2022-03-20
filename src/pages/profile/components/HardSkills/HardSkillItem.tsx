import React, { FC, memo } from "react";
import { Chip } from "@mui/material";

interface HardSkillItemProps {
  item: string;
}

const HardSkillItem: FC<HardSkillItemProps> = ({ item }) => {
  return <Chip color="primary" label={item} />;
};

export default memo(HardSkillItem);
