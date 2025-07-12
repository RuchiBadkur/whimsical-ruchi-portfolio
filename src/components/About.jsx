import React from 'react';
import { FaLaptopCode, FaCode } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -100]); // Adjust the second array for desired depth

  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 py-20 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Parallax background layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-transparent z-0"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto relative z-10 text-white"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <FaLaptopCode className="text-blue-300 text-5xl" />
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">About Me</h2>
          </div>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto text-slate-100 leading-relaxed font-light">
            <FaCode className="inline text-blue-300 mr-2 text-2xl" />I'm a <span className="font-semibold text-blue-200">creative frontend developer</span> passionate about crafting delightful, accessible, and high-performance digital experiences. I specialize in <span className="font-medium text-blue-300">React</span> and <span className="font-medium text-blue-300">Tailwind CSS</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {[
            {
              icon: '💡',
              title: 'UI Perfectionist',
              text: 'I care deeply about smooth layouts, clean design systems, and visual hierarchy.',
            },
            {
              icon: '🚀',
              title: 'Lifelong Learner',
              text: 'Tech excites me! I’m always leveling up — exploring tools, trends & ideas.',
            },
            {
              icon: '🤝',
              title: 'Collaborative Spirit',
              text: 'I thrive in creative teams. Sharing, building, and growing together drives me.',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-3xl bg-white/5 text-center border border-white/10 hover:border-white/20 transition"
            >
              {card.icon} <span className="text-2xl font-semibold block mt-4">{card.title}</span>
              <p className="text-lg text-slate-200 mt-3">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
