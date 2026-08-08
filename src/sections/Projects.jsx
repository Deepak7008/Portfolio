import React, { useState } from "react";
import { ProjectModal } from "../components/ProjectModal";
import "./Projects.css";

const sampleProjects = [
  {
    id: "chatbot",
    category: "Generative AI",
    title: "Agentic Chatbot with Robust Eval Framework",

    description:
      "A production-ready AI chatbot built with routing, guardrails, LLM-as-a-Judge evaluation, prompt engineering and automated evaluation pipelines. The application demonstrates enterprise-grade conversational AI with measurable quality metrics.",

    technologies: [
      "Multi-Intent Routing",
      "LLM-as-a-Judge",
      "Guardrails",
      "Prompt Engineering",
      "Groq Llama 3",
      "Streamlit",
      "Evaluation Framework"
    ],

    demoUrl: "https://7008-chatbot-eval.streamlit.app",
    githubUrl: "https://github.com/Deepak7008/AI-Chatbot-Eval",

    bannerImg: "/p1image.png",

    gallery: [
      "/p1image2.png",
      "/p1image3.png",
      "/p1image4.png"
    ]
  },

  {
    id: "agentflow",
    category: "Retail",

    title: "Stratos",

    description:
      "A premium, mobile-first application for Planners and Executives to review and track daily assortment planning activities.",

    technologies: [
      "Retail Analytics",
      "Assortment Planning",
      "Charts",
      "Vector Database"
    ],

    demoUrl: "https://assortment-plan.vercel.app/",
    githubUrl: "https://github.com/Deepak7008/AssortmentPlan",

    bannerImg: "/p2image4.png",

    gallery: [
      "/p2image2.png",
      "/p2image.png",
      "/p2image3.png",
    ]
  },

  {
    id: "smartaqi",

    category: "CRM",

    title: "SureSupply",

    description:
      "SureSupply is a comprehensive supply chain management solution designed to streamline the process of requesting quotes from multiple suppliers, managing company information, and tracking RFQ statuses in real-time.",

    technologies: [
      "Dashboard",
      "Item Tracking",
      "Client Management",
      "Status Tracking",
      "RFQ Details"
    ],

    demoUrl: "https://sure-supply-seven.vercel.app/",
    githubUrl: "https://github.com/Deepak7008/SureSupply",

    bannerImg: "/p3image.png",

    gallery: [
      "/p3image2.png",
      "/p3image1.png"
    ]
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="page-section">

      <div className="container">

        <div className="section-header text-center">

          <h2 className="title-lg">
            My Projects
          </h2>

          <p className="projects-subtitle">
            applications built for learning
          </p>

        </div>

        <div className="projects-grid">

          {sampleProjects.map((project) => (

            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >

              <div className="project-image-wrapper">

                <img
                  src={project.bannerImg}
                  alt={project.title}
                  className="project-image"
                />

              </div>

              <div className="project-card-content">

                <div className="project-card-category">

                  {project.category}

                </div>

                <h3 className="project-card-title">

                  {project.title}

                </h3>

                <div className="project-click-text">

                  Click to view details →

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {selectedProject && (

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      )}

    </section>
  );
};