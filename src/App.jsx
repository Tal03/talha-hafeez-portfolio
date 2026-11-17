import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function Experience() {
  return (
    <section id="experience" className="experience section-shell">
      <div className="container reveal-block">
        <span className="section-kicker">06 / EXPERIENCE</span>

        <motion.div
          className="experience-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="eyebrow-copy">THE WORK IN MOTION</p>
          <h2>Built around practical problems.</h2>

          <div className="experience-timeline">
            <div className="timeline-item">
              <span className="timeline-year">2023</span>
              <div>
                <h3>Full Stack Developer</h3>
                <p>Workflow Solution, Rawalpindi</p>
                <small>Experience until 2023.</small>
              </div>
            </div>
          </div>

          <a className="text-link" href="#resume">
            Open resume <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="section-shell leadership">
      <div className="container leadership-wrap">
        <span className="section-kicker">05 / LEADERSHIP</span>

        <motion.div
          className="leadership-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="leadership-badge">Executive Member</div>
          <div>
            <p className="leadership-label">Organization</p>
            <h3>CUST Zindagi</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const interactiveSelectors = 'a, button, input, textarea, .project-card, .skill-card, .social-link';

    if (!dot || !ring) {
      return undefined;
    }

    const onPointerMove = (event) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const { clientX, clientY } = event;
      dot.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
      dot.classList.add('cursor-visible');
      ring.classList.add('cursor-visible');
      const target = event.target instanceof Element ? event.target.closest(interactiveSelectors) : null;
      ring.classList.toggle('cursor-hover', Boolean(target));
    };

    const onPointerLeave = () => {
      dot.classList.remove('cursor-visible');
      ring.classList.remove('cursor-visible', 'cursor-hover');
    };

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerleave', onPointerLeave);

    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor cursor-dot" aria-hidden="true" />
      <div className="cursor cursor-ring" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
