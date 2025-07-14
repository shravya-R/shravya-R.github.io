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
      <div className="education-cards">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-card-header">
              <div className="education-card-info">
                <h3 className="education-university">{edu.university}</h3>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-timeline">{edu.timeline}</p>
                <p className="education-location">{edu.location}</p>
                <p className="education-gpa">{edu.gpa}</p>
              </div>
              <div className="education-card-logo">
                <img src={edu.logo} alt={edu.university + ' logo'} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 