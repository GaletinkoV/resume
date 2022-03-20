import React, { FC, useMemo, useState } from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createAppTheme } from "../../styles/theme";
import { ThemeContext } from "./context";
import { ThemeMode } from "../../types/theme";
import { AppStorage } from "../../utils/storage";

const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(AppStorage.getCachedThemeMode);

  const toggleMode = () => {
    setMode((prevState) => {
      const newState = prevState === "dark" ? "light" : "dark";

      AppStorage.updateCachedThemeMode(newState);
      return newState;
    });
  };

  const state = useMemo(
    () => ({
      toggleMode,
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => {
    return createAppTheme(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={state}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
