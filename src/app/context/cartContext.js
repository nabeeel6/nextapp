// src/app/context/CartContext.js
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('cart_items');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
    
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart_items', JSON.stringify(items));
    } catch {}
  }, [items]);

  function add(product) {
    setItems(prev => {
      const idx = prev.findIndex(p => String(p.id) === String(product.id));
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: (Number(copy[idx].qty) || 1) + 1 };
        return copy;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function remove(id) {
    setItems(prev => prev.filter(p => String(p.id) !== String(id)));
  }

  function setQty(id, qty) {
    const q = Number(qty);
    if (Number.isNaN(q) || q < 1) return;
    setItems(prev => prev.map(p => (String(p.id) === String(id) ? { ...p, qty: q } : p)));
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ state: { items }, add, remove, setQty, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
