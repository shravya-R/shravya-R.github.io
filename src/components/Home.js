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