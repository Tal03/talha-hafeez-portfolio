import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './Resume.css';

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = siteConfig.cvPath;
    link.download = `${siteConfig.name.replace(/\s+/g, '-')}-CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    window.open(siteConfig.cvPath, '_blank');
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <motion.div
          className="resume-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="resume-header" variants={itemVariants}>
            <h2 className="section-heading">Resume & CV</h2>
            <div className="heading-accent"></div>
          </motion.div>

          <motion.div className="resume-card" variants={itemVariants}>
            <div className="resume-icon">
              <Download size={32} />
            </div>

            <h3 className="resume-title">Download My CV</h3>

            <p className="resume-description">
              Download my comprehensive CV to learn more about my education, skills, projects, and professional experience. I'm actively seeking internship and full-time opportunities.
            </p>

            <div className="resume-actions">
              <button className="resume-btn resume-btn-primary" onClick={handleDownloadCV}>
                <Download size={20} />
                <span>Download CV</span>
              </button>
              <button className="resume-btn resume-btn-secondary" onClick={handleViewCV}>
                <Eye size={20} />
                <span>View CV</span>
              </button>
            </div>

            <div className="resume-note">
              <p>CV file located at: <code>{siteConfig.cvPath}</code></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
