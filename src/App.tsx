import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { motion } from 'framer-motion';
import ContactForm from './components/ContactForm';
import SkillCarousel from './components/SkillCarousel';
import Education from './components/Education';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      liveDemo: "https://project1-demo.com",
      github: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      technologies: ["React", "Express", "MongoDB"],
      liveDemo: "https://project2-demo.com",
      github: "https://github.com/yourusername/project2"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: { value: 100 },
            color: { value: darkMode ? "#ffffff" : "#000000" },
            opacity: {
              value: 0.3
            },
            size: {
              value: { min: 1, max: 3 }
            },
            links: {
              enable: true,
              distance: 150,
              color: darkMode ? "#ffffff" : "#000000",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out"
            },
          },
        }}
      />

      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold">Ashim Sapkota</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400">Education</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-20">
        <section id="about" className="min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Hi, I'm Ashim Sapkota</h2>
              <h1 className="text-5xl font-bold">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-xl">MERN Stack Specialist</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                >
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/path-to-your-cv.pdf"
                  download
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                >
                  <FaDownload size={20} />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://placehold.co/400x400"
                alt="Ashim Sapkota"
                className="rounded-full w-80 h-80 object-cover mx-auto shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <SkillCarousel />
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section id="education" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <Education />
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>Feel free to reach out:</p>
              <p>📞 +977 9865382080</p>
              <p>📧 ashimsapkota250@gmail.com</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;