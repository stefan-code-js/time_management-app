import React, { useEffect, useRef } from 'react';
import './HomePage.css'; // Assuming styles are in a separate CSS file
import GlassButton from './GlassButton'; // Import the button component
import Footer from './Footer'; // Import the footer component
import { gsap } from 'gsap'; // Import GSAP for animations
import ParticlesBackground from './ParticlesBackground';
const HomePage = () => {
  const topTextRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const footerTextRef = useRef(null);

  // GSAP animations on mount
  useEffect(() => {
    gsap.fromTo(
      topTextRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
    );
    gsap.fromTo(
      footerTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="App">
       <ParticlesBackground />
      <header className="App-header">
        <h1 ref={topTextRef} className="top-text">ADRIAN STEFAN ON QUANTA</h1>
        <h2 ref={titleRef} className="title">QUANTA</h2>
        <span ref={subTitleRef} className="sub-title">Your journey in management</span>

        {/* Center the button under the subtitle */}
        <div className="glass-button-container">
          <GlassButton />
        </div>
        
        <p ref={footerTextRef} className="footer-text">
          JOIN WITH US AND CREATE YOUR BEST MANAGEMENT OF YOUR TIME
        </p>
        <Footer />
      </header>
    </div>
  );
};

export default HomePage;
