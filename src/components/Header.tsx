import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  variant?: 'default' | 'hero';
};

const LOGO_URL = '/logo-lavina.svg';

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  return (
    <header className={`site-header ${variant === 'hero' ? 'site-header--hero' : ''}`}>
      <Link href="/" className="site-header__brand">
        <span className="brand-mark">
          <Image src={LOGO_URL} alt="Lavinia House logo" width={48} height={48} priority />
        </span>
        <div>
          <p className="brand-title">Lavinia House</p>
          <p className="brand-subtitle">Lazer Kesim &amp; Ozel Tasarim</p>
        </div>
      </Link>
      <nav className="site-header__nav">
        <Link href="/#products">Urunler</Link>
        <Link href="/#contact">Iletisim</Link>
      </nav>
      <Link className="site-header__cta" href="/#products">
        Koleksiyonu gor
      </Link>
    </header>
  );
};

export default Header;
