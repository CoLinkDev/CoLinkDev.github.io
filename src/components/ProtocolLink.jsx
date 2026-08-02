export default function ProtocolLink({ href, label }) {
  return (
    <a className="protocol-link" href={href}>
      <span data-i18n="hero.exploreProtocol">{label}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h13M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
