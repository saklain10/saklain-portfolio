import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="w-full pt-7 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[91.666667%]">
        <div className="flex items-center justify-center mb-8">
          <FaGraduationCap className="text-3xl text-accent mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          {/* Bachelor's Degree */}
          <div className="bg-base-200 shadow-xl p-6 rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
             <p className="text-base-content text-lg font-bold">
              BSc in Electrical and Electronic Engineering
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
              Green University of Bangladesh
            </h3>
            <p className="text-base-content text-sm sm:text-base mb-1">
              <span className="font-medium text-accent">Period:</span> June 2021 - July 2025
            </p>
            <p className="text-base-content text-sm sm:text-base">
              <span className="font-medium text-accent">CGPA:</span> <span className="text-secondary">3.36/4.0</span>
            </p>
          </div>

          {/* Higher Secondary School Certificate */}
          <div className="bg-base-200 shadow-xl p-6 rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
            <p className="text-base-content text-lg font-bold">
              HSC (Science)
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
              Joypurhat Government College
            </h3>
            <p className="text-base-content text-sm sm:text-base mb-1">
              <span className="font-medium text-accent">Period:</span> 2017 - 2019
            </p>
            <p className="text-base-content text-sm sm:text-base">
              <span className="font-medium text-accent">GPA:</span> <span className="text-secondary">4.25/5</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
