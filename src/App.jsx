// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Intro from './components/Intro';
// import About from './components/About';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Courses from './components/Courses';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Intro />
//       <About />
//       <Skills />
//       <Education /> 
//       <Courses />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';  

function App() {
  return (
    <div className="bg-base-100 text-base-content font-sans">
      <Navbar />
      
      <div id="intro" className="min-h-screen flex items-center justify-center pt-12">
        <Intro />
      </div>

      <div id="about" className="py-10">
        <About />
      </div>

      <div id="skills" className="py-10">
        <Skills />
      </div>

      <div id="education" className="py-10">
        <Education />
      </div>

      <div id="courses" className="py-10">
        <Courses />
      </div>

      <div id="projects" className="py-10">
        <Projects />
      </div>

      <div id="contact" className="py-10">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
