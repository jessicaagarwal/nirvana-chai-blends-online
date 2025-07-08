
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AppContextProvider } from '../contexts/AppContext';
import { I18nProvider } from '../contexts/I18nContext';

const Layout = () => {
  return (
    <AppContextProvider>
      <I18nProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </AppContextProvider>
  );
};

export default Layout;
