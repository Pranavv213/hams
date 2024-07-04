import React from 'react'
import bagImage from './images/bag.png';
import coinImage from './images/coin.png';
import robberImage from './images/robber.png';
import mineImage from './images/weapons.png';
import friendsImage from './images/friends.png';
import earnImage from './images/earn.png';
import airDropImage from './images/rBitCoin.png';
import './Footer.css'
function Footer() {
  return (
    <div className='Footer' style={{height:'10em',marginTop:'10px',position: 'fixed'}} >


    
     
      <div >  

        <div className="footer-icons" style={{width:'5em',marginTop:'30px'}}><img  style={{width:'4em',marginBotton:'5px'}} src={mineImage}/></div>
      
      <br></br>
      
     
      <div className="footer-icons" style={{marginTop:'10px',color:'white'}}>&nbsp;&nbsp;&nbsp;Weapons</div>
      
      </div>
      <div>  
        <div className="footer-icons" style={{width:'5em',marginTop:'13.3px'}}><img className="footer-icons" style={{width:'4em',marginBotton:'300px'}} src={friendsImage}/></div>
      
        <div className="footer-icons" style={{marginTop:'15px',color:'white'}}>&nbsp;&nbsp;Friends</div>
      </div>
     
      <div className="footer-icons">  
      <img  style={{width:'4em',marginTop:'10.3px'}} src={earnImage}/>
      <div style={{marginTop:'17px',color:'white'}}>&nbsp;&nbsp;Earn</div>
      </div>
      <div className="footer-icons">  
      <img  style={{width:'4em',marginTop:'10.3px'}} src={airDropImage}/>
      <div style={{marginTop:'17px',color:'white'}}>&nbsp;Airdrop</div>
      </div>
       
   
       
    </div>
  )
}

export default Footer
