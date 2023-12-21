// ProfileScreen.js
import React from "react";
import "./ProfileScreen.css";
import NavigationButtons from './NavigationButtons.js';
import aaron from "../images/user.png";
import fadpage1 from "../images/bg.png";
import fadpage2 from "../images/bg2.png";
import fadpage3 from "../images/information.png";

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <div className="profile-container">
        <NavigationButtons/>
        <img src={fadpage1} alt="Image 1" />
        
        {/* Gray container in front of fadpage2 */}
        <div className="side-container">
          {/* Pressable text in front of the gray container */}
          <div className="pressable-text account-settings">Account Settings</div>
          <div className="pressable-text notifications">Notifications</div>
          <div className="pressable-text settings">Settings</div>
          <div className="pressable-text bookings">Bookings</div>
          <div className="pressable-text logout">Logout</div>
        </div>

        <div className="middle-container">
          <div className="text-box-container">
            <div className="colored-box"></div>
            <p className="text-label">First Name</p>
            <input type="text" className="text-box" />
          </div>

          <div className="text-box-container">
            <div className="colored-box"></div>
            <p className="text-label">Last Name</p>
            <input type="text" className="text-box" />
          </div>

          <div className="text-box-container">
            <div className="colored-box"></div>
            <p className="text-label">Email Address</p>
            <input type="text" className="text-box" />
          </div>

          <div className="text-box-container">
            <div className="colored-box"></div>
            <p className="text-label">Password</p>
            <input type="password" className="text-box" />
          </div>

        </div>

        <img src={aaron} alt="Aaron" className="aaron-image" />
        <img src={fadpage2} alt="Image 2" />
        <img src={fadpage3} alt="Image 3" />
      </div>
    </div>
  );
};

export default ProfileScreen;
