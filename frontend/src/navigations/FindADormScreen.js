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

const FindADormScreen = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [sortOption, setSortOption] = useState(""); // State for sort option

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
      name: "Dorm 1",
      location: "Location 1",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm1Image, // Replace with actual image URL
    },

    {
      name: "Dorm 2",
      location: "Location 2",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm2Image, // Replace with actual image URL
    },

    {
      name: "Dorm 3",
      location: "Location 3",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm3Image, // Replace with actual image URL
    },

    {
      name: "Dorm 4",
      location: "Location 4",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm4Image, // Replace with actual image URL
    },

    {
      name: "Dorm 5",
      location: "Location 5",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm5Image, // Replace with actual image URL
    },

    {
      name: "Dorm 6",
      location: "Location 6",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm6Image, // Replace with actual image URL
    },

    {
      name: "Dorm 7",
      location: "Location 7",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm7Image, // Replace with actual image URL
    },

    {
      name: "Dorm 8",
      location: "Location 8",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm8Image, // Replace with actual image URL
    },

    {
      name: "Dorm 9",
      location: "Location 9",
      price: "$1000",
      rating: 4.5,
      image: sampleDorm9Image, // Replace with actual image URL
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
              <h3>{dorm.name}</h3>
              <p>Location: {dorm.location}</p>
              <p>Price: {dorm.price}</p>
              <p>Ratings: {dorm.rating}</p>
              <button>View Dorm</button>
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

/* Existing styles */

// Add styles for the grid layout and dormitory cards here
