import React from 'react';
import './AboutPage.css'; // Assuming styles are in a separate CSS file
import gif1 from '../chart1.gif';
import gif2 from '../chart2.gif';
import Footer from './Footer';
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="background-image"></div>  {/* Static background image */}
      <div className="glass-container">
        <div className="about-content">
        <h1>About Us</h1>
          <p>
            Welcome to <span className="glow">TimeMaster</span>, your ultimate tool to 
            <span className="glow"> take control of your time</span>! 
            At TimeMaster, we believe that time is your most valuable asset. With our intuitive and powerful 
            features, you'll <span className="glow">boost your productivity</span>, streamline your tasks, and 
            effortlessly <span className="glow">achieve your goals</span>.
          </p>
          <p>
            Our mission is to help you stay on top of your busy schedule, while keeping it simple, clean, and 
            effective. Whether you're balancing work, life, or play, <span className="glow">TimeMaster</span> is here 
            to make every second count!
          </p>
          <div className="gif-container">
            <img src={gif1} alt="GIF 1" className="about-gif"/>
            <img src={gif2} alt="GIF 2" className="about-gif"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;