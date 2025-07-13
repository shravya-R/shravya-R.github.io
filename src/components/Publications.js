import React from 'react';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Machine Learning Algorithm for Soybean Leaf Disease Detection",
      authors: "Shravya Ramasahayam",
      venue: "International Conference on Vegetable Oils (ICVO 2023)",
      year: "2023",
      doi: "ISSN 0970-2776",
      abstract: "Conducted research under the guidance of Dr. Aruna Tiwari to design a three-stage feature extraction pipeline for disease detection in soybean crops using U-Net architecture with ResNet-30 backbone to achieve an accuracy of 81%",
      keywords: ["machine learning", "disease detection", "U-Net", "ResNet-30", "agriculture"],
      link: "https://isor.in/wp-content/uploads/2023/09/vol-40-Special-Issue-July-2023-Full-File-240723.pdf",
      linkText: "ICVO"
    },
    {
      id: 2,
      title: "Outlier Detection from Mixed Attribute Space Using Hybrid Model",
      authors: "Shravya Ramasahayam",
      venue: "International Conference on Hybrid Intelligent Systems (HIS 2022)",
      year: "2022",
      doi: "ISSN 0970-2776",
      abstract: "Worked under the guidance of Dr. Shanthi Makka to design a Hybrid Inter Quartile Range (HIQR) outlier detection technique for automatic detection and removal of outliers from a dataset and achieved an accuracy of 98.3%",
      keywords: ["outlier detection", "hybrid model", "HIQR", "data preprocessing", "machine learning"],
      link: "https://link.springer.com/chapter/10.1007/978-3-031-27409-1_86",
      linkText: "Springer"
    }
  ];

  return (
    <section id="publications">
      <div className="container">
        <div className="section-header">
          <h2>Publications</h2>
        </div>
        <ul className="publications-list">
          {publications.map((pub) => (
            <li key={pub.id} className="publication-item">
              <div style={{ marginBottom: '1rem', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                  <h3 className="publication-title" style={{ margin: 0, flex: 1 }}>{pub.title}</h3>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      backgroundColor: '#007acc',
                      color: 'white', 
                      textDecoration: 'none', 
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      marginLeft: '1rem',
                      whiteSpace: 'nowrap',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      transition: 'all 0.3s ease',
                      border: '1px solid #007acc'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#005a99';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#007acc';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {pub.linkText} 🔗
                  </a>
                </div>
                
                <p className="publication-authors" style={{ marginBottom: '0.2rem' }}>
                  <span className="highlight">{pub.authors}</span>
                </p>
                
                <p className="publication-venue" style={{ marginBottom: '0.2rem' }}>
                  {pub.venue}, {pub.year}
                </p>
                
                <p style={{ 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6', 
                  color: '#555', 
                  marginBottom: '0.8rem',
                  fontStyle: 'italic'
                }}>
                  {pub.abstract}
                </p>
                
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>ISSN: </span>
                  <span style={{ color: '#007acc', fontWeight: '500' }}>{pub.doi}</span>
                </div>
                
                <div className="publication-links">
                  <span style={{ fontSize: '0.85rem', color: '#888' }}>Keywords: </span>
                  {pub.keywords.map((keyword, index) => (
                    <span 
                      key={index} 
                      style={{ 
                        fontSize: '0.8rem', 
                        backgroundColor: '#f0f0f0', 
                        padding: '0.2rem 0.5rem', 
                        borderRadius: '12px',
                        marginRight: '0.5rem',
                        color: '#666'
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications; 