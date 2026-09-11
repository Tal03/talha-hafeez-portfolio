import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="footer-main" variants={itemVariants}>
            <h3 className="footer-brand">{siteConfig.name}</h3>
            <p className="footer-role">{siteConfig.role}</p>
          </motion.div>

          <motion.div className="footer-contact" variants={itemVariants}>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-email"
                title="Email"
              >
                <Mail size={18} />
                <span>{siteConfig.email}</span>
              </a>
            )}
          </motion.div>

          <motion.div className="footer-social" variants={itemVariants}>
            <div className="social-links">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <BriefcaseBusiness size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="footer-copyright">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
