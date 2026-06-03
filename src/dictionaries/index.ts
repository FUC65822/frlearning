import zh from './zh.json';

const dictionaries = {
  zh: () => import('./zh.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const i18n = {
  defaultLocale: 'zh',
  locales: ['zh', 'en', 'fr', 'es', 'de'],
} as const;

export const getDictionary = async (locale: Locale) => {
  // If the locale doesn't exist, fallback to default
  if (!dictionaries[locale]) {
    return dictionaries[i18n.defaultLocale as Locale]();
  }
  return dictionaries[locale]();
};

export type Dictionary = typeof zh;
