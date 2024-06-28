import React from 'react';
import './Cart.css';
import { loadStripe } from '@stripe/stripe-js';

//const stripePromise = loadStripe('pk_test_51PC60hSBLn8coPI1Wat1sobrK2cFi4dcBOka12bBeDOYGl1EF2W1zSg0BvFbeUCbwPnBZeOtzpFNs4y4ngmleQUH003HHeiGEv');

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const handlePayment = async () => {
    try {
      const stripe = await loadStripe("pk_test_51PC60hSBLn8coPI1Wat1sobrK2cFi4dcBOka12bBeDOYGl1EF2W1zSg0BvFbeUCbwPnBZeOtzpFNs4y4ngmleQUH003HHeiGEv");
      const body = {
        products: cartItems
      };
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch('http://localhost:8000/api/user/create-checkout-session', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });
      const session = await response.json();
      const result= stripe.redirectToCheckout({
        sessionId: session.id
      });
      if(result.error){
        console.log(result.error.message);
      }
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };
  

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  console.log(cartItems);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <p>{cartItems.length} Items</p>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>Price: Rs. {item.price}</p>
                  <p>Restaurant: {item.restaurant}</p>
                  <p>Delivery Time: {item.deliveryTime}</p>
                  <p>
                    <span className="cart-item-remove" onClick={() => handleRemove(index)}>
                      Remove
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button className="total-price-button" onClick={handlePayment}>
            Total Price: Rs. {getTotalPrice()}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
