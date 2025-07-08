
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import LanguageCurrencySelector from './LanguageCurrencySelector';
import { useAppContext } from '../contexts/AppContext';

const Footer = () => {
  const { lang, setLang, currency, setCurrency } = useAppContext();

  return (
    <>
      {/* Playful divider above footer */}
      <div className="h-1 w-full bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 rounded-t-full opacity-60" />
      <footer className="relative bg-clay rounded-t-3xl shadow-2xl border-t border-primary/10 overflow-hidden">
        {/* Playful background element */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-secondary/10 rounded-full z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand & Social */}
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow">
                  <span className="text-white text-xl">🍃</span>
                </div>
                <span className="font-cormorant text-2xl font-bold text-primary">NirvanaChai</span>
              </div>
              <p className="text-sm text-earthy-brown mb-4 max-w-xs">
                Premium handcrafted tea blends from Kazakhstan, bringing you the finest tea experience with traditional values.
              </p>
              <div className="flex space-x-3 mb-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-primary"><Instagram className="h-5 w-5" /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-primary"><Facebook className="h-5 w-5" /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-primary"><Youtube className="h-5 w-5" /></a>
              </div>
              <LanguageCurrencySelector currentLang={lang} onLangChange={setLang} currentCurrency={currency} onCurrencyChange={setCurrency} className="mt-2 rounded-full border border-primary/20 px-4 py-2 bg-white/80 shadow-sm" />
            </div>

            {/* Quick Links & Policies */}
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="mb-8 md:mb-0">
                <h3 className="font-cormorant text-lg font-semibold mb-4 text-primary">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/shop" className="hover:text-secondary transition-colors text-primary">Shop All Teas</Link></li>
                  <li><Link to="/about" className="hover:text-secondary transition-colors text-primary">Our Story</Link></li>
                  <li><Link to="/contact" className="hover:text-secondary transition-colors text-primary">Contact Us</Link></li>
                  <li><Link to="/shipping" className="hover:text-secondary transition-colors text-primary">Shipping Info</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-4 text-primary">Policies</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors text-primary">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="hover:text-secondary transition-colors text-primary">Terms & Conditions</Link></li>
                  <li><Link to="/shipping-policy" className="hover:text-secondary transition-colors text-primary">Shipping Policy</Link></li>
                  <li><Link to="/return-policy" className="hover:text-secondary transition-colors text-primary">Return & Refund Policy</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-cormorant text-lg font-semibold mb-4 text-primary">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-secondary" />
                  <span className="text-primary">WhatsApp: +7 777 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="text-primary">hello@nirvanachai.kz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-primary">Almaty, Kazakhstan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 mt-6 pt-4 text-center text-xs text-earthy-brown/80 bg-transparent rounded-b-2xl">
            <p>&copy; 2024 NirvanaChai. All rights reserved. | Crafted with love in Kazakhstan</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
