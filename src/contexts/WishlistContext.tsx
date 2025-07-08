import React, { createContext, useContext, useState, useEffect } from 'react';

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('nirvanachai-wishlist');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('nirvanachai-wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = (product: WishlistItem) => {
    setItems(prev => prev.some(item => item.id === product.id) ? prev : [...prev, product]);
  };

  const removeFromWishlist = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id: number) => items.some(item => item.id === id);

  const clearWishlist = () => setItems([]);

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}; 