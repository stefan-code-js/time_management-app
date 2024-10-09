import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Assuming the styles are in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by Adrian © 2024. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;