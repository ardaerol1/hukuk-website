import PageHeader from '../ui/PageHeader';

export const metadata = { title: 'Yasal Uyarı | Hukuk Bürosu' };

export default function LegalPage(){
  return (
    <>
      <PageHeader title="Yasal Uyarı" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'Yasal Uyarı'}]} subtitle="Genel bilgilendirme notu." />
      <section className="section" aria-labelledby="legal-title">
        <div className="container">
          <h2 id="legal-title" className="visually-hidden">İçerik</h2>
          <p>Bu sitedeki tüm içerik genel bilgilendirme amaçlıdır; reklam, teklif veya hukuki görüş değildir. Somut durumlar farklı sonuçlar doğurabilir. Herhangi bir karar almadan önce profesyonel destek almanız tavsiye edilir.</p>
        </div>
      </section>
    </>
  );
}
