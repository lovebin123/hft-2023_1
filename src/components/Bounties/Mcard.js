import React from "react";

const Mcard = ({carousel}) => {
  return (
    <div className="Marq__card">
      <div className="Marq__icon">
        <a href="https://polygon.technology/">
          <img src={carousel.image} alt="POLYGON LOGO" />
        </a>
      </div>
      <div className="Marq__detail">
        <ul>
         {carousel.details.map((det,index)=>{
          return(
            <li>{det}</li>
          )
         })}
        </ul>
      </div>
    </div>
  );
};

export default Mcard;
