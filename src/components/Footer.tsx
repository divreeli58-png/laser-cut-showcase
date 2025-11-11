import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <h3 className="site-footer__title">Lavinia House</h3>
          <p className="site-footer__subtitle">
            Kişiye özel lazer kesim tasarımlar, duvar saatleri, panolar ve daha fazlası. Her ürün renklerin ve ahşabın
            uyumu ile hayat bulur.
          </p>
        </div>

        <div>
          <h4>Bağlantılar</h4>
          <ul>
            <li>
              <Link href="/#products">Ürünler</Link>
            </li>
            <li>
              <Link href="/#contact">İletişim</Link>
            </li>
            <li>
              <Link href="/">KVKK &amp; Gizlilik</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>İletişim Bilgileri</h4>
          <p className="site-footer__contact">
            İzmir, Türkiye
            <br />
            +90 555 123 45 67
            <br />
            info@laviniahouse.com
          </p>
        </div>
      </div>
      <p className="site-footer__copy">© {year} Lavinia House · Renklerin ve ahşabın uyumu.</p>
    </footer>
  );
};

export default Footer;
