import React from "react";
import "./AccountVerificationScreen.css"
import fadpage1 from "../images/accveriwobutton.png";
import { useNavigate } from "react-router-dom"; 

const AccountVerificationScreen = () => {
  const navigate = useNavigate(); 

  const navigateToVerification = () => {
    navigate("/OTP"); 
  };

  return (
    <div className="Account-screen">
      <div className="Account-container">
        <div className="verify-container">
            <button className="verify-button" onClick={navigateToVerification}>Verify Your Account</button>
        </div>
        <img src={fadpage1} alt="Image 1" />
      </div>
    </div>
  );
};

export default AccountVerificationScreen;