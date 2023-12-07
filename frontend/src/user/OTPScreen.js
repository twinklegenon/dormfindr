import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import fadpage1 from "../images/bg.png";
import user from "../images/user.png";
import "./OTPScreen.css";

const OTPScreen = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null); // To store the OTP verification result

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const verifyOTP = async () => {
    try {
      const response = await fetch('http://localhost:3000/verifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enteredOTP: otp }),
      });

      const data = await response.json();
      if (data.isVerified) {
        // OTP is correct
        setVerificationStatus("OTP verified successfully.");
        navigate("/login");
      } else {
        // OTP is incorrect
        setVerificationStatus("Incorrect OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setVerificationStatus("Error verifying OTP. Please try again later.");
    }
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
        <button className="submit-button" onClick={verifyOTP}>
          Submit
        </button>
        {verificationStatus && (
          <div className="verification-status">{verificationStatus}</div>
        )}
      </div>
    </div>
  );
};

export default OTPScreen;
