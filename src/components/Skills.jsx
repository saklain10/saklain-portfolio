import React from 'react';
import { FaLaptopCode, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

// The Skills component displays a user's technical skills in a categorized format.
// It uses a grid layout for a visually appealing presentation.
const Skills = () => {
  // Define skills categorized by area
  const skills = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-4xl text-blue-300" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-700" /> },
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-600" /> },
      { name: 'Figma', icon: <FaFigma className="text-4xl text-purple-500" /> },
    ],
  };

  const SkillCard = ({ name, icon }) => (
    <div className="card w-full h-32 bg-base-200 shadow-xl image-full transform transition-transform duration-300 hover:scale-105">
      <div className="card-body flex items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center">
          {icon}
          <h3 className="card-title text-base text-base-content mt-2">{name}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="w-full pt-7 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[91.666667%]">
        <div className="flex items-center justify-center mb-8">
          <FaLaptopCode className="text-3xl text-accent mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Skills
          </h2>
        </div>
        
        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.frontend.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.backend.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.tools.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
