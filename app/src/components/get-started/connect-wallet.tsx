import React from "react";
import { HowITWorksContainer } from "./get-started-styles";
import { Box, ClickAwayListener } from "@mui/material";
import { PrimaryButton } from "../layouts/layout-styles";
import Link from "next/link";
import { useRouter } from "next/router";

interface ConnectWalletProps {
  onClose: () => void;
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  connectModal: boolean;
  setConnectModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
  onClose,
  connectModal,
  setConnectModal,
}) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 999,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: "0 25px",
        backdropFilter: "blur(2.5px)",
      }}
    >
      <ClickAwayListener onClickAway={onClose}>
        <HowITWorksContainer
          sx={{
            ".sub_header": {
              fontSize: "18px",
              fontWeight: "500",
              color: "#46aa40",
            },
            span: {
              fontSize: "14px",
              fontWeight: "300",
            },
          }}
        >
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
            <PrimaryButton
              sx={{
                marginTop: "20px",
                height: "35px",
                fontWeight: "400",
              }}
              onClick={() => router.push("/home")}
            >
              Connect Wallet
            </PrimaryButton>
          </Box>
        </HowITWorksContainer>
      </ClickAwayListener>
    </Box>
  );
};

export default ConnectWallet;
