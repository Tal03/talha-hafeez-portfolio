import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './Hero.css';

export default function Hero() {
  const [displayText, setDisplayText] = useState(siteConfig.hero.roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.hero.roles.length);
      setDisplayText(
        siteConfig.hero.roles[(roleIndex + 1) % siteConfig.hero.roles.length]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [roleIndex]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = siteConfig.cvPath;
    link.download = `${siteConfig.name.replace(/\s+/g, '-')}-CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const nameParts = siteConfig.name.split(' ');

  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-eyebrow" variants={itemVariants}>
            {siteConfig.hero.eyebrow}
          </motion.p>

          <div className="hero-heading-wrapper">
            <motion.h1 className="hero-heading" variants={itemVariants}>
              <span className="hero-heading-kicker">Hello, I’m</span>
            </motion.h1>

            <motion.h1 className="hero-name" variants={itemVariants}>
              <span className="hero-name-line">{nameParts[0]}</span>
              <span className="hero-name-line accent">{nameParts[1]}</span>
            </motion.h1>
          </div>

          <motion.div
            className="hero-role-container"
            variants={itemVariants}
          >
            <span className="hero-role-label">Currently</span>

            <motion.span
              className="hero-role"
              key={displayText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
            </motion.span>
          </motion.div>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            {siteConfig.hero.subheading}
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={20} />
            </a>

            <a href="#contact" className="btn btn-tertiary">
              Contact Me
            </a>

            <button
              className="btn btn-secondary"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </motion.div>

          <motion.div
            className="hero-social"
            variants={itemVariants}
          >
            <p className="social-label">Connect with me</p>

            <div className="social-links">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <BriefcaseBusiness size={24} />
                </a>
              )}

              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="social-link"
                  title="Email"
                >
                  <Mail size={24} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}