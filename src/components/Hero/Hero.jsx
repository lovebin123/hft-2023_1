import React, { useState, useEffect } from "react";
import "./Hero.css";
import Aos from "aos";
import hft_logo from "../../assets/svg/hft_logo.svg";
import AnimationComponent from "../AnimationComponent/AnimationComponent";
const calculateTimeLeft = () => {
  let difference = +new Date("2023-11-06T10:00:00+05:30") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
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
          <div className="hero__df">
            <button className="hero_df_btn" data-aos="zoom-in">
              Go to projects
            </button>
          </div>
          <div className="hero__rem_time" data-aos="flip-down">
            <div className="hero__time">
              <div className="time_item hero__days">
                <h3>{timeLeft.days}</h3>
                <p>Days</p>
              </div>
              <div className="time_item hero__hours">
                <h3>{timeLeft.hours}</h3>
                <p>Hours</p>
              </div>
              <div className="time_item hero__mins">
                <h3>{timeLeft.minutes}</h3>
                <p>Mins</p>
              </div>
              <div className="time_item hero__secs">
                <h3>{timeLeft.seconds}</h3>
                <p>Secs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimationComponent/>
    </div>
  );
};

export default Hero;
