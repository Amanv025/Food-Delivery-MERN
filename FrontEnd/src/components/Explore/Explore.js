import React from 'react';
import foodImage from './Back4.avif'; // Import your image
import IndianFlag from './IndianFlag.webp'; // Import Indian flag image

const Explore = () => {
  const containerStyle = {
    position: 'relative', // Position the container for absolute positioning of the line
    backgroundImage: `url(${foodImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', // Adjust height according to your requirement
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'flex-start', // Move content slightly towards the top
    alignItems: 'center',
    color: 'white', // Text color
    textAlign: 'center', // Center text
    fontSize: '2rem', // Adjust text size
    fontWeight: 'bold', // Adjust text weight
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional text shadow
  };

  const lineStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '2px',
    backgroundColor: 'whites',
    animation: 'slide 2s infinite', // Animation name, duration, and iteration count
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allow wrapping of buttons
    marginTop: '20px',
  };

  const buttonStyle = {
    background: 'none', // Transparent background
    color: 'white', // Text color
    border: '1px solid white', // Border style
    borderRadius: '20px', // Rounded corners
    padding: '10px 20px', // Padding
    margin: '10px', // Margin
    cursor: 'pointer',
    boxShadow: 'none', // No box shadow
  };

  return (
    <div style={containerStyle}>
      <div>
        QuickDine
      </div>
      <div>
        Explore the World Within Reach
      </div>
      {/* Add your line here if needed */}
      <div style={lineStyle}></div>

      {/* Text with Indian flag */}
      <div style={{ marginTop: '20px' }}>
        Popular locations in <img src={IndianFlag} alt="Indian Flag" style={{ width: '50px', verticalAlign: 'middle' }} /> India
      </div>

      {/* Buttons */}
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Mumbai Restaurants</button>
        <button style={buttonStyle}>Kerala Restaurants</button>
        <button style={buttonStyle}>Bangalore Restaurants</button>
        <button style={buttonStyle}>Kolakta Restaurants</button>
        <button style={buttonStyle}>Delhi Restaurants</button>
        <button style={buttonStyle}>Rajasthan Restaurants</button>
        <button style={buttonStyle}>Punjab Restaurants</button>
        <button style={buttonStyle}>Pune Restaurants</button>
        <button style={buttonStyle}>Patna Restaurants</button>
      </div>
    </div>
  );
}

export default Explore;
