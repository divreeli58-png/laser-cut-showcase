import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { smoothScrollTo } from '../utils/scrollToSection';

type HeaderProps = {
  variant?: 'default' | 'hero';
};

const LOGO_URL = '/logo-lavina.svg';

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  const handleScroll = (selector: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollTo(selector);
  };

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
        <a href="#products" onClick={handleScroll('#products')}>
          Urunler
        </a>
        <a href="#contact" onClick={handleScroll('#contact')}>
          Iletisim
        </a>
      </nav>
      <a className="site-header__cta" href="#products" onClick={handleScroll('#products')}>
        Koleksiyonu gor
      </a>
    </header>
  );
};

export default Header;
