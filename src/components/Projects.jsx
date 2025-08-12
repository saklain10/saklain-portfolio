import React, { useState } from 'react';
import { 
  FaCode, FaExternalLinkAlt, FaGithub, FaTimes, FaReact, FaNodeJs, FaServer
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiNetlify,
  SiReactrouter, SiNextdotjs // Added SiNextdotjs here
} from 'react-icons/si';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // An object to map tech stack names to their corresponding icons
  const techIcons = {
    'React.js': <FaReact className="text-blue-400" />,
    'React': <FaReact className="text-blue-400" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    'Express.js': <SiExpress className="text-gray-400" />,
    'Express': <SiExpress className="text-gray-400" />,
    'MongoDB': <SiMongodb className="text-green-600" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Firebase': <SiFirebase className="text-yellow-500" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    'React Router DOM': <SiReactrouter className="text-pink-500" />,
    'Vercel': <SiVercel className="text-white" />,
    'Netlify': <SiNetlify className="text-cyan-400" />,
  };
  
  const projects = [
    {
      id: 1,
      name: "FoodShare",
      image: "https://i.ibb.co.com/23qvjW2X/foodshare.png",
      stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
      description: "A full-stack web application that connects individuals, restaurants, and NGOs to reduce food waste through donations. Users can post available surplus food, while others can browse, request, and manage pickup of shared food items.",
      liveLink: "https://ph11-assignment-11-saklain.web.app/",
      githubClient: "https://github.com/saklain10/food-sharing",
      challenges: "Implementing real-time updates for food item availability and location tracking was a significant challenge.",
      improvements: "Future plans include adding a rating system for donors and recipients, integrating a notification service, and expanding the platform to include a donation history dashboard for users and organizations.",
    },
    {
      id: 2,
      name: "FreeLance Tasker",
      image: "https://i.ibb.co.com/ZRtNR1Yk/freelance-tasker.png",
      stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
      description: "A full-stack web application that connects individuals with freelancers for small-scale tasks. Users can post tasks, browse available jobs, and manage their own task listings seamlessly.",
      liveLink: "https://freelance-task-handler.web.app/",
      githubClient: "https://github.com/saklain10/freelance-tasker",
      challenges: "One of the main challenges was designing a robust and scalable database schema with Firebase Firestore to handle the relationships between users, tasks, and bids. Ensuring data integrity and efficient queries required careful planning and optimization.",
      improvements: "I plan to add a messaging system to allow direct communication between clients and freelancers, implement a review system, and introduce a project management dashboard to help track task progress.",
    },
    {
      id: 3,
      name: "AppGallery",
      image: "https://i.ibb.co.com/ZzCfMnQy/Green-and-White-Modern-Reducing-Carbon-Footprint-Presentation.png",
      stack: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
      description: "A modern web application that showcases various apps where users can browse. Built with React,Tailwind CSS, Node.js and MongoDB it mimics a mini Play Store.",
      liveLink: "https://appstore-platform-with-react.web.app/",
      githubClient: "https://github.com/saklain10/appstore-platform-with-react-auth",
      challenges: "Handling the app's state for user authentication and dynamic content display was a key challenge.",
      improvements: "Future plans include adding features to rating and feedback.",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="w-full pt-7 flex justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[91.666667%]">
        <div className="flex items-center justify-center mb-12">
          <FaCode className="text-3xl text-accent mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Projects
          </h2>
        </div>

        {/* Projects Grid with fixed height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card bg-base-200 shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-full"
            >
              <figure className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="card-title text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="badge badge-accent badge-outline text-xs font-semibold px-2 py-1 flex items-center gap-1"
                      >
                        {techIcons[tech] || null}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => openModal(project)} 
                  className="btn btn-secondary text-primary-content font-bold mt-auto transition-transform duration-300 hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-base-300 p-8 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-base-content hover:text-secondary transition-colors duration-300"
            >
              <FaTimes className="text-2xl" />
            </button>
            <h2 className="text-3xl font-bold text-secondary mb-4">{selectedProject.name}</h2>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.name} 
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-accent mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="badge badge-accent badge-lg text-sm font-semibold flex items-center gap-1"
                  >
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-accent mb-2">Description</h3>
              <p className="text-base-content text-base">{selectedProject.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-accent mb-2">Challenges</h3>
              <p className="text-base-content text-base">{selectedProject.challenges}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-accent mb-2">Improvements & Future Plans</h3>
              <p className="text-base-content text-base">{selectedProject.improvements}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href={selectedProject.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary text-primary-content font-bold w-full sm:w-auto flex-1 transition-transform duration-300 hover:scale-105"
              >
                <FaExternalLinkAlt /> Live Project
              </a>
              <a 
                href={selectedProject.githubClient} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary text-primary-content font-bold w-full sm:w-auto flex-1 transition-transform duration-300 hover:scale-105"
              >
                <FaGithub /> GitHub (Client)
              </a>
              {selectedProject.githubServer && (
                <a 
                  href={selectedProject.githubServer} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary text-primary-content font-bold w-full sm:w-auto flex-1 transition-transform duration-300 hover:scale-105"
                >
                  <FaServer /> GitHub (Server)
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
