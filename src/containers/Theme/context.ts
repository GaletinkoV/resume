import { createContext, useContext } from "react";
import { ThemeMode } from "../../types/theme";

type ThemeContextType = {
  toggleMode: () => void;
  mode: ThemeMode;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw Error("The component is not wrapped with ThemeContext");
  }

  return context;
};
