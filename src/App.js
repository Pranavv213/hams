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
import { signInWithGoogle } from "./firebase-config";
const App = () => {
  

  return (
    <div className="App">
     
    <Navbar/>
    <Tap/>
    
    <button class="button-28" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
    {/* <Footer/> */}
     
    </div>
  );
};

export default App;






