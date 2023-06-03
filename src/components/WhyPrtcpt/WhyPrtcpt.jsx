import React, { useEffect } from "react";
import "./WhyPrtcpt.css";
import ppl_icon from "../../assets/png/ppl_icon.png";
import Aos from "aos";
const WhyPrtcpt = () => {
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  return (
    <div className="y_partcipate__container">
      <h1 className="section__title">Why Participate</h1>
      <div className="y_ppt_content">
        <div className="yppt_card_and_image" aos-delay="200" data-aos="zoom-in">
          <img src={ppl_icon} alt="" />
          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" data-aos="zoom-in">
          <img src={ppl_icon} alt="" />
          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image"aos-delay="250" data-aos="zoom-in">
          <img src={ppl_icon} alt="" />
          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>

        <div className="yppt_card_and_image" aos-delay="300" data-aos="zoom-in">
          <img src={ppl_icon} alt="" />
          <div className="y_ppt_card">
            <p>
              The top 3 teams of HFT get a direct entry into the finals of IBeTo
              2022. Check out the website of IBeTo here
            </p>
          </div>
        </div>


        <div className="yppt_card_and_image"aos-delay="350" data-aos="zoom-in">
          <img src={ppl_icon} alt="" />
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
