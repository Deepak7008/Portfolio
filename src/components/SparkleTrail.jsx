import React, { useEffect, useRef, useState, useCallback } from 'react';
import './SparkleTrail.css';

const SPARKLE_COLORS = [
  'var(--accent-blue)',
  'var(--accent-purple)',
  'var(--accent-teal)',
  '#ec4899'
];

const MAX_SPARKLES = 5;
const SPAWN_DISTANCE = 25;
const CLICK_BURST = 8;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const SparkleTrail = () => {
  const [sparkles, setSparkles] = useState([]);
  const idRef = useRef(0);
  const lastSpawnRef = useRef(null);

  const spawn = useCallback((x, y, count) => {
    const fresh = [];

    for (let i = 0; i < count; i++) {
      fresh.push({
        id: idRef.current++,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        size: 3 + Math.random() * 3,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        drift: (Math.random() - 0.5) * 40,
        rise: 15 + Math.random() * 25,
        duration: 700 + Math.random() * 400,
        delay: Math.random() * 80
      });
    }

    setSparkles((prev) => [...prev, ...fresh].slice(-MAX_SPARKLES));
  }, []);

  const removeSparkle = useCallback((id) => {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const last = lastSpawnRef.current;
      if (!last || Math.hypot(clientX - last.x, clientY - last.y) >= SPAWN_DISTANCE) {
        lastSpawnRef.current = { x: clientX, y: clientY };
        spawn(clientX, clientY, 1);
      }
    };

    const handleClick = (event) => {
      spawn(event.clientX, event.clientY, CLICK_BURST);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [spawn]);

  return (
    <div className="sparkle-trail" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            background: sparkle.color,
            color: sparkle.color,
            animationDuration: `${sparkle.duration}ms`,
            animationDelay: `${sparkle.delay}ms`,
            '--drift': `${sparkle.drift}px`,
            '--rise': `-${sparkle.rise}px`
          }}
          onAnimationEnd={() => removeSparkle(sparkle.id)}
        />
      ))}
    </div>
  );
};
