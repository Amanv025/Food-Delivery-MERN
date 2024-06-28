// ParentComponent.js
import React, { useState } from 'react';
import Login from './login/Login';
import UserProfile from './profile/profile';

const ParentComponent = () => {
  const [emailProp, setEmailProp] = useState('');

  return (
    <div>
      {/* Pass setEmailProp as a prop to Login component */}
      <Login setEmailProp={setEmailProp} />
      {/* Render UserProfile component with emailProp passed as prop */}
      {emailProp && <UserProfile email={emailProp} />}
    </div>
  );
};

export default ParentComponent;
