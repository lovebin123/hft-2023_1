import React, { useEffect } from "react";
import "./Hero.css";
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
    <div className="hero__contain_main">
      <h1 className="section__title">Hack For Tomorrow</h1>
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
  );
};

export default Hero;
