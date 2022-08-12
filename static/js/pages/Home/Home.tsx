import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { getEngineInfo } from "utils/contracts";
import { NFTMintEngineDetail } from "utils/typs";
import About from "../../components/About/About";
import FAQ from "../../components/FAQ/FAQ";
import Mint from "../../components/Mint/Mint";
import OurTeam from "../../components/OurTeam/OurTeam";
import RoadMap from "../../components/RoadMap/RoadMap";
import ShuffleImage from "../../components/ShuffleImage/ShuffleImage";
import "./Home.css";

const Home: React.FC = () => {
  const [mintEngineDetail, setMintEngineDetail] =
    useState<NFTMintEngineDetail>(null);
  const { connector, library, chainId, account, active } = useWeb3React();
  useEffect(() => {
    getEngineInfo(chainId, library).then(
      (nftMintEngineDetail: NFTMintEngineDetail) => {
        setMintEngineDetail(nftMintEngineDetail);
      }
    );
  }, [connector, library, account, active, chainId]);

  return (
    <div className="home">
      <ShuffleImage />
      <About />
      <div id="price" className="price-div">
        <h1>
          Every Cool Alien cost {mintEngineDetail?.mintPrice || 0.05} ETH + gas fee
        </h1>
        <h1>{mintEngineDetail?.mintPrice || 0.05} ETH</h1>
      </div>
      <RoadMap />
      <OurTeam />
      <FAQ />
    </div>
  );
};

export default Home;
