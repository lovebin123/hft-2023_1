import React, { useEffect } from "react";
import "./Hero.css";
import Marquee from "react-fast-marquee";
import logo from "../../assets/svg/hft_logo.svg";
import aihead from "../../assets/svg/Clip path group.svg";
import { IoLocation } from "react-icons/io5";
const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="hero__container">
      <div className="hero__content">
        <div className="hero_gradient"></div>
        <div className="hero_marquee">
          <Marquee autoFill={true}>
            INNOVATE &nbsp;HACK &nbsp;INSPIRE&nbsp;
          </Marquee>
        </div>
        <div className="hero__hft_logo">
          <div className="hft_logo">
            <img className="hft_logo1" src={logo} alt="hft logo" />

            <div className="hero__df">
              <p
                className="location__info"
                onClick={() => {
                  window.open("https://maps.app.goo.gl/9BpfRfVy34zXQTa19");
                }}
              >
                <IoLocation /> KSUM Cochin
              </p>
              <p className="dte">18th - 19th Nov 2023</p>
              <div
                class="apply-button"
                data-hackathon-slug="hft"
                data-button-theme="light"
                style={{
                  height: "44px",
                  width: "312px",
                }}
              ></div>
            </div>
          </div>
          <img className="hero_aihead" src={aihead} alt="ai_head" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
