import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { Service } from "./components/pages/Service";




function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Footer/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
   
   
   </>
  );
}

export default App;
