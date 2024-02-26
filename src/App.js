import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from "./Views/Home/HomeScreen/index.jsx";

function App() {
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
// or a function can later be exported using export default App