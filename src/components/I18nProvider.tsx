'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Initialize i18n on client side
    if (typeof window !== 'undefined') {
      // Get saved language from localStorage or use browser language
      const savedLanguage = localStorage.getItem('i18nextLng');
      const browserLanguage = navigator.language.split('-')[0];
      const supportedLanguages = ['en', 'ja', 'es'];

      const languageToUse = savedLanguage && supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : supportedLanguages.includes(browserLanguage)
        ? browserLanguage
        : 'en';

      if (i18n.language !== languageToUse) {
        i18n.changeLanguage(languageToUse);
      }
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}