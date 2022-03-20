import {
  Avatar,
  Divider,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export const ProfileInformationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ToggleModeButton = styled("div")({
  position: "absolute",
  right: 0,
  top: 0,
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  marginRight: 24,
  [theme.breakpoints.down("sm")]: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 16,
  },
}));

export const ProfileName = styled("div")({
  display: "flex",
  flexDirection: "column",
  "& > h4": {
    fontWeight: 700,
  },
});

export const ContactsContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 16,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));

export const ContactItem = styled("div")(
  (props: { isClickable?: boolean }) => ({
    display: "flex",
    alignItems: "center",
    "& > *:first-child": {
      marginRight: 8,
    },
    "& > span": {
      cursor: props.isClickable ? "pointer" : "default",
      textDecoration: props.isClickable ? "underline" : "none",
    },
  })
);

export const StyledDivider = styled(Divider)({
  margin: "24px 0",
});

export const Column = styled("div")((props: { marginBottom?: number }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: props.marginBottom || 0,
}));

export const Subtitle = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
});

export const StyledStack = styled(Stack)({
  flexWrap: "wrap",
  position: "relative",
  left: -4,
  "& > *": {
    margin: 4,
  },
});

export const SearchSkillInput = styled(TextField)({
  maxWidth: 300,
  marginBottom: 16,
});
