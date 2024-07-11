import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BottomNavbar = () => {
  const handleButtonClick = (buttonId) => {
    document.getElementById('coming-soon-popup').style.display = 'block';
    setTimeout(function() {
        document.getElementById('coming-soon-popup').style.display = 'none';
    }, 1000); 
  };
  const notify = () => toast("Coming Soon !");

  return (
    <div id="navbar-bottom">
        <ToastContainer/>
      <div id="b-icon" className="nav-button">
        <img src="b.png" alt="B Icon" style={{ height: '80px', width: '80px' }} />
      </div>
      <div id="feed-icon" className="nav-button" onClick={notify}>
        <img src="food.png" alt="Food Icon" />
        <div className="icon-label">feed</div>
      </div>
      <Link to="/invite" className="nav-button">
          <div id="friends-icon">
              <img src="friends.png" alt="Friends Icon" style={{ width: '65px' }} />
              <div className="icon-label">friends</div>
          </div>
      </Link>
      <div id="earn-icon" className="nav-button" onClick={notify}>
        <img src="earn.png" alt="Earn Icon" />
        <div className="icon-label">earn</div>
      </div>
      <div id="airdrop-icon" className="nav-button" onClick={notify}>
        <img src="berachain.png" alt="Airdrop Icon" />
        <div className="icon-label">airdrop</div>
      </div>
    </div>
  );
};

export default BottomNavbar;