import { Box, CircularProgress } from "@mui/material";
import React from "react";

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        color: "#fff",
        fontSize: "14px",
        fontFamily: "DM Sans",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <CircularProgress
        sx={{
          color: "#fff",
        }}
        thickness={3}
        size={20}
      />
      <p>{message}</p>
    </Box>
  );
};

export default Loader;
