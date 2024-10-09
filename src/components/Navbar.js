import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import { FiSearch } from 'react-icons/fi';  // Importing search icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State for the hamburger menu
  const [searchQuery, setSearchQuery] = useState('');  // State for search input
  const [isSearching, setIsSearching] = useState(false);  // State to manage search bar appearance

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);  // Update search query as user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Search submitted: ${searchQuery}`);  // You can replace this with actual search logic
  };

  const toggleSearch = () => {
    setIsSearching(!isSearching);  // Toggle search bar visibility
  };

  return (
    <nav className="glass-navbar">
      <div className="navbar-logo">
        <Link to="/">QUANTA</Link>  {/* Simple link to the homepage */}
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* Search Bar */}
      <form className={`navbar-search ${isSearching ? 'active' : ''}`} onSubmit={handleSearchSubmit}>
        <FiSearch className="search-icon" onClick={toggleSearch} />
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </form>

      <div className="navbar-profile">
        <img src="../logo.svg" alt="Profile" />
      </div>

      {/* Hamburger Menu for smaller screens */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
