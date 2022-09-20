
import  React from 'react';
import  './index.css';
import Home from  './routes/Home';
import About from  './routes/About';
import Contact from  './routes/Contact';
import  Service from  './routes/Service';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element ={<Home />}/>
      <Route path="/About" exact element ={<About />}/>
      <Route path="/Contact" exact element ={<Contact />}/>
      <Route path="/Service" exact element ={<Service />}/>
     
      </Routes>
  </BrowserRouter>
  );
}

export default App;
