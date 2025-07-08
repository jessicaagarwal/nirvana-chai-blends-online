
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🍃</span>
              </div>
              <span className="font-cormorant text-xl font-bold">NirvanaChai</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Premium handcrafted tea blends from Kazakhstan, bringing you the finest tea experience with traditional values.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Fresh tea, fresh taste!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-secondary transition-colors">Shop All Teas</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-secondary transition-colors">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link to="/returns" className="hover:text-secondary transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <span>WhatsApp: +7 777 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>hello@nirvanachai.kz</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Almaty, Kazakhstan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 NirvanaChai. All rights reserved. | Crafted with love in Kazakhstan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
