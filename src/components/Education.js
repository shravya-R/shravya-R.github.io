import React from 'react';

const education = [
  {
    id: 1,
    university: "University of California San Diego",
    degree: "Masters of Science in Computer Science",
    timeline: "Sept 2024 – Dec 2025",
    location: "San Diego, CA",
    gpa: "CGPA: 4.0/4.0",
    logo: "/ucsd_logo.png"
  },
  {
    id: 2,
    university: "Indian Institute of Technology Indore",
    degree: "Bachelors in Computer Science",
    timeline: "Jul 2018 – Jun 2022",
    location: "Indore, India",
    gpa: "CGPA: 3.97/4.0",
    logo: "/IITI_Logo.png"
  }
];

const Education = () => (
  <section id="education">
    <div className="container">
      <div className="section-header">
        <h2>Education</h2>
      </div>
      <ul className="publications-list">
        {education.map((edu) => (
          <li key={edu.id} className="publication-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', width: '100%' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#222', marginBottom: 2, wordBreak: 'break-word' }}>{edu.university}</div>
                <div style={{ fontSize: '1.05rem', color: '#333', marginBottom: 2 }}>{edu.degree}</div>
                <div style={{ fontSize: '0.98rem', color: '#007acc', marginBottom: 2 }}>{edu.timeline}</div>
                <div style={{ fontSize: '0.95rem', color: '#888', marginBottom: 2 }}>{edu.location}</div>
                <div style={{ fontSize: '0.95rem', color: '#666', marginTop: '0.2rem' }}>{edu.gpa}</div>
              </div>
              <div style={{ flexShrink: 0, marginLeft: 24, display: 'flex', alignItems: 'center' }}>
                <img src={edu.logo} alt={edu.university + ' logo'} style={{ width: 60, height: 60, objectFit: 'contain' }} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Education; 