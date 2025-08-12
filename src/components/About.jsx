import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="w-full flex justify-center pt-7 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[91.666667%]">
        <div className="flex items-center justify-center mb-8">
          <FaUserAstronaut className="text-3xl text-accent mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            About Me
          </h2>
        </div>

        <div className="text-center md:text-left text-base sm:text-lg text-base-content leading-relaxed space-y-4">
          <p className='text-justify'>
            Hello there! My name is Saklain Mostak, and I'm a passionate frontend developer with a love for creating beautiful and intuitive websites. My journey into programming started with a simple curiosity about how websites are built, which quickly evolved into a passion for clean code, responsive design, and providing a seamless user experience. I particularly enjoy working with modern JavaScript frameworks like React to build dynamic and interactive interfaces.
          </p>
          <p className='text-justify'>
            When I'm not coding, you can find me exploring my other passions. I'm a big fan of football and love to spend time outdoors to clear my head and find new inspiration. These hobbies help me maintain a balanced perspective and bring a fresh, creative energy to my work. I'm always eager to learn and grow, and I'm excited about the endless possibilities that lie ahead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
