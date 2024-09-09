import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FuelProvider } from "@fuels/react";
import { defaultConnectors } from "@fuels/connectors";
import FlDropsProvider from "@/contexts/flDrops";

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
      {/* <QueryClientProvider client={queryClient}>
      <FuelProvider
      fuelConfig={{ connectors: defaultConnectors({ devMode: false }) }}
      > */}
      <FlDropsProvider>
        {getLayout(<Component {...pageProps} />)}
      </FlDropsProvider>
      {/* </FuelProvider>
      </QueryClientProvider> */}
    </>
  );
}
