import React, { useState } from 'react';
import { getUserById, getUserByUsername, getUserByEmail } from '../services/userService';
import './UserSearch.css';
import UserDetails from './UserDetails';

const UserSearch = () => {
  const [searchType, setSearchType] = useState('id');
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    let response;
    try {
      if (searchType === 'id') {
        response = await getUserById(searchValue);
      } else if (searchType === 'username') {
        response = await getUserByUsername(searchValue);
      } else if (searchType === 'email') {
        response = await getUserByEmail(searchValue);
      }
      setUser(response.data);
      setMessage('');
    } catch (error) {
      setUser(null);
      setMessage('User not found');
    }
  };

  return (
    <div className="user-search">
      <h2>Search User</h2>
      <form onSubmit={handleSearch}>
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="id">By ID</option>
          <option value="username">By Username</option>
          <option value="email">By Email</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchType}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {message && <p>{message}</p>}
      {user && <UserDetails user={user} />}
    </div>
  );
};

export default UserSearch;
