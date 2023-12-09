import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import logo from "../images/splash_logo.png";
import background from "../images/splash_bg.png";
import "./SplashScreen.css";

function SplashScreen() {
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/main"); // Use navigate to navigate to the LogInSignUpScreen
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="splash-screen" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default SplashScreen;
