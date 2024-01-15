import React, { useEffect } from "react";
import "./WhyPrtcpt.css";
import Aos from "aos";
import { BsPeopleFill, BsTrophyFill, BsCodeSquare } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaChalkboardTeacher } from "react-icons/fa";
import Stars from "../Stars/Stars";
const WhyPrtcpt = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div className="y_partcipate__container" id="whyprtcipate">
      <Stars />
      <h1 className="section__title">Why Participate</h1>
      <div className="y_ppt_content">
        <div className="yppt_card_and_image" aos-delay="200" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <BsPeopleFill size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              <b>Direct Entry to the finals of IBeTo’23!</b>: The top 3
              finalists get direct entry to the finals of Excels national level
              innovation competition IBeTo’23.
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <BsTrophyFill size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              <b>Payday!</b> :Get your hands on thrilling cash rewards from a
              prize pool of ₹ 50,000.
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" aos-delay="250" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <AiFillGift size={90} />
          </div>

          <div className="y_ppt_card">
            <p>
              <b>Goodies</b> : Swags, Stickers, Redbull, Munchies and an
              Experience of a lifetime!
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" aos-delay="300" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <HiOutlineComputerDesktop size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              <b>The People!</b> :Join forces and network with some of the
              nation's top thinkers.
            </p>
          </div>
        </div>
        <div className="yppt_card_and_image" aos-delay="300" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <FaChalkboardTeacher  size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              <b>Of Course, Us </b>:Mentor support throughout the hackathon to
              supercharge your experience
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" aos-delay="350" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <BsCodeSquare size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              <b>The Wowza </b> :Build and learn new cool stuff amongst the best
              innovators from all around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPrtcpt;
