import React, { createContext, useContext, useEffect, useState } from "react";
import { Fuel } from "fuels";
import toast from "react-hot-toast";

// Define the shape of the context value
interface FuelContextType {
  fuel: Fuel | null;
  FuelWalletConnectorLoaded: boolean;
  isWalletConnected: boolean;
  setIsWalletConnected: React.Dispatch<React.SetStateAction<boolean>>;
  walletAddress: string;
  connectWallet: () => Promise<boolean>;
  disconnectWallet: () => Promise<boolean>;
  isConnecting?: boolean;
  isDisconnecting?: boolean;
}

// Create the context with a default value of undefined
const FuelContext = createContext<FuelContextType | undefined>(undefined);

// Custom hook to use the Fuel context
export const useCustomFuelHook = () => {
  const context = useContext(FuelContext);
  if (context === undefined) {
    throw new Error("useCustomFuelHook must be used within a FuelProvider");
  }
  return context;
};

export const CustomFuelProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fuel, setFuel] = useState<Fuel | null>(null);
  const [FuelWalletConnectorLoaded, setFuelWalletConnectorLoaded] =
    useState<boolean>(false);
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isDisconnecting, setIsDisconnecting] = useState<boolean>(false);

  useEffect(() => {
    const initializeFuel = async () => {
      const { FuelWalletConnector } = await import("@fuels/connectors");
      const newFuel = new Fuel({
        connectors: [new FuelWalletConnector()],
      });
      setFuel(newFuel);
      setFuelWalletConnectorLoaded(true);
      console.log("Fuel initialized");
    };
    initializeFuel();
  }, []);

  // connect wallet
  const connectWallet = async (): Promise<boolean> => {
    try {
      if (!fuel) return false;
      setIsConnecting(true);

      const hasConnector = await fuel.hasConnector();
      if (hasConnector) {
        const alreadyConnected = await fuel.isConnected();
        setIsWalletConnected(alreadyConnected);

        if (alreadyConnected) {
          toast.success("Wallet already connected");
          setIsConnecting(false);
          return true;
        }

        await fuel.connect();
        setIsWalletConnected(true);
        toast.success("Wallet Connected");
        setIsConnecting(false);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Failed to connect wallet");
      setIsConnecting(false);
      return false;
    }
  };

  // disconnect wallet
  const disconnectWallet = async (): Promise<boolean> => {
    try {
      if (!fuel) return false;
      setIsDisconnecting(true);

      const hasConnector = await fuel.hasConnector();
      if (hasConnector) {
        const isConnected = await fuel.isConnected();
        if (isConnected) {
          await fuel.disconnect();
          setIsWalletConnected(false);
          toast.error("Wallet Disconnected");
          setIsDisconnecting(false);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      toast.error("Failed to disconnect wallet");
      setIsDisconnecting(false);
      return false;
    }
  };

  // get wallet address
  useEffect(() => {
    const getWalletAddress = async () => {
      if (!fuel) return;

      const hasConnector = await fuel.hasConnector();
      if (hasConnector) {
        const isConnected = await fuel.isConnected();
        setIsWalletConnected(isConnected);

        if (isConnected) {
          const accounts = await fuel.accounts();
          setWalletAddress(accounts[0]);
        }
      }
    };
    getWalletAddress();
  }, [fuel, isWalletConnected]);

  return (
    <FuelContext.Provider
      value={{
        fuel,
        FuelWalletConnectorLoaded,
        isWalletConnected,
        setIsWalletConnected,
        walletAddress,
        connectWallet,
        disconnectWallet,
        isConnecting,
        isDisconnecting,
      }}
    >
      {children}
    </FuelContext.Provider>
  );
};
