import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contect';
import SignIn from './pages/singin';
import Navbar from './components/Navbar';
// import Footer from './components/footer';

// import Card from './pages/card';


function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path='/card' element={<Card />} /> */}

        </Routes>
        {/* <Footer /> */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
