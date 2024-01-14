import React from "react";
import "./Partners.css";
import replit from "../../assets/png/replit.png";
import zilmoney from "../../assets/png/zilmoney1.png";
import devfolio from "../../assets/png/devfolio.png";
import polygon from "../../assets/png/polygon.png";
import Stars from "../Stars/Stars";
const Partners = () => {
  return (
    <div className="partners__main__contain">
      <Stars />
      <h1 className="section__title">Partners</h1>
      <div className="partners__contain">
        <div className="partners__titlep">
          <a href="https://zilmoney.com/" target="_blank" rel="noreferrer">
            <img src={zilmoney} alt="DEVFOLIO LOGO" />
            <p>Title Partner</p>
          </a>
        </div>
        <div className="partners__gold">
          <a href="https://devfolio.co" target="_blank" rel="noreferrer">
            <img src={devfolio} alt="DEVFOLIO LOGO" />
            <p>Gold Partner</p>
          </a>
          <a
            href="https://polygon.technology/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={polygon} alt="POLYGON LOGO" />
            <p>Gold Partner</p>
          </a>
          <a href="https://replit.com " target="_blank" rel="noreferrer">
            <img src={replit} alt="REPLIT LOGO" />
            <p>Gold Partner</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
