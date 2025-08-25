import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCog, FaTrophy, FaUsers, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-2xl backdrop:blur-5xl p-4 fixed top-0  right-0 left-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className='w-[70px] h-[50px]'>
          <a href="/"><img className='object-cover items-center hover:scale-75' src="https://property4you.in/images/logo5.webp" alt="error" /></a>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items (Desktop) */}
        <ul className='hidden md:flex items-center gap-6 mr-5'>
          <li className='text-red-700 font-bold underline'>
            <Link to="/" className="flex items-center gap-2">
              <FaHome /> Home
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/aboutus" className="flex items-center gap-2">
              <FaInfoCircle /> About Us
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/services" className="flex items-center gap-2">
              <FaCog /> Services
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/bestproject" className="flex items-center gap-2">
              <FaTrophy /> Best Project
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/bartermedia" className="flex items-center gap-2">
              <FaUsers /> Barter Media
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/contactus" className="flex items-center gap-2">
              <FaPhone /> Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 md:hidden  space-y-3 bg-amber-200 p-2 rounded cursor-pointer ">
          <li className='text-red-700 font-bold underline'>
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaHome /> Home
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/aboutus" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaInfoCircle /> About Us
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/services" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaCog /> Services
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/bestproject" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaTrophy /> Best Project
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/bartermedia" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaUsers /> Barter Media
            </Link>
          </li>
          <li className='hover:text-red-700 font-bold duration-300 hover:underline'>
            <Link to="/contactus" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaPhone /> Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
