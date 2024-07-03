import React from 'react'
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/mine.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import './Footer.css'
function Footer() {
  return (
    <div className='Footer' >


    <div style={{width:'100px',marginTop:'7px'}}> <img style={{width:'100px',height:'150px'}} src={robberImage}/></div>
     
      <div >  

        <div style={{width:'5em',marginTop:'50px'}}><img  style={{width:'5em',marginBotton:'5px'}} src={mineImage}/></div>
      
      <br></br>
      
     
      <div style={{marginTop:'10px',color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;<b>Mine</b></div>
      
      </div>
      <div>  
        <div style={{width:'5em',marginTop:'63px'}}><img  style={{width:'5em',marginBotton:'300px'}} src={friendsImage}/></div>
      
        <div style={{marginTop:'15px',color:'white'}}>&nbsp;&nbsp;<b>Friends</b></div>
      </div>
     
      <div>  
      <img  style={{width:'5em',marginTop:'60px'}} src={earnImage}/>
      <div style={{marginTop:'17px',color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Earn</b></div>
      </div>
      <div>  
      <img  style={{width:'5em',marginTop:'60px'}} src={airDropImage}/>
      <div style={{marginTop:'17px',color:'white'}}>&nbsp;&nbsp;<b>Airdrop</b></div>
      </div>
       
       <br></br>
       <br></br> <br></br>
       <br></br> <br></br>
       <br></br> <br></br>
       <br></br> <br></br>
       <br></br>
       <br></br> <br></br>
       <br></br> 
       
       
    </div>
  )
}

export default Footer
