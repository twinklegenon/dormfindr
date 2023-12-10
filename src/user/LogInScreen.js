import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import './LogInScreen.css';
import backgroundImage from '../images/bg.png';
import user from '../images/user.png';

const LogInScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState("TIP Commnunity", "Dormitory Provider");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value)
  };


  const handleLogIn = async () => {
    let emailValidation = true;

    if (selectedRole === "TIP Community") {
      emailValidation = email.endsWith("@tip.edu.ph");
      if (!emailValidation) {
        setError('Only email addresses with the "@tip.edu.ph" domain are allowed for TIP Community.')
        return;
      }
    }

    if (selectedRole === "Dormitory Provider") {
      emailValidation = email.endsWith("@gmail.com");
      if (!emailValidation) {
        setError('This organization email is not suitable for this Log In. Please use personal email.')
        return;
      }
    };

    try {
      const response = await axios.post('http://localhost:4000/api/dormfindr/login', { email, password });
      if (response.status === 200) {
        navigate('/home');
      } else {
        setError('Login failed, please try again.');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Login failed, please try again.');
    }
  };

  const handleTerms = () => {
    navigate('/terms');
  };

  return (
    <div className="login-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={user} alt="User Logo" />
      <div className="login-container">
        <h2>Log in</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="role-dropdown-container">
          <select value={selectedRole} onChange={handleRoleChange}>
            <option value="TIP Community">TIP Community</option>
            <option value="Dormitory Provider">Dormitory Provider</option>
          </select>
        </div>
        <button className="login-click" onClick={handleLogIn}>Login as {selectedRole}</button>
        <p>
          Don't have an account? <span className="link" onClick={() => navigate('/signup')}>Sign Up</span>
          <br />
          <span className="link" onClick={handleTerms}>Terms</span> and <span className="link" onClick={handleTerms}>Conditions</span>
        </p>
      </div>
    </div>
  );
};

export default LogInScreen;
