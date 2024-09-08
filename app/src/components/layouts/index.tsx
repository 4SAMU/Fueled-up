import React from "react";

import { MainWrapper } from "./layout-styles";
import BottomNav from "../navbar";
import { Box } from "@mui/material";

interface DefaultLayoutProps {
  children: React.ReactNode;
  bottomNav?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  bottomNav,
}) => {
  return (
    <MainWrapper>
      {children}
      <Box sx={{ height: "100px", width: "100%" }} />
      {bottomNav && <BottomNav />}
    </MainWrapper>
  );
};
export default DefaultLayout;
