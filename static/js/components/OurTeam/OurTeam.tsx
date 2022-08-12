import React from "react";
import HeadLine from "../HeadLine/HeadLine";
import "./OurTeam.css";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import gif2 from "../../assets/images/gif2.png";

const OurTeam: React.FC = () => {
  return (
    <div className="our-team">
      <HeadLine headline="Our Team" />
      <div className="team-wrapper">
        <div>
          <img src={team1} alt="" />
          <p>Pixie Beard</p>
          <span>Founder</span>
        </div>
        <div>
          <img src={team2} alt="" />
          <p>John D0E</p>
          <span>Head of marketing</span>
        </div>
        <div>
          <img src={team3} alt="" />
          <p>Nico Jones</p>
          <span>Developer</span>
        </div>
        <div>
          <img className="lemon-blockchain" src={gif2} alt="" />
          <p>Lemon Crypto</p>
          <span>Blockchain Developer</span>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
