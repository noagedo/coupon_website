import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import SignupForm from "./components/SignupForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { WishList } from "./components/WishList";
import { Fashion } from "./components/Fasion";
import { Food } from "./components/Food";
import {Home} from "./components/Home";









function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/Fashion" element={<Fashion />} /> 
        <Route path="/Food" element={<Food />} /> 
        <Route path="/Home" element={<Home />} /> 
       
        
      </Routes>
    </Router>
  );
}

export default App;
