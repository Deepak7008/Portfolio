import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuroraBackground } from './components/AuroraBackground';
import { Navbar } from './components/Navbar';
import { SectionNav } from './components/SectionNav';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

const SECTIONS = ['me', 'projects', 'experience', 'skills', 'contact'];

export function App() {
  const [activeSection, setActiveSection] = useState('me');
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {

      // Ignore scrolling when a modal is open
      if (document.querySelector('.modal-overlay')) return;

      const now = Date.now();

      // Prevent very fast section switching
      if (now - lastScrollTimeRef.current < 450) return;

      // Ignore tiny touchpad movements
      if (Math.abs(e.deltaY) < 15) return;

      const currentIndex = SECTIONS.indexOf(activeSection);

      if (e.deltaY > 0 && currentIndex < SECTIONS.length - 1) {
        lastScrollTimeRef.current = now;
        setActiveSection(SECTIONS[currentIndex + 1]);
      }

      if (e.deltaY < 0 && currentIndex > 0) {
        lastScrollTimeRef.current = now;
        setActiveSection(SECTIONS[currentIndex - 1]);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };

  }, [activeSection]);

  const handleAvatarClick = () => {
    setActiveSection('me');
  };

  const renderActiveSection = () => {

    switch (activeSection) {

      case 'me':
        return <Hero />;

      case 'projects':
        return <Projects />;

      case 'experience':
        return <Experience />;

      case 'skills':
        return <Skills />;

      case 'contact':
        return <Contact />;

      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider>

      <AuroraBackground />

      <div className="relative z-10">

        <Navbar onAvatarClick={handleAvatarClick} />

        <main className="page-section">

          <div className="container">

            <div
              key={activeSection}
              className="section-fade-in w-full"
            >
              {renderActiveSection()}
            </div>

          </div>

        </main>

        <SectionNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

      </div>

    </ThemeProvider>
  );
}

export default App;