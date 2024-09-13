import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FuelProvider } from "@fuels/react";
import {
  FueletWalletConnector,
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
} from "@fuels/connectors";
import FlDropsProvider from "@/contexts/useFlDrops";
import { FuelConnector } from "fuels";
import { CustomFuelProvider } from "@/contexts/useFuelContext";
import { Toaster } from "react-hot-toast";

// Types for page and layout props
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [isMounted, setIsMounted] = useState(false);

  const queryClient = new QueryClient();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return;
  }

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CustomFuelProvider>
          <FlDropsProvider>
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "#1c1f22",
                  borderRadius: "4px",
                  // border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  color: "#fff",
                },
              }}
            />
            {getLayout(<Component {...pageProps} />)}
          </FlDropsProvider>
        </CustomFuelProvider>
      </QueryClientProvider>
    </>
  );
}
