/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './AboutPage.css'; // Assuming styles are in a separate CSS file
import gif1 from '../chart1.gif';
import gif2 from '../chart2.gif';
import Footer from './Footer';
import { gsap } from 'gsap'; // Import GSAP for animations
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import React Icons
import ParticlesBackground from './ParticlesBackground';
const AboutPage = () => {
  const glassContainerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const gifContainerRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      gifContainerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="about-page">
       <ParticlesBackground />
      <div className="background-image"></div> {/* Static background image */}
      <div ref={glassContainerRef} className="glass-container">
        <div ref={contentRef} className="about-content">
          <h1 ref={titleRef}>About Us</h1>
          <p>
            Welcome to <span className="glow">TimeMaster</span>, your ultimate tool to
            <span className="glow"> take control of your time</span>! At TimeMaster, we believe that time is your most valuable asset. With our intuitive and powerful
            features, you'll <span className="glow">boost your productivity</span>, streamline your tasks, and
            effortlessly <span className="glow">achieve your goals</span>.
          </p>
          <p>
            Our mission is to help you stay on top of your busy schedule, while keeping it simple, clean, and effective. Whether you're balancing work, life, or play, <span className="glow">TimeMaster</span> is here
            to make every second count!
          </p>
          <div ref={gifContainerRef} className="gif-container">
            <img src={gif1} alt="GIF 1" className="about-gif" />
            <img src={gif2} alt="GIF 2" className="about-gif" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
