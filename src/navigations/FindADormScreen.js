import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./FindADormScreen.css";
import NavigationButtons from './NavigationButtons.js';
import fadpage1 from "../images/findadorm.png";
import fadpage3 from "../images/information.png";
import sampleDorm1Image from "../images/sampleDorm1Image.png";
import sampleDorm2Image from "../images/sampleDorm2Image.png";
import sampleDorm3Image from "../images/sampleDorm3Image.png";
import sampleDorm4Image from "../images/sampleDorm4Image.png";
import sampleDorm5Image from "../images/sampleDorm5Image.png";
import sampleDorm6Image from "../images/sampleDorm6Image.png";
import sampleDorm7Image from "../images/sampleDorm7Image.png";
import sampleDorm8Image from "../images/sampleDorm8Image.png";
import sampleDorm9Image from "../images/sampleDorm9Image.png";
import locationIcon from "../images/Location.png"
import price from "../images/price.png";
import star from "../images/star.png";
import rooms from "../images/Door.png";
import contact from "../images/Phone.png";

const FindADormScreen = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [selectedDormParams, setSelectedDormParams] = useState(params.get("dorm"));
  const [searchTerm, setSearchTerm] = useState(""); 
  const [sortOption, setSortOption] = useState(""); 
  const [showModal, setShowModal] = useState(false);
  const [selectedDorm, setSelectedDorm] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

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

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    // Logic to filter suggestions based on the input (you can modify this as needed)
    const filteredSuggestions = dormsData
      .map((dorm) => dorm.name)
      .filter((name) => name.toLowerCase().includes(input.toLowerCase()));

    setSuggestions(filteredSuggestions);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);

  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion); // Replace the entire input value with the clicked suggestion
    setSelectedDormParams(suggestion); // Update selected dorm parameters
    setSelectedDorm(suggestion);
    setSuggestions([]); 
  };

  // Sample dormitory data (you can replace this with your actual data)
  const dormsData = [
    {
      name: "TIP Residence",
      description: "A comfortable dorm located in Anonas, Quezon City.",
      price: "₱2500/month",
      ratings: "4.2 Ratings",
      rooms: "4 Available rooms",
      contact: "tipresidence@tip.edu.ph",
      image: sampleDorm1Image,
      location: "Anonas, Quezon City",
    },
    {
      name: "Ermin Garcia Dormitory",
      description: "Affordable dormitory situated in Ermin Garcia St. Quezon City.",
      price: "₱2000/month",
      ratings: "5 Ratings",
      rooms: "8 Available rooms",
      contact: "ermindormitory@gmail.com",
      image: sampleDorm2Image,
      location: "Ermin Garcia St. Quezon City",
    },
    {
      name: "Portalet Dormitory",
      description: "Portalet Dormitory located in Potsdam St. Quezon City.",
      price: "₱3500/month",
      ratings: "3.6 Ratings",
      rooms: "2 Available rooms",
      contact: "potaletdorm@gmail.com",
      image: sampleDorm3Image,
      location: "Potsdam St. Quezon City",
    },

    {
      name: "Dorm 4",
      location: "Unavailable",
      price: "Unavailable",
      ratings: "Unavailable",
      rooms: "Unavailable",
      contact: "Unavailable",
      image: sampleDorm4Image, 
    },

    {
      name: "Dorm 5",
      location: "Unavailable",
      price: "Unavailable",
      ratings: "Unavailable",
      rooms: "Unavailable",
      contact: "Unavailable",
      image: sampleDorm5Image, 
    },

    {
      name: "Dorm 6",
      location: "Unavailable",
      price: "Unavailable",
      ratings: "Unavailable",
      rooms: "Unavailable",
      contact: "Unavailable",
      image: sampleDorm6Image, 
    },

    {
      name: "Dorm 7",
      location: "Unavailable",
      price: "Unavailable",
      ratings: "Unavailable",
      rooms: "Unavailable",
      contact: "Unavailable",
      image: sampleDorm7Image, 
    },

    {
      name: "Dorm 8",
      location: "Unavailable",
      price: "Unavailable",
      ratings: "Unavailable",
      rooms: "Unavailable",
      contact: "Unavailable",
      image: sampleDorm8Image, 
    },

    {
      name: "Dorm 9",
      location: "Unavailable",
      price: "Unavailable",
      ratings: "Unavailable",
      rooms: "Unavailable",
      contact: "Unavailable",
      image: sampleDorm9Image, 
    },
    // Add more dormitories as needed
  ];

  return (
    <div className="find-a-dorm-screen">
      <div className="find-a-dorm-container">
        {/* Search bar */}
        <div className="search-bar-menu">
          <input
            type="text"
            placeholder="Search dorms..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Sort by dropdown menu */}
        <div className="sort-dropdown">
          <select value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="price-low-high">Price low-high</option>
            <option value="price-high-low">Price high-low</option>
            {/* Add more sorting options as needed */}
          </select>
        </div>
        {/* Navigation buttons */}
        <NavigationButtons />

        {/* Dormitories grid in front of Image 1 */}
        <div className="dormitories-grid">
          {dormsData.map((dorm, index) => (
            <div key={index} className={`dorm-card ${dorm.name === selectedDormParams ? 'highlight' : ''}`}
            onClick={() => setSelectedDormParams(dorm.name)}>
              <img src={dorm.image} alt={dorm.name} />
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

        {/* Image 1 */}
        <img src={fadpage1} alt="Image 1" />
        {/* Image 3 */}
        <img src={fadpage3} alt="Image 3" />
      </div>
    </div>
  );
};

export default FindADormScreen;
