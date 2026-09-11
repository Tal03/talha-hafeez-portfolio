import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleHoverState = (event) => {
      const target = event.target.closest('a, button, .project-card, .skill-badge, .social-link');
      setIsHover(Boolean(target));
    };

    const handleLeave = () => setIsHover(false);

    window.addEventListener('pointermove', updatePosition);
    window.addEventListener('pointerover', handleHoverState);
    window.addEventListener('pointerout', handleLeave);

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerover', handleHoverState);
      window.removeEventListener('pointerout', handleLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isHover ? 'active' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <div
        className={`cursor-ring ${isHover ? 'active' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
