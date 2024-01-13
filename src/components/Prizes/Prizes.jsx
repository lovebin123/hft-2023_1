import React, { useEffect, useRef } from 'react';
import './Prizes.css';
import first from '../../assets/png/first.png';
import second from '../../assets/png/second.png';
import third from '../../assets/png/third.png';
import Aos from 'aos';

const Prizes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 900 });

    const containerElement = containerRef.current;
    const prizeElements = containerElement.getElementsByClassName('prizes__award');

    let delay = 0;
    Array.from(prizeElements).forEach((element) => {
      element.setAttribute('data-aos', 'zoom-in');
      element.setAttribute('data-aos-delay', delay.toString());
      delay += 250; // Increase the delay for each element (adjust as needed)
    });
  }, []);

  return (
    <div className="prizes__container" ref={containerRef}>
      {/* <Stars/> */}
      <div className="prizes__content">
        <div className="prizes__title" data-aos="zoom-in">
          <h1 className="section__title">Prizes</h1>
        </div>
        <div className="prizes__awards">
          <div className="prizes__award">
            <div className="prizes_trophy">
              <img src={first} alt="Trophy" />
            </div>
            <div className="prizes__detail">
              <h2 className="Prizes__first">₹25,000</h2>
              <p>Wolfram Award for every team member worth $375</p>
            </div>
          </div>
          <div className="prizes__award">
            <div className="prizes_trophy">
              <img src={second} alt="Trophy" />
            </div>
            <div className="prizes__detail">
              <h2 className="Prizes__first">₹25,000</h2>
              <p>Wolfram Award for every team member worth $375</p>
            </div>
          </div>
          <div className="prizes__award">
            <div className="prizes_trophy">
              <img src={third} alt="Trophy" />
            </div>
            <div className="prizes__detail">
              <h2 className="Prizes__first">₹25,000</h2>
              <p>Wolfram Award for every team member worth $375</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
