import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/triveni-logo-BAYmwVdq';  // Correct import path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-16 h-16">
              {/* Logo background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>

              {/* Logo container */}
              <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
                <img
                  src={logo}  // Image from src/assets folder
                  alt="Triveni Beauty Elite Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Brand text */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Triveni
              </span>
              <span className="text-sm font-medium text-gray-600 tracking-wider">
                Beauty Elite
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#appointment" className="nav-link">Book Appointment</a>
            <a href="#certifications" className="nav-link">Training</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-modal-slide-up">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-50" onClick={toggleMenu}>Home</a>
              <a href="#services" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-50" onClick={toggleMenu}>Services</a>
              <a href="#appointment" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-50" onClick={toggleMenu}>Book Appointment</a>
              <a href="#certifications" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-50" onClick={toggleMenu}>Training</a>
              <a href="#contact" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-50" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
