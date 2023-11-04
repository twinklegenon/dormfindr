import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LogInSignUpScreen.css";
import Image1 from "../images/landingpage1.png";
import Image2 from "../images/landingpage2.png";
import Image3 from "../images/information.png";

const LogInSignUpScreen = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const navigateToLogIn = () => {
    navigate("/login"); // Navigate to the LogInScreen
  };

  const navigateToSignUp = () => {
    navigate("/signup"); // Navigate to the SignUpScreen
  };

  return (
    <div className="login-signup">
      <div className="image-container">
        <div className="image1-container">
          <img src={Image1} alt="Image 1" />
          <button className="login-button" onClick={navigateToLogIn}>Log In</button>
          <button className="signup-button" onClick={navigateToSignUp}>Sign Up</button>
        </div>
        <div className="image2-container">
          <img src={Image2} alt="Image 2" />
          <button className="lessor-button">Partner With Us</button>
        </div>
        <div className="image3-container">
          <img src={Image3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default LogInSignUpScreen;
