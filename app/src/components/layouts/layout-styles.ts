import { Box, Button, styled } from "@mui/material";

export const MainWrapper = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#0F1214",
  padding: "20px",
  overflowY: "auto",
  overflowX: "hidden",
  position: "relative",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (min-width: 600px)": {
    left: "50%",
    transform: "translateX(-50%)",
    width: "390px",
  },
  "@media (max-width: 599px)": {
    width: "100%",
    border: "none",
  },
}));

export const BottomTab = styled(Box)(({}) => ({}));

export const PrimaryButton = styled(Button)(({}) => ({
  textTransform: "none",
  backgroundColor: "#46aa40",
  color: "#fff",
  fontSize: "16px",
  height: "35px",
  fontWeight: "400",

  ":disabled": {
    backgroundColor: "#1c1f22",
    color: "#707070",
  },
}));
