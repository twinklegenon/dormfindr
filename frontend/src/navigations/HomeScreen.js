import React, { useState } from "react";
import "./HomeScreen.css";
import NavigationButtons from './NavigationButtons.js';
import homepage1 from "../images/bg.png";
import homepage2 from "../images/bg2.png";
import homepage3 from "../images/information.png";
import sampleDorm1Image from "../images/sampleDorm1Image.png";
import sampleDorm2Image from "../images/sampleDorm2Image.png";
import sampleDorm3Image from "../images/sampleDorm3Image.png";
import locationIcon from "../images/Location.png"

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // Filter and set suggestions based on user input
    const filteredSuggestions = yourFilterFunction(input);
    setSuggestions(filteredSuggestions);
  };

  const yourFilterFunction = (input) => {
    const dormNames = [
      "TIP Residence",
      "Ermin Garcia Dormitory",
      "Portalet Dormitory",
      "Aurora Plaza Dormitory",
      "Potsdam Residence",
    ];
    return dormNames.filter((dormName) =>
      dormName.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <div className="home-screen">
      <div className="homepage-container">
        <div className="navigation">
          <NavigationButtons />
        </div>
{/*-----------------------------------------------------------------------------------*/}
        <div className="home-page">
          <div className="page-container">
            <div className="header">
              <h1>Featured Spaces</h1>
              <h2>Comfortable and affordable dorm for you</h2>
              <hr />
            </div>
            <div className="inner-box">
              <img src={sampleDorm1Image} alt="Dorm 1" />
              <h3>TIP Residence</h3>
              <div className="location-container">
                <img src={locationIcon} alt="Location Icon" />
                <p>Anonas, Quezon City</p>
              </div>
              <p>Price: ₱2500/month</p>
              <div className="bottom-content">
                <p className="ratings">Ratings: ★★★★☆</p>
                <button className="view-dorm-button">View Dorm</button>
              </div>
            </div>
            <div className="inner-box">
              <img src={sampleDorm2Image} alt="Dorm 2" />
              <h3>Ermin Garcia Dormitory</h3>
              <div className="location-container">
                <img src={locationIcon} alt="Location Icon" />
                <p>Ermin Garcia St. Quezon City</p>
              </div>
              <p>Price: ₱2000/month</p>
              <div className="bottom-content">
                <p className="ratings">Ratings: ★★★★★</p>
                <button className="view-dorm-button">View Dorm</button>
              </div>
            </div>
            <div className="inner-box">
              <img src={sampleDorm3Image} alt="Dorm 3" />
              <h3>Portalet Dormitory</h3>
              <div className="location-container">
                <img src={locationIcon} alt="Location Icon" />
                <p>Potsdam St. Quezon City</p>
              </div>
              <p>Price: ₱3500/month</p>
              <div className="bottom-content">
                <p className="ratings">Ratings: ★★★☆☆</p>
                <button className="view-dorm-button">View Dorm</button>
              </div>
            </div>
          </div>
            <img src={homepage1} alt="HomePage 1" />
          </div>
{/*-----------------------------------------------------------------------------------*/}
          <div className="home-page">
          <img src={homepage2} alt="HomePage 2" />
          <div className="overlay">
            <h1>Stay where you belong</h1>
            <h2>The #1 student accommodation platform in Quezon City!</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for dorms"
                onChange={handleSearchInput}
              />
              {searchInput && suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion">
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
{/*-----------------------------------------------------------------------------------*/}
        <div className="home-page">
          <img src={homepage3} alt="HomePage 3" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
