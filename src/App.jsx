import { Route, Routes } from "react-router-dom"
import ColorChanger from "./components/ColorChanger"
import PasswordGenerate from "./components/PasswordGenerate"
import Home from "./components/pages/Home"
import About from './components/pages/About';
import { Component } from "react";
import Contact from "./components/pages/Contact";
import Header from './components/Header';

function App() {
 
 
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
