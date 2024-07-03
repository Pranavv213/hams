import React, { useState } from 'react';
import './BloodDroplets.css';

const BloodDroplets = () => {
  const [droplets, setDroplets] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const newDroplet = {
      id: droplets.length,
      x: clientX,
      y: clientY,
    };
    setDroplets([...droplets, newDroplet]);

    setTimeout(() => {
      setDroplets(droplets.filter(droplet => droplet.id !== newDroplet.id));
    }, 1000); // Remove droplet after 1 second
  };

  return (
    <div className="blood-droplets-container" onClick={handleClick}>
      {droplets.map(droplet => (
        <div
          key={droplet.id}
          className="blood-droplet"
          style={{ left: droplet.x, top: droplet.y }}
        />
      ))}
    </div>
  );
};

export default BloodDroplets;
