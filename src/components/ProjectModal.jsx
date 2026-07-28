import React, { useEffect, useState } from 'react';
import { X, ChevronRight, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

export const ProjectModal = ({ project, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [responsiveSrc, setResponsiveSrc] = useState('');

  useEffect(() => {
    if (!project) return;

    // Generate responsive image src with srcset
    const imageId = project.imageId || extractImageId(project.bannerImg);
    if (imageId) {
      const baseUrl = `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop`;
      setResponsiveSrc(`${baseUrl}&w=800&q=80`);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const extractImageId = (url) => {
    const match = url.match(/photo-([^?]+)/);
    return match ? match[1] : '';
  };

  const generateSrcSet = () => {
    const imageId = project.imageId || extractImageId(project.bannerImg);
    if (!imageId) return '';
    
    const widths = [400, 800, 1200];
    return widths.map(w => 
      `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=${w}&q=80 ${w}w`
    ).join(', ');
  };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-category">{project.category}</div>
        <h2 className="modal-title">{project.title}</h2>

        <div className="modal-description-box">
          <p className="modal-description-text">{project.description}</p>

          <div className="tech-section-title">Technologies</div>
          <div className="tech-tags-grid">
            {project.technologies?.map((tech, idx) => (
              <span key={idx} className="tech-tag-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-links-section">
          <div className="tech-section-title">Links</div>
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-link-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
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
              rel="noopener noreferrer" 
              className="modal-link-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>GitHub Repository</span>
              </div>
              <ChevronRight size={18} />
            </a>
          )}
        </div>

        {project.bannerImg && (
          <div className="modal-banner-container">
            {!imageLoaded && (
              <div className="image-placeholder">
                <div className="image-loader"></div>
              </div>
            )}
            <img 
              src={responsiveSrc || project.bannerImg}
              srcSet={generateSrcSet()}
              sizes="(max-width: 768px) 100vw, 680px"
              alt={`${project.title} - ${project.category} project preview`}
              className={`modal-banner-img ${imageLoaded ? 'loaded' : ''}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
