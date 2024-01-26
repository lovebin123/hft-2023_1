import React from "react";
import "./Partners.css";
import replit from "../../assets/png/replit_dark.png";
import zilmoney from "../../assets/png/zilmoney1.png";
import devfolio from "../../assets/png/devfolio.png";
import polygon from "../../assets/png/polygon.png";
import Stars from "../Stars/Stars";
import ksum from '../../assets/png/ksum.png'
import wolfram from '../../assets/png/wolfram1.png'
const Partners = () => {
  return (
    <div className="partners__main__contain">
      <Stars />
      <h1 className="section__title">Partners</h1>
      <div className="partners__contain">
        <div className="partners__titlep">
          <a
            href="https://zilmoney.com/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
          >
            <img src={zilmoney} alt="DEVFOLIO LOGO" />
            <p>Title Partner</p>
          </a>
          
        </div>
        <div className="partners__gold">
        <a
            href="https://startupmission.kerala.gov.in/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
          >
            <img src={ksum} alt="KSUM LOGO" />
            <p>Association Partner</p>
          </a>
          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
          >
            <img src={devfolio} alt="DEVFOLIO LOGO" />
            <p>Gold Partner</p>
          </a>
          <a
            href="https://polygon.technology/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
          >
            <img src={polygon} alt="POLYGON LOGO" />
            <p>Gold Partner</p>
          </a>
          <a
            href="https://replit.com "
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
          >
            <img src={replit}  height={"77rem"}  alt="REPLIT LOGO" />
            <p>Gold Partner</p>
          </a>
          <a
            href="https://www.wolframalpha.com/ "
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
          >
            <div className="wolfram">
              <img src={wolfram}></img>
            </div>
            <p>Gold Partner</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
