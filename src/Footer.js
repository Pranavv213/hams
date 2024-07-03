import React from 'react'
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/mine.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
       <div id="navbar">
        <div className="nav-item">
          <img src={robberImage} alt="Robber Icon" id="robber" />
        </div>
        <div className="nav-item">
          <img src={mineImage} alt="Mine Icon" />
          <span>Mine</span>
        </div>
        <div className="nav-item">
          <img src={friendsImage} alt="Friends Icon" />
          <span>Friends</span>
        </div>
        <div className="nav-item">
          <img src={earnImage} alt="Earn Icon" />
          <span>Earn</span>
        </div>
        <div className="nav-item">
          <img src={airDropImage} alt="Air Drop Icon" />
          <span>Air Drop</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
