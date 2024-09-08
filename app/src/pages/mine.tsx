/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
import HeadMetaData from "@/components/headMetadata";
import DefaultLayout from "@/components/layouts";
import {
  MiningPageContainer,
  NftCard,
  NftCardContainer,
  TabButton,
  TabsContainer,
} from "@/components/mining-page/mining-styles";
import { Box, Divider } from "@mui/material";
import MintNft from "@/components/mining-page/mint-nft";
import BuyNftModal from "@/components/modals/buyNftModal";

const Mine = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [indicatorProps, setIndicatorProps] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]); // Create a ref array for tabs
  const [buyNftModalOpen, setBuyNftModalOpen] = useState(false);

  const handleBuyNftModalOpen = () => {
    setBuyNftModalOpen(true);
  };

  const TabsData = [
    {
      title: "Buy",
      content: "Buy NFTs",
    },
    {
      title: "My NFTs",
      content: "My NFTs",
    },
    {
      title: "Mint",
      content: "Mint NFTs",
    },
  ];

  useEffect(() => {
    // Update the position of the indicator when the activeTabIndex changes
    if (tabRefs.current[activeTabIndex]) {
      const tab = tabRefs.current[activeTabIndex];
      if (tab) {
        const rect = tab.getBoundingClientRect();
        setIndicatorProps({
          left: rect.left - 20, // Adjust as needed
          width: rect.width,
        });
      }
    }
  }, [activeTabIndex]);

  return (
    <div>
      <HeadMetaData pageTitle="FL Ecosystem | Mining FL with NFTs" />
      <DefaultLayout bottomNav>
        <MiningPageContainer>
          <TabsContainer indicatorProps={indicatorProps}>
            {TabsData.map((tab, index) => (
              <TabButton
                key={index}
                onClick={() => setActiveTabIndex(index)}
                ref={(el: any) => (tabRefs.current[index] = el)} // Assign ref to each tab
                className={`${activeTabIndex === index ? "active" : ""}`}
              >
                {tab.title}
              </TabButton>
            ))}
          </TabsContainer>
          {activeTabIndex === 0 && (
            <>
              <NftCardContainer>
                {[...Array(20)].map((_, index) => (
                  <NftCard key={index} onClick={handleBuyNftModalOpen}>
                    <img
                      src="https://i.seadn.io/s/raw/files/7bd8be5256d3b4e7cf30e54d9133a513.png?auto=format&dpr=1&w=384"
                      alt="nft"
                    />
                    <span className="nft_name">Garage Setup</span>
                    <span className="points_to_mine">+500</span>
                    <Divider sx={{ background: "#707070", width: "100%" }} />
                    <span className="price">0.0005 Eth</span>
                  </NftCard>
                ))}
              </NftCardContainer>
              {buyNftModalOpen && (
                <BuyNftModal
                  onClose={() => setBuyNftModalOpen(false)}
                  onConfirm={() => setBuyNftModalOpen(false)}
                />
              )}
            </>
          )}
          {activeTabIndex === 1 && <></>}
          {activeTabIndex === 2 && <MintNft />}
        </MiningPageContainer>
      </DefaultLayout>
    </div>
  );
};

export default Mine;
