import React from 'react';
import { FaLaptopCode, FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'YouTube Clone',
    description: 'A real-time video browsing app using YouTube API with search, filters, and responsive UI.',
    image: '/images/youtube-clone.jpg',
    github: 'https://github.com/yourusername/youtube-clone',
    demo: 'https://youryoutubeclone.netlify.app',
  },
  {
    title: 'Recipe Finder',
    description: 'React-based recipe search app with dynamic API integration and filtering features.',
    image: '/images/recipe-finder.jpg',
    github: 'https://github.com/yourusername/recipe-finder',
    demo: 'https://yourrecipefinder.netlify.app',
  },
  {
    title: 'Chat App',
    description: 'A real-time chat application using MERN stack and socket.io.',
    image: '/images/chat-app.jpg',
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://yourchatapp.netlify.app',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen relative z-20 px-6 py-20 bg-transparent text-white flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <FaLaptopCode className="text-blue-400 text-5xl animate-bounce" />
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">My Projects</h2>
          </div>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto text-white/90 leading-relaxed font-light">
            <FaCode className="inline text-blue-300 mr-2 text-2xl" />
            Here's what I've been building with love, curiosity, and a sprinkle of caffeine ☕
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              className="relative group overflow-hidden rounded-3xl bg-white/10 border border-white/20 hover:border-white/40 shadow-lg backdrop-blur-xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-base text-white/80 mb-4">{project.description}</p>
                <div className="flex justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-white text-xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-white text-xl"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
