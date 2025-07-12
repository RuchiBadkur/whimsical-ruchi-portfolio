// src/components/Firefly.jsx
import React, { useEffect, useState } from 'react';

export default function Firefly() {
  const [flies, setFlies] = useState([]);

  useEffect(() => {
    const initialFlies = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 5,
    }));
    setFlies(initialFlies);

    const interval = setInterval(() => {
      setFlies((prev) =>
        prev.map((f) => ({
          ...f,
          x: f.x + (Math.random() - 0.5) * 60,
          y: f.y + (Math.random() - 0.5) * 60,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {flies.map((f) => (
        <div
          key={f.id}
          className="firefly-glow"
          style={{
            left: f.x,
            top: f.y,
            width: f.size,
            height: f.size,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </>
  );
}
