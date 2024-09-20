import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/search">Search User</Link></li>
          <li><Link to="/instructors">Instructors</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/enrollments">Enrollments</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

