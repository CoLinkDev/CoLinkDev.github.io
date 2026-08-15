import React, { useState, useEffect, useRef } from 'react';
import { LOCALES } from '../i18n/index.js';

export default function Header({
  currentLang,
  onSelectLang,
  themeMode,
  onSelectTheme,
  activeSection,
  t,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const langSelectorRef = useRef(null);
  const themeSelectorRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langSelectorRef.current && !langSelectorRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
      if (themeSelectorRef.current && !themeSelectorRef.current.contains(event.target)) {
        setIsThemeOpen(false);
      }
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
    setIsThemeOpen(false);
  };

  const currentLocale = LOCALES[currentLang] || LOCALES.en;

  return (
    <header className="site-header">
      <nav
        className={`navbar ${isMenuOpen ? 'is-menu-open' : ''}`}
        id="navbar"
        aria-label="Quick Navigation"
        ref={navbarRef}
      >
        <a className="nav-brand" href="#hero" aria-label="CoLink Home" onClick={handleNavLinkClick}>
          <svg className="mark" viewBox="48 44 393 393" width="22" height="22" aria-hidden="true">
            <path d="M420.523 214.076A182 182 0 1 0 218.076 416.523A32 32 0 0 0 220.172 352.557A118 118 0 1 1 356.557 216.172A32 32 0 0 0 420.523 214.076Z" />
            <circle cx="346.07" cy="342.07" r="85" />
          </svg>
          <span>CoLink</span>
        </a>

        <div className="nav-menu">
          <ul className="nav-links" id="nav-links">
          <li>
            <a
              href="#overview"
              className={activeSection === 'overview' ? 'is-active' : ''}
              onClick={handleNavLinkClick}
            >
              {t.nav.features}
            </a>
          </li>
          <li>
            <a
              href="#castboard"
              className={activeSection === 'castboard' ? 'is-active' : ''}
              onClick={handleNavLinkClick}
            >
              {t.nav.castboard}
            </a>
          </li>
          <li>
            <a
              href="#security"
              className={activeSection === 'security' ? 'is-active' : ''}
              onClick={handleNavLinkClick}
            >
              {t.nav.security}
            </a>
          </li>
          <li>
            <a
              href="#download"
              className={activeSection === 'download' ? 'is-active' : ''}
              onClick={handleNavLinkClick}
            >
              {t.nav.download}
            </a>
          </li>
          </ul>

        <div className="nav-right-actions">
          {/* Language Selector */}
          <div className="lang-selector" ref={langSelectorRef}>
            <button
              className="lang-btn"
              type="button"
              aria-label="Select Language"
              id="lang-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsThemeOpen(false);
                setIsLangOpen((prev) => !prev);
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20"></path>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span id="current-lang-name">{currentLocale.name}</span>
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            <div className={`lang-dropdown ${isLangOpen ? 'is-open' : ''}`} id="lang-dropdown">
              {Object.entries(LOCALES).map(([key, loc]) => (
                <button
                  key={key}
                  type="button"
                  className={`lang-option ${key === currentLang ? 'is-active' : ''}`}
                  data-lang={key}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectLang(key);
                    setIsLangOpen(false);
                  }}
                >
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="theme-selector" ref={themeSelectorRef}>
            <button
              className="theme-btn"
              type="button"
              aria-label={t.theme?.selectTheme || 'Select Theme'}
              id="theme-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen(false);
                setIsThemeOpen((prev) => !prev);
              }}
            >
              <svg
                className="theme-icon theme-icon-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
              </svg>
              <svg
                className="theme-icon theme-icon-light"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg
                className="theme-icon theme-icon-dark"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <span id="current-theme-name">
                {t.theme?.[themeMode] || (themeMode === 'auto' ? '自动' : themeMode === 'light' ? '亮色' : '暗色')}
              </span>
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            <div className={`theme-dropdown ${isThemeOpen ? 'is-open' : ''}`} id="theme-dropdown">
              <button
                type="button"
                className={`theme-option ${themeMode === 'auto' ? 'is-active' : ''}`}
                data-theme-val="auto"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTheme('auto');
                  setIsThemeOpen(false);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
                </svg>
                <span>{t.theme?.auto || '自动'}</span>
              </button>
              <button
                type="button"
                className={`theme-option ${themeMode === 'light' ? 'is-active' : ''}`}
                data-theme-val="light"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTheme('light');
                  setIsThemeOpen(false);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <span>{t.theme?.light || '亮色'}</span>
              </button>
              <button
                type="button"
                className={`theme-option ${themeMode === 'dark' ? 'is-active' : ''}`}
                data-theme-val="dark"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTheme('dark');
                  setIsThemeOpen(false);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span>{t.theme?.dark || '暗色'}</span>
              </button>
            </div>
          </div>

          {/* GitHub Link */}
          <a
            className="nav-gh-btn"
            href="https://github.com/CoLinkDev/CoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>{t.nav.github}</span>
          </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="nav-toggle"
          id="nav-toggle"
          type="button"
          aria-label={t.nav.toggleMenu}
          aria-expanded={isMenuOpen}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <svg
            className="hamburger-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className="close-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
