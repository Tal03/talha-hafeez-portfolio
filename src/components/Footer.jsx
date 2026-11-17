import { siteConfig } from '../data/siteConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Talha Hafiz</span>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
