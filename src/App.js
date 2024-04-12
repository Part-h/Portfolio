import './Css/HeroSection.css';
import './Css/MySkills.css';
import './Css/MyExperience.css';
import './Css/MyPortfolio.css';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Views/Home/Navbar.jsx';
import Home from "./Views/Home/HomeScreen/index.jsx";
import './fonts/Kingsman.ttf';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <HelmetProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="*" element={<div> 404 page not found</div>}></Route>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/" element={<Home/>}></Route>
            </Routes>
            </HelmetProvider>
          </div>
        </Router>
    </div>
  );
}

export default App;
// or a function can later be exported using export default App