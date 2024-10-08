import { Box, Button, IconButton, keyframes, styled } from "@mui/material";

export const MainPageContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

export const Fl_Drop_Container = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  borderRadius: "50%",
  backgroundColor: "#1c1f22",
  width: "240px",
  height: "240px",
  border: "10px dashed #46aa40",
  boxShadow: "0px 0px 10px 5px rgba(70, 170, 64, 0.9)",

  h1: {
    fontSize: "40px",
    fontWeight: "600",
    color: "#fff",
    letterSpacing: "2.5px",
    fontFamily: "SUSE",
  },
  span: {
    fontSize: "16px",
    fontWeight: "300",
    color: "#46aa40",
  },
}));

export const FarmingButton = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "5px 10px",
  borderRadius: "10px",
  height: "45px",
  backgroundColor: "#46aa40",
  cursor: "pointer",
  transition: "all 0.3s ease",

  span: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#fff",
  },
  ".counter": {
    fontSize: "16px",
    fontWeight: "400",
    color: "#fff",
  },
}));

export const FlexRowItems = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
}));

export const FlexColumnItems = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
}));

// Define the sparkle animation
const sparkleAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled component with sparkle effect
export const ConnectedWalletAddress = styled(Button)(({}) => ({
  textTransform: "none",
  borderRadius: "25px",
  backgroundColor: "#1c1f22",
  height: "35px",
  minWidth: "120px",
  color: "#707070",
  fontFamily: "SUSE",
  fontSize: "14px",
  fontWeight: "300",
  letterSpacing: "1px",
  position: "relative",
  overflow: "hidden", // Ensure the sparkle stays within the button
  zIndex: 1,
  gap: "5px",

  // Sparkle effect (using gradient background with #46aa40)
  backgroundImage:
    "linear-gradient(120deg, rgba(70, 170, 64, 0) 30%, rgba(70, 170, 64, 0.1) 50%, rgba(70, 170, 64, 0.0) 70%)",
  backgroundSize: "200% auto",
  animation: `${sparkleAnimation} 2s linear infinite`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "inherit",
    zIndex: -1, // Ensure it stays behind the text
  },
}));

export const StakingContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  gap: "10px",
  padding: "10px 20px",
  //short hand for border-radius
  borderRadius: "25px 25px 0 0",
  border: "1px solid #1c1f22",
  borderBottom: "none",
  width: "calc(100% + 40px)",
  minHeight: "300px",
  // position: "absolute",
  marginTop: "50px",
  // bottom: "0",

  h1: {
    fontSize: "30px",
    fontWeight: "600",
    color: "#fff",
    letterSpacing: "2.5px",
    fontFamily: "SUSE",
    width: "100%",
    textAlign: "center",
  },
  p: {
    fontSize: "14px",
    fontWeight: "300",
    color: "#707070",
    marginTop: "10px",
  },
}));

export const MiniBtns = styled(Button)(({}) => ({
  textTransform: "none",
  borderRadius: "25px",
  backgroundColor: "#46aa40",
  height: "35px",
  minWidth: "60px",
  color: "#fff",
  fontFamily: "SUSE",
  fontSize: "14px",
  fontWeight: "300",
  letterSpacing: "1px",
  ":disabled": {
    backgroundColor: "#1c1f22",
    color: "#707070",
  },
}));

export const StyledIconButton = styled(IconButton)(({}) => ({
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(70, 170, 64, 0.2)",
  },
}));
