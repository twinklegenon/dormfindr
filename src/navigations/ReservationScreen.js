import React from "react";
import "./ReservationScreen.css";
import NavigationButtons from './NavigationButtons.js';
import reservebg1 from "../images/bg.png";
import reservebg2 from "../images/information.png";

const ReservationScreen = ({ dorm, closeModal }) => {
  return (
    <div className="reservation-screen">
      <div className="reservation-container">
        <NavigationButtons/>
        <img src={reservebg1} alt="Image 1" />
        <img src={reservebg2} alt="Image 2" />
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{dorm.name}</h2>
        <p>Price: {dorm.price}</p>
        <p>Location: {dorm.location}</p>
        {/* Add other details like description, available rooms, etc. */}
        <button>Book Now</button>

      </div>
    </div>
  );
};

export default ReservationScreen;
