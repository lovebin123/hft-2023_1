import React from "react";
import "./Hero.css";
import Aos from "aos";
import { useEffect } from "react";
import hft_logo from "../../assets/svg/hft_logo.svg";
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="hero__container">
      <div className="hero__content">
        <div className="hero__txt">
          <div className="hero__hft_logo">
            <img className="hft__logo" src={hft_logo} alt="hft Logo " />
          </div>

          <button className="hero_df_btn" data-aos="zoom-in">
            Go to projects
          </button>

          <div className="hero__rem_time" data-aos="flip-down">
            <div className="hero__time">
              <div className="time_item hero__days">
                <h3>98</h3>
                <p>Days</p>
              </div>
              <div className="time_item hero__hours">
                <h3>21</h3>
                <p>Hours</p>
              </div>
              <div className="time_item hero__mins">
                <h3>16</h3>
                <p>Mins</p>
              </div>
              <div className="time_item hero__secs">
                <h3>26</h3>
                <p>Secs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
