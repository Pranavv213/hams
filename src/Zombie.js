import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure to create a CSS file to handle the styles
import zombie1 from './zombieimg/zombie1.png'
import zombie2 from './zombieimg/zombie2.png'
import coinImage from './images/coin.png'
import backgroundImg from './zombieimg/end.png'
import shot from './zombieimg/shot.png'
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


const App = () => {
  const firstImage = zombie1;
  const secondImage = zombie2;
  const backgroundImage = backgroundImg;
  const [shotPosition,setShotPosition]=useState({})
  const [imageSrc, setImageSrc] = useState(firstImage);
  const [size, setSize] = useState(30); // initial size percentage
  const [tapCount, setTapCount] = useState(0);
  const [usercoins, setUsercoins] = useState({});
  const [showBackground, setShowBackground] = useState(false);
  const [showShot,setShowShot]=useState(false)
 
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
    if(size>=35)
        {
            setSize((prevSize) =>  prevSize - 5)
        }
   
    setShowShot(true)
    setShotPosition({x: e.clientX,y: e.clientX})
    setTimeout(() => {
        setShowShot(false);
      }, 1000);
    
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


  useEffect(() => {
    // Toggle the image every 200 milliseconds
    const toggleImageInterval = setInterval(() => {
      setImageSrc((prevSrc) => (prevSrc === firstImage ? secondImage : firstImage));
      
    }, 200);

    return () => clearInterval(toggleImageInterval);
  }, [firstImage, secondImage]);

  useEffect(() => {
    // Enlarge the image every 100 milliseconds
    const enlargeInterval = setInterval(() => {
        setSize((prevSize) => {
            if (prevSize < 80) {
              return prevSize + 1;
            } else {
              setShowBackground(true);
              
             
              setTimeout(() => setShowBackground(false), 2000); // revert background after 2 seconds
              return 30; // reset size to initial size
            }
          });
         
        
    }, 100);

    return () => clearInterval(enlargeInterval);
  }, []);

  return (
    <div className='image-container' >
    {/* {showBackground && 
          <div >
        <img src={backgroundImg} style={{width:'100%',marginTop:'2px',height:'45em'}}></img>
       </div>
       } */}
    {/* {!showBackground && <center>
          <div >
        <img style={{width:'5em'}} src={coinImage}   />
        <div >
          <b style={{color:'white'}}>
       { tapCount}</b>
       </div>
       </div>
       </center>}
     */}
       <center>
          <div >
        <img style={{width:'5em'}} src={coinImage}   />
        <div >
          <b style={{color:'white'}}>
       { tapCount}</b>
       </div>
       </div>
       </center>
    

       {showShot && <img src={shot} style={{width:'1em', position: 'absolute', left: shotPosition.x, top: shotPosition.y+30}}></img>}
{localStorage.getItem('email') &&  <div     >

    <img
        src={imageSrc}
        alt="Changing"
        style={{ width: `${size}%`, height: 'auto',outline:'none',userSelect:'none' }} onClick={handleTap}
      />

</div>}





{!localStorage.getItem('email') &&  <div  onClick={signInWithGoogle}>
<img
        src={imageSrc}
        alt="Changing"
        style={{ width: `${size}%`, height: 'auto',outline:'none',userSelect:'none' }}
      />
</div>}

    </div>
  );
};

export default App;
