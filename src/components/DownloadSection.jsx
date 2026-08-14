const releasesUrl = 'https://github.com/CoLinkDev/colink-desktop/releases/latest';

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

const platforms = [
  {
    className: 'dl-card-win',
    titleKey: 'winTitle',
    descriptionKey: 'winDesc',
    buttonKey: 'winBtn',
    href: releasesUrl,
    icon: <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zM10.95 1.936L24 0v11.55H10.95V1.936zM24 12.45v11.55l-13.05-1.936V12.45H24z" />,
  },
  {
    titleKey: 'androidTitle',
    descriptionKey: 'androidDesc',
    buttonKey: 'androidBtn',
    href: 'https://github.com/CoLinkDev/colink-android/releases/latest',
    icon: <path d="M17.523 8.7l1.816-3.146a.5.5 0 10-.866-.5L16.64 8.229a10.94 10.94 0 00-9.282 0L5.53 5.054a.5.5 0 00-.866.5L6.48 8.7A10.942 10.942 0 001 18h22a10.942 10.942 0 00-5.477-9.3zM7 15a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />,
  },
  {
    titleKey: 'linuxTitle',
    descriptionKey: 'linuxDesc',
    buttonKey: 'linuxBtn',
    href: releasesUrl,
    icon: <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />,
  },
  {
    titleKey: 'dockerTitle',
    descriptionKey: 'dockerDesc',
    buttonKey: 'dockerBtn',
    href: 'https://github.com/CoLinkDev/colink-server',
    icon: <path d="M12 2a1 1 0 01.45.11l8 4A1 1 0 0121 7v10a1 1 0 01-.55.89l-8 4a1 1 0 01-.9 0l-8-4A1 1 0 013 17V7a1 1 0 01.55-.89l8-4A1 1 0 0112 2zm0 2.24L6.2 7 12 9.76 17.8 7 12 4.24zM5 8.76V16.5l6 3V11.5L5 8.76zm14 0L13 11.5v8l6-3V8.76z" />,
  },
  {
    titleKey: 'macTitle',
    descriptionKey: 'macDesc',
    buttonKey: 'macBtn',
    icon: <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />,
  },
];

function PlatformIcon({ platform }) {
  return (
    <div className={`dl-platform-icon ${platform.className || ''}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{platform.icon}</svg>
    </div>
  );
}

function PlatformAction({ platform, t }) {
  const label = t.download[platform.buttonKey];

  if (!platform.href) return <span className="dl-btn dl-btn-disabled">{label}</span>;

  return (
    <a className="dl-btn" href={platform.href} target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <ExternalLinkIcon />
    </a>
  );
}

export default function DownloadSection({ t }) {
  const [windows, android, linux, docker, apple] = platforms;

  return (
    <section id="download" className="page-section download-section">
      <div className="section-inner">
        <div className="section-header download-header">
          <span className="section-badge">{t.download.badge}</span>
          <h2 className="section-heading">{t.download.heading}</h2>
          <p className="section-desc">{t.download.desc}</p>
        </div>

        <div className="download-hub">
          <div className="dl-client-area">
            <div className="dl-primary-grid">
              {[windows, android, linux, apple].map((platform) => (
                <article className={`dl-primary-card ${platform.className || ''}`} key={platform.titleKey}>
                  <PlatformIcon platform={platform} />
                  <div className="dl-card-copy">
                    <h3>{t.download[platform.titleKey]}</h3>
                    <p>{t.download[platform.descriptionKey]}</p>
                  </div>
                  <PlatformAction platform={platform} t={t} />
                </article>
              ))}
            </div>
          </div>

          <article className="dl-server-card">
            <PlatformIcon platform={docker} />
            <div className="dl-card-copy">
              <h3>{t.download[docker.titleKey]}</h3>
              <p>{t.download[docker.descriptionKey]}</p>
            </div>
            <PlatformAction platform={docker} t={t} />
          </article>
        </div>
      </div>
    </section>
  );
}
