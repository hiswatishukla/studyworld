import React, { useState } from 'react';
import { registerUser } from '../services/userService';
import './UserForm.css';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('ROLE_STUDENT');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password, role };
    try {
      const response = await registerUser(newUser);
      setMessage(`User ${response.data.username} registered successfully!`);
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  return (
    <div className="user-form">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ROLE_STUDENT">Student</option>
          <option value="ROLE_INSTRUCTOR">Instructor</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserForm;
