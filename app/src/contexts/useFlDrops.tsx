import React, { createContext, useContext, useState } from "react";
import { useCustomFuelHook } from "./useFuelContext";
import { Address, Contract, Provider, Wallet, WalletLocked } from "fuels";
import rewardPointsAbi from "../contracts-abi/reward-points-abi.json";

// Define the shape of the context
interface FlDropsContextProps {
  flDropsBalance: number;
  setFlDropsBalance: React.Dispatch<React.SetStateAction<number>>;
  rewardPointsContractId: string;
  FLTokenContractId: string;
  nftContractId: string;
  contractOwner?: string;
  testingFunction?: any;
}

// Create the context with a default value
const FlDropsContext = createContext<FlDropsContextProps | undefined>(
  undefined
);

// Custom hook to access the context
export const useFlDropsContext = () => {
  const context = useContext(FlDropsContext);
  if (!context) {
    throw new Error("useFlDropsContext must be used within a FlDropsProvider");
  }
  return context;
};

// Context provider component
const FlDropsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const rewardPointsContractId =
    "0xc14c9a4ee7764c6a4055b36ec24fee4c992cd80b2b97f97306874a93d1081ec9";
  const FLTokenContractId = "0x0987654321";
  const nftContractId = "0x1357924680";
  const FUEL_NETWORK_URL = "https://testnet.fuel.network";

  let PRIVATE_KET = process.env.PRIVATE_KEY || "";

  //context
  const { fuel, walletAddress, isWalletConnected } = useCustomFuelHook();

  //local state
  const [flDropsBalance, setFlDropsBalance] = useState(200000);

  const TESTNET_NETWORK_URL = "https://testnet.fuel.network/v1/graphql";

  //signing a transaction
  async function testingFunction() {
    try {
      // console.log("Request signature of message!");
      // const wallet = await fuel?.getWallet(walletAddress);
      // if (!wallet) {
      //   throw new Error(
      //     "Current wallet is not authorized for this connection!"
      //   );
      // }

      // const signedMessage = await wallet.signMessage("");
      // console.log("Message signature", signedMessage);

      const provider = await Provider.create(TESTNET_NETWORK_URL);

      if (!PRIVATE_KET) return;

      const walletThis = Wallet.fromPrivateKey(PRIVATE_KET, provider);
      const contract = new Contract(
        rewardPointsContractId,
        rewardPointsAbi,
        walletThis
      );

      const user = walletAddress;
      const points = 2000;
      const res = await contract.functions.award_points(user, points).call();

      console.log("Wallet", res);
    } catch (error) {
      console.error("Error signing message:", error);
    }
  }

  //award points

  return (
    <FlDropsContext.Provider
      value={{
        flDropsBalance,
        setFlDropsBalance,
        rewardPointsContractId,
        FLTokenContractId,
        nftContractId,
        contractOwner: "",
        testingFunction,
      }}
    >
      {children}
    </FlDropsContext.Provider>
  );
};

export default FlDropsProvider;
