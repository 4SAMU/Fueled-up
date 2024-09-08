import { Box, styled } from "@mui/material";

//#A3BB20

export const GetStartedContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
    // alignItems: "center",
  padding: "10px 0 20px 0",

  h1: {
    fontSize: "30px",
    fontWeight: "600",
    color: "#46aa40",
    textAlign: "start",
    fontFamily: "SUSE",
  },
  h2: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#f4f6f5",
    marginTop: "10px",
    fontFamily: "SUSE",
  },
}));

export const HowITWorksContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "25px",
  gap: "10px",

  ".card": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#1c1f22",
    padding: "20px 20px 20px 20px",
    borderRadius: "8px",
  },

  header: {
    fontSize: "20px",
    fontWeight: "400",
    color: "#46aa40",

  },

  ".sub_header": {
    fontSize: "16px",
    fontWeight: "400",
    color: "#f4f6f5",
  },
  p: {
    fontSize: "14px",
    fontWeight: "300",
    color: "#707070",
    marginTop: "10px",
  },
  span: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#ffcc00",
  },
}));
