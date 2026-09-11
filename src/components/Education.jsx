import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import './Education.css';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="education-header" variants={itemVariants}>
            <h2 className="section-heading">Education</h2>
            <div className="heading-accent"></div>
          </motion.div>

          <motion.div className="education-timeline" variants={containerVariants}>
            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="timeline-content">
                <h3 className="degree-title">{siteConfig.about.details.degree}</h3>
                <p className="university-name">{siteConfig.about.details.university}</p>
                
                <div className="education-details">
                  <div className="detail">
                    <span className="detail-label">Current:</span>
                    <span className="detail-value">{siteConfig.about.details.semester}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Expected Graduation:</span>
                    <span className="detail-value">{siteConfig.about.details.graduation}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{siteConfig.about.details.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
