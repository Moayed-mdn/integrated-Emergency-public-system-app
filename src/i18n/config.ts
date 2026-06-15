// src/i18n/config.ts
export const languages = [
    {
      code: 'en',
      name: 'English',
      localName: 'English',
      flag: '🇺🇸',
      dir: 'ltr'
    },
    {
      code: 'ar',
      name: 'Arabic',
      localName: 'العربية',
      flag: '🇦🇪',
      dir: 'rtl'
    }
  ] as const;
  
  export const locales = languages.map((lang) => lang.code);
  export const defaultLocale = 'en';