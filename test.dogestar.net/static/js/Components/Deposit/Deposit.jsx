import React, { useState } from "react";
import Countdown from "../Countdown/Countdown";
import CustomButton from "../UI/Button/CustomButton";
import classes from "./Deposit.module.css";
import FormDeposit from "./FormDeposit/FormDeposit";
import { useSelector, useDispatch } from "react-redux";
import { initAction } from "../../Redux/reduxActions";
import { cx } from "../../Utils/classnames";

const Deposit = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  let { user, contract } = useSelector((state) => state.common);

  const handleClick = async (type) => {
    setIsLoading(true);
    let receipt = await dispatch(initAction(type));
    if (receipt) {
      console.log(receipt);
    }
    setIsLoading(false);
  };

  const canWithdraw = () => {
    let { unlockDate, lockDate } = contract;

    if (unlockDate < lockDate) {
      return Date.now() > unlockDate && Date.now() < lockDate;
    } else if (unlockDate > lockDate) {
      return Date.now() < lockDate;
    } else {
      return false;
    }
  };
  return (
    <div className={classes.main}>
      {canWithdraw() ? (
        <>
          <h2>Withdrawal closes in:</h2>
          <Countdown
            date={new Date(contract.lockDate ? contract.lockDate : 0)}
          />
        </>
      ) : (
        <>
          <h2>Time till Withdrawal:</h2>
          <Countdown
            date={new Date(contract.unlockDate ? contract.unlockDate : 0)}
          />
        </>
      )}

      <div className={classes.actions}>
        <CustomButton
          onClick={() => handleClick("CLAIM")}
          disabled={user.deposits <= 0 || isLoading}
          text="Claim"
          variant="secondary"
        />
        <CustomButton
          onClick={() => handleClick("ROLL")}
          disabled={user.deposits <= 0 || isLoading}
          text="Compound"
          variant="secondary"
        />
        <a
          className={cx(classes.main, classes.secondary)}
          target="_blank"
          href="https://pancakeswap.finance/swap?outputCurrency=0xc865A5938EdA8B5f6629A17fc066D74bB20Ab85d"
        >
          <CustomButton text="Buy DOGE STAR" variant="secondary" />
        </a>
        {/* <CustomButton text="Unstake" variant="secondary" /> */}
      </div>
      <FormDeposit canWithdraw={canWithdraw} />
    </div>
  );
};

export default Deposit;
