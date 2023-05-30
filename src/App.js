import  React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Constants/Home/Home'
import Crew from './Constants/Crew/Crew'
import Technology from './Constants/Technology/Technology'
import Destination from './Constants/Destination/Destination'
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">

       <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
          
          
          <Route path="/crew" element={<Crew/>} />
          <Route path="/home" element={<Home/>} />

          <Route path="/technology" element={<Technology/>} />
          <Route path="/destination" element={<Destination/>} />
          
        
      </Routes>

      </div>

      
    </Router>
    
      
    
  );
}

export default App;
