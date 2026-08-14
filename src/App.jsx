import { useEffect, useRef, useState } from 'react';
import CastBoardSection from './components/CastBoardSection.jsx';
import DownloadSection from './components/DownloadSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import SecuritySection from './components/SecuritySection.jsx';
import { DEFAULT_LOCALE, LOCALES, getLocale } from './i18n/index.js';

function detectBrowserLanguage() {
  const languages = navigator.languages || [navigator.language || ''];

  for (const language of languages) {
    const normalized = language.toLowerCase();

    if (normalized.startsWith('zh-tw') || normalized.startsWith('zh-hk') || normalized.startsWith('zh-mo') || normalized.includes('hant')) return 'zh-tw';
    if (normalized.startsWith('zh')) return 'zh-cn';
    if (normalized.startsWith('en')) return 'en';
    if (normalized.startsWith('ja')) return 'ja';
    if (normalized.startsWith('ko')) return 'ko';
    if (normalized.startsWith('de')) return 'de';
    if (normalized.startsWith('es')) return 'es';
    if (normalized.startsWith('ru')) return 'ru';
  }

  return DEFAULT_LOCALE;
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem('colink_lang')?.toLowerCase();
    if (savedLanguage && LOCALES[savedLanguage]) return savedLanguage;
  } catch {
    // Continue with browser language detection when storage is unavailable.
  }

  return detectBrowserLanguage();
}

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem('colink_theme');
    if (savedTheme === 'auto' || savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // The inline document script has already applied the default theme.
  }

  return 'auto';
}

export default function App() {
  const [currentLang, setCurrentLang] = useState(getInitialLanguage);
  const [themeMode, setThemeMode] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState('');
  const scrollTimeoutRef = useRef(null);
  const locale = getLocale(currentLang);
  const t = locale.translations;

  useEffect(() => {
    document.documentElement.lang = locale.code;
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t.meta.description;

    try {
      localStorage.setItem('colink_lang', locale.key);
    } catch {
      // Language selection remains available when storage is unavailable.
    }
  }, [locale, t]);

  useEffect(() => {
    const isDark = themeMode === 'dark' || (
      themeMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme-mode', themeMode);

    try {
      localStorage.setItem('colink_theme', themeMode);
    } catch {
      // Theme selection remains available when storage is unavailable.
    }
  }, [themeMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = () => {
      if (themeMode !== 'auto') return;
      document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleColorSchemeChange);
    return () => mediaQuery.removeEventListener('change', handleColorSchemeChange);
  }, [themeMode]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.page-section'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, {
      root: null,
      rootMargin: '-25% 0px -25% 0px',
      threshold: 0.1,
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll('.page-section'));
    const getCurrentPageIndex = () => Math.round(window.scrollY / window.innerHeight);
    const navigateToSection = (index) => {
      const sections = getSections();
      if (index < 0 || index >= sections.length || scrollTimeoutRef.current) return;

      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 650);
    };
    const handleWheel = (event) => {
      if (window.innerWidth <= 900 || Math.abs(event.deltaY) < 18) return;

      const dropdown = document.querySelector('.lang-dropdown.is-open, .theme-dropdown.is-open');
      if (dropdown?.contains(event.target)) return;

      event.preventDefault();
      navigateToSection(getCurrentPageIndex() + (event.deltaY > 0 ? 1 : -1));
    };
    const handleKeydown = (event) => {
      if (window.innerWidth <= 900 || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target instanceof HTMLElement && event.target.matches('a, button, input, select, textarea, [contenteditable="true"]')) return;

      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        navigateToSection(getCurrentPageIndex() + 1);
      } else if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        navigateToSection(getCurrentPageIndex() - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <Header
        currentLang={locale.key}
        onSelectLang={setCurrentLang}
        themeMode={themeMode}
        onSelectTheme={setThemeMode}
        activeSection={activeSection}
        t={t}
      />
      <main className="fullpage-container">
        <HeroSection t={t} />
        <FeaturesSection t={t} />
        <CastBoardSection t={t} />
        <SecuritySection t={t} />
        <DownloadSection t={t} />
        <Footer t={t} />
      </main>
    </>
  );
}
