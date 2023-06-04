import React,{useEffect} from 'react'
import "./Prizes.css"
import first from "../../assets/png/first.png"
import second from "../../assets/png/second.png"
import third from "../../assets/png/third.png"
import Aos from "aos";


const Prizes = () => {
  useEffect(()=>{
    Aos.init({duration:900})
  },[])
  return (
    <div className='prizes__container'>
      <div className="prizes__content">
        <div className="prizes__title" aos-delay="300" data-aos="zoom-in">
          <h1 className="section__title">Prizes</h1>

        </div>
        <div className="prizes__awards">
          <div className="prizes__award" aos-delay="200" data-aos="flip-right">
            <div className="prizes_trophy">
              <img src={first} alt="Trophy" />
            </div>
            <div className="prizes__detail">
              <h2 className='Prizes__first'>₹25,000</h2>
              <p>Wolfram Award for every team member worth $375</p>
            </div>
          </div>
          <div className="prizes__award" data-aos="flip-right">
            <div className="prizes_trophy">
            <img src={second} alt="Trophy" />
            </div>
            <div className="prizes__detail">
            <h2 className='Prizes__first'>₹25,000</h2>
              <p>Wolfram Award for every team member worth $375</p>
            </div>
          </div>
          <div className="prizes__award" data-aos="flip-right">
            <div className="prizes_trophy">
               <img src={third} alt="Trophy" />
            </div>
            <div className="prizes__detail">
            <h2 className='Prizes__first'>₹25,000</h2>
              <p>Wolfram Award for every team member worth $375</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes

        // <h1 className='section__title'>Prizes</h1>
