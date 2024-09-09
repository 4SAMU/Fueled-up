import React, { createContext, useContext, useState } from "react";

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
  const [flDropsBalance, setFlDropsBalance] = useState(200000);

  return (
    <FlDropsContext.Provider value={{ flDropsBalance, setFlDropsBalance }}>
      {children}
    </FlDropsContext.Provider>
  );
};

export default FlDropsProvider;
