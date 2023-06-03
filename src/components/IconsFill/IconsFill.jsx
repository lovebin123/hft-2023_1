import React from "react";
import './IconsFill.css'
const IconsFill = ({ children }) => {
  return (
    <div>
      {children}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default IconsFill;