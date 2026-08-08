import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="me" className="page-section">
      <div className="container flex justify-center">

        <div className="glass-card hero-card">

          <div className="hero-avatar-large">
            <img
              src="/deepakdp.webp"
              alt="Deepak Pani"
              className="hero-photo"
            />
          </div>

          <h1 className="hero-name">
            Deepak Pani
          </h1>

          <div className="hero-role-badge">
            <Sparkles size={16} />
            <span>AI Product Manager</span>

            <MapPin size={15} />
            <span>India</span>
          </div>

          <p className="hero-bio">
            Product Manager exploring the intersection of AI, Retail, and Technology.<br />
            Building products, solving problems, and learning along the way.
          </p>

          <div className="hero-tags">
            <span className="hero-tag-pill">AI Product Management</span>
            <span className="hero-tag-pill">Retail Planning</span>
            <span className="hero-tag-pill">SQL & Python</span>
            <span className="hero-tag-pill">Product Strategy</span>
            <span className="hero-tag-pill">Enterprise SaaS</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;