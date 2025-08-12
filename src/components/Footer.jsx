import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';

// The Footer component provides a simple, elegant footer for the portfolio.
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername",
  };

  return (
    <footer className="w-full flex justify-center bg-base-300 text-base-content py-10 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="container mx-auto max-w-[91.666667%] flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright and build info */}
        <div className="text-center md:text-left text-sm sm:text-base">
          <p className="mb-1">
            &copy; {currentYear} Saklain Mostak
          </p>
          <p>
            Built with React & Tailwind CSS
          </p>
        </div>

        {/* Social media links */}
        <div className="flex justify-center md:justify-end gap-6">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors duration-300">
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors duration-300">
            <FaLinkedinIn />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors duration-300">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
