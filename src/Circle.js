import React, { useState } from 'react';
import './Circle.css';

const TapCounter = () => {
  const [tapCount, setTapCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('samp.jpg');

  const handleTap = (e) => {
    const touchPoints = e.changedTouches ? e.changedTouches.length : 1;
    setTapCount(tapCount + touchPoints);
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
        <label htmlFor="image-upload" className="image-upload-label">Upload</label>
        <input type="file" id="image-upload" accept="image/*" onChange={handleFileChange} />
      </div>
      <div className="image-container" onClick={handleTap} onTouchStart={handleTap}>
        <img src={imageSrc} alt="Center" className="center-image" />
        <div className="counter">Taps: {tapCount}</div>
      </div>
    </div>
  );
};

export default TapCounter;