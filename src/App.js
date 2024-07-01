import React, { useState } from 'react';
import './App.css';
import Circle from './Circle'
import user from './images/user.png'
function App() {

  const [file,setFile]=useState(user)
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

  return (
    <div className="App">
      <br></br>
      <br></br>
      <div class="nav" style={{width:'100%'}}> <input type="file" id="file" class="file-input" onChange={handleChange}/>
      <label for="file" class="custom-file-label">Choose Image</label>

      &nbsp;
      
      
      </div>

     
      <Circle img={file}/>
    </div>
  );
}

export default App;