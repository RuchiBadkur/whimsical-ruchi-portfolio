import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState([]);

  // Mouse move
  useEffect(() => {
    const moveHandler = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const clickHandler = (e) => {
      setClicks((prev) => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('click', clickHandler);
    };
  }, []);

  // Remove sparkles after animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setClicks((prev) => prev.slice(1));
    }, 700);
    return () => clearTimeout(timeout);
  }, [clicks]);

  return (
    <>
      {/* Custom cursor (like glowing bee) */}
      <div
        style={{
          position: 'fixed',
          left: coords.x - 10,
          top: coords.y - 10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #facc15, #f59e0b)',
          boxShadow: '0 0 10px #facc15, 0 0 30px #facc15',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s',
        }}
      />

      {/* Sparkle trail */}
      <div
        style={{
          position: 'fixed',
          left: coords.x - 4,
          top: coords.y - 4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#fef3c7',
          opacity: 0.5,
          pointerEvents: 'none',
          boxShadow: '0 0 6px 2px #fde68a',
          zIndex: 9999,
          animation: 'fade 0.8s forwards',
        }}
      />

      {/* Sparkles on click */}
      {clicks.map(({ x, y, id }) => (
        <span
          key={id}
          style={{
            position: 'fixed',
            left: x - 10,
            top: y - 10,
            width: 20,
            height: 20,
            background: 'radial-gradient(circle, #f9a8d4, transparent)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            animation: 'sparkle-burst 0.7s forwards',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
