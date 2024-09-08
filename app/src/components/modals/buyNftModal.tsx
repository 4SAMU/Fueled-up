/* eslint-disable @next/next/no-img-element */
import { Box, ClickAwayListener, styled } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../layouts/layout-styles";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import { FlexRowItems } from "../main-page/main-page-styles";

interface BuyNftModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const BuyNftModal: React.FC<BuyNftModalProps> = ({ onClose, onConfirm }) => {
  let ethPrice = 0.005;
  let walletBl = 0.01;
  const notEnoughBl = walletBl <= ethPrice;
  return (
    <ClickAwayListener onClickAway={onClose}>
      <ModalContainer>
        <img
          src="https://i.seadn.io/s/raw/files/7bd8be5256d3b4e7cf30e54d9133a513.png?auto=format&dpr=1&w=384"
          alt="Claim Modal"
        />
        <h1>Buy NFT</h1>
        <p>Are you sure you want to buy this NFT?</p>
        <p>
          You will get <span>+500 Fl-drops</span>
        </p>
        {notEnoughBl && (
          <FlexRowItems
            sx={{
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              color: "#707070",
              fontSize: "10px",
              span: {
                cursor: "pointer",
                color: "#ffcc00 !important",
              },
              svg: {
                fontSize: "15px",
                color: "#ffcc00",
              },
            }}
          >
            <ReportProblemRoundedIcon />
            <div>Not enough balance to buy this Nft, topup from, </div>
            <span>here</span>
          </FlexRowItems>
        )}
        <PrimaryButton onClick={onConfirm}>Buy | 0.005 Eth</PrimaryButton>
      </ModalContainer>
    </ClickAwayListener>
  );
};

export default BuyNftModal;

export const ModalContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "20px 0 150px 0",
  borderRadius: "25px 25px 0 0",
  border: "1px solid #1c1f22",
  background: "#0F1214",
  borderBottom: "none",
  width: "calc(100%)",
  minHeight: "200px",
  position: "absolute",
  // zIndex: 1000,
  bottom: "0",

  img: {
    width: "200px",
    height: "200px",
    borderRadius: "20px",
  },

  h1: {
    fontSize: "30px",
    fontWeight: "600",
    color: "#fff",
    letterSpacing: "2.5px",
    fontFamily: "SUSE",
    width: "100%",
    textAlign: "center",
  },
  p: {
    fontSize: "14px",
    fontWeight: "300",
    color: "#707070",
    marginTop: "10px",
  },

  span: {
    color: "#46aa40",
    cursor: "pointer",
  },
}));
