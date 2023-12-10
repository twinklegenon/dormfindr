import React from "react";
import "./AboutUsScreen.css";
import NavigationButtons from './NavigationButtons.js';
import aupage1 from "../images/team.png";
import aupage2 from "../images/mission.png";
import aupage3 from "../images/information.png";

const AboutUsScreen = () => {
  return (
    <div className="about-us-screen">
      <div className="about-us-container">
        <NavigationButtons/>
        <img src={aupage1} alt="Image 1" />
        <img src={aupage2} alt="Image 2" />
        <img src={aupage3} alt="Image 3" />
      </div>
    </div>
  );
};

export default AboutUsScreen;
