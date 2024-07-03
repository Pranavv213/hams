import React,{useState,useEffect} from 'react'
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/mine.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import zombie from './images/zombie.png'
import { signInWithGoogle } from "./firebase-config";

import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import './Tap.css'

function Tap() {

    const [tapCount, setTapCount] = useState(0);
    const [usercoins, setUsercoins] = useState({});
    const usersCollectionRef = collection(db, "userscoins");

    const updateUserCoins = async () => {
      const userDoc = doc(db, "userscoins", usercoins.id);
      const newFields = { 
        email:usercoins.email,
        coins:tapCount
       };
      await updateDoc(userDoc, newFields);
    };

    const handleTap = async (x, y, increment) => {
      setTapCount(prevCount => prevCount + increment);
      const tapIndicator = document.createElement('img');
      tapIndicator.src = coinImage;
      tapIndicator.classList.add('tap-indicator');
      tapIndicator.style.left = `${x - 10}px`; // Center the coin on the tap
      tapIndicator.style.top = `${y - 10}px`; // Center the coin on the tap
      document.body.appendChild(tapIndicator);
      if(localStorage.getItem('email')!=null && usercoins.id)
        {
          updateUserCoins()
        }
        else
        {
          if(!localStorage.getItem('email'))
            {
              await signInWithGoogle()
            
            }
            else if(localStorage.getItem('email') && !usercoins.id)
              {
                getUsers()

              }
         
        }
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

    function getMaxCoinsObject(email, objects) {
      let maxCoinsObject = null;
      
      objects.forEach(obj => {
          if (obj.email === email) {
              if (!maxCoinsObject || obj.coins > maxCoinsObject.coins) {
                  maxCoinsObject = obj;
              }
          }
      });
      
      return maxCoinsObject;
  }

    const getUsers = async () => {

      if(localStorage.getItem('email')!=null)
        {const data = await getDocs(usersCollectionRef);

          console.log(data)

         let usercoindata=await data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

         
          
          let flag=0;

         for(let i=0;i<usercoindata.length;i++)
          {
            if(usercoindata[i].email==localStorage.getItem('email'))
              {
               
                setTapCount(getMaxCoinsObject(localStorage.getItem('email'),usercoindata).coins)
                setUsercoins(getMaxCoinsObject(localStorage.getItem('email'),usercoindata));
                flag=1;
                break;
              }
          }
          if(flag==0)
            {
              await addDoc(usersCollectionRef, { email: localStorage.getItem('email'), coins:tapCount })

              window.location.reload();
            }
            
        }
        else 
        {
          
         alert('Please Sign In')
          
        }
      
    };
    useEffect(()=>{
      

    getUsers();
    },[])

   

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
       { tapCount}</b>
       </div>
        </div>
        </center>
      </div>
{localStorage.getItem('email') &&  <div id="image-container" style={{paddingTop:'10px'}} onTouchStart={handleTouchStart} onClick={handleClick}>
        <img  style={{width:'250px'}} src={zombie} alt="Center Image" id="center-image" />
      </div>}

      {!localStorage.getItem('email') &&  <div id="image-container" style={{paddingTop:'10px'}} onClick={signInWithGoogle}>
        <img  style={{width:'250px'}} src={zombie} alt="Center Image" id="center-image" />
      </div>}
     
    </div>
  )
}

export default Tap
