import React, { useEffect, useRef } from 'react';

const FireflyTrail = () => {
  const trailRef = useRef([]);

  useEffect(() => {
    const trailLength = 10//less trail = smoother
    const trail = Array.from({ length: trailLength }, () => document.createElement('div'));

    trail.forEach(dot => {
      dot.className = 'w-3 h-3 rounded-full bg-yellow-300/50 blur-sm absolute pointer-events-none';
      dot.style.position = 'fixed';   
      dot.style.zIndex = 99
      document.body.appendChild(dot);
    });

    trailRef.current = trail;

    const move = (e) => {
      trail.forEach((dot, i) => {
        setTimeout(() => {
          dot.style.left = `${e.clientX - 6}px`;
          dot.style.top = `${e.clientY - 6}px`;
        }, i * 40);
      });
    };

    window.addEventListener('mousemove', move);
    return () => {
      trail.forEach(dot => document.body.removeChild(dot));
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return null;
};

export default FireflyTrail;