import React from 'react';
import UserForm from '../components/UserForm';  // Import the form component
import './Register.css';  // CSS for the Register page

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register New User</h2>
        <p>Create an account to access the e-learning platform</p>
        <UserForm />  {/* Render the UserForm component */}
      </div>
    </div>
  );
};

export default Register;
