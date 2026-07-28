import React from 'react';
import './Contact.css';

export const Contact = () => {
  const socialLinks = [
    { label: 'LinkedIn', url: 'www.linkedin.com/in/deepakpani-iimu' },
    { label: 'GitHub', url: 'https://github.com/Deepak7008' },
  ];

  return (
    <section id="contact" className="page-section">
      <div className="container flex flex-col items-center">
        <div className="section-header text-center mb-12">
          <h2 className="title-lg">Get in Touch</h2>
          <p className="text-md text-secondary mt-2"></p>
        </div>

        <div className="glass-card-standard contact-card">
          <div className="contact-header">
            <h2 className="contact-title">Contacts</h2>

          </div>

          <a
            href="mailto:[EMAIL_ADDRESS]"
            className="contact-email-link hover-lift"
          >
            dipsdeepak08@gmail.com
          </a>

          <div className="contact-social-pills">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-blue pill-accent hover-lift"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-note-card glass-card-standard mt-12 text-center">
          You can reach me through the contact info above!
          <p>Feel free to hit me up anytime—I'd be happy to chat about Supply Chain, Emerging Tech or Sports.</p>
        </div>
      </div>
    </section>
  );
};
