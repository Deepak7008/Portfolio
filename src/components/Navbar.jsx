import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import './Navbar.css';

export const Navbar = ({ onAvatarClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="top-navbar">
      <div className="top-navbar-left">
        <a
          href="/Deepak_Pani_Resume.pdf"
          className="resume-btn"
          title="View Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="top-navbar-center">
        <div className="memoji-avatar-top" onClick={onAvatarClick} title="Deepak | AI Product Manager">
          <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ borderRadius: '50%' }}>
            <circle cx="50" cy="50" r="48" fill="#3b82f6" opacity="0.15" />
            <circle cx="50" cy="42" r="22" fill="#fcd34d" />
            <ellipse cx="50" cy="78" rx="30" ry="20" fill="#2563eb" />
            {/* Glasses */}
            <circle cx="42" cy="40" r="7" fill="none" stroke="#1e293b" strokeWidth="2.5" />
            <circle cx="58" cy="40" r="7" fill="none" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="49" y1="40" x2="51" y2="40" stroke="#1e293b" strokeWidth="2.5" />
            {/* Eyes */}
            <circle cx="42" cy="40" r="2.5" fill="#1e293b" />
            <circle cx="58" cy="40" r="2.5" fill="#1e293b" />
            {/* Smile */}
            <path d="M 43 50 Q 50 56 57 50" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="top-navbar-right">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
        </button>
      </div>
    </header>
  );
};
