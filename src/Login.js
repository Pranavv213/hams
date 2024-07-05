import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification
  } from "firebase/auth";
  import { auth } from "./firebase-config";
  import Toast from 'react-bootstrap/Toast';
  import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
function Login() {

    const navigate = useNavigate();
    const [showA, setShowA] = useState(true);
    const [show, setShow] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showLogin,setShowLogin]=useState(false)
    const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errormsg,seterrormsg]=useState('')
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
        seterrormsg('')
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
        if(user.user.emailVerified)
          {
            localStorage.setItem('email',user.user.email)
            navigate('/');
          }
  
          else{
            seterrormsg('User not verified. Please verify through mail sent.')
          }
      
       
      } catch (error) {
        seterrormsg('Incorrect Details. Click to try again')
        console.log(error.message);
      }
    };
  
    const logout = async () => {
      await signOut(auth);
    };

  return (
    <div>
        
         <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>
          Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
          <div> <input style={{width:'100%',height:'3em'}}
          placeholder="Enter your Email"
          type="email" 
          
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
     <br></br><br></br>
     <input style={{width:'100%',height:'3em'}}
          placeholder="Enter Password"
          type="email"
          
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
     
    
        
        </div>
        <br></br>

        <Button variant="primary" style={{width:'100%'}} onClick={login}>Login
        </Button>
        <br></br><br></br><br></br>
      <l onClick={()=>{
        window.location.reload()
      }}style={{color:'red'}}>{errormsg}</l> 
        </Modal.Body>
        <center>
        <Modal.Footer>
        
          <div style={{width:'100%'}} >

        
          <Link to="/">Don't have an account ? Sign Up</Link>
          </div>
          
        </Modal.Footer>
        </center>
      </Modal>
    </div>
  )
}

export default Login
