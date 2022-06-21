import React from 'react';
import './navbar.css';

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar_container">
      <div className="container">
        <a href="/" className="logo">{brand}</a>
      </div>
    </nav>
  )
}

export default Navbar