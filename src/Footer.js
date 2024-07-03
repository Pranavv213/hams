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
    <div className='Footer' style={{height:'7.5em',marginTop:'10px'}} >


    
     
      <div >  

        <div style={{width:'5em',marginTop:'0.3px'}}><img  style={{width:'4em',marginBotton:'5px'}} src={mineImage}/></div>
      
      <br></br>
      
     
      <div style={{marginTop:'10px',color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;Mine</div>
      
      </div>
      <div>  
        <div style={{width:'5em',marginTop:'13.3px'}}><img  style={{width:'4em',marginBotton:'300px'}} src={friendsImage}/></div>
      
        <div style={{marginTop:'15px',color:'white'}}>&nbsp;&nbsp;Friends</div>
      </div>
     
      <div>  
      <img  style={{width:'4em',marginTop:'10.3px'}} src={earnImage}/>
      <div style={{marginTop:'17px',color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earn</div>
      </div>
      <div>  
      <img  style={{width:'4em',marginTop:'10.3px'}} src={airDropImage}/>
      <div style={{marginTop:'17px',color:'white'}}>&nbsp;&nbsp;Airdrop</div>
      </div>
       
     <br></br><br/>
       
    </div>
  )
}

export default Footer
