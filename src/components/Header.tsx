
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, LogOut, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LanguageCurrencySelector from './LanguageCurrencySelector';
import LanguageSelector from './LanguageSelector';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useAppContext } from '../contexts/AppContext';
import { useWishlist } from '@/contexts/WishlistContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const { lang, setLang, currency, setCurrency } = useAppContext();
  const { items: wishlistItems } = useWishlist();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/0793d0c4-0f05-4a80-9a23-e90f7b9078da.png" 
                alt="Nirvana - Fresh tea, fresh taste!"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-secondary relative group ${
                  isActive(item.href)
                    ? 'text-secondary'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <LanguageCurrencySelector currentLang={lang} onLangChange={setLang} currentCurrency={currency} onCurrencyChange={setCurrency} />
            
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-secondary/10 transition-colors">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {user ? (
                  <>
                    <div className="px-2 py-1.5 text-sm font-medium">
                      Hello, {user.name}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">My Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">Order History</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/auth">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/auth">Create Account</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Shopping Cart */}
            <Button variant="ghost" size="sm" asChild className="relative hover:bg-secondary/10 transition-colors">
              <Link to="/cart">
                <ShoppingBag className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center p-0">
                    {getTotalItems()}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" asChild className="relative hover:bg-secondary/10 transition-colors">
              <Link to="/wishlist">
                <Heart className="h-4 w-4" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-saffron-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center p-0">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-secondary/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-secondary bg-secondary/10'
                      : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
