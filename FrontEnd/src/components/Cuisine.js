import React from 'react';
import pizza from '../components/assets/pizza.jpg';
import chinese from '../components/assets/chinese.jpg';
import dosa from '../components/assets/dosa.jpg';
import drinks from '../components/assets/drinks.jpg';
import dessert from '../components/assets/dessert.jpg';

function Cuisine() {
  return (
    <div style={{ backgroundColor: '#222', color: 'white', padding: '20px', position: 'relative' }}>
      {/* Moving lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: 'white', animation: 'moveHorizontal 2s infinite alternate' }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: 'white', animation: 'moveHorizontal 2s infinite alternate-reverse', marginTop: '4px' }}></div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: 'white', animation: 'moveHorizontal 2s infinite alternate' }}></div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: 'white', animation: 'moveHorizontal 2s infinite alternate-reverse', marginBottom: '4px' }}></div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '2px', backgroundColor: 'white', animation: 'moveVertical 2s infinite alternate' }}></div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '2px', backgroundColor: 'white', animation: 'moveVertical 2s infinite alternate-reverse', marginLeft: '4px' }}></div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '2px', backgroundColor: 'white', animation: 'moveVertical 2s infinite alternate' }}></div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '2px', backgroundColor: 'white', animation: 'moveVertical 2s infinite alternate-reverse', marginRight: '4px' }}></div>
      
      <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Explore Your Palate: What's Your Craving Today?
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%' }}>
        <button style={{ textAlign: 'center', padding: '10px', flex: '1 1 20%', maxWidth: '20%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={pizza} style={{ width: '80%', height: '150px', border: '1px solid #ccc', borderRadius: '50%', transition: 'transform 0.3s' }} alt="Pizza" />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>Italian</p>
        </button>
        <button style={{ textAlign: 'center', padding: '10px', flex: '1 1 20%', maxWidth: '20%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={chinese} style={{ width: '80%', height: '150px', border: '1px solid #ccc', borderRadius: '50%', transition: 'transform 0.3s' }} alt="Chinese Food" />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>Chinese</p>
        </button>
        <button style={{ textAlign: 'center', padding: '10px', flex: '1 1 20%', maxWidth: '20%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={dosa} style={{ width: '80%', height: '150px', border: '1px solid #ccc', borderRadius: '50%', transition: 'transform 0.3s' }} alt="Dosa" />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>South Indian</p>
        </button>
        <button style={{ textAlign: 'center', padding: '10px', flex: '1 1 20%', maxWidth: '20%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={drinks} style={{ width: '80%', height: '150px', border: '1px solid #ccc', borderRadius: '50%', transition: 'transform 0.3s' }} alt="Drinks" />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>Drinks</p>
        </button>
        <button style={{ textAlign: 'center', padding: '10px', flex: '1 1 20%', maxWidth: '20%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={dessert} style={{ width: '80%', height: '150px', border: '1px solid #ccc', borderRadius: '50%', transition: 'transform 0.3s' }} alt="Dessert" />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>Dessert</p>
        </button>
      </div>

      {/* CSS for hovering effect and animations */}
      <style>
        {`
          img:hover {
            transform: scale(1.1);
          }

          @keyframes moveHorizontal {
            0% { left: 0; }
            100% { left: 100%; }
          }

          @keyframes moveVertical {
            0% { top: 0; }
            100% { top: 100%; }
          }
        `}
      </style>
    </div>
  );
}

export default Cuisine;
