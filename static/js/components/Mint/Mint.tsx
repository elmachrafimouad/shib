import React, { useEffect, useState } from "react";
import "./Mint.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import HeadLine from "../HeadLine/HeadLine";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { NFTMintEngineDetail } from "utils/typs";
import { getEngineInfo, purchase } from "utils/contracts";
import { useWeb3React } from "@web3-react/core";
import toast from "react-hot-toast";
import ButtonComponent from "components/Button/Button";
import Timer from "components/Timer/Timer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& .MuiBadge-root": {
        marginRight: theme.spacing(4),
      },
    },
    buttonStyle: {
      boxShadow: "0 1px 2px 2px #0ac2b9",
      background: "#26016f",
      color: "white",
      fontWeight: "bolder",
      width: "25px",
      height: "25px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#705bb6",
      },
      "&:disabled": {
        color: "#00FF3A",
      },
    },
    rootButton: {
      background: "#26016f ",
      borderRadius: 8,
      border: 0,
      color: "white",
      fontWeight: "bolder",
      fontSize: "1.6vmax",
      height: 50,
      padding: "0 30px",
      boxShadow: "0 1px 2px 2px #0ac2b9",
      "&:hover": {
        backgroundColor: "#705bb6",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })
);

const Mint: React.FC = () => {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

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

  const mintTokens = async () => {
    if (count <= 0) {
      toast.error("Mint Count should be over than 0");
      return;
    }
    const load_toast_id = toast.loading("Plesae wait for Mint...");
    try {
      const bSuccess = await purchase(chainId, library.getSigner(), count);
      if (bSuccess) {
        toast.success("Mint Success!");

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.error("Mint Failed!");
      }
    } catch (error) {
      toast.error("Mint Failed!");
    }
    toast.dismiss(load_toast_id);
  };

  return (
    <div style={{ margin: "10vh 0 5vh 0" }}>
      <div className="mint-component">
        <div className="counter-button-container">
          <h1>Mint your Non-Fungible CoolAliens</h1>
          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2vh",
            }}
          >
            <div className={classes.root}>
              <div>
                <ButtonGroup
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "3vw",
                  }}
                >
                  <Button
                    className={classes.buttonStyle}
                    aria-label="reduce"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                    disabled={count === 0}
                  >
                    <RemoveIcon
                      style={{ fontWeight: "bolder", fontSize: "1.6vmax" }}
                    />
                  </Button>
                  <Button
                    disabled
                    style={{
                      boxShadow: "0 1px 2px 2px #0ac2b9",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 10px",
                      background: "#26016f",
                      color: "white",
                      fontSize: "1.3vmax",
                      fontWeight: "bolder",
                      borderRadius: "8px",
                    }}
                  >
                    {count}
                  </Button>
                  <Button
                    className={classes.buttonStyle}
                    aria-label="increase"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    disabled={count === (mintEngineDetail?.purchaseLimit || 20)}
                  >
                    <AddIcon
                      style={{ fontWeight: "bold", fontSize: "1.5vmax" }}
                    />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <Button
              classes={{
                root: classes.rootButton,
                label: classes.label,
              }}
              onClick={mintTokens}
            >
              Mint
            </Button>
          </div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              boxShadow: "0px 0px 10px 5px #71639ea8",
              borderRadius: "5px",
              margin: "2vh 0 1vh 0",
            }}
          >
            {/* <span style={{ marginRight: "5vw" }}>
              Minted {mintEngineDetail?.totalSupply || 0} /{" "}
              {mintEngineDetail?.maxSupply || 10000}
            </span> */}
            <span>{mintEngineDetail?.mintPrice || 0.05} ETH per Mint</span>
          </div>
        </div>
        {/* <div className="counter-div quantity-address">
          <span>Contract address : </span>
        </div> */}
        <Timer mintStartAt={1631487600} />
      </div>
    </div>
  );
};

export default Mint;
