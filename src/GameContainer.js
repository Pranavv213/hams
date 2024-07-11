import React, { useState,useEffect } from 'react';
import BottomNavbar from './BNavBar';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signInWithGoogle } from "./firebase-config";
const GameContainer = () => {
  const [tapCount, setTapCount] = useState(0);
  const [usercoins, setUsercoins] = useState({});

  const usersCollectionRef = collection(db, "userscoins");

  const updateUserCoins = async () => {
    const userDoc = doc(db, "userscoins", usercoins.id);
    const newFields = { 
      email:usercoins.email,
      coins:tapCount+1
     };
    await updateDoc(userDoc, newFields);
  };

  const handleTap = async (e) => {

   
    setTapCount(prevCount => prevCount + 1);
   
    
    if(localStorage.getItem('email')!=null && usercoins.id)
      {
        updateUserCoins()
      }
      else
      {
        if(!localStorage.getItem('email'))
          {
            setTapCount(0)
            notify()
          
          }
          else if(localStorage.getItem('email') && !usercoins.id)
            {
              getUsers()

            }
       
      }
  
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
        
      //  alert('Please Sign In')
        
      }
    
  };
  useEffect(()=>{
    
  

  getUsers();
  },[])
  const notify = () => toast("Sign In to start Earning !");

  return (
    <div id="game-container">
     
      <div id="coin-container">
        <img src="bcoin.png" alt="Coin Icon" id="coin-icon" />
        <span id="tap-count">{tapCount}</span>
      </div>

      <div id="image-container" onClick={(e) => handleTap(e.clientX, e.clientY)}>
        <img src="b.png" alt="Center Image" id="center-image" />
      </div>
      <ToastContainer />
      <BottomNavbar />
    </div>
  );
};

export default GameContainer;