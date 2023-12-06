
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import fadpage1 from "../images/bg.png";
import user from "../images/user.png";
import "./OTPScreen.css";

const OTPScreen = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToLogInScreen = () => {
    navigate("/login");
  };

  return (
    <div className="OTP-screen">
      <div className="OTP-container">
        <img src={fadpage1} alt="Image 1" />
        <img src={user} className="user" alt="Image 2" />
        <div className="box">
          <div className="rectangle" />
        </div>

        <div className="label">
          <div className="heading">We sent your code</div>
          <div className="heading2">Enter the confirmation code below</div>
        </div>
        <div className="otp-input">
          <input
            type="text"
            pattern="\d*"
            inputMode="numeric"
            placeholder="Enter your OTP"
            value={otp}
            onChange={handleOTPChange}
            maxLength="6"
          />
        </div>
        <button className="go-back-button" onClick={goToSignUp}>
          Go Back
        </button>
        <button className="submit-button" onClick={goToLogInScreen}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default OTPScreen;