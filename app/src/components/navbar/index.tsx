import React, { useEffect, useState } from "react";
import { BottomNavContainer, IconAndText } from "./navbar-styles";
import HomeIcon from "@mui/icons-material/HomeRounded";
import WalletIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ClaimIcon from "@mui/icons-material/RequestPageOutlined";
import { useRouter } from "next/router";
import MiningIcon from "../../../public/navbar/MiningIcon";
import StakingIcon from "../../../public/navbar/StakingIcon";

const BottomNav = () => {
  const [activeBottomNav, setActiveBottomNav] = useState("Home");
  const router = useRouter();

  const ClaimCondition = false;

  const buttonsData = [
    {
      icon: <HomeIcon />,
      text: "Home",
      route: "/home",
      disabled: false,
    },
    {
      icon: <MiningIcon fillColor="#fff" />,
      text: "Mine",
      route: "/mine",
      disabled: false,
    },
    {
      icon: <ClaimIcon />,
      text: "Claim",
      route: "/claim",
      disabled: ClaimCondition,
    },
    // {
    //   icon: <StakingIcon fillColor="#fff" />,
    //   text: "Stake",
    //   route: "/Stake",
    //   disabled: true,
    // },
    {
      icon: <WalletIcon />,
      text: "Wallet",
      route: "/wallet",
      disabled: true,
    },
  ];

  const handleNavClick = (text: string, route: string, disabled: boolean) => {
    if (!disabled) {
      setActiveBottomNav(text);
      router.push(route);
    }
  };

  //useEffect to set the active bottom nav based on the route
  useEffect(() => {
    const currentRoute = router.pathname;
    const currentButton = buttonsData.find(
      (button) => button.route === currentRoute
    );
    if (currentButton) {
      setActiveBottomNav(currentButton.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return (
    <BottomNavContainer>
      {buttonsData.map((button, index) => (
        <IconAndText
          key={index}
          className={activeBottomNav === button.text ? "active" : ""}
          onClick={() =>
            handleNavClick(button.text, button.route, button.disabled)
          }
          style={{
            cursor: button.disabled ? "not-allowed" : "pointer",
            opacity: button.disabled ? 0.1 : 1,
            // pointerEvents: button.disabled ? "none" : "auto",
          }}
        >
          {button.icon}
          <span>{button.text}</span>
        </IconAndText>
      ))}
    </BottomNavContainer>
  );
};

export default BottomNav;
