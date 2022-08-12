import React from "react";
import "./Navbar.css";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButtonComponent from "../Button/Button";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);

  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="nav-bar">
        <div>
          <h1 className="nav-logo" data-aos="zoom-in">
            CoolAliens
          </h1>
          <div className="nav-links">
            <ButtonComponent className="link-btn" label="Mint" />
            <Link smooth={true} duration={1000} to="about-us">
              <ButtonComponent className="link-btn" label="About Us" />
            </Link>
            <Link smooth={true} duration={1000} to="price">
              <ButtonComponent className="link-btn" label="Price" />
            </Link>
          </div>
          <div className="external-link">
            <a href="https://twitter.com/aliens_nft">
              <Twitter />
            </a>
            <a href="https://discord.com/invite/BSv6Gc73Ve">
              <Discord />
            </a>
          </div>
        </div>
      </div>
      <h1 className="side-menu-logo" data-aos="zoom-in">
        CoolAliens
      </h1>
      <div className="slide-menu">
        {menu && <div className="backdrop-back"></div>}
        <Menu className="slide-menu-icon" onClick={() => setMenu(true)} />
        <div className="external-link-side-menu">
          <a href="https://twitter.com/aliens_nft">
            <Twitter />
          </a>
          <a href="https://discord.com/invite/BSv6Gc73Ve">
            <Discord />
          </a>
        </div>
        {menu && (
          <div
            data-aos="slide-right"
            className={menu ? "menu-content active" : "menu-content"}
          >
            <Close
              onClick={() => setMenu(false)}
              className={menu ? "close-icon" : "close-icon active"}
            />
            <ButtonComponent className="link-btn" label="Mint" />
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="link-btn"
              label="About Us"
            />
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="link-btn"
              label="Price"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
