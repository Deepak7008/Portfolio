import React from 'react';
import './Skills.css';

const skillData = [
  {
    category: 'Retail',
    skills: ['Demand Forecasting', 'Assortment Planning', 'Merchandise Planning', 'Size and Space Optimization', 'Retail Analytics']
  },
  {
    category: 'Product',
    skills: ['PRD Authoring', 'Functional Specification', 'User story crafting', 'Stakeholder Management', 'Jira']
  },
  {
    category: 'Technical',
    skills: ['Python', 'SQL', 'PowerBI', 'GenAI', 'Eval Frameworks']
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="page-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title-lg">Skills & Expertise</h2>
          <p className="text-md text-secondary mt-2">Technical capabilities across AI, cloud, and web development</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="skills-grid">
            {skillData.map((cat, idx) => (
              <div key={idx} className="skill-category-group hover-lift">
                <div className="skill-category-header">
                  <span className="code-prefix">&lt;/&gt;</span>
                  <span>{cat.category}</span>
                </div>

                <div className="skill-pills-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      {skill}
                    </div>
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
