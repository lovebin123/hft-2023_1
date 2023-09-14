import React, { useEffect } from "react";
import "./Hero.css";
import Aos from "aos";
// import hft_logo from "../../assets/svg/hft_logo.svg";
// import Counter from "../Counter/Counter";
// import AnimationComponent from "../AnimationComponent/AnimationComponent";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero__container">
      
      {/* <div className="hero__content">
        <div className="hero__txt">
          <div className="hero__hft_logo">
            <img className="hft__logo" src={hft_logo} alt="hft Logo " />
          </div>
          <div className="hero__df">
            <button className="hero_df_btn" data-aos="zoom-in">
              Go to projects
            </button>
          </div>
        </div>
        <div className="counter">
          <Counter date={`2023-03-18T00:00:00`} />
        </div>
      </div>

      <AnimationComponent /> */}

    </div>
  );
};

export default Hero;
