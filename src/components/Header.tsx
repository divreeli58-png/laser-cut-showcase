import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { smoothScrollTo } from '../utils/scrollToSection';

type HeaderProps = {
  variant?: 'default' | 'hero';
};

const LOGO_URL = '/images/Laviniahosue.png';

const NAV_LINKS = [
  { label: 'Koleksiyon', selector: '#products' },
  { label: 'Atolye', selector: '#hero' },
  { label: 'Ozel Tasarim', selector: '#products' },
  { label: 'Iletisim', selector: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handlePageScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handlePageScroll();
    window.addEventListener('scroll', handlePageScroll);
    return () => window.removeEventListener('scroll', handlePageScroll);
  }, []);

  const headerClasses = [
    'site-header',
    variant === 'hero' ? 'site-header--hero' : '',
    'site-header--visible',
    isScrolled ? 'site-header--scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleScroll = (selector: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (selector.startsWith('#')) {
      event.preventDefault();
      smoothScrollTo(selector);
    }
  };

  return (
    <header className={headerClasses}>
      <div className="site-header__announcement">
        Renklerin enerjisiyle lazer kesim tasarimlar • Dunya capi kargo
      </div>
      <div className="site-header__bar">
        <Link href="/" className="site-header__brand">
          <span className="brand-mark">
            <Image src={LOGO_URL} alt="Lavinia House logo" width={64} height={64} priority />
          </span>
          <div>
            <p className="brand-title">Lavinia House</p>
            <p className="brand-subtitle">Lazer Kesim &amp; Ozel Tasarim</p>
          </div>
        </Link>
        <nav className="site-header__menu">
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.selector} onClick={handleScroll(item.selector)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a className="site-header__action" href="mailto:info@laviniahouse.com">
            info@laviniahouse.com
          </a>
          <a className="site-header__cta" href="#products" onClick={handleScroll('#products')}>
            Koleksiyonu Gor
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
