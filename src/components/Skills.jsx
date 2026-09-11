import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['C++', 'Python', 'JavaScript']
    },
    {
      category: 'Frontend & Web',
      skills: ['React', 'HTML', 'CSS', 'Web Development']
    },
    {
      category: 'Technologies & Concepts',
      skills: ['Artificial Intelligence', 'Object-Oriented Programming', 'Problem Solving', 'Git']
    }
  ];

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-heading">Skills & Expertise</h2>
            <div className="heading-accent"></div>
          </motion.div>

          <motion.div className="skills-grid" variants={containerVariants}>
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-badge"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
