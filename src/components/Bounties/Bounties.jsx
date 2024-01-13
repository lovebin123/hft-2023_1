import React from "react";
import "./Bounties.css";
// import Carousel from "../Carousel/Carousel";
import { carouselData } from "../../data/carouselData";
import Mcard from "./Mcard";
import Marquee from "react-fast-marquee";
const Bounties = () => {
  return (
    <div className="bounties__container">
      <div className="bounties__content">
        <div className="bounties__title" data-aos="zoom-in">
          <h1 className="section__title">Bounties</h1>
        </div>

        {/* <Carousel data={carouselData} /> */}
        <div className="bounties__marque">
          <Marquee
            direction="left"
            speed={100}
            pauseOnHover={true}
            loop={0}
            delay={0}
            style={{ textAlign: "justify", width: "60%" }}
          >
            {carouselData.map((carousel, index) => {
              return <Mcard key={index} carousel={carousel}/>;
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Bounties;
