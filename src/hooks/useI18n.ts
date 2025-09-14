import { useTranslation } from 'react-i18next';

export function useI18n() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  const isLanguage = (lang: string) => currentLanguage === lang;

  return {
    t,
    changeLanguage,
    currentLanguage,
    isLanguage,
    i18n,
  };
}