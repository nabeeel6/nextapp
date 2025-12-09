// src/app/components/AddToCart.js
'use client';
import { useCart} from '../context/cartContext';

export default function AddToCart({ product, children }) {
  const { add } = useCart();
  return (
    <button
      onClick={() => add(product)}
      className="btn btn-outline-primary"
      type="button"
    >
      {children ?? 'Add to cart'}
    </button>
  );
}
