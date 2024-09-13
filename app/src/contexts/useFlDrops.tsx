import React, { createContext, useContext, useState } from "react";
import { useCustomFuelHook } from "./useFuelContext";
import { Address } from "fuels";

// Define the shape of the context
interface FlDropsContextProps {
  flDropsBalance: number;
  setFlDropsBalance: React.Dispatch<React.SetStateAction<number>>;
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
  //context
  const { fuel, walletAddress, isWalletConnected } = useCustomFuelHook();

  //local state
  const [flDropsBalance, setFlDropsBalance] = useState(200000);

  //transfer flDrops to wallet address
  const transferFlDrops = async (amount: number) => {
    try {
      if (!fuel) return;

      // Create a Wallet instance from the current account
      const wallet = await fuel.getWallet(walletAddress);
      const toAddress = Address.fromString(
        "fuel1zwq99q9pwztxpeq2czv9qxwatc92c29km55e5csmzgljqx7wepmsk0neq9"
      );

      console.log("Wallet address:", toAddress);
    } catch (error) {
      console.error("Error transferring flDrops:", error);
    }
  };

  if (isWalletConnected) {
    transferFlDrops(100);
  }

  return (
    <FlDropsContext.Provider value={{ flDropsBalance, setFlDropsBalance }}>
      {children}
    </FlDropsContext.Provider>
  );
};

export default FlDropsProvider;
