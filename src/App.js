import React, { useState,useEffect,useRef } from 'react';
import './App.css';
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/weapons.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import Footer from './Footer'
import Tap from './Tap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LoginButton } from '@telegram-auth/react';

import Zombie from './Zombie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import google from './images/google.png'
import forest from './zombieimg/forest - Copy.jpg'

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


const App = () => {



  return (
    <div >
 
 <div className="mobile-warning">
        <h1>This site is best viewed on a mobile device. Please switch to a mobile device.</h1>
      </div>
  

 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">

            <LoginButton
                botUsername='Tet1234bot'
                onAuthCallback={(data) => {
                    localStorage.setItem('email',data.username)
                    localStorage.setItem('profilePic',data.photo_url)
                    // call your backend here to validate the data and sign in the user
                }}
            />
            

           
         

          {!localStorage.getItem('name') && <button className='button-28' style={{width:'9em'}} onClick={signInWithGoogle}>
        <img  src={google} style={{width:'2em'}}/> &nbsp; <l><b>Sign in</b> </l>
      </button>}

      {localStorage.getItem('name') && <div style={{color:'white'}}> <b style={{color:'white'}}>{localStorage.getItem('name') }
        
      </b>  </div>  }

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Level 1/10</Nav.Link>
            <Nav.Link href="#pricing"> <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Zombies"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search </Button>
          </Form></Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>

   <center>
  
   <br></br>
   
    <Zombie/>

  
   
    </center>
    
    <Navbar bg="dark" data-bs-theme="dark" fixed="bottom" >
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="#home"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              
               Mine</Nav.Link>
            <Nav.Link href="#home">Friends</Nav.Link>
            <Nav.Link href="#home">Airdrop</Nav.Link>
            
            
            
          </Nav>
        </Container>
      </Navbar>

    {/* <Footer/> */}
     
    </div>
  );
};

export default App;






