// src/app/products/[id]/page.js
import { notFound } from 'next/navigation';
import AddToCart from '../../components/AddToCart';
import { products } from '../../data/products';

export default async function ProductPage({ params }) {
  // params may be a Promise — await it
  const { id } = await params;

  const product = products.find(p => String(p.id) === String(id));
  if (!product) notFound();

  return (
    <div style={{ padding: 20 }}>
     <img
            src={product.image}
            alt={product.title}   
              
          style={{
            width: "80%",
            maxWidth: 280,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #eee",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        />
          
        
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p> ₹{product.price}</p>
      <AddToCart product={product} />
    </div>
  );
}

