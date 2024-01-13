import React, { useEffect } from "react";
import "./WhyPrtcpt.css";
import Aos from "aos";
import { BsPeopleFill, BsTrophyFill, BsCodeSquare } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Stars from "../Stars/Stars";
const WhyPrtcpt = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div className="y_partcipate__container" id="whyprtcipate">
      <Stars/>
      <h1 className="section__title">Why Participate</h1>
      <div className="y_ppt_content">
        <div className="yppt_card_and_image" aos-delay="200" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <BsPeopleFill size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <BsTrophyFill size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" aos-delay="250" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <AiFillGift size={90} />
          </div>

          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" aos-delay="300" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <HiOutlineComputerDesktop size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" aos-delay="350" data-aos="zoom-in">
          <div className="yppt__icon_container">
            <BsCodeSquare size={85} />
          </div>

          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPrtcpt;
