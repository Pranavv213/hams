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
import Login from './Login'
import Modal from 'react-bootstrap/Modal';

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

import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";








const App = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  

  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin,setShowLogin]=useState(false)
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const register = async () => {
    try {
      createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((data)=>{

        sendEmailVerification(auth.currentUser).then((data2)=>{
          alert('Email Verification Link Sent')
        })
        console.log(data)
      }).catch((error)=>{
        console.log(error)
      })
     
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      if(user.user.emailVerified)
        {
          localStorage.setItem('email',user.user.email)
        }

        else{
          alert('Please Verify your Email')
        }
    
     
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (   
    <div >
 
 <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>

 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">

            {/* <LoginButton
                botUsername='Tet1234bot'
                onAuthCallback={(data) => {
                    localStorage.setItem('email',data.username)
                    localStorage.setItem('profilePic',data.photo_url)
                    window.location.reload();
   
                    // call your backend here to validate the data and sign in the user
                }}
            /> */}
             show={show} onHide={handleClose} animation={false}
            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>
          Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
          <div> <input style={{width:'100%',height:'3em'}}
          placeholder="Enter your Email"
          type="email"
          
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
     <br></br><br></br>
     <input style={{width:'100%',height:'3em'}}
          placeholder="Set Password"
          type="email"
          
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
     
    
        
        </div>
        <br></br>

        <Button variant="primary" style={{width:'100%'}} onClick={register}>Create Account
        </Button>
        
        </Modal.Body>
        <center>
        <Modal.Footer>
        
          <div style={{width:'100%'}} >

        <Link to="/login">Have an account? Log in</Link>
          
          </div>
          
        </Modal.Footer>
        </center>
      </Modal>
            <button class="button-28" onClick={handleShow}>Sign In</button>
            

           
         

          {/* {!localStorage.getItem('name') && <button className='button-28' style={{width:'9em'}} onClick={signInWithGoogle}>
        <img  src={google} style={{width:'2em'}}/> &nbsp; <l><b>Sign in</b> </l>
      </button>}

      {localStorage.getItem('name') && <div style={{color:'white'}}> <b style={{color:'white'}}>{localStorage.getItem('name') }
        
      </b>  </div>  } */}

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






