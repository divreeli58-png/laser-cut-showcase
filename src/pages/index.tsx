import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { smoothScrollTo } from '../utils/scrollToSection';

const HomePage = () => {
  const handleScroll = (selector: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollTo(selector);
  };

  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <section className="hero" id="hero">
          <div className="hero__content">
            <p className="eyebrow">Lavinia House - Lazer Kesim &amp; Ozel Tasarim</p>
            <h1>
              Renklerin Enerjisiyle <span>Kisiye Ozel</span> Lazer Kesim Tasarimlar
            </h1>
            <p>
              Ahsabin dogalligini, rengin sicakligiyla bulusturuyoruz. Lavinia House ile her urun hediye
              edilmeye hazir, hikayesi olan bir sanat parcasi.
            </p>
            <p className="hero__subcopy">
              Atolyemizde katmanli lazer kesim, elde boyama ve kisiye ozel yazi seceneklerini tek seferde
              planliyor, renk paletinizi sizinle birlikte kurguluyoruz.
            </p>
            <div className="hero__cta">
              <a href="#products" className="btn btn--primary" onClick={handleScroll('#products')}>
                Koleksiyonu Gor
              </a>
              <a href="#contact" className="btn btn--ghost" onClick={handleScroll('#contact')}>
                Tasarim Talep Et
              </a>
            </div>
            <div className="hero__highlight-grid">
              <div className="hero__highlight">
                <span className="hero__stat">120+</span>
                <span className="hero__stat-label">Ozel Tasarim</span>
                <p>Kisiye ozel duvar panolari, saatler ve kutlamalar icin koleksiyon parcalari.</p>
              </div>
              <div className="hero__highlight">
                <span className="hero__stat">5 gun</span>
                <span className="hero__stat-label">Ortalama Teslimat</span>
                <p>Tasarimdan kargoya kadar tum surecleri tek atolyeden yonetiyoruz.</p>
              </div>
              <div className="hero__highlight">
                <span className="hero__stat">%100</span>
                <span className="hero__stat-label">Elde Boyama</span>
                <p>Renk gecisleri, dokular ve vernik katmanlariyla her parca uzun omurlu.</p>
              </div>
            </div>
            <div className="hero__details-card">
              <p className="hero__details-title">Neden Lavinia House?</p>
              <ul className="hero__details-list">
                <li>Kisiye ozel eskiz, renk danismanligi ve on izleme ile net karar sureci.</li>
                <li>Her sipariste ozel paketleme, mesaj karti ve bakim kilavuzu.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section products" id="products">
          <div className="section-heading">
            <h2>Urunlerimiz</h2>
            <p>Ahsap duvar saatleri, panolar ve kisiye ozel aksesuarlarimizla renklerin enerjisini tasiyoruz.</p>
          </div>
          <Gallery />
        </section>

        <section className="section contact" id="contact">
          <h2>Iletisim</h2>
          <p>Siparis ve is birligi taleplerini bize yaz.</p>
          <form className="contact-form">
            <label>
              Ad Soyad
              <input type="text" placeholder="Adiniz" required />
            </label>
            <label>
              E-posta
              <input type="email" placeholder="ornek@mail.com" required />
            </label>
            <label className="contact-form__full">
              Mesaj
              <textarea rows={4} placeholder="Mesajinizi buraya yazin..." required />
            </label>
            <button type="submit" className="btn btn--primary contact-form__button">
              Gonder
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
