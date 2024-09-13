import { useEffect, useState } from "react";
import GetStarted from "@/components/get-started";
import DefaultLayout from "@/components/layouts";
import HeadMetaData from "@/components/headMetadata";
import { useCustomFuelHook } from "@/contexts/useFuelContext";
import { useRouter } from "next/router";

export default function GettingStarted() {
  const { isWalletConnected, walletAddress } = useCustomFuelHook();
  const router = useRouter();

  //router to /home if wallet is connected
  useEffect(() => {
    if (isWalletConnected) {
      router.push("/home");
    }
  }, [isWalletConnected, router]);

  return (
    <>
      <HeadMetaData pageTitle="FL Ecosystem | Getting Started" />
      <DefaultLayout>
        <GetStarted />
      </DefaultLayout>
    </>
  );
}
