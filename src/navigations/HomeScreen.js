import React from "react";
import "./HomeScreen.css";
import NavigationButtons from './NavigationButtons.js';
import hompage1 from "../images/bg.png";
import hompage2 from "../images/bg2.png";
import hompage3 from "../images/information.png";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="homepage-container">
        <NavigationButtons/>
        <img src={hompage1} alt="Image 1" />
        <img src={hompage2} alt="Image 2" />
        <img src={hompage3} alt="Image 3" />
      </div>
    </div>
  );
};

export default HomeScreen;
