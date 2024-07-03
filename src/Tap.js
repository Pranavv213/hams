import React,{useState} from 'react'
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/mine.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import './Tap.css'

function Tap() {

    const [tapCount, setTapCount] = useState(0);

    const handleTap = (x, y, increment) => {
      setTapCount(prevCount => prevCount + increment);
      const tapIndicator = document.createElement('img');
      tapIndicator.src = coinImage;
      tapIndicator.classList.add('tap-indicator');
      tapIndicator.style.left = `${x - 10}px`; // Center the coin on the tap
      tapIndicator.style.top = `${y - 10}px`; // Center the coin on the tap
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
    
    const handleTouchStart = (event) => {
      addTapEffect();
      const touchPoints = event.changedTouches.length;
      for (let i = 0; i < touchPoints; i++) {
        const touch = event.changedTouches[i];
        handleTap(touch.clientX, touch.clientY, 1);
      }
    };
    
    const handleClick = (event) => {
      addTapEffect();
      handleTap(event.clientX, event.clientY, 1);
    };
  return (
    <div> 
     <div >
      <center>
        <div style={{paddingTop:'30px'}} className="coins">
          <div  >
        <img style={{width:'50px'}} src={coinImage} alt="Coin Icon" id="coin-icon" />
        </div>
        <div style={{fontSize:'25px',color:'goldenrod'}}>
          <b>
       {tapCount}</b>
       </div>
        </div>
        </center>
      </div>

      <div id="image-container" style={{paddingTop:'10px'}} onTouchStart={handleTouchStart} onClick={handleClick}>
        <img  style={{width:'250px'}} src={bagImage} alt="Center Image" id="center-image" />
      </div>
    </div>
  )
}

export default Tap
