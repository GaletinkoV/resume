import React, { memo } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkMode } from "@mui/icons-material";

import { useThemeContext } from "../../containers/Theme/context";

const ToggleThemeMode = () => {
  const { mode, toggleMode } = useThemeContext();

  return (
    <IconButton onClick={toggleMode}>
      {mode === "dark" ? <LightModeIcon /> : <DarkMode />}
    </IconButton>
  );
};

export default memo(ToggleThemeMode);
