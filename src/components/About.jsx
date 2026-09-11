import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import './About.css';

export default function About() {
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

  const details = [
    { label: 'Degree', value: siteConfig.about.details.degree },
    { label: 'University', value: siteConfig.about.details.university },
    { label: 'Semester', value: siteConfig.about.details.semester },
    { label: 'Graduation', value: siteConfig.about.details.graduation },
    { label: 'Location', value: siteConfig.about.details.location },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <span className="section-tag">01 — ABOUT</span>
            <h2 className="section-heading">{siteConfig.about.heading}</h2>
            <div className="heading-accent"></div>
          </motion.div>

          <motion.div className="about-layout" variants={itemVariants}>
            <motion.p className="about-description" variants={itemVariants}>
              {siteConfig.about.description}
            </motion.p>

            <motion.div className="about-details" variants={itemVariants}>
              <div className="details-grid">
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="detail-item"
                    variants={itemVariants}
                  >
                    <span className="detail-label">{detail.label}</span>
                    <span className="detail-value">{detail.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
