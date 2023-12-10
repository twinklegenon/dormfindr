import React from "react";
import { useNavigate } from "react-router-dom";
import fadpage1 from "../images/terms1.png";
import fadpage2 from "../images/terms2.png";
import fadpage3 from "../images/terms3-withoutbutton.png";
import "./TermsScreen.css"

const TermsScreen = () => {
  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate("/main");
  };

  const goToBeOne = () => {
    navigate("/beone");
  };
  return (
    <div className="terms-screen">
      <div className="terms-container">
        <img src={fadpage1} alt="Image 1" />
        <img src={fadpage2} alt="Image 2" />
        <div className="button-container">
            <button className="return-button" onClick={goToLandingPage}>Return</button>
            <button className="contact-us-button" onClick={goToBeOne}>Contact Us</button>
        </div>
        <img src={fadpage3} alt="Image 3" /> 
      
      </div>
    </div>
  );
};

export default TermsScreen;