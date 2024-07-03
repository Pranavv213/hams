import React from 'react'
import './Navbar.css'
import google from './images/google.png'

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

function Navbar() {
  return (
    <div className='nav'>






{!localStorage.getItem('name') && <button className='button-28' style={{width:'9em'}} onClick={signInWithGoogle}>
        <img  src={google} style={{width:'2em'}}/> &nbsp; <l><b>Sign in</b> </l>
      </button>}

      {localStorage.getItem('name') && <img src={localStorage.getItem('profilePic')}  />}

   
      <button className='button-46' style={{width:'10em'}}>Join The Gang</button>
     
    
      
      {/* <img src={localStorage.getItem("profilePic")} /> */}

    </div>
  )
}

export default Navbar
