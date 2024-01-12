import React from 'react'
import polygonw from "../../assets/png/polygonw.png";

const Mcard = () => {
  return (
    <div className='Marq__card'>
        <div className="Marq__icon">
        <a href="https://polygon.technology/">
          <img src={polygonw} alt="POLYGON LOGO" />
        </a>
        </div>
        <div className="Marq__detail">
            <ul>
                <li>₹10,000 for the best hack built on Ethereum, or</li>
                <li>₹15,000 for the best hack built on Ethereum + Polygon</li>
                <li>Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</li>
            </ul>
        </div>


        
    </div>
  )
}

export default Mcard