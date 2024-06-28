// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cuisine from './components/Cuisine';
import Animation from './components/Animation';
import Filter from './components/Filter';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/profile.jsx';
import { AuthProvider } from './components/Auth.jsx';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Offer from './components/offers/Offer';
import Explore from './components/Explore/Explore';
import Cart from './components/cart/Cart.jsx';
import { loadStripe } from '@stripe/stripe-js';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Cuisine />
                  <Animation />
                  <ProductGrid addToCart={addToCart} />
                  <Filter />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
