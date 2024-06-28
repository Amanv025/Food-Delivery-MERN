// UserProfile.js
//sob jaigai email er jaigai logged in email lekha ache
import React, { useState, useEffect } from 'react';

const UserProfile = ({ loggedInEmail }) => { // Receive email as a prop
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserProfileData = async (loggedInEmail) => {
    console.log(loggedInEmail);
    try {
      const response = await fetch(`http://localhost:8000/api/user/profiledata/${loggedInEmail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user profile data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserProfileData(loggedInEmail); // Use email prop here
        setUserProfile(userData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [loggedInEmail]); // Re-run effect when email prop changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userProfile && (
        <div>
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
