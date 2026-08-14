import React from 'react';
import ProtocolLink from './ProtocolLink.jsx';

export default function HeroSection({ t }) {
  return (
    <section id="hero" className="page-section hero-section" aria-labelledby="site-title">
      <div className="section-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h1 id="site-title" className="hero-title">{t.hero.title}</h1>

          <div className="hero-actions">
            <a className="btn-start" href="#overview" id="start-btn">
              <span>{t.hero.start}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a className="btn-download" href="#download">
              <span>{t.hero.download}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v10m-4-4l4 4 4-4M5 20h14" />
              </svg>
            </a>
            <ProtocolLink href="./CoLinkProtocol/" label={t.hero.exploreProtocol} />
          </div>
        </div>
      </div>
    </section>
  );
}
