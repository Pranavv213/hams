import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'
import Login from './Login';

function App() {
  return (
    <Router>
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    </Router>
  )
}

export default App
