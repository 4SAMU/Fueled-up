import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import HeadMetaData from "@/components/headMetadata";
import DefaultLayout from "@/components/layouts";
import {
  ConnectedWalletAddress,
  Fl_Drop_Container,
  FlexRowItems,
  MainPageContainer,
  MiniBtns,
  StakingContainer,
  StyledIconButton,
} from "@/components/main-page/main-page-styles";
import { InputField } from "@/components/mining-page/mining-styles";
import { PrimaryButton } from "@/components/layouts/layout-styles";
import { numberWithCommas } from "@/utils/numberWithCommas";
import { useFlDropsContext } from "@/contexts/useFlDrops";
import StakePeriodSelect from "@/utils/selectInputs";
import { useCustomFuelHook } from "@/contexts/useFuelContext";
import { slicedWalletAddress } from "@/utils/slicedWalletAddress";
import WalletConnectModal from "@/utils/walletConnectModal";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import toast from "react-hot-toast";

const percentages = [25, 50, 75, 100];

const Home = () => {
  // Access the context
  const { flDropsBalance, testingFunction } = useFlDropsContext();
  const { walletAddress, isWalletConnected, connectWallet, disconnectWallet } =
    useCustomFuelHook();

  // Local state for stake amount
  const [stakeAmount, setStakeAmount] = useState("");
  const [stakePeriod, setStakePeriod] = useState("");
  // const [stakePeriodInNumbers, setStakePeriodInNumbers] = useState(0);
  const [showWalletConnectModal, setShowWalletConnectModal] = useState(false);
  const [isWalletBtnHovered, setIsWalletBtnHovered] = useState(false);

  // Function to handle percentage input and update the staking amount
  const handlePercentageInput = (percentage: number) => {
    const calculatedAmount = (flDropsBalance * (percentage / 100)).toFixed(2);
    setStakeAmount(calculatedAmount); // Update the state with the calculated stake amount
  };

  //get stake period in Numbers
  const StakePeriodInNumbers = () => {
    if (stakePeriod === "1 day") return 1;
    if (stakePeriod === "5 days") return 5;
    if (stakePeriod === "10 days") return 10;
    return 0;
  };

  // Determine if the stake is valid (minimum 1 FL-Drop)
  const isStakeValid =
    Number(stakeAmount) >= 1 && Number(stakeAmount) <= flDropsBalance;

  const handleStaking = () => {
    if (StakePeriodInNumbers() === 0) return;
    if (!isStakeValid) return;
    console.log("Stake amount: ", stakeAmount);
  };

  const handleDisconnectWallet = async () => {
    await disconnectWallet();
  };

  // Function to handle hover
  const handleMouseEnter = () => {
    setIsWalletBtnHovered(true); // Set hover state to true when the mouse enters the button
  };

  const handleMouseLeave = () => {
    setIsWalletBtnHovered(false); // Set hover state to false when the mouse leaves the button
  };

  //handleCopyAddress
  const handleCopyAddress = () => {
    if (walletAddress.trim() !== "") {
      navigator.clipboard.writeText(walletAddress);
      toast.success("Wallet address copied to clipboard");
    }
  };

  return (
    <div>
      <HeadMetaData pageTitle="FL Ecosystem | Home" />
      <DefaultLayout bottomNav>
        <MainPageContainer>
          <FlexRowItems
            sx={{
              width: "100%",
              height: "60px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                height: "36px",
              }}
            >
              <ConnectedWalletAddress onClick={() => testingFunction()}>
                <AccountBalanceWalletIcon />{" "}
                {slicedWalletAddress(walletAddress)}
              </ConnectedWalletAddress>
              {isWalletBtnHovered && (
                <FlexRowItems
                  sx={{
                    position: "absolute",
                    top: "calc(100%)",
                    right: "0",
                    transition: "all 0.3s ease",

                    svg: {
                      width: "15px",
                      height: "15px",
                      color: "#707070",
                    },
                  }}
                >
                  <StyledIconButton onClick={handleCopyAddress}>
                    <ContentCopyIcon />
                  </StyledIconButton>
                  <StyledIconButton
                    onClick={handleDisconnectWallet}
                    title="disconnect wallet!"
                  >
                    <DeleteIcon />
                  </StyledIconButton>
                </FlexRowItems>
              )}
            </Box>
          </FlexRowItems>

          <Fl_Drop_Container sx={{ mt: 5 }}>
            <h1>{numberWithCommas(flDropsBalance)}</h1>
            <span>FL-Drops</span>
          </Fl_Drop_Container>

          <StakingContainer>
            <h1>Staking</h1>
            <p>
              Lock up a portion of your FL-Drops (at least 1) for a specific
              period to earn rewards.
            </p>
            <label>Stake Period</label>
            <StakePeriodSelect
              stakePeriod={stakePeriod}
              setStakePeriod={setStakePeriod}
            />
            <label style={{ marginTop: "10px" }}>Stake Amount</label>
            <InputField
              sx={{ margin: "auto" }}
              placeholder="Amount to Stake"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            />
            <FlexRowItems sx={{ justifyContent: "space-around" }}>
              {percentages.map((percentage) => {
                const calculatedAmount = flDropsBalance * (percentage / 100);
                return (
                  <MiniBtns
                    key={percentage}
                    onClick={() => handlePercentageInput(percentage)}
                    disabled={calculatedAmount < 1} // Disable button if the calculated amount is less than 1
                  >
                    {percentage}%
                  </MiniBtns>
                );
              })}
            </FlexRowItems>
            <PrimaryButton
              disabled={!isStakeValid || StakePeriodInNumbers() === 0} // Disable stake button if stake amount is less than 1 or more than balance
              onClick={handleStaking}
            >
              Stake
            </PrimaryButton>
            <Box sx={{ height: 100 }} />
          </StakingContainer>
        </MainPageContainer>
        {!isWalletConnected && (
          <WalletConnectModal
            onClose={() => setShowWalletConnectModal(false)}
          />
        )}
      </DefaultLayout>
    </div>
  );
};

export default Home;
