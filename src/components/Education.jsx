import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-shell education">
      <div className="container">
        <span className="section-kicker">07 / EDUCATION</span>
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="education-heading">
            <span className="education-icon" aria-hidden="true">
              <GraduationCap size={26} />
            </span>
            <div>
              <p>ACADEMIC FOUNDATION</p>
              <h2>BS Software Engineering</h2>
            </div>
          </div>
          <div className="education-meta">
            <span>{siteConfig.university}</span>
            <span>{siteConfig.semester}</span>
            <span>{siteConfig.location}</span>
            <span>Expected Graduation: {siteConfig.graduation}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
