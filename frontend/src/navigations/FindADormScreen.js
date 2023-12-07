import React, { useState } from "react";
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

const FindADormScreen = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [sortOption, setSortOption] = useState(""); 

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can add logic here to filter dorms based on the search term
  };

  // Function to handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // You can add logic here to sort dorms based on the selected option
  };

  // Sample dormitory data (you can replace this with your actual data)
  const dormitories = [
    {
      name: "TIP Residence",
      location: "Anonas, Quezon City",
      price: "₱2500/month",
      rating: "★★★★☆",
      image: sampleDorm1Image, 
    },

    {
      name: "Ermin Garcia Dormitory",
      location: "Ermin Garcia St. Quezon City",
      price: "₱2000/month",
      rating: "★★★★★",
      image: sampleDorm2Image, 
    },

    {
      name: "Portalet Dormitory",
      location: "Potsdam St. Quezon City",
      price: "₱3500/month",
      rating: "★★★☆☆",
      image: sampleDorm3Image, 
    },

    {
      name: "Dorm 4",
      location: "Location 4",
      price: "$1000",
      rating: "★★★★★",
      image: sampleDorm4Image, 
    },

    {
      name: "Dorm 5",
      location: "Location 5",
      price: "$1000",
      rating: "★★★★★",
      image: sampleDorm5Image, 
    },

    {
      name: "Dorm 6",
      location: "Location 6",
      price: "$1000",
      rating: "★★★★★",
      image: sampleDorm6Image, 
    },

    {
      name: "Dorm 7",
      location: "Location 7",
      price: "$1000",
      rating: "★★★★★",
      image: sampleDorm7Image, 
    },

    {
      name: "Dorm 8",
      location: "Location 8",
      price: "$1000",
      rating: "★★★★★",
      image: sampleDorm8Image, 
    },

    {
      name: "Dorm 9",
      location: "Location 9",
      price: "$1000",
      rating: "★★★★★",
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
          {dormitories.map((dorm, index) => (
            <div key={index} className="dorm-card">
              <img src={dorm.image} alt={dorm.name} />
              <div className="upper-content">
                <h3>{dorm.name}</h3>
                <div className="location-price">
                  <div className="location-container">
                    <img src={locationIcon} alt="Location Icon" />
                    <p>{dorm.location}</p>
                  </div>
                  <p>Price: {dorm.price}</p>
                </div>
              </div>
              <div className="bottom-content">
                <p className="ratings">Ratings: {dorm.rating}</p>
                <button>View Dorm</button>
              </div>
            </div>
          ))}
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
