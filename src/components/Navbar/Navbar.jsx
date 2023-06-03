import React from "react";
import "./Navbar.css";
import mec_logo from "../../assets/svg/mec_logo.svg";
import excel_logo from "../../assets/svg/excel23_logo.svg";
import navBg from "../../assets/svg/hero_nav.svg";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__bg">
        <img src={navBg} alt="bg" />
      </div>
      <div className="navbar__content">
        <div className="navbar__excel">
          <img src={excel_logo} alt="excel_logo" />
        </div>
        <div className="navbar__links">
          <div className="navbar__item">
            <a href="/" className="navbar__link">
              About
            </a>
          </div>
          <div className="navbar__item">
            <a href="/" className="navbar__link">
              Why Participate
            </a>
          </div>
          <div className="navbar__item">
            <a href="/" className="navbar__link">
              Timeline
            </a>
          </div>
          <div className="navbar__item">
            <a href="/" className="navbar__link">
              Prizes
            </a>
          </div>
          <div className="navbar__item5">
            <a href="/" className="navbar__link">
              {" "}
              Contact
            </a>
          </div>
        </div>
        <div className="navbar__mec">
          <img src={mec_logo} alt="mec_logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
