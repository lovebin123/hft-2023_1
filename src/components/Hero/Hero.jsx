import React, { useEffect } from "react";
import "./Hero.css";
import Aos from "aos";
import Marquee from "react-fast-marquee";
import BG from "../../assets/svg/hero_bg.svg"
import devfolio from "../../assets/svg/Devfolio.svg"
import BG1 from "../../assets/svg/bg2.svg"
import logo from "../../assets/svg/hft_logo.svg"
import icons from "../../assets/svg/hero_icons.svg"
import aihead  from "../../assets/svg/Clip path group.svg"
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero__container">
      
       
      <div className="hero__content">
        <div className="hero_gradient">
        

</div>
<div className="hero_marquee">
   <Marquee autoFill={true}>
            INNOVATE &nbsp;HACK &nbsp;INSPIRE&nbsp;
          </Marquee>
</div>
          <div className="hero__hft_logo">
         
        
         <div className="hft_logo">
           <img className="hft_logo1" src={logo} alt="hft logo"/>
           
           <div className="hero__df">
          <p className="dte">18th - 19th Nov 2023</p>
            <button className="hero_df_btn" data-aos="zoom-in"  >
         
            <img className="dev" src={devfolio}/>   <p className="registeration">Register Now</p>
            </button>
          </div>
          
           </div>
         <div className="hero_aihead">
           <img  src={aihead} alt="ai_head"/>
          </div>
          </div>
         
        
       
      </div>

     

    </div>
  );
};

export default Hero;
