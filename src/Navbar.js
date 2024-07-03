import React from 'react'
import './Navbar.css'
import google from './images/google.png'

import { signInWithGoogle } from "./firebase-config";

function Navbar() {
  return (
    <div style={{width:'100%'}}>



<center>
  <br></br><br></br>

{!localStorage.getItem('name') && <button className='button-28' style={{width:'11em'}} onClick={signInWithGoogle}>
        <img style={{width:'2em'}} src={google}/> &nbsp; <l><b>Sign in</b> </l>
      </button>}



<br></br>
      <button className='button-46' style={{width:'10em'}}>Join The Gang</button>
      </center>
      {localStorage.getItem('name') && <img src={localStorage.getItem('profilePic')} style={{width:'4em',borderRadius:"50%",marginLeft:'40px',position:'absolute',marginTop:'-65px'}} />}
      
      {/* <img src={localStorage.getItem("profilePic")} /> */}

    </div>
  )
}

export default Navbar
