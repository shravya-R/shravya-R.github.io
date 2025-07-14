import React from 'react';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Machine Learning Algorithm for Soybean Leaf Disease Detection",
      venue: "International Conference on Vegetable Oils (ICVO 2023)",
      year: "2023",
      doi: "ISSN 0970-2776",
      abstract: "Conducted research under the guidance of Dr. Aruna Tiwari to design a three-stage feature extraction pipeline for disease detection in soybean crops using U-Net architecture with ResNet-30 backbone to achieve an accuracy of 81%",
      link: "https://isor.in/wp-content/uploads/2023/09/vol-40-Special-Issue-July-2023-Full-File-240723.pdf",
      linkText: "ICVO"
    },
    {
      id: 2,
      title: "Outlier Detection from Mixed Attribute Space Using Hybrid Model",
      venue: "International Conference on Hybrid Intelligent Systems (HIS 2022)",
      year: "2022",
      doi: "ISSN 0970-2776",
      abstract: "Worked under the guidance of Dr. Shanthi Makka to design a Hybrid Inter Quartile Range (HIQR) outlier detection technique for automatic detection and removal of outliers from a dataset and achieved an accuracy of 98.3%",
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
        <div className="publications-grid">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-item">
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-venue">{pub.venue}, {pub.year}</p>
                <p className="publication-abstract">{pub.abstract}</p>
                <div className="publication-meta">
                  <span className="publication-issn-label">ISSN: </span>
                  <span className="publication-issn">{pub.doi}</span>
                </div>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="publication-link-btn"
                  style={{ marginTop: '1rem', display: 'inline-block' }}
                >
                  {pub.linkText} 🔗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications; 