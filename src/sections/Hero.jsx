import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="me" className="page-section">
      <div className="container flex justify-center">
        <div className="glass-card hero-card">
          <div className="hero-avatar-large">
            <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ borderRadius: '50%' }}>
              <circle cx="50" cy="50" r="48" fill="#3b82f6" opacity="0.2" />
              <circle cx="50" cy="42" r="22" fill="#fcd34d" />
              <ellipse cx="50" cy="78" rx="30" ry="20" fill="#2563eb" />
              <circle cx="42" cy="40" r="7" fill="none" stroke="#1e293b" strokeWidth="2.5" />
              <circle cx="58" cy="40" r="7" fill="none" stroke="#1e293b" strokeWidth="2.5" />
              <line x1="49" y1="40" x2="51" y2="40" stroke="#1e293b" strokeWidth="2.5" />
              <circle cx="42" cy="40" r="2.5" fill="#1e293b" />
              <circle cx="58" cy="40" r="2.5" fill="#1e293b" />
              <path d="M 43 50 Q 50 56 57 50" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <div className="hero-greeting">Hey 👋</div>

          <h1 className="hero-name">Deepak</h1>

          <div className="hero-role-badge">
            <Sparkles size={16} />
            <span>AI Product Manager</span>
            <span>•</span>
            <MapPin size={15} />
            <span>India</span>
          </div>

          <p className="hero-bio">
            I'm Deepak, an AI Product Manager bridging deep machine learning tech with intuitive user experiences. I focus on building scalable AI applications, LLM workflows, and data-driven products.
          </p>

          <div className="hero-tags">
            <span className="hero-tag-pill">Machine Learning</span>
            <span className="hero-tag-pill">AI Product Strategy</span>
            <span className="hero-tag-pill">FastAPI</span>
            <span className="hero-tag-pill">React</span>
            <span className="hero-tag-pill">LLM Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};
