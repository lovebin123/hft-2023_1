import React, { useEffect, useState } from "react";
import "./Hero.css";
import logo from "../../assets/png/hftLogo.png";
import aihead from "../../assets/svg/Clip path group.svg";
import { IoLocation } from "react-icons/io5";
import Stars from "../Stars/Stars";
import { FaCalendarAlt } from "react-icons/fa";
const calculateTimeLeft = () => {
  let difference = +new Date("2024-02-03T11:00:00+05:30") - +new Date(); // MM/DD/YYYY
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
      {/* <Stars/> */}
      <div className="hero__content_part">
        <img src={logo} alt="" />
        <p className="hero__location__info"><IoLocation/> Kerala Startup Mission,Kalamassery, Kochi, Kerala</p>
        <p className="hero__date_info"><FaCalendarAlt/>3rd - 4th Feb 2024</p>
        <div
          class="apply-button"
          data-hackathon-slug="hft"
          data-button-theme="light"
          style={{
            height: "44px",
            width: "312px",
          }}
        ></div>
        <div className="timer__hero_holder">
          <div className="time__value_container">
            <p>22</p>
            <p>22</p>
            <p>22</p>
            <p>22</p>
          </div>
          <div className="time__unit__container">
            <p>Days</p>
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
      {/* <img src={aihead} alt="" className="ai__head_hero" /> */}
    </div>
  );
};

export default Hero;
