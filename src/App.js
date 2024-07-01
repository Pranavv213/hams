import React, { useState } from 'react';
import './App.css';

function App() {
  const [tapCount, setTapCount] = useState(0);
  const [tapHandled, setTapHandled] = useState(false);
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

  const handleMultiTap = (event) => {
    const tapArea = document.getElementById('tap-area');

    if (event.type === 'click') {
      if (!tapHandled) {
        createTapFeedback(event.clientX, event.clientY, tapArea);
        updateTapCount();
      }
      setTapHandled(false);
    } else {
      for (let i = 0; i < event.changedTouches.length; i++) {
        const touch = event.changedTouches[i];
        createTapFeedback(touch.clientX, touch.clientY, tapArea);
        updateTapCount();
      }
      setTapHandled(true);
    }
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
    setTapCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <div id="game-area">
        <div id="tap-count">Taps: {tapCount}</div>
        <div id="tap-area" onClick={handleMultiTap} onTouchStart={handleMultiTap}>
         

            {file==null &&  <input type="file" onChange={handleChange} /> }

         
          <img style={{width:'300px', height:'300px',borderRadius:'50%'}} src={file} />
          
        </div>
      </div>
    </div>
  );
}

export default App;