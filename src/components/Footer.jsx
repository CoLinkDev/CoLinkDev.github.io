const appLinks = [
  ['colink-desktop', 'https://github.com/CoLinkDev/colink-desktop'],
  ['colink-android', 'https://github.com/CoLinkDev/colink-android'],
  ['colink-server', 'https://github.com/CoLinkDev/colink-server'],
];

export default function Footer({ t }) {
  return (
    <footer id="footer" className="page-section site-footer">
      <div className="section-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="brand">
              <svg className="mark" viewBox="48 44 393 393" width="24" height="24" aria-hidden="true">
                <path d="M420.523 214.076A182 182 0 1 0 218.076 416.523A32 32 0 0 0 220.172 352.557A118 118 0 1 1 356.557 216.172A32 32 0 0 0 420.523 214.076Z" />
                <circle cx="346.07" cy="342.07" r="85" />
              </svg>
              <span>CoLink</span>
            </div>
            <p>{t.footer.slogan}</p>
          </div>

          <div className="footer-nav-col">
            <div>
              <h4 className="footer-group-title">{t.footer.appsTitle}</h4>
              <ul className="footer-group-links">
                {appLinks.map(([label, href]) => (
                  <li key={label}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-group-title">{t.footer.docsTitle}</h4>
              <ul className="footer-group-links">
                <li><a href="https://github.com/CoLinkDev/CoLinkProtocol" target="_blank" rel="noopener noreferrer">{t.footer.docProtocolRepo}</a></li>
                <li><a href="./CoLinkProtocol/">{t.footer.docProtocolOnline}</a></li>
                <li><a href="https://github.com/CoLinkDev/colink-server" target="_blank" rel="noopener noreferrer">{t.footer.docDockerGuide}</a></li>
                <li><a href="https://github.com/CoLinkDev/CoLinkAssets" target="_blank" rel="noopener noreferrer">{t.footer.docAssets}</a></li>
                <li><a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer">{t.footer.docLicense}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
