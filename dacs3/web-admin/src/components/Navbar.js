// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: 'white' }}>
      <ul style={{ listStyleType: 'none', display: 'flex' }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>User Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
