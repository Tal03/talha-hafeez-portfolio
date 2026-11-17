import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-shell about">
      <div className="container split-layout">
        <div>
          <span className="section-kicker">02 / ABOUT</span>
          <h2>{siteConfig.about.heading}</h2>
        </div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p>{siteConfig.about.description}</p>
          <div className="about-points">
            {siteConfig.about.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
