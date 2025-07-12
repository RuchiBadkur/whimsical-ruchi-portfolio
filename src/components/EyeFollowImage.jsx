import React, { useEffect, useState } from 'react';

const EyeFollowImage = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // smaller movement
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-50 w-[220px] sm:w-[260px] md:w-[300px] pointer-events-none select-none">
      {/* Your Image */}
      <img
        src="/whimsical-ruchi.png"
        alt="Ruchi Badkur"
        className="w-full h-auto object-contain relative z-10"
      />

      {/* Left Pupil */}
      <div
        className="absolute w-4 h-4 bg-black rounded-full shadow-md"
        style={{
          bottom: '120px', // fine-tune this
          right: '110px', // fine-tune this
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          border: '1px solid white',
          background: 'radial-gradient(circle at center, black 40%, #333)',
        }}
      ></div>

      {/* Right Pupil */}
      <div
        className="absolute w-4 h-4 bg-black rounded-full shadow-md"
        style={{
          bottom: '120px', // fine-tune this
          right: '80px', // fine-tune this
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          border: '1px solid white',
          background: 'radial-gradient(circle at center, black 40%, #333)',
        }}
      ></div>
    </div>
  );
};

export default EyeFollowImage;
