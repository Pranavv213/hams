import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
  const handleButtonClick = (buttonId) => {
    document.getElementById('coming-soon-popup').style.display = 'block';
    setTimeout(function() {
        document.getElementById('coming-soon-popup').style.display = 'none';
    }, 1000); 
  };

  return (
    <div id="navbar-bottom">
      <div id="b-icon" className="nav-button">
        <img src="b.png" alt="B Icon" style={{ height: '80px', width: '80px' }} />
      </div>
      <div id="feed-icon" className="nav-button" onClick={() => handleButtonClick('feed-icon')}>
        <img src="food.png" alt="Food Icon" />
        <div className="icon-label">feed</div>
      </div>
      <Link to="/invite" className="nav-button">
          <div id="friends-icon">
              <img src="friends.png" alt="Friends Icon" style={{ width: '65px' }} />
              <div className="icon-label">friends</div>
          </div>
      </Link>
      <div id="earn-icon" className="nav-button" onClick={() => handleButtonClick('earn-icon')}>
        <img src="earn.png" alt="Earn Icon" />
        <div className="icon-label">earn</div>
      </div>
      <div id="airdrop-icon" className="nav-button" onClick={() => handleButtonClick('airdrop-icon')}>
        <img src="berachain.png" alt="Airdrop Icon" />
        <div className="icon-label">airdrop</div>
      </div>
    </div>
  );
};

export default BottomNavbar;