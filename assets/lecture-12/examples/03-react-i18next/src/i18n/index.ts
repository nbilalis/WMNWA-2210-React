// How to properly internationalize a React application using i18next - DEV Community - https://tmpl.at/3qd3LFK
import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import el from './locales/el.json';
import en from './locales/en.json';
import es from './locales/es.json';

const langs = {
  el: { nativeName: 'Ελληνικά' },
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en,
      el,
      es,
    },
  });

export default i18n;

export { langs };
