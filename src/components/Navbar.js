import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import { FiSearch } from 'react-icons/fi';  // Search icon
import { gsap } from 'gsap';  // GSAP for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';  // Correct import for faBars

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Hamburger menu state
  const [searchQuery, setSearchQuery] = useState('');  // Search bar input state
  const [isSearching, setIsSearching] = useState(false);  // Search bar toggle state

  const navLinksRef = useRef(null);  // Ref for the nav links for GSAP animation

  // GSAP animation for the hamburger menu
  useEffect(() => {
    if (isOpen) {
      gsap.to(navLinksRef.current, { height: '200px', duration: 0.5, ease: 'power3.inOut' });
    } else {
      gsap.to(navLinksRef.current, { height: '0px', duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearching(!isSearching);  // Toggle search bar visibility
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);  // Update search query as user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Search submitted: ${searchQuery}`);  // You can replace this with actual search logic
  };

  return (
    <nav className="glass-navbar">
      <div className="navbar-logo">
        <Link to="/">QUANTA</Link>  {/* Link to homepage */}
      </div>

      {/* Hamburger Menu for smaller screens */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </div>

      {/* Animated Links */}
      <ul ref={navLinksRef} className={`navbar-links ${isOpen ? 'active' : ''}`}>
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

      {/* Profile Image */}
      <div className="navbar-profile">
        <img src="../logo.svg" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
