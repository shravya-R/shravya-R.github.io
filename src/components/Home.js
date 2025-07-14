import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I'm Shravya Ramasahayam";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Pause for 1.2s, then restart typing
      const pauseTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 1200);
      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home">
      <div className="container">
        <div className="home-content">
          <div className="profile-image" style={{ width: '280px', height: '280px' }}>
            <img 
              src="/profile.jpg" 
              alt="Shravya Ramasahayam" 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #e0e0e0'
              }}
            />
          </div>
          
          {/* Logos section */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '2rem', 
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <img 
              src="/ucsd_logo.png" 
              alt="UCSD Logo" 
              style={{ 
                height: '50px', 
                width: 'auto', 
                objectFit: 'contain',
                filter: 'grayscale(20%)',
                opacity: '0.8',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.filter = 'grayscale(0%)';
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.filter = 'grayscale(20%)';
                e.target.style.opacity = '0.8';
                e.target.style.transform = 'scale(1)';
              }}
            />
            <img 
              src="/IITI_Logo.png" 
              alt="IITI Logo" 
              style={{ 
                height: '50px', 
                width: 'auto', 
                objectFit: 'contain',
                filter: 'grayscale(20%)',
                opacity: '0.8',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.filter = 'grayscale(0%)';
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.filter = 'grayscale(20%)';
                e.target.style.opacity = '0.8';
                e.target.style.transform = 'scale(1)';
              }}
            />
            <img 
              src="/amazon_logo.png" 
              alt="Amazon Logo" 
              style={{ 
                height: '50px', 
                width: 'auto', 
                objectFit: 'contain',
                filter: 'grayscale(20%)',
                opacity: '0.8',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.filter = 'grayscale(0%)';
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.filter = 'grayscale(20%)';
                e.target.style.opacity = '0.8';
                e.target.style.transform = 'scale(1)';
              }}
            />
            <img 
              src="/flipkart_logo.png" 
              alt="Flipkart Logo" 
              style={{ 
                height: '50px', 
                width: 'auto', 
                objectFit: 'contain',
                filter: 'grayscale(20%)',
                opacity: '0.8',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.filter = 'grayscale(0%)';
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.filter = 'grayscale(20%)';
                e.target.style.opacity = '0.8';
                e.target.style.transform = 'scale(1)';
              }}
            />
          </div>
          
          {/* Contact icons section */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '2rem', 
            marginBottom: '2rem'
          }}>
            <a 
              href="mailto:shravya16097@gmail.com"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid #007acc',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#007acc';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#007acc' }}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com/in/shravya-ramasahayam"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid #007acc',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#007acc';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#007acc' }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          <div className="bio">
            <p style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '1.5rem', color: '#007acc' }}>
              Hey there! Welcome to my online space!
            </p>
            <p style={{ 
              fontSize: '1.8rem', 
              fontWeight: '600', 
              marginBottom: '2rem', 
              color: '#333',
              minHeight: '2.5rem'
            }}>
              {displayText}
            </p>
            <p>
              I'm graduate student in the MS CS program at University of California San Diego (UCSD). 
              Having had a 2+ year stint as a Software Developer at Flipkart, one of the leading e-commerce platforms in India, 
              I had the opportunity to work on numerous interesting projects using Java, Kafka, Elasticsearch, Docker, Kubernetes, 
              Git, Python, Dropwizard, and more.
            </p><br></br>
            <p>
              This page details my academic and professional journey of learning and growth in the field of computer science. 
              I'm passionate about developing innovative solutions and contributing to cutting-edge technology projects that can 
              make a meaningful impact in the field.
            </p><br></br>
            <p>
              With a strong foundation in both technical and humanities disciplines from my time at IIT Indore, I bring a unique 
              perspective to problem-solving and software development. I am actively seeking opportunities to apply my skills in 
              real-world applications and contribute to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 