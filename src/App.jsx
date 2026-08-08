import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuroraBackground } from './components/AuroraBackground';
import { SparkleTrail } from './components/SparkleTrail';
import { Navbar } from './components/Navbar';
import { SectionNav } from './components/SectionNav';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';

const SECTIONS = ['me', 'projects', 'experience', 'skills', 'education', 'contact'];

export function App() {
  const [activeSection, setActiveSection] = useState('me');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.2,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <AuroraBackground />
      <SparkleTrail />
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <Navbar onAvatarClick={() => handleNavClick('me')} />
        <main className="w-full flex-1">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <SectionNav
          activeSection={activeSection}
          setActiveSection={handleNavClick}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;