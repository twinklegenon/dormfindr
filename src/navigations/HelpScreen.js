import React from "react";
import "./HelpScreen.css";
import NavigationButtons from './NavigationButtons.js';
import helppage1 from "../images/bg.png";
import helppage2 from "../images/bg2.png";
import helppage3 from "../images/information.png";
import imageTop1 from "../images/imageTop1.png";
import imageTop2 from "../images/imageTop2.png";

const HelpScreen = () => {
  return (
    <div className="help-screen">
      <div className="helppage-container">
        <div className="navigation">
            <NavigationButtons />
        </div>
        <div className="help-page">
          <img src={imageTop1} alt="Image at the top of Page 1" className="imageTop1" />
          <img src={helppage1} alt="Help Page 1: Description of Page 1" />
        </div>
        <div className="help-page">
          <img src={imageTop2} alt="Image at the top of Page 2" className="imageTop2" />
          <img src={helppage2} alt="Help Page 2: Description of Page 2" />
        </div>
        <div className="help-page">
          <img src={helppage3} alt="Help Page 3: Description of Page 3" />
        </div>
      </div>
    </div>
  );
};

export default HelpScreen;
