import HeadMetaData from "@/components/headMetadata";
import DefaultLayout from "@/components/layouts";
import { PrimaryButton } from "@/components/layouts/layout-styles";
import {
  FlexRowItems,
  MiniBtns,
} from "@/components/main-page/main-page-styles";
import { InputField } from "@/components/mining-page/mining-styles";
import { Box } from "@mui/material";
import React, { useState } from "react";

const Claim = () => {
  const [claimAmount, setClaimAmount] = useState("");
  return (
    <div>
      <HeadMetaData pageTitle="FL Ecosystem | Claim Your Tokens" />
      <DefaultLayout bottomNav>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            h1: {
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#f4f6f5",
              marginTop: "30px",
              width: "100%",
              textAlign: "center",
            },
            p: {
              fontSize: "14px",
              color: "#707070",
            },
            label: {
              fontSize: "16px",
              marginTop: "25px",
              color: "#f4f6f5",
            },
          }}
        >
          <h1>Claim Your Fl-Drops</h1>
          <p>
            You can claim your FL-drops to your wallet, and they will be
            credited as FL tokens.
          </p>
          <label>Amount to Claim</label>
          <InputField
            sx={{ marginTop: "10px" }}
            placeholder="Amount to Claim"
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
          />
          <FlexRowItems sx={{ width: "100%", justifyContent: "space-around" }}>
            <MiniBtns>25%</MiniBtns>
            <MiniBtns>50%</MiniBtns>
            <MiniBtns>75%</MiniBtns>
            <MiniBtns>100%</MiniBtns>
          </FlexRowItems>
          <PrimaryButton
            sx={{
              fontWeight: "300",
              borderRadius: "6px",
              fontSize: "14px",
              mt: "20px",
            }}
            disabled={!claimAmount || Number(claimAmount) <= 0}
          >
            Claim
          </PrimaryButton>
        </Box>
      </DefaultLayout>
    </div>
  );
};

export default Claim;
