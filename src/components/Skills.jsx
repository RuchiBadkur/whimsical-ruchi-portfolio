import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-300" /> },
  { name: 'React', icon: <FaReact className="text-cyan-300" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-300" /> },
  { name: 'Node.js', icon: <FaNode className="text-green-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-300" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-20 w-full min-h-screen px-6 py-20 bg-transparent flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">Skills & Tools</h2>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto">
            A collection of technologies and tools I use to build web experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-lg hover:border-white/40 transition-all hover:bg-gradient-to-tr hover:from-pink-300/20 hover:via-purple-300/20 hover:to-indigo-300/20"
            >
              <div className="text-5xl mb-3 animate-pulse">{skill.icon}</div>
              <p className="text-lg font-medium text-white/90">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
