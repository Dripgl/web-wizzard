import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/> 
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App;
