import { Box, styled } from "@mui/material";

export const MiningPageContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // transition: "display 0.3s ease",
}));

interface TabsContainerProps {
  indicatorProps: {
    left: number;
    width: number;
  };
}

export const TabsContainer = styled(Box)<TabsContainerProps>(
  ({ indicatorProps }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    padding: "5px",
    width: "100%",
    backgroundColor: "#1c1f22",
    borderRadius: "10px",
    position: "relative",

    //active indicator styles
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "2px",
      left: `${indicatorProps.left}px`,
      width: `${indicatorProps.width}px`,
      height: "35px",
      background: "#000",
      borderRadius: "10px",
      transition: "left 0.3s ease",
      zIndex: 0,
    },

    "@media (min-width: 600px)": {
      "&::after": {
        display: "none",
      },
    },
  })
);

export const TabButton = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px 10px",
  borderRadius: "10px",
  gap: "5px",
  color: "#f4f6f5",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "SUSE",
  zIndex: 1,

  "@media (min-width: 600px)": {
    "&.active": {
      background: "#000",
    },
  },
}));

export const NftCardContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
  padding: "10px",
  width: "100%",
  overflowY: "auto",
  height: "calc(100vh - 180px)",
  marginTop: "10px",
}));

export const NftCard = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#1c1f22",
  width: "48%",
  height: "220px",
  margin: "auto",
  cursor: "pointer",

  ":hover": {
    boxShadow: "0px 0px 10px 0px #46aa40",

    ".price": {
      color: "#ffcc00",
      fontWeight: "600",
    },
  },

  img: {
    width: "80%",
    height: "120px",
    borderRadius: "10px",
    // border: "1px solid #46aa40",
  },

  ".nft_name": {
    fontSize: "16px",
    fontWeight: "600",
    color: "#f4f6f5",
  },
  ".points_to_mine": {
    fontSize: "15px",
    fontWeight: "400",
    color: "#46aa40",
  },
  ".price": {
    fontSize: "12px",
    fontWeight: "100",
    color: "#f4f6f5",
  },
}));

export const MintNftContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "20px",
  width: "100%",
  // height: "calc(100vh - 200px)",
  label: {
    fontSize: "14px",
    marginBottom: "10px",
  },
}));

export const DragNDropPic = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100% !important",
  height: "180px",
  margin: "5px 0 20px 0",
  ".upload_box": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    border: "1px dashed #707070",
    borderRadius: "6px",
    cursor: "pointer",
    height: "100%",
    width: "100%",
  },
  ".upload_text": {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "500",
    color: "#707070",
  },

  ".small_size": {
    fontWeight: "400",
    fontSize: "12px",
  },
  span: {
    color: "#46aa40",
    cursor: "pointer",
  },

  ".selected-file": {
    fontStyle: "italic",
    fontFamily: "Inter",
    fontSize: "8px",
    color: "#707070",
    fontWeight: "300",
    marginTop: "5px",
  },
}));

export const InputField = styled("input")(() => ({
  outline: "none",
  border: "1px solid #707070",
  height: "45px",
  padding: "0 15px",
  borderRadius: "6px",
  backgroundColor: "transparent",
  marginBottom: "15px",
  color: "#707070",
  width: "100%",
}));

export const TextAreaField = styled("textarea")(() => ({
  outline: "none",
  border: "1px solid #707070",
  height: "100px",
  padding: "15px",
  borderRadius: "6px",
  backgroundColor: "transparent",
  marginBottom: "15px",
  resize: "none",
  color: "#707070",
}));
