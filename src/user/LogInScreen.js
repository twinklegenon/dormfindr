// LogInScreen.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogInScreen.css"; 
import backgroundImage from "../images/bg.png"; 
import user from "../images/user.png"; 

const LogInScreen = () => {
  const navigate = useNavigate(); 

  const handleLogIn = () => {
    // Perform your authentication logic here
    // If authentication is successful, navigate to the HomeScreen
    navigate("/home"); 
  };
  return (
    <div
      className="login-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
        <img src={user} alt="Logo" />
      <div className="login-container">
        
        <h2>Log In</h2>
        <div className="input-container">
          <input type="text" placeholder="Email" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-click"  onClick={handleLogIn}>Log In</button>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
          <br></br>
          <b href="/terms">Terms</b> and <b href="/privacy">Privacy Policy</b>
        </p>
      </div>
    </div>
  );
};

export default LogInScreen;
