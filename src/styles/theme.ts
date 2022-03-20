import { createTheme, styled, Typography } from "@mui/material";

export const createAppTheme = (mode: "dark" | "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#00A157",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

export const TypographyWithLink = styled(Typography)<{
  component?: string;
  href?: string;
  target?: string;
}>(({ theme }) => ({
  color: theme.palette.text.primary,
  width: "fit-content",
}));
