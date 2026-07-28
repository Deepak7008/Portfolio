import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
  });

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: clientX,
            y: clientY,
            normalizedX: clientX / window.innerWidth,
            normalizedY: clientY / window.innerHeight,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};
