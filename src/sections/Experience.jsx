import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 'o9',
    company: 'o9 Solutions',
    role: 'Senior Functional Consultant',
    duration: 'May 2023 – Present',
    technologies: [
      'Retail Merchandise Planning',
      'Demand Forecasting',
      'Jira',
      'Product Planning & Prioritization'
    ],
    bullets: [
      <>
        Supported <strong>full implementation lifecycle</strong> — from business
        requirement gathering and solution design through UAT/SIT, go-live, and
        hypercare — for <strong>two global o9 platform deployments</strong> across
        retail clients.
      </>,

      <>
        Engaged in <strong>business-IT workshops</strong> with product and planning
        stakeholders to understand current process, define future-state capabilities,
        and enable scalable adoption of o9's integrated platform for{' '}
        <strong>
          Merchandise Planning (Demand Forecasting, Assortment & Merchandising Planning)
        </strong>.
      </>,

      <>
        Served as the <strong>functional owner</strong> for production defects,
        performing RCA, conducting client deep-dive sessions, and defining
        long-term resolution strategies.
      </>,

      <>
        Designed and delivered <strong>training programs for 250+ users</strong>{' '}
        covering <strong>30+ role-specific use cases</strong>, reducing{' '}
        <strong>UAT/Post-Go-Live support tickets by 12%</strong>.
      </>,

      <>
        Partnered with Performance and R&D teams to design and execute{' '}
        <strong>UAT and SIT test scripts</strong>, documenting defects,
        validating fixes, and ensuring production readiness.
      </>,

      <>
        Collaborated with R&D during the <strong>GenAI rollout</strong>,
        testing and refining prompt workflows and accelerating the first
        productized AI integration within the o9 platform.
      </>
    ]
  },

  {
    id: 'bpsl',
    company: 'Bhushan Power & Steel Limited',
    role: 'Assistant Electrical Engineer',
    duration: 'June 2017 – Feb 2020',
    technologies: [
      'SAP MM',
      'Electrical Maintenance',
      'Maintenance Planning'
    ],
    bullets: [
      <>
        Monitored and controlled raw material inventory across{' '}
        <strong>6 production lines</strong>, ensuring timely availability
        while minimizing stockout risks.
      </>,

      <>
        Reduced line stoppages by <strong>20%</strong> through safety stock
        implementation and optimized material allocation.
      </>,

      <>
        Leveraged ERP <strong>(SAP MM)</strong> for inventory tracking,
        <strong> stock overview (MMBE)</strong>, and
        <strong> GR/IR reconciliation</strong>, improving inventory accuracy.
      </>
    ]
  }
];

export const Experience = ({ disableSectionScroll }) => {

  // Nothing expanded initially
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="page-section">

      <div className="container">

        {/* <h2 className="text-4xl font-bold text-center mb-8">
          Professional Experience
        </h2> */}
        <div className="section-header text-center">

          <h2 className="title-lg">
            Professional Experience
          </h2>

          <p className="projects-subtitle">
            few chapters of my career
          </p>
        </div>

        {/* EXPERIENCE WRAPPER */}
        <div className="experience-scroll">

          <div className="max-w-4xl mx-auto">

            {experiences.map((exp) => {

              const isOpen = expanded === exp.id;

              return (

                <div
                  key={exp.id}
                  className="experience-card"
                >

                  <div
                    className="experience-header"
                    onClick={() => setExpanded(isOpen ? null : exp.id)}
                  >

                    <div className="experience-header-left">

                      <div className="experience-top-row">

                        <div className="exp-company">
                          {exp.company}
                        </div>

                        <div className="exp-duration">
                          {exp.duration}
                        </div>

                      </div>

                      <h3 className="exp-role">
                        {exp.role}
                      </h3>

                    </div>

                    <ChevronDown
                      size={22}
                      className={`expand-icon ${isOpen ? 'open' : ''}`}
                    />

                  </div>

                  {isOpen && (

                    <div className="experience-content">

                      <div className="tech-title">
                        Technologies
                      </div>

                      <div className="tech-list">

                        {exp.technologies.map((tech) => (

                          <span
                            key={tech}
                            className="tech-pill"
                          >
                            {tech}
                          </span>

                        ))}

                      </div>

                      <ul className="exp-bullets">

                        {exp.bullets.map((bullet, index) => (

                          <li key={index}>
                            {bullet}
                          </li>

                        ))}

                      </ul>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};