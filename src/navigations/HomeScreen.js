import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeScreen.css";
import NavigationButtons from './NavigationButtons.js';
import homepage1 from "../images/bg.png";
import homepage2 from "../images/bg2.png";
import homepage3 from "../images/information.png";
import sampleDorm1Image from "../images/sampleDorm1Image.png";
import sampleDorm2Image from "../images/sampleDorm2Image.png";
import sampleDorm3Image from "../images/sampleDorm3Image.png";
import locationIcon from "../images/Location.png";
import price from "../images/price.png";
import star from "../images/star.png";
import rooms from "../images/Door.png";
import contact from "../images/Phone.png";

const dormsData = [
  {
    name: "TIP Residence",
    description: "A comfortable dorm located in Anonas, Quezon City.",
    price: "₱2500/month",
    ratings: "4.2 Ratings",
    rooms: "4 rooms",
    contact: "tipresidence@tip.edu.ph",
    image: sampleDorm1Image,
    location: "Anonas, Quezon City",
  },
  {
    name: "Ermin Garcia Dormitory",
    description: "Affordable dormitory situated in Ermin Garcia St. Quezon City.",
    price: "₱2000/month",
    ratings: "5 Ratings",
    rooms: "8 rooms",
    contact: "ermindormitory@gmail.com",
    image: sampleDorm2Image,
    location: "Ermin Garcia St. Quezon City",
  },
  {
    name: "Portalet Dormitory",
    description: "Portalet Dormitory located in Potsdam St. Quezon City.",
    price: "₱3500/month",
    ratings: "3.6 Ratings",
    rooms: "2 rooms",
    contact: "potaletdorm@gmail.com",
    image: sampleDorm3Image,
    location: "Potsdam St. Quezon City",
  },
  // Add more dorms as needed
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDorm, setSelectedDorm] = useState(null);

  const handleBookNow = (dorm) => {
    setShowModal(true);
    setSelectedDorm(dorm);
  };

  const handleViewLocation = (dorm) => {
    // Implement your logic to view location for the specific dorm
    console.log(`Viewing location for ${dorm.name}`);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDorm(null);
  };

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    const filteredSuggestions = dormsData
      .map((dorm) => dorm.name)
      .filter((name) => name.toLowerCase().includes(input.toLowerCase()));
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    navigate(`/find-a-dorm?dorm=${encodeURIComponent(suggestion)}`);
  };
  
  return (
    <div className="home-screen">
      <div className="homepage-container">
        <div className="navigation">
          <NavigationButtons />
        </div>
        <div className="home-page">
          <div className="page-container">
            <div className="header">
              <h1>Featured Spaces</h1>
              <h2>Comfortable and affordable dorm for you</h2>
              <hr />
            </div>
            {/* Dorm Listings */}
            {dormsData.map((dorm) => (
              <div className="inner-box" key={dorm.name}>
                <img src={dorm.image} alt={`Dorm ${dorm.id}`} />
                <h3>{dorm.name}</h3>
                <div className="location-container">
                  <img src={locationIcon} alt="Location Icon" />
                  <p>: {dorm.location}</p>
                </div>
                <div className="price-container">
                  <div className="price-details">
                    <img src={price} alt="Price Icon" />
                    <p>: {dorm.price}</p>
                  </div>
                  <div className="room-details">
                    <img src={rooms} alt="Rooms Icon" />
                    <p>: {dorm.rooms}</p>
                  </div>
                </div>
                <div className="ratings-container">
                  <div className="ratings-details">
                    <img src={star} alt="Ratings Icon" />
                    <p>: {dorm.ratings}</p>
                  </div>
                  <div className="contact-details">
                    <img src={contact} alt="Contact Icon" />
                    <p>: {dorm.contact}</p>
                    {/* Add your room icons or details here */}
                  </div>
                </div>
                <div className="bottom-content">
                  <button className="book-now-button" onClick={() => handleBookNow(dorm)}>Book Now</button>
                  <button className="view-location-button" onClick={() => handleViewLocation(dorm)}>View Location</button>
                </div>
              </div>
            ))}
            {/* Modal */}
            {showModal && selectedDorm && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>{`Dorm '${selectedDorm.name}' is booked successfully!`}</h2>
                  <p>Kindly wait for dorm provider's confirmation.</p>
                </div>
              </div>
            )}
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
                value={searchInput}
                onChange={handleSearchInput}
              />
              {searchInput && suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion"
                      onClick={() => handleSuggestionClick(suggestion)} // Update input with suggestion value
                    >
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
