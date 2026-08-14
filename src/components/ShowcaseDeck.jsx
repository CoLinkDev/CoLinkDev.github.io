import { useEffect, useState } from 'react';

function ArrowIcon({ direction }) {
  const path = direction === 'previous' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6';

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function formatIndex(index) {
  return String(index + 1).padStart(2, '0');
}

export default function ShowcaseDeck({ id, items, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = items.length;

  useEffect(() => {
    if (activeIndex >= itemCount) setActiveIndex(0);
  }, [activeIndex, itemCount]);

  if (!itemCount) return null;

  const activeItem = items[activeIndex];
  const previousIndex = (activeIndex - 1 + itemCount) % itemCount;
  const nextIndex = (activeIndex + 1) % itemCount;
  const previousItem = items[previousIndex];
  const nextItem = items[nextIndex];
  const tabId = `${id}-tab-${activeIndex}`;
  const panelId = `${id}-panel-${activeIndex}`;

  return (
    <div className={`showcase-deck ${className}`.trim()}>
      <div className="showcase-pagination" role="tablist">
        {items.map((item, index) => (
          <button
            key={item.title}
            className={`showcase-page ${index === activeIndex ? 'is-active' : ''}`}
            id={`${id}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`${id}-panel-${index}`}
            aria-label={item.title}
            onClick={() => setActiveIndex(index)}
          >
            <span className="showcase-page-index" aria-hidden="true">{formatIndex(index)}</span>
            <span className="showcase-page-title">{item.title}</span>
          </button>
        ))}
      </div>

      <div
        className="showcase-panel"
        id={panelId}
        role="tabpanel"
        tabIndex="0"
        aria-labelledby={tabId}
        key={activeItem.title}
      >
        <span className="showcase-panel-number" aria-hidden="true">{formatIndex(activeIndex)}</span>
        <div className="showcase-panel-content">
          <div className="showcase-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">{activeItem.icon}</svg>
          </div>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.description}</p>
        </div>

        <div className="showcase-controls">
          <button type="button" aria-label={previousItem.title} onClick={() => setActiveIndex(previousIndex)}>
            <ArrowIcon direction="previous" />
          </button>
          <span className="showcase-count" aria-live="polite">
            <strong>{formatIndex(activeIndex)}</strong> / {formatIndex(itemCount - 1)}
          </span>
          <button type="button" aria-label={nextItem.title} onClick={() => setActiveIndex(nextIndex)}>
            <ArrowIcon direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
