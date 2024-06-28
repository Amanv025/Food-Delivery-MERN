// Login.js

import React, { useState } from 'react';
import { useAuth } from '../Auth';
import './login.css';
import { Link } from 'react-router-dom';
//import UserProfile from '../profile/profile';

const Login = ({ showSignup, toggleSignup, onClose ,onLogin}) => { // 1. Add onClose to props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setIsLoggedIn } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(email);
        setMessage('Login successful!'); // Set success message
        setIsLoggedIn(true);
         // Call onLogin with email soriye dite hobe eitake
         if (typeof onLogin === 'function') {
          // Call onLogin when needed 
          onLogin(email);
        } else {
          console.error('onLogin is not a function');
        }
      } else {
        setMessage(data.message); // Set error message
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Internal server error'); // Set error message for any unexpected errors
    }
  };
  const handleClose = () => { // 2. Define handleClose function
    onClose();
  };

  return (
    <div className="addUser" style={{ display: showSignup ? 'none' : 'block' }}>
       <button onClick={handleClose}>X</button> 
      <h3>Login</h3>
      {message && <p className={message.startsWith('Login successful') ? 'successMessage' : 'errorMessage'}>{message}</p>}
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have an Account? </p>
        <button className="btn btn-success" onClick={toggleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
