// ProductCard.jsx

import React, { useState } from 'react';
import './productCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = () => {
    setItemCount(prevCount => prevCount + 1);
    addToCart(product); // Add product to cart when incrementing
  };

  const handleDecrement = () => {
    if (itemCount > 0) {
      setItemCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="item-count-container">
          {itemCount > 0 && (
            <button className="subtract-button" onClick={handleDecrement}>-</button>
          )}
          {itemCount > 0 && <div className="item-count">{itemCount}</div>}
          {/* Plus button with HTML entity for plus sign */}
          <button className="add-button" onClick={handleIncrement}>
            {/* Use HTML entity for plus sign (+) */}
            &#43;
          </button>
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Rs. {product.price}</p>
        <p className="restaurant-name">{product.restaurant}</p>
        <p className="delivery-time">{product.deliveryTime}</p>
      </div>
    </div>
  );
};

export default ProductCard;
