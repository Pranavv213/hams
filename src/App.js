import React, { useState } from 'react';
import './App.css';
import Circle from './Circle'
import user from './images/user.png'
function App() {

  const [imageSrc, setImageSrc] = useState(user);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="App">
      <br></br>
      <br></br>
      <div class="nav" style={{width:'100%'}}> 
      <label htmlFor="image-upload" className="image-upload-label">Upload</label>
      <input type="file" id="image-upload" accept="image/*" onChange={handleFileChange} />

      &nbsp;
      
      
      </div>


     
      <Circle img={imageSrc}/>
   
    </div>
  );
}

export default App;