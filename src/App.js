import React, { useState } from 'react';
import './App.css';
import images from './images.jpeg'

function App() {
  const [tapCount, setTapCount] = useState(0);

  const handleMultiTap = (event) => {
    const tapArea = event.currentTarget;

    // Check if the event was triggered by touch
    const isTouch = event.type.startsWith('touch');

    if (isTouch) {
      // Handle touch events
      for (let i = 0; i < event.changedTouches.length; i++) {
        const touch = event.changedTouches[i];
        createTapFeedback(touch.clientX, touch.clientY, tapArea);
      }
    } else {
      // Handle click events
      createTapFeedback(event.clientX, event.clientY, tapArea);
    }

    // Update tap count after handling tap
    updateTapCount();
  };

  const createTapFeedback = (x, y, tapArea) => {
    const tapFeedback = document.createElement('div');
    tapFeedback.className = 'tap-feedback';
    tapFeedback.textContent = '+1';
    tapFeedback.style.left = `${x - tapArea.getBoundingClientRect().left}px`;
    tapFeedback.style.top = `${y - tapArea.getBoundingClientRect().top}px`;

    tapArea.appendChild(tapFeedback);

    setTimeout(() => {
      tapFeedback.remove();
    }, 1000);
  };

  const updateTapCount = () => {
    setTapCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <div id="game-area">
        <div id="tap-count">Taps: {tapCount}</div>
        <div id="tap-area" onClick={handleMultiTap} onTouchStart={handleMultiTap}>
        <img style={{width:'300px', height: '300px' ,borderRadius:'50%'}} src={images}></img>
        </div>
      </div>
    </div>
  );
}

export default App;


