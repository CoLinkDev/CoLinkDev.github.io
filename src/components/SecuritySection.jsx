import React from 'react';

export default function SecuritySection({ t }) {
  return (
    <section id="security" className="page-section security-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">{t.security.badge}</span>
          <h2 className="section-heading">{t.security.heading}</h2>
          <p className="section-desc">{t.security.desc}</p>
        </div>

        <div className="sec-specs-grid">
          <div className="spec-item">
            <div className="spec-icon">
              <svg viewBox="0 0 24 24">
                <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div className="spec-content">
              <h4>{t.security.spec1Title}</h4>
              <p>{t.security.spec1Desc}</p>
            </div>
          </div>

          <div className="spec-item">
            <div className="spec-icon">
              <svg viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="spec-content">
              <h4>{t.security.spec2Title}</h4>
              <p>{t.security.spec2Desc}</p>
            </div>
          </div>

          <div className="spec-item">
            <div className="spec-icon">
              <svg viewBox="0 0 24 24">
                <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="spec-content">
              <h4>{t.security.spec3Title}</h4>
              <p>{t.security.spec3Desc}</p>
            </div>
          </div>

          <div className="spec-item">
            <div className="spec-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="spec-content">
              <h4>{t.security.spec4Title}</h4>
              <p>{t.security.spec4Desc}</p>
            </div>
          </div>

          <div className="spec-item">
            <div className="spec-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="spec-content">
              <h4>{t.security.spec5Title}</h4>
              <p>{t.security.spec5Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
