import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section-shell projects">
      <div className="container">
        <div className="projects-top">
          <span className="section-kicker">04 / SELECTED WORK</span>
          <p>Live work, built for the real world.</p>
        </div>

        {projects.map((project, index) => {
          const VisualElement = project.type === 'live' ? 'a' : 'div';
          const visualLinkProps = project.type === 'live'
            ? {
                href: project.projectUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `Visit ${project.name} website`,
              }
            : {};

          return (
            <motion.article
              className={`project-card project-${index + 1}`}
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <VisualElement
                {...visualLinkProps}
                className={`project-visual ${project.type === 'development' ? 'project-visual-development' : ''}`}
              >
                {project.preview && (
                  <img
                    className="project-preview-image"
                    src={project.preview}
                    alt={`${project.name} website preview`}
                    loading="lazy"
                  />
                )}
                <div className="browser-bar">
                  <i />
                  <i />
                  <i />
                  <span>{project.type === 'live' ? new URL(project.projectUrl).hostname : project.category}</span>
                </div>

                {project.preview ? (
                  <div className="project-visual-copy">
                    <small>{project.category}</small>
                    <strong>{project.name}</strong>
                  </div>
                ) : (
                  <div className="project-fallback">
                    <span className="mini-label">Development Project</span>
                    <strong>{project.name}</strong>
                  </div>
                )}

                {project.type === 'development' && (
                  <div className="project-dashboard" aria-hidden="true">
                    <div className="dashboard-top" />
                    <div className="dashboard-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}
              </VisualElement>

              <div className="project-info">
                <span className="project-number">{project.id}</span>

                <div>
                  <p className="project-category">{project.category}</p>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>

                  {project.features && (
                    <div className="project-features">
                      {project.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  )}

                  {project.type === 'live' ? (
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      {project.liveLabel}
                      <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <span className="project-status-tag">{project.liveLabel}</span>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
