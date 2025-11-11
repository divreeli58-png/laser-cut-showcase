import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { products } from '../../data/products';

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady || typeof id !== 'string') {
    return (
      <div className="site-wrapper">
        <Header />
        <main className="product-detail product-detail--center">
          <p>Parça detayları yükleniyor...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="site-wrapper">
        <Header />
        <main className="product-detail product-detail--center">
          <p>Ürün bulunamadı. Yeni bir kart eklemek için <code>src/data/products.ts</code> dosyasını güncelle.</p>
          <Link href="/" className="back-link">
            Galeriye dön
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-wrapper">
      <Header />
      <main className="product-detail">
        <Link href="/" className="back-link">
          &larr; Galeriye dön
        </Link>
        <div className="product-detail__grid">
          <div className="product-detail__media">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={960}
              height={1200}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="product-detail__info">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-detail__description">{product.description}</p>
            <ul className="product-detail__specs">
              <li>
                <span>Malzeme</span>
                <strong>{product.material}</strong>
              </li>
              <li>
                <span>Ölçüler</span>
                <strong>{product.dimensions}</strong>
              </li>
              <li>
                <span>Üretim süresi</span>
                <strong>{product.leadTime}</strong>
              </li>
            </ul>
            <p className="product-detail__price">{product.price}</p>
            <a className="btn btn--primary" href="mailto:info@laviniahouse.com">
              Bu parçayı ayırt
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
