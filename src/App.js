import './App.css';
import './Css/HeroSection.css';
import './Css/MySkills.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Views/Home/Navbar.jsx';
import Home from "./Views/Home/HomeScreen/index.jsx";
import './fonts/Kingsman.ttf';


function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="*" element={<div> 404 page not found</div>}></Route>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/" element={<Home/>}></Route>
            
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
// or a function can later be exported using export default App