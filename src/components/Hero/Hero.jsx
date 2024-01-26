import React, { useEffect, useState } from "react";
import "./Hero.css";
import logo from "../../assets/png/hftLogoFinal.png";
import aihead from "../../assets/svg/Clip path group.svg";
import { IoLocation } from "react-icons/io5";
import Stars from "../Stars/Stars";
import { FaCalendarAlt } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import { useScreenWidth } from "../../hooks/useScreenWidth";
const calculateTimeLeft = () => {
  let difference = +new Date("2024-02-25T11:00:00+05:30") - +new Date(); // MM/DD/YYYY
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
  const width = useScreenWidth();
  useEffect(() => {
    Aos.init({ duration: 1000 });
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
    <div id="home">
      <div className="hero_gradient"></div>
      <div className="hero_marquee">
        <Marquee autoFill={true}>
          INNOVATE &nbsp;HACK &nbsp;INSPIRE &nbsp;
        </Marquee>
      </div>
      <div className="hero_gradient2"></div>

      <div className="hero__container">
        {width >= 1000 ? <Stars /> : null}
        <div className="hero__content_part">
          <img src={logo} alt="" data-aos="fade-up" />
          <p
            className="hero__location__info"
            onClick={() => {
              window.open("https://maps.app.goo.gl/mtDQQ7EtMdDrWJhE8");
            }}
            data-aos="fade-up"
          >
            <IoLocation size={30} style={{flexShrink:'0'}} /> KSUM, Kalamaserry, Kochi, Kerala
          </p>
          <p className="hero__date_info" data-aos="fade-up">
            <FaCalendarAlt size={30} />
            24th - 25th Feb 2024
          </p>
          <div
            class="apply-button"
            data-hackathon-slug="hft"
            data-button-theme="light"
            style={{
              height: "44px",
              width: "312px",
            }}
          ></div>
          <div className="timer_main_contain">
            <div className="timeer__time_contain">
              <p>{timeLeft.days}</p>
              <p>{timeLeft.hours}</p>
              <p>{timeLeft.minutes}</p>
              <p>{timeLeft.seconds}</p>
            </div>
            <div className="timer__unit_container">
              <p>Days</p>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
        <img src={aihead} alt="" className="ai__head_hero" />
      </div>
    </div>
  );
};

export default Hero;
