import React from 'react';
import './Footer.css'; // Assuming your CSS is in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/stefan-code-js" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> {/* GitHub is a brand icon, so it uses "fab" */}
      </a>
      <a href="https://www.instagram.com/adrianstefan__/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i> {/* Instagram is a brand icon */}
      </a>
      <a href="https://www.linkedin.com/in/adrian-stefan-badea-82456131b/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i> {/* LinkedIn is a brand icon */}
      </a>
      <a href="mailto:badea.adrian.stefan1@gmail.com">
        <i className="fas fa-at"></i> {/* The "@" symbol uses the solid set, so "fas" */}
      </a>
      <div className="footer-copyright-wrapper text-center">
        <p>
          <i className="fas fa-copyright"></i> Created by Adrian{' '}
          <i className="fas fa-quote-right"></i> 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;