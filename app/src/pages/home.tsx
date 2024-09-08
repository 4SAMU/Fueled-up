import MainPage from "@/components/main-page";
import HeadMetaData from "@/components/headMetadata";
import DefaultLayout from "@/components/layouts";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeadMetaData pageTitle="FL Ecosystem | Home" />
      <DefaultLayout bottomNav>
        <MainPage />
      </DefaultLayout>
    </div>
  );
};

export default Home;
