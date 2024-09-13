import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface HeadMetaDataProps {
  pageTitle: string;
}

let title = "FL Ecosystem | Home";
let DESCRIPTION = "FL Ecosystem";
let LOGO_URL = "/favicon.ico";

const HeadMetaData: React.FC<HeadMetaDataProps> = ({ pageTitle }) => {
  const router = useRouter();
  const ogUrl = router.pathname ? router.pathname : "";
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : title}</title>
        <meta name="description" content="FL Ecosystem" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={LOGO_URL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@flecosystem" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={LOGO_URL} />
      </Head>
    </>
  );
};

export default HeadMetaData;
