import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaFileDownload, FaEnvelopeOpenText } from 'react-icons/fa';
import profilePic from '../assets/ruchi-profile-black-bg.png';
// import profilePic from "../assets/stary-profile.png"
import { motion } from 'framer-motion';

const roles = [
  '💻 Frontend Developer',
  '⚛️ React Enthusiast',
  '🎨 UI/UX Explorer',
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[index].split('');
    if (charIndex < role.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + role[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setDisplayText('');
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, index]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen px-6 py-20 z-20 text-white flex flex-col justify-center items-center overflow-hidden font-sans"
    >
      {/* Background GIF */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGpweDhxbnVvamR0MjNyZzZqdTUya2w2Ymxtc3loNzBmOXMxZzlmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PSqwBQHGbsQurQbW2u/giphy.gif"
          alt="Background GIF"
          className="w-full h-full object-cover opacity-30"
        />
      </div> */}

      {/* Glassmorphism container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-7xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-14 shadow-xl"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Profile Pic */}
          <motion.div
            initial={{ rotate: -5 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden  shadow-lg"
          >
            <img
              src={profilePic}
              alt="Ruchi Badkur"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Hi, I'm <span className="text-pink-300">Ruchi</span> 👋
            </h1>

            <p className="text-2xl font-semibold text-pink-200 h-8 mb-6 font-mono">
              {displayText}
            </p>

            <p className="text-lg sm:text-xl max-w-2xl text-white/80 leading-relaxed">
              🚀 I’m a curious and detail-oriented Frontend Developer blending creativity with functionality to build scalable and delightful user experiences using <span className="text-pink-300 font-medium">React</span> & <span className="text-pink-300 font-medium">Tailwind CSS</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 bg-pink-300 text-black px-6 py-3 rounded-md shadow hover:bg-pink-200 transition font-semibold"
              >
                <FaFileDownload /> Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-md shadow hover:bg-white/20 transition font-semibold"
              >
                <FaEnvelopeOpenText /> Connect with Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-16 text-center animate-bounce"
      >
        <a
          href="#about"
          className="text-4xl text-pink-300 hover:text-pink-200 transition-colors"
        >
          <FaArrowDown />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

