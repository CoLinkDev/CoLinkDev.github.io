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
  const currentIndexRef = useRef(0);
  const pendingIndexRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  const items = t.castboard?.items || [];
  const count = items.length || 3;
  const currentItem = items[currentIndex] || items[0] || {};
  const currentSrc = CB_IMAGES[currentIndex] || CB_IMAGES[0];

  useEffect(() => {
    const preloadedImages = CB_IMAGES.map((src) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
      return image;
    });

    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      preloadedImages.forEach((image) => image.removeAttribute('src'));
    };
  }, []);

  const changeSlide = (direction) => {
    const baseIndex = pendingIndexRef.current ?? currentIndexRef.current;
    const nextIndex = (baseIndex + direction + count) % count;

    pendingIndexRef.current = nextIndex;
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

    setIsFading(true);
    fadeTimeoutRef.current = setTimeout(() => {
      currentIndexRef.current = nextIndex;
      pendingIndexRef.current = null;
      setCurrentIndex(nextIndex);
      setIsFading(false);
    }, 100);
  };

  const handleStageClick = () => {
    changeSlide(1);
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
          changeSlide(1);
        } else {
          changeSlide(-1);
        }
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleStageClick();
    }
  };

  return (
    <section id="castboard" className="page-section castboard-section">
      <div className="section-inner">
        <div className="cb-showcase-copy">
          <span className="section-badge">{t.castboard.badge}</span>
          <h2 className="section-heading">{t.castboard.heading}</h2>
        </div>

        <div className="cb-showcase">
          <div className="cb-context">
            <span className="cb-context-index" aria-live="polite">{String(currentIndex + 1).padStart(2, '0')}</span>
            <div className="cb-context-copy">
              <h3 className="cb-item-title">{currentItem.title}</h3>
              <p className="cb-item-desc">{currentItem.desc}</p>
            </div>
            <a
              className="btn-yt-demo"
              href="https://www.youtube.com/watch?v=w7pMdKMIfjg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>{t.castboard.videoDemo}</span>
            </a>
          </div>

          <div className="cb-device-stage">
            <div
              className="cb-device"
              title={t.castboard.switchHint}
              role="button"
              tabIndex="0"
              aria-label={`${t.castboard.switchHint}: ${currentItem.title}`}
              onClick={handleStageClick}
              onKeyDown={handleKeyDown}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="cb-device-screen">
                <img
                  className="cb-stage-img"
                  src={currentSrc}
                  alt={currentItem.alt || `CastBoard ${currentItem.title || ''}`}
                  style={{ opacity: isFading ? 0.2 : 1 }}
                />
              </div>
            </div>
            <div className="cb-device-caption" aria-hidden="true">
              <span>{t.castboard.switchHint}</span>
              <span className="cb-device-caption-line" />
            </div>
          </div>

          <div className="cb-progress" aria-hidden="true">
            {items.map((_, index) => <span key={index} className={index === currentIndex ? 'is-active' : ''} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
