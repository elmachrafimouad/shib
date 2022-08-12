import React, { useEffect, useState } from "react";

import "./ShuffleImage.css";

import ButtonComponent from "../Button/Button";
import useAuth from "hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import { truncateWalletString } from "utils";
import Mint from "components/Mint/Mint";

const ShuffleImage: React.FC = () => {
  const { login } = useAuth();
  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();
  useEffect(() => {
    const isLoggedin =
      account &&
      active &&
      chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    if (isLoggedin) {
    }
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  const loginMetaMask = () => {
    login(1);
  };
  return (
    <div style={{ height: "63vh" }}>
      <Mint />
      <ButtonComponent
        onClickFun={loginMetaMask}
        className="connect-wallet"
        label={loginStatus ? truncateWalletString(account) : "Connect Wallet"}
      />
    </div>
  );
};

export default ShuffleImage;
