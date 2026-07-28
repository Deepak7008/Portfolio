import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import './AuroraBackground.css';

export const AuroraBackground = () => {
  const { x, y, normalizedX, normalizedY } = useMousePosition();

  // Larger dynamic offset calculations (up to 250px shift) for clear mouse-driven movement
  const offsetX1 = (normalizedX - 0.5) * 220;
  const offsetY1 = (normalizedY - 0.5) * 220;

  const offsetX2 = (0.5 - normalizedX) * 260;
  const offsetY2 = (normalizedY - 0.5) * 240;

  const offsetX3 = (normalizedX - 0.5) * 200;
  const offsetY3 = (0.5 - normalizedY) * 180;

  const offsetX4 = (0.5 - normalizedX) * 240;
  const offsetY4 = (0.5 - normalizedY) * 220;

  return (
    <div className="aurora-container" aria-hidden="true">
      {/* Mouse Spotlight Following Cursor Directly */}
      <div 
        className="mouse-spotlight"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, var(--spotlight-color), transparent 80%)`
        }}
      />

      <div className="aurora-overlay" />

      {/* Dynamic Shifting Aurora Gradient Blobs */}
      <div
        className="aurora-blob blob-1"
        style={{ transform: `translate3d(${offsetX1}px, ${offsetY1}px, 0)` }}
      />
      <div
        className="aurora-blob blob-2"
        style={{ transform: `translate3d(${offsetX2}px, ${offsetY2}px, 0)` }}
      />
      <div
        className="aurora-blob blob-3"
        style={{ transform: `translate3d(${offsetX3}px, ${offsetY3}px, 0)` }}
      />
      <div
        className="aurora-blob blob-4"
        style={{ transform: `translate3d(${offsetX4}px, ${offsetY4}px, 0)` }}
      />
    </div>
  );
};
