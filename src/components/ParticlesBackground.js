import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the tsparticles engine with all features
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,  // Number of particles
            density: {
              enable: true,
              value_area: 800,  // Control how dense the particles are
            },
          },
          color: {
            value: "#ffffff",  // Color of the particles
          },
          shape: {
            type: "circle",  // Shape of the particles
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 3,
            random: true,  // Randomized particle sizes
          },
          move: {
            enable: true,
            speed: 2,  // Speed of particle movement
            direction: "none",  // Direction of movement
            outMode: "out",  // Makes sure particles don't stick around edges
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",  // Lines connecting particles
            opacity: 0.4,
            width: 1,
          },
        },
        retina_detect: true,  // Adjusts particle settings for retina displays
      }}
    />
  );
};

export default ParticlesBackground;
