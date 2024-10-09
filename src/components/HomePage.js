import React from 'react';
import './HomePage.css';
import GlassButton from './GlassButton'; // Import the button component
import Footer from './Footer';
const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="top-text">ADRIAN STEFAN ON QUANTA</h1>
        <h2 className="title">QUANTA</h2>
        <span className="sub-title">Your journey in management</span>

        {/* Center the button under the subtitle */}
        <div className="glass-button-container">
          <GlassButton />
        </div>
        
        <p className="footer-text">JOIN WITH US AND CREATE YOUR BEST MANAGEMENT OF YOUR TIME</p>
        <Footer />
      </header>
    </div>
  );
};

export default HomePage;
