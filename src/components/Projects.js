import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TritonTube: Scalable Distributed Video Storage and Streaming Platform",
      description: "Developed a distributed video storage backend with Go and a custom gRPC protocol to shard and retrieve video content across dynamically scalable storage nodes. Built a pipeline with FFmpeg-based MPEG-DASH for video transcoding and SQLite for metadata management.",
      thumbnail: "🎥",
      period: "Spring'25"
    },
    {
      id: 2,
      title: "Synthetic Safeguards: Evaluating LLM Privacy through Synthetic Generation",
      description: "Developed a synthetic data generation pipeline to handle datasets with PII using CrewAI's agent-based architecture. Evaluated performance of LLaMA3.2 1B model trained using Unsloth, demonstrating comparable task accuracy.",
      thumbnail: "🔒",
      period: "Fall'24"
    },
    {
      id: 3,
      title: "Neural Machine Translation: English to Hindi",
      description: "Developed and compared LSTM and Transformer-based NMT models like mBART for English-Hindi translation. Evaluated the improved translation quality with Attention mechanisms using BLEU and semantic similarity metrics.",
      thumbnail: "🌐",
      period: "Fall'24"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Technical projects showcasing software engineering and machine learning expertise</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-thumbnail">
                {project.thumbnail}
              </div>
              <div className="project-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 className="project-title">{project.title}</h3>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: '#666', 
                    backgroundColor: '#f0f0f0', 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    {project.period}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 