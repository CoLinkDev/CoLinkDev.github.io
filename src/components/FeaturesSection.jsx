import React from 'react';

export default function FeaturesSection({ t }) {
  return (
    <section id="overview" className="page-section features-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">{t.features.badge}</span>
          <h2 className="section-heading">{t.features.heading}</h2>
          <p className="section-desc">{t.features.desc}</p>
        </div>

        <div className="feature-grid-9">
          {/* Card 1 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card1Title}</h3>
            <p>{t.features.card1Desc}</p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card2Title}</h3>
            <p>{t.features.card2Desc}</p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card3Title}</h3>
            <p>{t.features.card3Desc}</p>
          </div>

          {/* Card 4 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card4Title}</h3>
            <p>{t.features.card4Desc}</p>
          </div>

          {/* Card 5 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card5Title}</h3>
            <p>{t.features.card5Desc}</p>
          </div>

          {/* Card 6 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card6Title}</h3>
            <p>{t.features.card6Desc}</p>
          </div>

          {/* Card 7 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card7Title}</h3>
            <p>{t.features.card7Desc}</p>
          </div>

          {/* Card 8 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card8Title}</h3>
            <p>{t.features.card8Desc}</p>
          </div>

          {/* Card 9 */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="feature-title">{t.features.card9Title}</h3>
            <p>{t.features.card9Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
