import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SocialIcon from './SocialIcon';
import './Hero.css';

const socialLinks = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, network: 'linkedin' },
  { label: 'GitHub', href: siteConfig.social.github, network: 'github' },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
];

export default function Hero() {
  const x = useSpring(useMotionValue(0), { stiffness: 80, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 80, damping: 18 });

  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) / 22);
    y.set((event.clientY - rect.top - rect.height / 2) / 22);
  };

  return (
    <section id="home" className="hero" onPointerMove={move}>
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p className="hero-eyebrow" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
            {siteConfig.hero.eyebrow}
          </motion.p>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>
            {siteConfig.name.split(' ')[0]} <em>{siteConfig.name.split(' ')[1]}</em>
          </motion.h1>

          <motion.div className="hero-role" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <span />
            {siteConfig.role}
          </motion.div>

          <motion.p className="hero-description" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            {siteConfig.hero.subheading}
          </motion.p>

          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <a className="button button-primary" href="#projects">
              Explore My Work
              <ArrowUpRight size={17} />
            </a>
            <a className="button button-quiet" href={siteConfig.cvPath} target="_blank" rel="noreferrer">
              <Download size={17} />
              Download CV
            </a>
          </motion.div>

          <motion.div className="social-row" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            {socialLinks.map(({ label, href, network, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="social-link" aria-label={label}>
                {network ? <SocialIcon network={network} /> : <Icon size={16} />}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-art" style={{ x, y }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-orbit-inner" aria-hidden="true" />
          <div className="hero-monogram" aria-label={`${siteConfig.name} monogram`}>TH</div>
          <div className="hero-note">Software<br />engineering<br />with intent</div>
          <div className="hero-index">EST. / 2026</div>
        </motion.div>
      </div>

      <div className="hero-scroll">Scroll to explore <span /></div>
    </section>
  );
}
