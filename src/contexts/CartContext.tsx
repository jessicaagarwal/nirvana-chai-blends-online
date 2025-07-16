
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { createCheckout, addLineItems, removeLineItems, updateLineItems } from '../lib/shopify';

interface ShopifyCartItem {
  id: string;
  title: string;
  quantity: number;
  image?: string;
  price: string;
  currency: string;
  variantId: string;
}

interface CartContextType {
  items: ShopifyCartItem[];
  checkoutId: string | null;
  webUrl: string | null;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  removeFromCart: (lineItemId: string) => Promise<void>;
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalItems: () => number;
  getTotalPrice: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ShopifyCartItem[]>([]);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [webUrl, setWebUrl] = useState<string | null>(null);

  // Load checkoutId from localStorage on mount
  useEffect(() => {
    const savedCheckoutId = localStorage.getItem('nirvanachai-checkout-id');
    if (savedCheckoutId) {
      setCheckoutId(savedCheckoutId);
      // Optionally, fetch checkout data here to restore cart items
    }
  }, []);

  // Save checkoutId to localStorage whenever it changes
  useEffect(() => {
    if (checkoutId) {
      localStorage.setItem('nirvanachai-checkout-id', checkoutId);
    }
  }, [checkoutId]);

  // Helper to map Shopify checkout line items to ShopifyCartItem
  const mapLineItems = (checkout: any): ShopifyCartItem[] => {
    return checkout?.lineItems?.edges?.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      quantity: edge.node.quantity,
      image: edge.node.variant?.image?.url || '',
      price: edge.node.variant?.price?.amount || '0',
      currency: edge.node.variant?.price?.currencyCode || '',
      variantId: edge.node.variant?.id,
    })) || [];
  };

  // Add to cart (create checkout if needed)
  const addToCart = async (variantId: string, quantity: number = 1) => {
    let checkout;
    if (!checkoutId) {
      checkout = await createCheckout(variantId, quantity);
      setCheckoutId(checkout.id);
      setWebUrl(checkout.webUrl);
    } else {
      checkout = await addLineItems(checkoutId, variantId, quantity);
    }
    setItems(mapLineItems(checkout));
    setWebUrl(checkout.webUrl);
    toast({ title: 'Added to cart', description: 'Product added to your cart.' });
  };

  // Remove from cart
  const removeFromCart = async (lineItemId: string) => {
    if (!checkoutId) return;
    const checkout = await removeLineItems(checkoutId, [lineItemId]);
    setItems(mapLineItems(checkout));
    setWebUrl(checkout.webUrl);
    toast({ title: 'Removed from cart', description: 'Item removed from your cart.' });
  };

  // Update quantity
  const updateQuantity = async (lineItemId: string, quantity: number) => {
    if (!checkoutId) return;
    const checkout = await updateLineItems(checkoutId, [{ id: lineItemId, quantity }]);
    setItems(mapLineItems(checkout));
    setWebUrl(checkout.webUrl);
  };

  // Clear cart (remove all items)
  const clearCart = async () => {
    if (!checkoutId) return;
    const lineItemIds = items.map(item => item.id);
    const checkout = await removeLineItems(checkoutId, lineItemIds);
    setItems(mapLineItems(checkout));
    setWebUrl(checkout.webUrl);
    toast({ title: 'Cart cleared', description: 'All items removed from your cart.' });
  };

  const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () => {
    if (items.length === 0) return '₸0';
    const currency = items[0].currency || '₸';
    const total = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
    return `${currency}${total}`;
  };

  return (
    <CartContext.Provider value={{
      items,
      checkoutId,
      webUrl,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
