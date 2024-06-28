//signup new

import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

const Signup = ({ show, toggleLogin, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Make API call to submit form data
      const response = await axios.post('http://localhost:8000/api/user/create', formData);
      
      // Check if the response object and its data property are defined
      if (response && response.data) {
        // Access the data property
        const responseData = response.data;
        // Display success message to the user
        console.log('Data entered successfully:', responseData);
        // Optionally, you can reset the form fields after successful submission
        setFormData({ name: '', email: '', password: '' });
      } else {
        console.error('Response object or data property is undefined.');
      }
    } catch (error) {
      // Handle errors from the API call
      console.error('Error:', error);
      // Display error message to the user
      console.error('Failed to submit data. Please try again.');
    }
    onClose(); // Close the signup form
  };

  const handleClose = () => {
    onClose(); // Call the onClose function to close the Signup form
  };

  return (
    <div className={`addUser ${show ? 'show' : ''}`}>
      <button onClick={handleClose}>X</button>
      <h3>Sign Up</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account? </p>
        <button className="btn btn-primary" onClick={toggleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
