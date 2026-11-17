import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SocialIcon from './SocialIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    try {
      const payload = new FormData();
      payload.append('access_key', '9879ae63-78c2-4ea0-b958-6f3f0bf26c19');
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Unable to send message. Please try again.');
    }
  };

  const contactMethods = [
    { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'Connect with me', href: siteConfig.social.linkedin, network: 'linkedin' },
    { label: 'GitHub', value: 'Explore projects', href: siteConfig.social.github, network: 'github' },
  ];

  return (
    <section id="contact" className="contact section-shell">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div className="contact-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-kicker">09 / CONTACT</span>
            <h2>Let&apos;s build something meaningful.</h2>
            <p className="contact-subtitle">
              I&apos;m open to impactful work, product collaborations, and discussions around software engineering, AI, and digital experiences.
            </p>
          </motion.div>

          <div className="contact-layout">
            <motion.div className="contact-form-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="form-title">Send a message</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Tell me about your project, idea, or opportunity..." required />
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={18} />
                  Send Message
                </button>

                {submitted && (
                  <motion.div className="success-message" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    Message sent successfully. I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div className="contact-info-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="info-title">Contact information</h3>

              <div className="contact-methods">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="contact-method"
                      whileHover={{ x: 8 }}
                    >
                      <div className="method-icon">
                        {method.network ? <SocialIcon network={method.network} /> : <Icon size={21} />}
                      </div>

                      <div className="method-content">
                        <span className="method-label">{method.label}</span>
                        <span className="method-value">{method.value}</span>
                      </div>

                      <ExternalLink size={15} className="method-arrow" />
                    </motion.a>
                  );
                })}
              </div>

              <div className="contact-cta">
                <p>New opportunities, product ideas, and meaningful collaborations are always welcome.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
