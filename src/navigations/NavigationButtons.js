import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationButtons.css';

const NavigationButtons = () => {
  return (
    <div className="navigation-buttons">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/find-a-dorm" activeClassName="active">Find A Dorm</NavLink>
      <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
      <NavLink to="/help" activeClassName="active">Help</NavLink>
    </div>
  );  
}

export default NavigationButtons;
