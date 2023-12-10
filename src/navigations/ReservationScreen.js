import React from "react";
import "./ReservationScreen.css";
import NavigationButtons from './NavigationButtons.js';
import reservebg1 from "../images/bg.png";
import reservebg2 from "../images/information.png";

const ReservationScreen = () => {
  return (
    <div className="reservation-screen">
      <div className="reservation-container">
        <NavigationButtons/>
        <img src={reservebg1} alt="Image 1" />
        <img src={reservebg2} alt="Image 2" />

      </div>
    </div>
  );
};

export default ReservationScreen;
