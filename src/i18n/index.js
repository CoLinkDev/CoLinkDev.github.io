import en from './locales/en.js';
import zhCN from './locales/zh-CN.js';
import ja from './locales/ja.js';
import ko from './locales/ko.js';
import zhTW from './locales/zh-TW.js';
import de from './locales/de.js';
import es from './locales/es.js';
import ru from './locales/ru.js';

export const LOCALES = {
  'en': { key: 'en', name: 'English', code: 'en', path: '/en/', translations: en },
  'zh-cn': { key: 'zh-cn', name: '简体中文', code: 'zh-CN', path: '/', translations: zhCN },
  'ja': { key: 'ja', name: '日本語', code: 'ja', path: '/ja/', translations: ja },
  'ko': { key: 'ko', name: '한국어', code: 'ko', path: '/ko/', translations: ko },
  'zh-tw': { key: 'zh-tw', name: '繁體中文', code: 'zh-TW', path: '/zh-tw/', translations: zhTW },
  'de': { key: 'de', name: 'Deutsch', code: 'de', path: '/de/', translations: de },
  'es': { key: 'es', name: 'Español', code: 'es', path: '/es/', translations: es },
  'ru': { key: 'ru', name: 'Русский', code: 'ru', path: '/ru/', translations: ru }
};

export const DEFAULT_LOCALE = 'en';

export function getLocale(langKey) {
  const normalized = (langKey || DEFAULT_LOCALE).toLowerCase();
  return LOCALES[normalized] || LOCALES[DEFAULT_LOCALE];
}

export function getTranslations(langKey) {
  return getLocale(langKey).translations;
}
