import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, FormSpree, etc.)
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fade-in' : ''}`}>
          Get In Touch
        </h2>
        <p className={`section-subtitle ${inView ? 'animate-fade-in' : ''}`}>
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="contact-content">
          <div className={`contact-info ${inView ? 'animate-slide-in-left' : ''}`}>
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href={`mailto:${portfolioData.personal.email}`}>
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href={`tel:${portfolioData.personal.phone}`}>
                  {portfolioData.personal.phone}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>{portfolioData.personal.location}</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={24} />
                </a>
                
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={24} />
                </a>
                
                  href={portfolioData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className={`contact-form-container ${inView ? 'animate-slide-in-right' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <Send size={18} />
                Send Message
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;