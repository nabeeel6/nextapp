'use client';

import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../data/products';

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [onlyPremium, setOnlyPremium] = useState(false);
  const [sortBy, setSortBy] = useState('default'); // 'price-asc', 'price-desc', 'name-asc'
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // derive categories from products
  const categories = useMemo(() => {
    const set = new Set(allProducts.map(p => p.category || 'Uncategorized'));
    return ['all', ...Array.from(set)];
  }, []);

  // filtering & sorting
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = allProducts.filter(p => {
      // search by title or description
      if (q) {
        const inTitle = p.title?.toLowerCase().includes(q);
        const inDesc = p.description?.toLowerCase().includes(q);
        if (!inTitle && !inDesc) return false;
      }

      // category filter
      if (category !== 'all' && (p.category || 'Uncategorized') !== category) return false;

      // premium filter (assumes product.premium === true for premium items)
      if (onlyPremium && !p.premium) return false;

      // price range
      const price = Number(p.price ?? 0);
      if (minPrice !== '' && price < Number(minPrice)) return false;
      if (maxPrice !== '' && price > Number(maxPrice)) return false;

      return true;
    });

    // sort
    if (sortBy === 'price-asc') list.sort((a, b) => Number(a.price) - Number(b.price));
    else if (sortBy === 'price-desc') list.sort((a, b) => Number(b.price) - Number(a.price));
    else if (sortBy === 'name-asc') list.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

    return list;
  }, [query, category, onlyPremium, sortBy, minPrice, maxPrice]);

  return (
    <div style={{ padding: 20 }}>
      <h2 className="mb-4">Products</h2>

      {/* Controls */}
      <div className="card mb-4 p-3">
        <div className="row g-2 align-items-center">
          <div className="col-12 col-md-4">
            <input
              className="form-control"
              placeholder="Search products (title or description)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="col-6 col-md-2">
            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'all' ? 'All categories' : cat}</option>
              ))}
            </select>
          </div>

       
        

          <div className="col-6 col-md-2">
            <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price — Low to high</option>
              <option value="price-desc">Price — High to low</option>
              <option value="name-asc">Name — A → Z</option>
            </select>
          </div>

          <div className="col-6 col-md-2 d-flex gap-2">
            <input
              className="form-control"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value.replace(/[^0-9.]/g, ''))}
            />
            <input
              className="form-control"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value.replace(/[^0-9.]/g, ''))}
            />
          </div>
        </div>
      </div>

      {/* results count */}
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <small>{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</small>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => {
            setQuery(''); setCategory('all'); setOnlyPremium(false); setSortBy('default'); setMinPrice(''); setMaxPrice('');
          }}
        >
          Reset filters
        </button>
      </div>

      {/* products grid */}
      <div className="row g-3">
        {filtered.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning">No products match your filters.</div>
          </div>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}


