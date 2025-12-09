// src/app/components/ProductCard.js
import Link from 'next/link';
import AddToCart from './AddToCart';

export default function ProductCard({ product }) {
  return (
    <article className="card h-100 shadow-sm">
      <Link href={`/products/${product.id}`} className="text-decoration-none" aria-label={`View ${product.title}`}>
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top"
          style={{ height: 290, objectFit: 'cover' }}
        />
      </Link>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1" style={{ lineHeight: 1.1 }}>
          <Link href={`/products/${product.id}`} className="text-dark text-decoration-none">
            {product.title}
          </Link>
        </h5>

        <p className="text-muted mb-2">₹{product.price}</p>

        <p className="card-text text-muted mb-3" style={{ fontSize: 14, flex: 1 }}>
          {product.description?.slice(0, 90)}{product.description && product.description.length > 90 ? '…' : ''}
        </p>

        <div className="d-flex gap-2 align-items-center mt-auto">
          <Link href={`/products/${product.id}`} className="btn btn-sm">
            View
          </Link>

          {/* AddToCart is a client component (must export 'use client' at top of its file) */}
          <AddToCart product={product} />

          
        </div>
      </div>
    </article>
  );
}


