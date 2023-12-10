import React from "react";
import "./BeOneScreen.css"
import { useNavigate } from "react-router-dom";
import beone from "../images/information.png";

const BeOneScreen = () => {
  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate("/main");
  };

  return (
    <div className="Be-One-screen">
      <div className="Be-One-container">
        <div className="button-container">
            <button className="return" onClick={goToLandingPage}>Return</button>
        </div>
        <img src={beone} alt="Image 1" />
      </div>
    </div>
  );
};

export default BeOneScreen;