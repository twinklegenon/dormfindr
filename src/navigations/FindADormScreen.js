import React from "react";
import "./FindADormScreen.css";
import NavigationButtons from './NavigationButtons.js';
import fadpage1 from "../images/bg.png";
import fadpage2 from "../images/bg2.png";
import fadpage3 from "../images/information.png";

const FindADormScreen = () => {
  return (
    <div className="find-a-dorm-screen">
      <div className="find-a-dorm-container">
        <NavigationButtons/>
        <img src={fadpage1} alt="Image 1" />
        <img src={fadpage2} alt="Image 2" />
        <img src={fadpage3} alt="Image 3" />
      </div>
    </div>
  );
};

export default FindADormScreen;
