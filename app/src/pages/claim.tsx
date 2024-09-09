import HeadMetaData from "@/components/headMetadata";
import DefaultLayout from "@/components/layouts";
import { PrimaryButton } from "@/components/layouts/layout-styles";
import {
  FlexRowItems,
  MiniBtns,
} from "@/components/main-page/main-page-styles";
import { InputField } from "@/components/mining-page/mining-styles";
import { useFlDropsContext } from "@/contexts/flDrops";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

// Array for the percentage buttons
const percentages = [25, 50, 75, 100];

const Claim = () => {
  // Access the context
  const { flDropsBalance } = useFlDropsContext();

  // Local state for claim amount
  const [claimAmount, setClaimAmount] = useState("");

  const isClaimAllowed =
    Number(claimAmount) >= 10000 && Number(claimAmount) <= flDropsBalance;

  // Function to handle percentage input and update the claim amount
  const handlePercentageInput = (percentage: number) => {
    const calculatedAmount = (flDropsBalance * (percentage / 100)).toFixed(2);
    setClaimAmount(calculatedAmount);
  };

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
            placeholder="minimum to claim, 10000 fl-drops!"
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
          />
          <FlexRowItems sx={{ justifyContent: "space-around" }}>
            {percentages.map((percentage) => {
              const claimAmount = flDropsBalance * (percentage / 100);
              return (
                <MiniBtns
                  key={percentage}
                  onClick={() => handlePercentageInput(percentage)}
                  disabled={claimAmount < 10000} // Disable buttons based on percentage
                >
                  {percentage}%
                </MiniBtns>
              );
            })}
          </FlexRowItems>
          <PrimaryButton
            sx={{
              fontWeight: "300",
              borderRadius: "6px",
              fontSize: "14px",
              mt: "20px",
            }}
            disabled={!isClaimAllowed} // Disable the claim button if conditions are not met
          >
            Claim
          </PrimaryButton>
        </Box>
      </DefaultLayout>
    </div>
  );
};

export default Claim;
