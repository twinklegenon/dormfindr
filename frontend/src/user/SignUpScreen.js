import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios for API calls
import "./SignUpScreen.css";
import backgroundImage from "../images/bg.png";
import user from "../images/user.png";


const SignUpScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); // State for username
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password

  const handleSignUp = async () => {
    if (!email.endsWith('@tip.edu.ph')) {
      setError('Only email addresses with the "tip.edu.ph" domain are allowed.');
      return; // Exit the function to prevent further execution
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return; // Exit the function if the passwords do not match
   
    
    }
    


    // Construct the user object
    const newUser = {
      username,
      email,
      password,
    };

    try {
      // Replace with your backend endpoint
      const response = await axios.post('http://localhost:4000/api/dormfindr/signup', newUser);
      // If the signup is successful, navigate to the account verification page
      navigate("/account-verification");
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === 'User already exists') {
        // If the backend returns a 400 status with a 'User already exists' message, handle it here
        setError('A user with this email already exists. Please log in or use a different email.')
      }
      else if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Signup error', error.response.data);
        // Handle the error response here
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Signup error', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      // Handle general errors here, such as displaying a notification to the user
    }
  };

  const goToTerms = () => {
    navigate("/terms");
  };

  const handleVerify = async () => {
    try {
      // Replace with your backend endpoint
      const response = await axios.post('http://localhost:4000/api/dormfindr/sendEmail', { email: email });
      console.log(response.data.message);
      // Show some success message or handle the response further
    } catch (error) {
      console.error('Verification email error', error);
      // Handle the error here, such as displaying a notification to the user
    }
  };

  return (
    <div className="signup-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={user} alt="Logo" />
 <div className="signup-container">
  <h2>Create an Account</h2>
  {error && <div className="error-message">{error}</div>} {/* Display error if it exists */}
  {/* ... rest of your JSX ... */}
        <div className="input2-container">
          <input type="text" placeholder="Enter your Username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input2-container">
          <input type="text" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input2-container">
          <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input2-container">
          <input 
            type="password" 
            placeholder="Confirm your Password" 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>
        <button className="signup-click" onClick={handleSignUp}>Sign Up</button>
        <p>
          Already have an account? <a href="/login">Log In</a>
          <br />
          <b onClick={goToTerms}>Terms </b> 
          and 
          <b onClick={goToTerms}> Conditions</b>
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
