import React, { useEffect, useState } from "react";
import { X, ChevronRight, ExternalLink } from "lucide-react";
import "./ProjectModal.css";

export const ProjectModal = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose, selectedImage]);

  if (!project) return null;

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
      >
        <div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >

          <button
            className="modal-close-btn"
            onClick={onClose}
          >
            <X size={20} />
          </button>

          <div className="modal-category">
            {project.category}
          </div>

          <h2 className="modal-title">
            {project.title}
          </h2>

          {/* Banner */}

          {project.bannerImg && (

            <div className="modal-banner-container">

              <img
                src={project.bannerImg}
                alt={project.title}
                className="modal-banner-img"
              />

            </div>

          )}

          {/* Description */}

          <div className="modal-description-box">

            <p className="modal-description-text">
              {project.description}
            </p>

            <div className="tech-section-title">
              Key Higlights
            </div>

            <div className="tech-tags-grid">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="tech-tag-badge"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Links */}

          <div className="modal-links-section">

            <div className="tech-section-title">

              Project Links

            </div>

            {project.demoUrl && (

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="modal-link-card"
              >

                <div className="modal-link-left">

                  <ExternalLink size={18} />

                  <span>Live Demo</span>

                </div>

                <ChevronRight size={18} />

              </a>

            )}

            {project.githubUrl && (

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="modal-link-card"
              >

                <div className="modal-link-left">

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2a10 10 0 00-3.162 19.49c.5.092.683-.217.683-.483 0-.237-.009-.866-.014-1.699-2.782.604-3.37-1.342-3.37-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.893 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.985 1.03-2.684-.103-.254-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.59 9.59 0 0112 6.844a9.6 9.6 0 012.505.337c1.91-1.294 2.748-1.025 2.748-1.025.547 1.378.203 2.396.1 2.65.64.699 1.028 1.592 1.028 2.684 0 3.842-2.338 4.688-4.566 4.937.36.31.681.92.681 1.855 0 1.339-.012 2.419-.012 2.749 0 .268.18.58.688.481A10 10 0 0012 2z" />
                  </svg>

                  <span>GitHub Repository</span>

                </div>

                <ChevronRight size={18} />

              </a>

            )}

          </div>

          {/* Gallery */}

          {project.gallery && project.gallery.length > 0 && (

            <div className="project-gallery">

              <h3 className="gallery-title">

                Project Screenshots

              </h3>

              <div className="gallery-grid">

                {project.gallery.map((img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt={project.title}
                    className="gallery-image"
                    onClick={() => setSelectedImage(img)}
                  />

                ))}

              </div>

            </div>

          )}

        </div>
      </div>

      {/* Fullscreen Image */}

      {selectedImage && (

        <div
          className="image-preview-overlay"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt=""
            className="image-preview"
          />

        </div>

      )}

    </>
  );
};