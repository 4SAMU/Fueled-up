import React, { useState } from "react";
import { GetStartedContainer, HowITWorksContainer } from "./get-started-styles";
import { Box } from "@mui/material";
import { PrimaryButton } from "../layouts/layout-styles";
import ConnectWallet from "./connect-wallet";
import Link from "next/link";

const GetStarted = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectModal, setConnectModal] = useState(false);

  const [showgetStarted, setShowGetStarted] = useState(true);

  const handleGetStarted = () => {
    setShowGetStarted(!showgetStarted);

    //save state in local storage
    // localStorage.setItem("showGetStarted", JSON.stringify(!showgetStarted));
  };

  return (
    <GetStartedContainer>
      <h1>Welcome to the FL Ecosystem</h1>
      <h2>Earn FL-drop points, stake, mine, and claim FL tokens.</h2>

      <HowITWorksContainer>
        <header>How it works</header>
        <Box className="card">
          <span className="sub_header">Connect Your Wallet</span>
          <p>
            Sign up using your wallet and receive 2000 FL-Drop points as your
            initial bonus!
            <br />
            We recommend using{" "}
            <Link
              href="https://wallet.fuel.network/docs/install/"
              target="_blank"
            >
              <span>Fuel Wallet</span>
            </Link>{" "}
            for the best experience.
          </p>
        </Box>

        <Box className="card">
          <span className="sub_header">Mine and Earn</span>
          <p>
            Explore NFTs, stake your FL-Drops, and accumulate more points. The
            more you interact, the more you earn!
          </p>
        </Box>

        <Box className="card">
          <span className="sub_header">Stake and Grow</span>
          <p>
            Maximize your rewards by staking your FL-Drops for various APY rates
            depending on the staking period.
          </p>
        </Box>

        <Box className="card">
          <span className="sub_header">Claim Your FL Tokens</span>
          <p>
            Once you’ve earned 10,000 FL-Drop points, convert them into FL
            Tokens and withdraw them to your Fuel Wallet.
          </p>
        </Box>

        <PrimaryButton onClick={() => setConnectModal(true)}>
          Get Started
        </PrimaryButton>
      </HowITWorksContainer>
      {connectModal && (
        <ConnectWallet
          onClose={() => setConnectModal(false)}
          isConnected={false}
          setIsConnected={setIsConnected}
          connectModal={connectModal}
          setConnectModal={setConnectModal}
        />
      )}
    </GetStartedContainer>
  );
};

export default GetStarted;
