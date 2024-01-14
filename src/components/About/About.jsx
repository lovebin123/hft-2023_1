import React, { useEffect } from "react";
import "./About.css";
import pc_image from "../../assets/svg/pc_abt.svg";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div className="about__container" id="about">
      <div className="abt__content" data-aos="zoom-in">
        <div className="abt__txt">
          <h1 data-aos="fade-left" className="section__title">
            About
          </h1>
          <div className="abt__txt_p" data-aos="fade-right">
            <p>
              HFT, where caffeine <span>mysteriously</span> turns into code.
            </p>

            <p>
              Hack For Tomorrow (HFT) is where you create your dream project.
              Build solutions to the most mind boggling problems with Excel 2023
              and ZilMoney, cause your ideas are worth it. Here, your problems
              aren’t just your problems, they are ours as well and we are here
              to guide you every step of the way.
            </p>

            <p>
              So, get your clickety clackety keyboards and those beautiful
              machines of yours and come find your seat at Hack For Tomorrow,
              the 24 hour hackathon conducted by yours truly Excel 2023 and
              ZilMoney.
            </p>
          </div>
        </div>
        <div className="abt__image_container">
          <img className="pc_img_abt" src={pc_image} alt=" " />
        </div>
      </div>
    </div>
  );
};

export default About;
