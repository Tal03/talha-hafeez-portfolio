import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    return;
  }

  try {
    const data = new FormData();

    data.append('access_key', '9879ae63-78c2-4ea0-b958-6f3f0bf26c19');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });

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
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Mail,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: siteConfig.social.linkedin,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-heading">Get In Touch</h2>
            <div className="heading-accent"></div>
            <p className="contact-subtitle">
              I'd love to hear from you! Whether you have a question, want to collaborate, or just want to chat about technology and AI, feel free to reach out.
            </p>
          </motion.div>

          <div className="contact-layout">
            <motion.div className="contact-form-section" variants={itemVariants}>
              <h3 className="form-title">Send me a message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or question..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    ✓ Message sent! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div className="contact-info-section" variants={itemVariants}>
              <h3 className="info-title">Contact Information</h3>

              <div className="contact-methods">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      target={method.label !== 'Email' ? '_blank' : '_self'}
                      rel={method.label !== 'Email' ? 'noopener noreferrer' : ''}
                      className="contact-method"
                      variants={itemVariants}
                      whileHover={{ x: 8 }}
                    >
                      <div className="method-icon">
                        <Icon size={24} />
                      </div>
                      <div className="method-content">
                        <span className="method-label">{method.label}</span>
                        <span className="method-value">{method.value}</span>
                      </div>
                      <ExternalLink size={16} className="method-arrow" />
                    </motion.a>
                  );
                })}
              </div>

              <div className="contact-cta">
                <p>Feel free to reach out anytime. I'm always interested in discussing new opportunities and ideas!</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
