import React, { useState } from 'react';
import { getUserById } from '../services/userService';  // Import the specific function
import './Search.css';  // Import the CSS file

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await getUserById(searchQuery);  // Use the correct function from the named export
      setUser(response.data);
      setErrorMessage('');
    } catch (error) {
      setUser(null);
      setErrorMessage('User not found. Please try again.');
    }
  };

  return (
    <div className="search-container">
      <h2>Search User</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter user ID or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {user && (
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
