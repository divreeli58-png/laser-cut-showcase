import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, description, imageUrl, price } = product;

  return (
    <article className="product-card" role="listitem">
      <div className="product-card__media">
        <Image src={imageUrl} alt={name} width={128} height={128} />
      </div>
      <div className="product-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-card__price">{price}</p>
      </div>
      <Link href={`/products/${id}`} className="product-card__cta">
        İncele
      </Link>
    </article>
  );
};

export default ProductCard;
