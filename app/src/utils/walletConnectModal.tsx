//high order component for wallet connect modal
//to use with any component
/**eg:

 * const Component = () => {}
 * export default WalletConnectModal(Component)
 * 
 * */

import { PrimaryButton } from "@/components/layouts/layout-styles";
import { useCustomFuelHook } from "@/contexts/useFuelContext";
import { Box } from "@mui/material";
import React from "react";
import Loader from "./loader";

interface WalletConnectModalProps {
  onClose: () => void;
}

const WalletConnectModal: React.FC<WalletConnectModalProps> = ({ onClose }) => {
  const { isConnecting, isWalletConnected, connectWallet } =
    useCustomFuelHook();

  const handleWalletConnection = async () => {
    try {
      if (!isWalletConnected) {
        const connected = await connectWallet();
        if (connected) {
          // close modal if wallet connected successfully
          onClose();
        }
      }
    } catch (error) {
      console.error("Error handling wallet connection:", error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#0F1214",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1c1f22",
          borderRadius: "10px",
        }}
      >
        <PrimaryButton
          sx={{ padding: "0 20px" }}
          onClick={() => handleWalletConnection()}
        >
          {isConnecting ? <Loader /> : "Connect Wallet"}
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default WalletConnectModal;
