import React from "react";
import {
  ConnectedWalletAddress,
  FarmingButton,
  Fl_Drop_Container,
  FlexRowItems,
  MainPageContainer,
  MiniBtns,
  StakingContainer,
} from "./main-page-styles";
import { InputField } from "../mining-page/mining-styles";
import { Box } from "@mui/material";
import { PrimaryButton } from "../layouts/layout-styles";

const MainPage = () => {
  //number with commas
  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <MainPageContainer>
      <FlexRowItems sx={{ justifyContent: "flex-end", width: "100%" }}>
        <ConnectedWalletAddress>0x5rf...543e</ConnectedWalletAddress>
      </FlexRowItems>{" "}
      <Fl_Drop_Container sx={{ mt: "50px" }}>
        <h1>{numberWithCommas(200000)}</h1>
        <span>FL-Drops</span>
      </Fl_Drop_Container>
      {/* <FarmingButton sx={{ mt: "20px" }}>
        <span>start farming</span>
        <Box className="counter">0.0</Box>
      </FarmingButton> */}
      <StakingContainer>
        <h1>Staking</h1>
        <p>
          Lock up a portion of your Fl-Drops for a specific period to earn
          rewards
        </p>
        <label style={{ marginTop: "10px" }}>Stake Amount</label>
        <InputField
          sx={{ border: "1px solid #1c1f22", margin: "auto" }}
          placeholder="Amount to Stake"
        />
        <FlexRowItems sx={{ width: "100%", justifyContent: "space-around" }}>
          <MiniBtns>25%</MiniBtns>
          <MiniBtns>50%</MiniBtns>
          <MiniBtns>75%</MiniBtns>
          <MiniBtns>100%</MiniBtns>
        </FlexRowItems>
        <PrimaryButton>Stake</PrimaryButton>
        <Box sx={{ width: "100%", height: "100px" }} />
      </StakingContainer>
    </MainPageContainer>
  );
};

export default MainPage;
