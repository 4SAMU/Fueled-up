import { Box, styled } from "@mui/material";

export const BottomNavContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  position: "fixed",
  minHeight: "50px",
  width: "90%",
  bottom: "35px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 999,
  backgroundColor: "#1c1f22",
  padding: "6px 0",
  boxShadow: "0px -4px 10px rgba(70, 170, 64, 0.9)",
  borderRadius: "20px",
  transition: "all 0.3s ease",
}));

//35px+50px+10px = 95px
export const IconAndText = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px 10px",
  borderRadius: "15px",
  cursor: "pointer",
  gap: "2px",
  span: {
    color: "#f4f6f5",
    fontSize: "10px",
    fontWeight: "300",
    fontFamily: "SUSE",
  },
  svg: {
    color: "#f4f6f5",
    fontSize: "20px",
    width: "25px",
    height: "25px",
  },
  "&.active": {
    backgroundColor: "#000",
  },
  ":hover": {
    backgroundColor: "#000",
  },
}));
