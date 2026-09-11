import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="heading-accent"></div>
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {projects.filter(p => p.featured).map((project, _index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
                    <div className="project-links">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title="View Project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className="project-btn-disabled">Coming Soon</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {projects.length > 0 && (
            <motion.div className="projects-footer" variants={itemVariants}>
              <a href="#contact" className="view-all-btn">
                View All Projects & More
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
