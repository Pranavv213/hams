import React from 'react'
import './Navbar.css'
import google from './images/google.png'

import { signInWithGoogle } from "./firebase-config";

function Navbar() {
  return (
    <div style={{backgroundColor:'yellow',width:'100%'}}>

{!localStorage.getItem('name') && <button className='button-28' style={{marginLeft:'12px',marginTop:'12px'}} onClick={signInWithGoogle}>
        <img style={{width:'2em'}} src={google}/> &nbsp; <l><b>Sign in</b> </l>
      </button>}


{localStorage.getItem('name') && <img src={localStorage.getItem('profilePic')} style={{width:'4em',borderRadius:"50%",marginLeft:'12px',marginTop:'12px'}} />}

<center>
      <button className='button-46'>Join The Gang</button>
      </center>
      
      {/* <img src={localStorage.getItem("profilePic")} /> */}

    </div>
  )
}

export default Navbar
