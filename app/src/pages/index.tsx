import { useState } from "react";
import GetStarted from "@/components/get-started";
import DefaultLayout from "@/components/layouts";
import HeadMetaData from "@/components/headMetadata";

export default function GettingStarted() {
  const [showgetStarted, setShowGetStarted] = useState(true);

  const handleGetStarted = () => {
    setShowGetStarted(!showgetStarted);

    //save state in local storage
    // localStorage.setItem("showGetStarted", JSON.stringify(!showgetStarted));
  };

  return (
    <>
      <HeadMetaData pageTitle="FL Ecosystem | Getting Started" />
      <DefaultLayout>{showgetStarted && <GetStarted />}</DefaultLayout>
    </>
  );
}
