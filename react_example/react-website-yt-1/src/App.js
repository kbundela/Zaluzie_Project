import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
/*import AboutUs from './components/pages/AboutUs';*/
import Contact from './components/pages/Contact';
import Horizontal from './components/pages/Horizontal';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          
          <Route path='/contact' element={<Contact />} />
          <Route path='/horizontal' element={<Horizontal />} />          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
