import React from 'react';
import './Education.css';

const education = [
  {
    id: 'masters',
    institution: 'Indian Institute of Management, Udaipur',
    degree: 'MBA, General Management',
    duration: '2021 – 2023',
    highlights: [
      'CGPA: 3.05 / 4',
      'President - Economics Club',
      'Event Lead - Sportsfest'
    ]
  },

  {
    id: 'bachelors',
    institution: 'Indira Gandhi Institute of Technology, Sarang',
    degree: 'Bachelor of Technology',
    duration: '2013 – 2017',
    highlights: [
      'CGPA: 7.7 / 10',
      'Event Head - Annual Tech Fest'
    ]
  },

  {
    id: 'twelfth',
    institution: 'Chinmaya Vidyala, Therubali',
    degree: 'Class XII – Science Stream',
    duration: '2011 – 2013',
    highlights: [
      'Percentage: 90.8'
    ]
  }
];

export const Education = () => {
  return (
    <section id="education" className="page-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title-lg">Education</h2>
          <p className="projects-subtitle">where I built my foundation</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="education-grid">
            {education.map((edu) => (
              <div key={edu.id} className="education-card hover-lift">
                <div className="education-top-row">
                  <div className="education-institution">
                    {edu.institution}
                  </div>
                  <div className="education-duration">
                    {edu.duration}
                  </div>
                </div>

                <div className="education-degree-row">
                  {/* <GraduationCap size={18} className="education-icon" /> */}
                  <h3 className="education-degree">{edu.degree}</h3>
                </div>

                <div className="education-highlights">
                  {edu.highlights.map((highlight) => (
                    <span key={highlight} className="education-pill">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
