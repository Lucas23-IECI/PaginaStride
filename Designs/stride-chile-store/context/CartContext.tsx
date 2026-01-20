import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { MOCK_CART_ITEMS } from '../data';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  total: number;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize with some mock items for demonstration matching the first screenshot
  const [items, setItems] = useState<CartItem[]>(MOCK_CART_ITEMS.map(p => ({...p, quantity: 1})));
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (product: Product, quantity = 1, size = 'M', color = 'Negro') => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity, selectedSize: size, selectedColor: color }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ 
      items, isOpen, total, openCart, closeCart, addToCart, removeFromCart, updateQuantity, clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
