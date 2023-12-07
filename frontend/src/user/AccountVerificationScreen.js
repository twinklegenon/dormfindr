import React, { useState } from "react";
import "./AccountVerificationScreen.css"
import fadpage1 from "../images/accveriwobutton.png";
import { useNavigate } from "react-router-dom"; 

const AccountVerificationScreen = () => {
  const navigate = useNavigate(); 
  const [userEmail, setUserEmail] = useState(''); // Assuming you'll get this from user input or session
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigateToVerification = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:4000/api/dormfindr/account-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        navigate("/OTP");
      } else {
        setError(data.error || 'Failed to verify account');
      }
    } catch (error) {
      setError("Error sending email: " + error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="Account-screen">
      <div className="Account-container">
        <div className="verify-container">
            <button className="verify-button" onClick={navigateToVerification} disabled={isLoading}>
              {isLoading ? 'Verifying...' : 'Verify Your Account'}
            </button>
        </div>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <img src={fadpage1} alt="Image 1" />
      </div>
    </div>
  );
};

export default AccountVerificationScreen;
