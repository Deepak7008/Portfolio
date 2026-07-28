import React, { useState } from 'react';
import { ProjectModal } from '../components/ProjectModal';
import './Projects.css';

const sampleProjects = [
  {
    id: 'solveiq',
    title: 'SolveIQ',
    category: 'AI in Mathematics',
    description: 'An AI-powered math copilot that solves complex geometry and algebra problems by analyzing canvas drawings. Built to help students visualize and solve problems interactively in real-time.',
    technologies: ['FastAPI', 'Groq Llama 3', 'Canvas API', 'Next.js', 'Tailwind CSS', 'TypeScript', 'MathJax'],
    demoUrl: 'https://solveiq.demo.app',
    githubUrl: 'https://github.com/example/solveiq',
    bannerImg: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400:800:1200&q=80',
    bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    imageId: '1635070041078-e363dbe005cb'
  },
  {
    id: 'agentflow',
    title: 'AgentFlow',
    category: 'AI in Research',
    description: 'Autonomous multi-agent orchestration framework that executes parallel web research, synthesizes context, and delivers decision-ready market analysis reports.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'React', 'Vector Databases'],
    demoUrl: 'https://agentflow.demo.app',
    githubUrl: 'https://github.com/example/agentflow',
    bannerImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400:800:1200&q=80',
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    imageId: '1618005182384-a83a8bd57fbe'
  },
  {
    id: 'smartaqi',
    title: 'SmartAQI',
    category: 'Environmental AI',
    description: 'AI-powered air quality monitoring and telemetry decision support system designed to track environmental pollutants (PM2.5, PM10, CO) across Indian cities with real-time Telegram bot alerts.',
    technologies: ['FastAPI', 'Scikit-Learn', 'XGBoost', 'PostgreSQL', 'Supabase', 'Python'],
    demoUrl: 'https://smartaqi.demo.app',
    githubUrl: 'https://github.com/example/smartaqi',
    bannerImg: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=400:800:1200&q=80',
    bgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    imageId: '1534088568595-a066f410bcda'
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="page-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title-lg">My Projects</h2>
          <p className="text-md text-secondary mt-2">Interactive AI applications and research frameworks</p>
        </div>

        <div className="projects-grid">
          {sampleProjects.map((project) => (
            <div
              key={project.id}
              className="project-card hover-lift"
              onClick={() => setSelectedProject(project)}
              style={{ background: project.bgGradient }}
            >
              <div className="project-card-gradient" />
              <div className="project-card-content">
                <div className="project-card-category">{project.category}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <div className="flex items-center gap-2 mt.4">
                  <span className="text-xs opacity-80">Click to view details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};
