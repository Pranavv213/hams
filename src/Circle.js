import React, { useState } from 'react';
import './Circle.css';

const Circle = ({img}) => {
  const [tapCount, setTapCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('samp.jpg');

  const handleTap = (e) => {
    const touchPoints = e.changedTouches ? e.changedTouches.length : 1;
    const newTapCount = tapCount + touchPoints;
    setTapCount(newTapCount);

    if (e.changedTouches) {
      Array.from(e.changedTouches).forEach((touch) => {
        createTapIndicator(touch.clientX, touch.clientY, touchPoints);
      });
    } else {
      createTapIndicator(e.clientX, e.clientY, 1);
    }
  };

  const createTapIndicator = (x, y, increment) => {
    const tapIndicator = document.createElement('div');
    tapIndicator.classList.add('tap-indicator');
    tapIndicator.textContent = `+${increment}`;
    tapIndicator.style.left = `${x}px`;
    tapIndicator.style.top = `${y}px`;
    document.body.appendChild(tapIndicator);

    setTimeout(() => {
      tapIndicator.remove();
    }, 1000);
  };

  const addTapEffect = () => {
    const image = document.getElementById('center-image');
    image.classList.add('tapped');
    setTimeout(() => {
      image.classList.remove('tapped');
    }, 100); // Duration of the tap effect
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app">
      <div className="upload-container">
      
      </div>
      <div className="image-container" onClick={(e) => { handleTap(e); addTapEffect(); }} onTouchStart={(e) => { handleTap(e); addTapEffect(); }}>
        <img src={img} alt="Center" id="center-image" className="center-image" />
        <div className="counter">Taps: {tapCount}</div>
      </div>
    </div>
  );
};

export default Circle;