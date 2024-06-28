import React, { useState } from 'react';
import bac from './bac.avif';

const Offer = () => {
  const [hovered, setHovered] = useState(false); // Declare and initialize the hovered state

  const centerTextStyle = {
    display: 'flex',
    flexDirection: 'column', // Align items in a column
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh', // Adjust this as per your need
    fontWeight: 'bold', // Making the text bold
    paddingTop: '0vh', // Adding top padding for spacing
    backgroundImage: `url(${bac})`, // Set background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // Set text color to white
  };

  const buttonStyle = {
    marginTop: '20px', // Adjust margin-top as needed
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: '20px', // Make the border radius larger to create a capsule shape
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    color: 'black', // Set text color to black
    fontWeight: 'bold', // Make text bold
  };

  const buttonHoverStyle = {
    backgroundColor: 'red',
  };

  return (
    <div style={centerTextStyle}>
      <h1 style={{ color: 'black' }}>QuickDine</h1>
      <h2 style={{ color: 'white' }}>15% off on orders above Rs350</h2>
      <button
        style={{ ...buttonStyle, ...(hovered ? buttonHoverStyle : null) }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Order Now
      </button>
    </div>
  );
};

export default Offer;
