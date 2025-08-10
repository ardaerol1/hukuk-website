import PageHeader from '../ui/PageHeader';
import { SITE_NAME } from '../lib/constants';

export const metadata = { title: 'Hakkımızda | Hukuk Bürosu' };
export default function AboutPage(){
  return (
    <>
      <PageHeader title="Hakkımızda" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'Hakkımızda'}]} subtitle="Kurumsal yaklaşımımız ve değer setimiz." />
      <section className="section" aria-labelledby="title">
        <div className="container about-layout">
          <div>
            <h2 id="title" className="visually-hidden">İçerik</h2>
            <div className="about-firm">{SITE_NAME}</div>
            <p>Kurumsal yapımız, şeffaf süreç yönetimimiz ve disiplinli çalışma kültürümüzle müvekkil ihtiyaçlarını stratejik değer üreten çözümlere dönüştürmeyi hedefliyoruz. Bu sayfadaki bilgiler genel nitelikte olup hukuki görüş teşkil etmez.</p>
            <h3>Yaklaşım</h3>
            <p>Önleyici hukuk modeli, risk haritalama, sözleşme yaşam döngüsü yönetimi ve veri koruma uyumunu bütünleşik ele alıyoruz.</p>
            <h3>Değerler</h3>
            <p>Şeffaflık, özen ve etik çalışma, bilgi güvenliği hassasiyeti; ölçülebilir ve izlenebilir süreçlerle desteklenir.</p>
            <h3>İlkeler</h3>
            <p>Önleyici bakış; dokümantasyon disiplini; veri minimizasyonu; sürdürülebilir süreç; şeffaf raporlama; etik uyum.</p>
          </div>
          <div>
            <figure className="about-media">
              <img src="/office/office2.jpg" alt="Büro temsili görsel" />
              <figcaption>Büro temsili</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
