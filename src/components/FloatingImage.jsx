// src/components/FloatingImage.jsx
import React from 'react';

const FloatingImage = () => {
  return (
    <img
      src="/whimsical-ruchi.png"
      alt="Ruchi Badkur"
      className="fixed bottom-0 right-0 w-28 sm:w-36 md:w-48 opacity-90 z-40 pointer-events-none object-contain"
    />
  );
};

export default FloatingImage;
