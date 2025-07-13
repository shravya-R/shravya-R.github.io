import React from 'react';

const Publications = () => {
  const experiences = [
    {
      id: 1,
      company: "Amazon",
      position: "SDE Intern",
      location: "Bellevue, WA",
      duration: "Jun 2025 – Sep 2025",
      achievements: [
        "Designed and developed a decision analysis system using AWS API Gateway, Lambda, and S3 to dynamically generate, store, and manage LP (Linear Program) files as a knowledge base for downstream processing.",
        "Built an MCP(Model Context Protocol) server to read LP files and interface with an LLM for optimization analysis"
      ]
    },
    {
      id: 2,
      company: "Flipkart, a Walmart Subsidiary",
      position: "Software Development Engineer",
      location: "Bengaluru, India",
      duration: "Jun 2022 – Sep 2024",
      achievements: [
        "Spearheaded high-level design (HLD) to rearchitect monolith service, improving system performance by X50 times",
        "Engineered REST APIs to persist and retrieve data using Elasticsearch to display updates on the RetailerHub portal, achieving a 250% increase in the net promoter score (NPS)",
        "Worked on the setup of Kafka MySQL sink connector to persist Change Data Capture(CDC) events from any data store to TiDB at ≈1000 writes/sec and integrated it with CI/CD pipelines for seamless deployment on the K8s",
        "Architected low-level design(LLD) of data ingestion pipeline to persist audited data into Flipkart Data Platform(FDP)",
        "Conducted non-functional load testing on microservices and optimized APIs to reduce the P99 latency by 95%",
        "Prepared Python scripts to re-execute failed consignment workflows, unblocking inventory worth ≈ $1M"
      ]
    },
    {
      id: 3,
      company: "Flipkart, a Walmart Subsidiary",
      position: "SDE Intern",
      location: "Remote",
      duration: "Jun 2021 - Jul 2021",
      achievements: [
        "Developed a logistic regression model and identified 14+ features for predicting offer adoption on the Flipkart website",
        "Formulated heuristic rules in R language to analyze the model performance and achieved a precision of 94%"
      ]
    }
  ];

  return (
    <section id="publications">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
        </div>
        <ul className="publications-list">
          {experiences.map((exp) => (
            <li key={exp.id} className="publication-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 className="publication-title">{exp.position}</h3>
                  <p className="publication-authors" style={{ fontWeight: '600', color: '#007acc' }}>
                    {exp.company}
                  </p>
                  <p className="publication-venue">{exp.location}</p>
                </div>
                <div style={{ textAlign: 'right', color: '#666', fontSize: '0.9rem' }}>
                  {exp.duration}
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.achievements.map((achievement, index) => (
                  <li key={index} style={{ 
                    marginBottom: '0.8rem', 
                    paddingLeft: '1.5rem', 
                    position: 'relative',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: '#555'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: '0', 
                      color: '#007acc',
                      fontWeight: 'bold'
                    }}>•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications; 