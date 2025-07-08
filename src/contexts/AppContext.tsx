import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  lang: string;
  setLang: (lang: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState('en');
  const [currency, setCurrency] = useState('KZT');

  return (
    <AppContext.Provider value={{ lang, setLang, currency, setCurrency }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppContextProvider');
  return ctx;
}; 