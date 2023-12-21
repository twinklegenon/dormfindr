// LogInScreen.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInScreen.css";
import backgroundImage from "../images/bg.png";
import user from "../images/user.png";

const LogInScreen = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("TIP Community");
  

  const handleLogIn = () => {
    // Perform your authentication logic here
    // If authentication is successful, navigate to the HomeScreen
    navigate("/home");
  };

  const handleTerms = () => {
    navigate("/terms");
  };

  return (
    <div className="login-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={user} alt="Logo" />
      <div className="login-container">
        <h2>Log In As:</h2>
        <div className="role-selection">
          <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
            <option value="TIP Community">TIP Community</option>
            <option value="Dormitory Provider">Dormitory Provider</option>
          </select>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Email" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-click" onClick={handleLogIn}>
          Log In
        </button>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
          <br></br>
          <b href="/terms" onClick={handleTerms}>Terms </b> 
          and 
          <b href="/terms" onClick={handleTerms}> Conditions</b>
        </p>
      </div>
    </div>
  );
};

export default LogInScreen;
