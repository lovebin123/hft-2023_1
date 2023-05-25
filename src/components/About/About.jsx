import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about__container">
      <div className="abt__content">
        <div className="abt__txt">
          <h1>About</h1>
          <div className="abt__txt_p">
            <p>
              A spark. A small wish to change the world. That’s all it takes to
              start building a product which might be the next big thing.
            </p>

            <p>
              Are you a beginner dabbling with ‘Hello World’ lines of code,
              looking to delve deep into the realm of 0s and 1s Or are you
              looking to use your tech prowess to build something for society?
            </p>

            <p>
              Excel and KeyValue Software Systems presents HackForTomorrow
              (HFT), a 24 hour-long hackathon, which seeks to promote the
              creation of novel and distinctive technical solutions to societal
              problems. The hackathon, held as part of Excel 2022, the
              techno-managerial symposium of Govt. Model Engineering College has
              attracted over 300 participants and resulted in some incredible
              inventions
            </p>
          </div>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"
          alt=" "
        />
      </div>
    </div>
  );
};

export default About;
