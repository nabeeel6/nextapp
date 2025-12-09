'use client';
import Link from 'next/link';
import { useCart } from '../context/cartContext';

export default function CartPage() {
  const { state, setQty, remove, clear } = useCart();
  const items = state?.items ?? [];

  const subtotal = items.reduce(
    (s, it) => s + (Number(it.price) || 0) * (Number(it.qty) || 1),
    0
  );

  function changeQty(id, delta) {
    const item = items.find(i => String(i.id) === String(id));
    if (!item) return;
    const next = (Number(item.qty) || 1) + delta;
    if (next < 1) return;
    setQty(id, next);
  }

  if (items.length === 0) {
    return (
      <div className="container my-4">
        <h1>Your cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/products" className="btn btn-primary">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1>Your cart</h1>

      <div className="list-group mb-3">
        {items.map(item => (
          <div
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img
                src={item.image || '/images/placeholder.png'}
                alt={item.title || item.name}
                style={{
                  width: 72,
                  height: 56,
                  objectFit: 'cover',
                  borderRadius: 6,
                }}
              />

              <div>
                <div style={{ fontWeight: 600 }}>
                  {item.title ?? item.name}
                </div>

                <div className="text-muted" style={{ fontSize: 13 }}>
                  {(item.description || '').slice(0, 80)}
                </div>

                <div className="mt-2 d-flex align-items-center" style={{ gap: 8 }}>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => changeQty(item.id, -1)}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    min="1"
                    value={item.qty || 1}
                    onChange={(e) => setQty(item.id, Number(e.target.value))}
                    style={{ width: 56, textAlign: 'center' }}
                  />

                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => changeQty(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div
                className="text-danger"
                style={{ cursor: 'pointer' }}
                onClick={() => remove(item.id)}
              >
                Remove
              </div>

              <div style={{ fontWeight: 700 }}>
                ₹{(
                  (Number(item.price) || 0) * (Number(item.qty) || 1)
                ).toFixed(0)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-end align-items-center gap-3">
        <div className="me-3">
          Subtotal: <strong>₹{subtotal.toFixed(0)}</strong>
        </div>

        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            if (confirm('Clear cart?')) clear();
          }}
        >
          Clear Cart
        </button>

        <button
          className="btn btn-success"
          onClick={() => alert(`Checkout total ₹${subtotal.toFixed(0)}`)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
