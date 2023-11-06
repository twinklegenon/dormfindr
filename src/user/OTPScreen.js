import React from "react";
import { useNavigate } from "react-router-dom";
import fadpage1 from "../images/bg.png";
import user from "../images/user.png";
import "./OTPScreen.css";

const OTPScreen = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToHomeScreen = () => {
    navigate("/home");
  };

  return (
    <div className="OTP-screen">
      <div className="OTP-container">
        <img src={fadpage1} alt="Image 1" />
        <div className="box">
          <div className="rectangle" />
        </div>

        <div className="label">
          <div className="heading">We sent your code</div>
          <div className="heading2">Enter the confirmation code below</div>
        </div>
        <button className="go-back-button" onClick={goToSignUp}>
          Go Back
        </button>
        <button className="submit-button" onClick={goToHomeScreen}>
          Submit
        </button>
        <img src={user} className="user" alt="Image 2" />
      </div>
    </div>
  );
};

export default OTPScreen;
