import ShowcaseDeck from './ShowcaseDeck.jsx';

const featureDefinitions = [
  { titleKey: 'card2Title', descriptionKey: 'card2Desc', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" /> },
  { titleKey: 'card3Title', descriptionKey: 'card3Desc', icon: <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> },
  { titleKey: 'card4Title', descriptionKey: 'card4Desc', icon: <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
  { titleKey: 'card5Title', descriptionKey: 'card5Desc', icon: <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 00-2-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
  { titleKey: 'card6Title', descriptionKey: 'card6Desc', icon: <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /> },
  { titleKey: 'card7Title', descriptionKey: 'card7Desc', icon: <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /> },
  { titleKey: 'card8Title', descriptionKey: 'card8Desc', icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
  { titleKey: 'card9Title', descriptionKey: 'card9Desc', icon: <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /> },
];

export default function FeaturesSection({ t }) {
  const items = featureDefinitions.map(({ titleKey, descriptionKey, icon }) => ({
    title: t.features[titleKey],
    description: t.features[descriptionKey],
    icon,
  }));

  return (
    <section id="overview" className="page-section features-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">{t.features.badge}</span>
          <h2 className="section-heading">{t.features.heading}</h2>
          <p className="section-desc">{t.features.desc}</p>
        </div>
        <ShowcaseDeck id="features" items={items} className="features-deck" />
      </div>
    </section>
  );
}
