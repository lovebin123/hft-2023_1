import React from "react";
import './Stars.css'
const Stars = ({ children }) => {
  return (
    <div className="stars__container">
      {children}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default Stars;