import React,{useState,useEffect,useRef} from 'react'
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/weapons.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import zombie from './images/zombie.gif'
import { signInWithGoogle } from "./firebase-config";
import BloodDroplets from './BloodDroplets';
import blood from './images/blood.png'
import Navbar from './Navbar';
import zombiesound1 from './sounds/zombiesound1.mp3'
import gun from './images/gun.png'
import zombiemusic from './sounds/zombiemusic.mp3'

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
    const [musicPlayed, setMusicPlayed] = useState(false);
    const audioRef = useRef(null);
    const audioBackgroundRef = useRef(null);
    
    
    const [gifPosition, setGifPosition] = useState(null);
    
   
    const updateUserCoins = async () => {
      const userDoc = doc(db, "userscoins", usercoins.id);
      const newFields = { 
        email:usercoins.email,
        coins:tapCount
       };
      await updateDoc(userDoc, newFields);
    };

    const handleTap = async () => {
      setTapCount(prevCount => prevCount + 1);
      
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
    
    };
    
   
    
    const handleTouchStart = (event) => {
      
     
        handleTap();
      
    };
    
    const handleClick = (event) => {
      const x = event.clientX;
    const y = event.clientY;
    setGifPosition({ x, y });

    if (audioRef.current) {
      audioRef.current.play();
    }
    // Remove the GIF after 2 seconds
    setTimeout(() => {
      setGifPosition(null);
    }, 1000);
      handleTap();
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
      
      if (!audioBackgroundRef.current) {
        audioBackgroundRef.current.play();
      }
  
    getUsers();
    },[])

   

  return (
    <div> 
     <div style={{backgroundColor:'black'}}>
     
        <div  >
          <div class="tapnav" style={{backgroundColor:'black'}}>
            <div className="first">
          <Navbar/>
          </div>
          <center>
          <div className="second">
        <img style={{width:'5em'}} src={coinImage} alt="Coin Icon"  />
        <div >
          <b style={{color:'white'}}>
       { tapCount}</b>
       </div>
       </div>
       </center>
       
        </div>
       
        </div>
        
      </div>
      
{localStorage.getItem('email') &&  <div   style={{paddingTop:'10px'}}  >

        <img  style={{width:'20em',height:'30em'}} src={zombie} alt="Center Image"  />
        <img style={{width:'15em'}} src={gun} onClick={handleClick} />
      </div>}
      {gifPosition && (
        <img
          src={blood}
          alt="Click GIF"
          style={{
            position: 'absolute',
            top: gifPosition.y-270,
            left: gifPosition.x,
            width: '50px',
            height: '100px',
            transition: 'opacity 1s',
          }}
        />
      )}

    <audio ref={audioRef} src={zombiesound1} />
    try {
      <audio ref={audioBackgroundRef} src={zombiemusic} loop autoPlay />
    } catch (error) {
      
    }
    

      {!localStorage.getItem('email') &&  <div style={{paddingTop:'10px'}} onClick={signInWithGoogle}>
        <img  style={{width:'20em',height:'30em'}} src={zombie} alt="Center Image"  />
      </div>}
   
    </div>
  )
}

export default Tap
