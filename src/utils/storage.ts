import { ThemeMode } from "../types/theme";

export class AppStorage {
  static updateCachedThemeMode(newMode: ThemeMode) {
    localStorage.setItem("themeMode", newMode);
  }

  static getCachedThemeMode(): ThemeMode {
    const cachedValue = localStorage.getItem("themeMode");

    if (!cachedValue && cachedValue !== "dark" && cachedValue !== "light") {
      const hasDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

      return hasDarkMode ? "dark" : "light";
    }

    return cachedValue as ThemeMode;
  }
}
