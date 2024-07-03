import React, { useState,useEffect,useRef } from 'react';
import './App.css';
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/mine.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import Navbar from './Navbar'
import Footer from './Footer'
import Tap from './Tap';
import forest from './images/forest.png'


const App = () => {



  return (
    <div >
 
 <div className="mobile-warning">
        <h1>This site is best viewed on a mobile device. Please switch to a mobile device.</h1>
      </div>
  
 <br></br>
 <br></br>

   <center>
    <div className='Tap'>
    <Tap/>
    </div>
    </center>
    
    {/* <Footer/> */}
     
    </div>
  );
};

export default App;






