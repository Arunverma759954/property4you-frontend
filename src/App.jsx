import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Slider from './components/Slider';
import ScrollToTop from './utilits/scrollToTop';
import './index.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BestProject from './pages/BestProject';
import BarterMedia from './pages/BarterMedia';
import Services from './pages/Services';

function App() {
  return (
    <>
      <ScrollToTop>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='slider' element={<Slider/>} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='services' element={<Services/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='bestproject' element={<BestProject/>}/>
          <Route path='bartermedia' element={<BarterMedia/>}/>  
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
