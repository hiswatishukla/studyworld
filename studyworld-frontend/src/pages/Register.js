import React from 'react';
import UserForm from '../components/UserForm';  // Import the form component

const Register = () => {
  return (
    <div className="register">
      <h2>Register New User</h2>
      <UserForm />  {/* Render the UserForm component */}
    </div>
  );
};

export default Register;
