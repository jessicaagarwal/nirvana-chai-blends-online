import React, { createContext, useContext, ReactNode } from 'react';
import en from '../locales/en.json';
import ru from '../locales/ru.json';
import kk from '../locales/kk.json';
import { useAppContext } from './AppContext';

const translations: Record<string, any> = { en, ru, kk };

interface I18nContextType {
  t: (key: string) => string;
  lang: string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const { lang } = useAppContext();
  const dict = translations[lang] || translations['en'];

  function t(key: string): string {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict) ||
      key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), translations['en']) ||
      key;
  }

  return (
    <I18nContext.Provider value={{ t, lang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}; 