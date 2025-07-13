import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Get in touch for collaborations, opportunities, or questions</p>
        </div>
        <div className="contact-content">
          <div className="contact-email">
            <a href="mailto:shravya16097@gmail.com">shravya16097@gmail.com</a>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/shravya-ramasahayam" target="_blank" rel="noopener noreferrer">
              <span>🔗</span>
              LinkedIn
            </a>
            <a href="https://github.com/shravya-R" target="_blank" rel="noopener noreferrer">
              <span>📦</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 