import React, { useState } from 'react';
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

const App = () => {
  

  return (
    <div className="App" style={{backgroundColor:'gold'}}>
     

    <Navbar/>
   
  
    <Tap/>
<br></br><br></br>
    <Footer/>
    
    
    {/* <Footer/> */}
     
    </div>
  );
};

export default App;






