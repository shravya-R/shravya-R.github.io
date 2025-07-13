import React from 'react';

const achievements = [
  "Best Oral Presentation Award, International Conference on Vegetable Oils (ICVO) | 2023",
  "Instant Karma Award, Flipkart Internet Private Limited | 2022",
  "Club Head, Avana - The Social Welfare Team of IIT Indore | 2021",
  "DESIS Ascend Fellowship, D.E.Shaw India Private Limited | 2020"
];

const Achievements = () => (
  <section id="achievements">
    <div className="container">
      <div className="section-header">
        <h2>Achievements & Leadership</h2>
      </div>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        {achievements.map((achievement, index) => (
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
            }}>🏆</span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Achievements; 