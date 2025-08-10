import { DISCLAIMER, SECTORS } from './lib/constants';
import { PRACTICE_AREAS } from './lib/practiceAreas';
import HomeAboutSection from './ui/HomeAboutSection';

export default function HomePage() {
  const topAreas = PRACTICE_AREAS.slice(0,6);
  const topSectors = SECTORS.slice(0,6);
  return (
    <>
      <a href="#icerik" className="skip-link">İçeriğe geç</a>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">İşletmenizin Hukuki Güvencesi İçin Stratejik Çözüm Ortağı</h1>
          <p>Kurumsal ve regüle sektörlerde önleyici, süreç ve uyum odaklı hukuki destek. {DISCLAIMER}</p>
          <p><a href="/iletisim" className="cta hero-cta">Danışmanlık Talep Et</a></p>
        </div>
      </section>
      <HomeAboutSection />
      <section className="section" aria-labelledby="cta-hizli">
        <div className="container final-cta" id="iletisim-cta">
          <div className="final-cta-inner">
            <div className="final-cta-content">
              <h2 id="cta-hizli">İhtiyaçlarınızı Konuşalım</h2>
              <p className="lead">Süreçlerinizi ve risk haritanızı kısa bir ön görüşmede değerlendirelim. Uygun çalışma modelini birlikte belirleyelim.</p>
              <ul className="cta-points" aria-label="Destek başlıkları">
                <li>Ön değerlendirme & ilk yönlendirme</li>
                <li>Uygun hizmet kapsamı ve model tasarımı</li>
                <li>Şeffaf teklif ve süre planı</li>
              </ul>
              <div className="cta-actions">
                <a className="cta primary" href="/iletisim">Formu Doldur</a>
                <a className="cta secondary" href="tel:+902120000000" aria-label="Telefon ile arayın">Telefon</a>
                <a className="cta secondary" href="mailto:info@ornek-hukuk.com" aria-label="E‑posta gönderin">E‑posta</a>
              </div>
              <p className="mini-note">Talebiniz gizli tutulur ve tek başına vekalet ilişkisi doğurmaz.</p>
            </div>
            <div className="final-cta-side" aria-hidden="true">
              <div className="final-cta-card">
                <h3>Hızlı Başlangıç</h3>
                <p className="card-text">Kısa bir açıklama iletin; aynı gün içinde dönüş sağlayalım.</p>
                <ul className="mini-list">
                  <li>Öncelikli ihtiyaç analizi</li>
                  <li>Örnek teslim süresi</li>
                  <li>İlk risk başlıkları</li>
                </ul>
                <a href="/iletisim" className="mini-link">Hızlı Form »</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section areas-highlight" aria-labelledby="uzmanlik-ozet">
        <div className="container areas-highlight-inner">
          <h2 id="uzmanlik-ozet">Uzmanlık Alanlarımız</h2>
          <div className="areas-grid" role="list">
            {topAreas.map(a => (
              <a key={a.slug} href={`/uzmanlik/${a.slug}`} className="area-card" role="listitem" aria-label={`${a.title} detay sayfası`}>
                <h3>{a.title}</h3>
                <p className="area-short">{a.short}</p>
                <ul className="area-bullets">{a.odakBasliklar.slice(0,3).map(b => <li key={b}>{b}</li>)}</ul>
                <span className="read-more">Detay »</span>
              </a>
            ))}
          </div>
          <p style={{marginTop:'1.25rem'}}><a href="/uzmanlik" className="cta" style={{fontSize:'.8rem'}}>Tüm Uzmanlıklar</a></p>
        </div>
      </section>
      <section className="section" aria-labelledby="neden-biz">
        <div className="container">
          <h2 id="neden-biz">Neden Biz?</h2>
          <div className="grid cols-3">
            <div className="card"><strong>Önleyici</strong><p>Riskler büyümeden süreç tasarımı.</p></div>
            <div className="card"><strong>Şeffaf</strong><p>Aşama bazlı raporlama & erişilebilir dokümantasyon.</p></div>
            <div className="card"><strong>Çevik</strong><p>İhtiyaca göre ölçeklenen kaynak planı.</p></div>
          </div>
        </div>
      </section>
      <section className="section sectors-highlight" aria-labelledby="sektorler">
        <div className="container sectors-highlight-inner">
          <h2 id="sektorler">Hizmet Verdiğimiz Sektörler</h2>
          <div className="areas-grid" role="list">
            {topSectors.map(s => (
              <a key={s.slug} href={`/sektorler/${s.slug}`} className="area-card" role="listitem" aria-label={`${s.title} sektör detayı`}>
                <h3>{s.title}</h3>
                <p className="area-short">{s.intro}</p>
                <ul className="area-bullets">{s.bullets.slice(0,3).map(b => <li key={b}>{b}</li>)}</ul>
                <span className="read-more">Detay »</span>
              </a>
            ))}
          </div>
          <p style={{marginTop:'1.25rem'}}><a href="/sektorler" className="cta" style={{fontSize:'.8rem'}}>Tüm Sektörler</a></p>
        </div>
      </section>
    </>
  );
}
