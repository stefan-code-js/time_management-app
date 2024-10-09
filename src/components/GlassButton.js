import React, { useState } from 'react';
import './GlassButton.css'; // CSS file for the button

const GlassButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <button 
      className="glass-button" 
      onMouseMove={handleMouseMove}
      style={{
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
      }}
    >
      Get Started
    </button>
    
  );
}

export default GlassButton;
