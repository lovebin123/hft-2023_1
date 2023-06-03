import React from 'react'
import './Hero.css'
import hft_logo from '../../assets/png/hft_logo.png'
const Hero = () => {
  return (
    <div className='hero__container'>
      <img src={hft_logo} alt=" " className='hft__logo'/>
      <div className="devfolio_btn">

      </div>
      <div className="timer">

      </div>
    </div>
  )
}

export default Hero