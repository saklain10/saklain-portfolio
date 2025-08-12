import React from 'react';
import { Link } from 'react-scroll';
import { MdOutlineCode } from "react-icons/md";
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';


const Intro = () => {
  const profileImage = "https://i.ibb.co.com/mYF2fkL/a-saklain-formal.jpg";
  const placeholderImage = "https://placehold.co/400x400/1e293b/a5f3fc?text=Saklain";
  const resumeLink = "https://drive.google.com/file/d/1tdWtv1c7EQBcF6bWCH9GKwh8HZwwPiS4/view?usp=sharing";

  return (
    <section id="intro" className="w-full flex justify-center items-center px-4 sm:px-6 py-4 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-[91.666667%]">
        {/* Text content section */}
        <div className="text-center md:text-left flex-1">
          <p className="text-lg sm:text-xl font-semibold text-secondary mb-2">Hello, I am...</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-secondary leading-tight transition-transform duration-300 hover:scale-105 inline-block">
            Saklain Mostak
          </h1>
          <h2 className="text-xl sm:text-3xl font-semibold text-accent mt-2">
            Frontend developer
          </h2>
          <p className="text-base sm:text-lg text-base-content mt-4">
            I make beautiful websites.
          </p>

          {/* Social media links section - Moved above the buttons */}
          <div className="mt-8 flex justify-center md:justify-start gap-6">
            <a href="https://github.com/saklain10" target="_blank" rel="noopener noreferrer" className="text-2xl text-base-content hover:text-accent transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/saklain-mostak" target="_blank" rel="noopener noreferrer" className="text-2xl text-base-content hover:text-accent transition-colors duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/saklainmostak.sakib.7/" target="_blank" rel="noopener noreferrer" className="text-2xl text-base-content hover:text-accent transition-colors duration-300">
              <FaFacebook />
            </a>
          </div>

          {/* Action buttons section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn btn-secondary text-primary-content px-8 py-3 rounded-full font-bold text-base transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2"
              style={{ minWidth: '200px' }}
            >
              <MdOutlineCode className="h-6 w-6" />
              View My Projects
            </Link>
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-accent text-primary-content px-8 py-3 rounded-full font-bold text-base transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2"
              style={{ minWidth: '200px' }}
            >
              <HiDownload className="h-6 w-6" />
              Resume
            </a>
          </div>
        </div>

        {/* Profile picture section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl">
            <img
              src={profileImage}
              alt="Saklain Mostak"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

