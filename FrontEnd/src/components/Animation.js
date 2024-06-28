import React from 'react';
import burger from '../components/assets/burger.jpg';
import sandwich from '../components/assets/sandwich.jpg';
import paneer from '../components/assets/paneer.jpg';

function Animation() {
  const carouselContainerStyle = {
 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    padding: '40px', 
    textAlign: 'center', 
    backgroundColor: '#222',
  };

  const carouselStyle = {
    maxHeight: '450px', 
  };
  const carouselinner = {
    maxHeight: '450px', 
  };

  const imageStyle = {
    height: '450px', 
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{...carouselContainerStyle}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={burger} className="d-block w-100" alt="Burger" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={sandwich} className="d-block w-100" alt="Sandwich" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={paneer} className="d-block w-100" alt="Paneer" style={imageStyle} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Animation;
