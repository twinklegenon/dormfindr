import React, { useState } from "react";
import "./AccountVerificationScreen.css"
import VerifyBackground from "../images/accveriwobutton.png";
import { useNavigate } from "react-router-dom"; 

const AccountVerificationScreen = () => {
  const navigate = useNavigate(); 
  const [userEmail, setUserEmail] = useState(''); 
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOTPVerification = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:4000/api/dormfindr/account-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, otp: otp }),
      });
      
      const data = await response.json();
      if (response.ok && data.success) {
        navigate("/login"); // Navigate to login on success
      } else {
        setError(data.message || 'Failed to verify account'); // Show error message from response
      }
    } catch (error) {
      setError("Error verifying OTP: " + error.message); // Show network or server error
    }
    setIsLoading(false);
  };

  return (
    <div className="Account-screen" style={{ backgroundImage: `url(${VerifyBackground})` }}>
      <div className="Account-container">
        <form className="verify-container" onSubmit={handleOTPVerification}>
          <input
            className="otp-input"
            type="email"
            placeholder="Enter Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            className="otp-input"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="verify-button" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Submit'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AccountVerificationScreen;
