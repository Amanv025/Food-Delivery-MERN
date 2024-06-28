// ProductGrid.jsx

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../assets/products';
import './productGrid.css';

const ProductGrid = ({ addToCart }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products);
  }, []);

  return (
    <div>
      <div className="top-dishes-container">
        <h1>~~~~~~~~~~~~~~~Top Dishes Near You~~~~~~~~~~~~~</h1>
      </div>
      <div className="product-grid">
        {productData.map((product, index) => (
          <div key={index} className="product-card-wrapper">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
