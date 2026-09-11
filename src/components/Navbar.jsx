import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    siteConfig.navigation.forEach((nav) => {
      const element = document.getElementById(nav.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    setActiveSection(id);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = siteConfig.cvPath;
    link.download = `${siteConfig.name.replace(/\s+/g, '-')}-CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <h3 className="brand-name">{siteConfig.name}</h3>
          <p className="brand-role">{siteConfig.role}</p>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            {siteConfig.navigation.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`nav-link ${activeSection === nav.id ? 'active' : ''}`}
                onClick={() => handleNavClick(nav.id)}
              >
                {nav.label}
              </a>
            ))}
          </div>

          <button className="cv-button" onClick={handleDownloadCV} title="Download CV">
            <Download size={18} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
