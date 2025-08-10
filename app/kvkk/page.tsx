import PageHeader from '../ui/PageHeader';

export const metadata = { title: 'KVKK Aydınlatma | Hukuk Bürosu' };

export default function KVKKPage(){
  return (
    <>
      <PageHeader title="KVKK Aydınlatma" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'KVKK'}]} subtitle="Örnek aydınlatma metni." />
      <section className="section" aria-labelledby="kvkk-title">
        <div className="container">
          <h2 id="kvkk-title" className="visually-hidden">İçerik</h2>
          <p>Bu bir placeholder metindir. Gerçek süreç analizi sonrası özelleştirilmelidir.</p>
          <h3>Veri Sorumlusu</h3>
          <p>Örnek Hukuk Bürosu.</p>
          <h3>İşlenen Kişisel Veri Kategorileri</h3>
          <ul>
            <li>İletişim verileri</li>
            <li>Kimlik verileri</li>
            <li>Talep içeriği</li>
          </ul>
          <h3>Toplama Yöntemi ve Hukuki Sebep</h3>
          <p>Elektronik form; açık rıza veya sözleşme için zorunluluk.</p>
          <h3>Haklarınız</h3>
          <p>KVKK 11. madde haklarınızı iletişim kanallarımız üzerinden kullanabilirsiniz.</p>
        </div>
      </section>
    </>
  );
}
