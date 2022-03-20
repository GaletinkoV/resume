import { Paper, styled } from "@mui/material";
import Background from "../assets/background.jpg";

export const StyledMain = styled("main")({
  display: "flex",
  minHeight: "100vh",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`,
});

export const StyledPageContainer = styled("div")(({ theme }) => ({
  width: 1152,
  margin: "120px auto",
  boxSizing: "border-box",
  padding: "0 24px",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    width: "auto",
    margin: 0,
  },
}));

export const StyledPage = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 16,
  minHeight: "100vh",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
  },
}));
