import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Gallery: React.FC = () => {
  if (products.length === 0) {
    return (
      <div className="gallery-empty">
        <p>Henüz ürün eklemedin.</p>
        <p>
          Yeni bir kart eklemek için <code>src/data/products.ts</code> dosyasına görsel adresini ve bilgileri
          yazman yeterli.
        </p>
      </div>
    );
  }

  return (
    <div className="gallery-grid" role="list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Gallery;
