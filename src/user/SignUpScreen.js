import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpScreen.css";
import backgroundImage from "../images/bg.png";
import user from "../images/user.png";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("TIP Community");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSignUp = () => {
    // Perform your authentication logic here
    // If authentication is successful, navigate to the HomeScreen
    navigate("/account-verification");
  };

  const goToTerms = () => {
    navigate("/terms");
  };

  return (
    <div className="signup-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={user} alt="Logo" />
      <div className="signup-container">
        <h2>Create an Account</h2>
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
        <div className="role-dropdown-container">
          <select value={selectedRole} onChange={handleRoleChange}>
            <option value="TIP Community">TIP Community</option>
            <option value="Dormitory Provider">Dormitory Provider</option>
          </select>
        </div>
        <button className="signup-click" onClick={handleSignUp}>Sign Up as {selectedRole}</button>
        <p>
          Already have an account? <a href="/login">Log In</a>
          <br />
          <b href="/terms" onClick={goToTerms}>Terms </b> 
          and 
          <b href="/terms" onClick={goToTerms}> Conditions</b>
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
