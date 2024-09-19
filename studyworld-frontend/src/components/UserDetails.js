import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h3>User Details</h3>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Date Joined:</strong> {new Date(user.dateJoined).toLocaleString()}</p>
    </div>
  );
};

export default UserDetails;
