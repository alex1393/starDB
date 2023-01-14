import React from "react";
import "./error-indicator.css";
import starPic from "./starDeath.png";
const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={starPic} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already send droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
