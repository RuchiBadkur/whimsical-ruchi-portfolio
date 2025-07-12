import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 h-auto max-h-[340px] w-14 bg-transparent text-white z-50 hidden sm:flex flex-col justify-center items-center gap-6 border border-white/10 rounded-xl shadow-xl">
        {[['#home', FaHome, 'Home'], ['#about', FaUser, 'About'], ['#projects', FaProjectDiagram, 'Projects'], ['#skills', FaTools, 'Skills'], ['#contact', FaEnvelope, 'Contact']].map(([href, Icon, label]) => (
          <a key={label} href={href} className="group p-2 relative">
            <Icon size={20} className="group-hover:text-pink-400 transition-colors duration-300" />
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-xs bg-white text-[#1e293b] px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </aside>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-br from-[#c1d2ef] to-[#291122] text-white z-50 flex sm:hidden justify-around items-center py-3 rounded-full shadow-lg border border-white/10">
        {[['#home', FaHome], ['#about', FaUser], ['#projects', FaProjectDiagram], ['#skills', FaTools], ['#contact', FaEnvelope]].map(([href, Icon]) => (
          <a key={href} href={href} className="hover:text-pink-300 transition-colors duration-300">
            <Icon size={22} />
          </a>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
