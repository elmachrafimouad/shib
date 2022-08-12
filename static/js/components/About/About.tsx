import React from "react";
import "./About.css";

import TypographyComponent from "../Typography/Typography";
import gif from "../../assets/images/gif.gif";

const About: React.FC = () => {
  return (
    <div id="about-us" className="about">
      <div className="about-text">
        <h1>What is cool Aliens?</h1>
        <TypographyComponent className="about-text-p">
          <strong>Cool Aliens</strong> is a cool degenerative collection on
          Ethereum Mainnet. The collection consists of 10,000 randomly generated
          <strong> ALIENS</strong> that are created from random hats, glasses,
          shirts, ...
        </TypographyComponent>
        <TypographyComponent className="about-text-p">
          Cool Aliens is a <strong>community of crypto enthusiasts</strong> who
          wanna make NFT much cooler, we are not about money, we are about fun.
          We wanna help a lot of people to make their own dope collectibles like
          this, and this will be possible with help of Governance.
        </TypographyComponent>
        <TypographyComponent className="about-text-p">
          Money earnd from royalty fees will be used to buy floor priced
          CoolAliens and by that rise the price!
        </TypographyComponent>
      </div>
      <img className="gif-img" src={gif} alt="" />
    </div>
  );
};

export default About;
