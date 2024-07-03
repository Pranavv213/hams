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
    <div className='nav' >






{!localStorage.getItem('name') && <button className='button-28' style={{width:'9em'}} onClick={signInWithGoogle}>
        <img  src={google} style={{width:'2em'}}/> &nbsp; <l><b>Sign in</b> </l>
      </button>}

      {localStorage.getItem('name') && <div style={{color:'white'}}><b style={{color:'white'}}>{localStorage.getItem('name') }
        
      </b> <br></br><br></br> Level 1/10</div>  }

   
     
     
    
      
      {/* <img src={localStorage.getItem("profilePic")} /> */}

    </div>
  )
}

export default Navbar
