import React from 'react';

const experiences = [
  {
    id: 1,
    company: "Amazon",
    position: "SDE Intern",
    location: "Bellevue, WA",
    duration: "Jun 2025 – Sep 2025",
    logo: "/amazon_logo.png",
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
    logo: "/flipkart_logo.png",
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
    logo: "/flipkart_logo.png",
    achievements: [
      "Developed a logistic regression model and identified 14+ features for predicting offer adoption on the Flipkart website",
      "Formulated heuristic rules in R language to analyze the model performance and achieved a precision of 94%"
    ]
  }
];

const Experience = () => (
  <section id="experience">
    <div className="container">
      <div className="section-header">
        <h2>Experience</h2>
      </div>
      <div className="experience-cards">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-card-header">
              <div className="experience-card-info">
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-position">{exp.position}</p>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-location">{exp.location}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-card-logo">
                <img src={exp.logo} alt={exp.company + ' logo'} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 