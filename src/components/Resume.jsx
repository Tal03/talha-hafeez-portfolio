import { ArrowUpRight, FileText } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="section-shell resume">
      <div className="container resume-box">
        <div className="resume-icon">
          <FileText size={22} />
        </div>

        <div>
          <span className="section-kicker">08 / RESUME</span>
          <h2>Keep the full picture close.</h2>
        </div>

        <a className="button button-primary" href={siteConfig.cvPath} target="_blank" rel="noreferrer">
          View resume
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
