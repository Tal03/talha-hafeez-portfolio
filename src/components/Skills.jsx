import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  { id: '01', title: 'Core Stack', items: ['C++', 'Python', 'JavaScript', 'React.js', 'HTML', 'CSS'] },
  { id: '02', title: 'Platform Build', items: ['Full-Stack Development', 'Web Development', 'AI & Machine Learning'] },
  { id: '03', title: 'Delivery', items: ['Modern UI Engineering', 'Scalable Product Thinking', 'Problem Solving'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell skills">
      <div className="container">
        <span className="section-kicker">03 / SKILLS</span>
        <h2>
          Tools are only useful
          <br />
          <em>in good hands.</em>
        </h2>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <motion.div
              key={group.id}
              className="skill-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="skill-index">{group.id}</div>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
