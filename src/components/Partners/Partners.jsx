import React from "react";
import "./Partners.css";
import replit from "../../assets/png/replit.png";
import devfolio from "../../assets/png/devfolio.png";
import polygon from "../../assets/png/polygon.png";
import Stars from "../Stars/Stars";
const Partners = () => {
  return (
    <div className="partners__main__contain">
      <Stars/>
      <h1 className="section__title">Partners</h1>
      <div className="partners__contain">
        <a href="https://devfolio.co">
          <img src={devfolio} alt="DEVFOLIO LOGO" />
          <p>Gold Partner</p>
        </a>
        <a href="https://polygon.technology/">
          <img src={polygon} alt="POLYGON LOGO" />
          <p>Gold Partner</p>
        </a>
        <a href="https://replit.com ">
          <img src={replit} alt="REPLIT LOGO" />
          <p>Gold Partner</p>
        </a>
      </div>
    </div>
  );
};

export default Partners;
