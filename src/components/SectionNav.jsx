import React from 'react';
import { User, Briefcase, FileText, Code2, Mail } from 'lucide-react';
import './SectionNav.css';

export const SectionNav = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'me', label: 'Me', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-nav" aria-label="Main Navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`nav-pill ${isActive ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
