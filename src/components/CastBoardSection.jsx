import { useEffect, useRef, useState } from 'react';

const CB_IMAGES = [
  './assets/Screenshot_20260719-172822561.jpg',
  './assets/Screenshot_20260719-172830971.jpg',
  './assets/Screenshot_20260719-172840770.jpg',
];

export default function CastBoardSection({ t }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const touchStartXRef = useRef(0);
  const fadeTimeoutRef = useRef(null);

  const items = t.castboard?.items || [];
  const count = items.length || 3;
  const currentItem = items[currentIndex] || items[0] || {};
  const currentSrc = CB_IMAGES[currentIndex] || CB_IMAGES[0];

  useEffect(() => () => {
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
  }, []);

  const changeSlide = (newIndex) => {
    const nextIdx = (newIndex + count) % count;
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }
    setIsFading(true);
    fadeTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(nextIdx);
      setIsFading(false);
    }, 100);
  };

  const handleStageClick = () => {
    changeSlide(currentIndex + 1);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartXRef.current;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          changeSlide(currentIndex + 1);
        } else {
          changeSlide(currentIndex - 1);
        }
      }
    }
  };

  return (
    <section id="castboard" className="page-section castboard-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">{t.castboard.badge}</span>
          <h2 className="section-heading">{t.castboard.heading}</h2>
        </div>

        <div className="cb-viewer">
          {/* Left: image container */}
          <div className="cb-stage-container">
            <div
              className="cb-stage-img-box"
              id="cb-stage-imgbox"
              title={t.castboard.switchHint}
              onClick={handleStageClick}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                className="cb-stage-img"
                id="cb-stage-img"
                src={currentSrc}
                alt={currentItem.alt || `CastBoard ${currentItem.title || ''}`}
                style={{
                  opacity: isFading ? 0.2 : 1,
                  transition: 'opacity 100ms ease',
                }}
              />
            </div>
          </div>

          {/* Right: content box */}
          <div className="cb-right">
            <div className="cb-content-box">
              <h3 className="cb-item-title" id="cb-title">
                {currentItem.title}
              </h3>
              <p className="cb-item-desc" id="cb-desc">
                {currentItem.desc}
              </p>
            </div>

            <div className="cb-dots" id="cb-dots">
              {items.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className={`cb-dot ${index === currentIndex ? 'is-active' : ''}`}
                  data-index={index}
                  aria-label={item.ariaLabel}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeSlide(index);
                  }}
                />
              ))}
            </div>

            <div className="cb-actions">
              <a
                className="btn-yt-demo"
                href="https://www.youtube.com/watch?v=w7pMdKMIfjg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>{t.castboard.videoDemo}</span>
              </a>
            </div>

            {/* Visual switch hint */}
            <div className="cb-switch-hint">
              <svg className="cb-dashed-line" viewBox="0 0 84 27" fill="none">
                <path d="M84 13.5H12" stroke="#26bc75" strokeWidth="3.5" strokeDasharray="7 4" />
                <path
                  d="M18 4.5L4.5 13.5l13.5 9"
                  stroke="#26bc75"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="cb-hint-text">{t.castboard.switchHint}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
