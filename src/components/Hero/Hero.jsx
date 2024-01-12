import React, { useEffect } from "react";
import "./Hero.css";
import aiHead from "../../assets/png/aiheadLanding.png";
import htfLogo from "../../assets/png/hft_logo.png";
import Stars from "../Stars/Stars";
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
    <div className="hero__main__contain">
     <Stars/>
        <div className="hero__hft">
          <img src={htfLogo} alt="" />
          <p>3rd - 8th February 2024</p>
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
        
        <img src={aiHead} alt="" />
      
    </div>
  );
};

export default Hero;
