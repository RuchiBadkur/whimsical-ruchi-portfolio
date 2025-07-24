import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-md border-t border-white/20 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm sm:text-base text-white/80">
          Made with <FaHeart className="inline text-pink-400 mx-1 animate-pulse" /> by Ruchi Badkur
        </p>
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/RuchiBadkur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ruchi-badkur/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
