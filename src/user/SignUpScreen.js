// SignUpScreen.js

import React from "react";
import "./SignUpScreen.css";
import backgroundImage from "../images/bg.png";
import user from "../images/user.png"; 

const SignUpScreen = () => {
  return (
    <div
      className="signup-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <img src={user} alt="Logo" />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="input2-container">
          <input type="text" placeholder="Enter your Username" />
        </div>
        <div className="input2-container">
          <input type="text" placeholder="Enter your Email" />
        </div>
        <div className="input2-container">
          <input type="password" placeholder="Enter your Password" />
        </div>
        <div className="input2-container">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button className="signup-click">Sign Up</button>
        <p>
          Already have an account? <a href="/login">Log In</a>
          <br></br>
          <b href="/terms">Terms</b> and <b href="/privacy">Privacy Policy</b>
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
