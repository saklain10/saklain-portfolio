
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiDownload, HiMenu, HiX } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa'; // Importing a portfolio-themed icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const resumeLink = "https://drive.google.com/file/d/1tdWtv1c7EQBcF6bWCH9GKwh8HZwwPiS4/view?usp=sharing";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-300 shadow-lg backdrop-blur-md bg-opacity-70">
      <div className="container mx-auto max-w-[91.666667%] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Portfolio Icon */}
          <div className="flex-shrink-0">
            <Link 
              to="intro" 
              smooth={true} 
              duration={500} 
              className="text-3xl font-bold text-accent cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center"
              onClick={closeMenu}
            >
              <FaLaptopCode className="text-4xl mr-2" />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="intro" smooth={true} duration={500} className="text-base-content hover:text-secondary font-semibold transition-colors duration-300 cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} className="text-base-content hover:text-secondary font-semibold transition-colors duration-300 cursor-pointer">About</Link>
            <Link to="skills" smooth={true} duration={500} className="text-base-content hover:text-secondary font-semibold transition-colors duration-300 cursor-pointer">Skills</Link>
            <Link to="education" smooth={true} duration={500} className="text-base-content hover:text-secondary font-semibold transition-colors duration-300 cursor-pointer">Education</Link>
            <Link to="courses" smooth={true} duration={500} className="text-base-content hover:text-secondary font-semibold transition-colors duration-300 cursor-pointer">Courses</Link>
            <Link to="projects" smooth={true} duration={500} className="text-base-content hover:text-secondary font-semibold transition-colors duration-300 cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="text-base-content hover:text-secondary font-semibold transition-colors duration-300 cursor-pointer">Contact</Link>
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:flex">
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary text-primary-content px-6 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 flex items-center gap-2"
            >
              <HiDownload className="h-5 w-5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-base-content hover:text-secondary focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="intro" smooth={true} duration={500} className="block text-base-content hover:text-secondary px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer w-full text-center" onClick={closeMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="block text-base-content hover:text-secondary px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer w-full text-center" onClick={closeMenu}>About</Link>
          <Link to="skills" smooth={true} duration={500} className="block text-base-content hover:text-secondary px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer w-full text-center" onClick={closeMenu}>Skills</Link>
          <Link to="education" smooth={true} duration={500} className="block text-base-content hover:text-secondary px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer w-full text-center" onClick={closeMenu}>Education</Link>
          <Link to="courses" smooth={true} duration={500} className="block text-base-content hover:text-secondary px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer w-full text-center" onClick={closeMenu}>Courses</Link>
          <Link to="projects" smooth={true} duration={500} className="block text-base-content hover:text-secondary px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer w-full text-center" onClick={closeMenu}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="block text-base-content hover:text-secondary px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer w-full text-center" onClick={closeMenu}>Contact</Link>
          <a 
            href={resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary text-primary-content px-6 py-2 rounded-full font-semibold mt-4 transition-transform duration-300 hover:scale-105 flex items-center gap-2 w-full justify-center"
            onClick={closeMenu}
          >
            <HiDownload className="h-5 w-5" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
