export const SITE_NAME = 'Hukuk Bürosu';
export const DISCLAIMER = 'İçerikler genel bilgilendirme amaçlıdır; hukuki görüş değildir.';
export const CONTACT_NOTICE = 'Bu form hukuki vekalet ilişkisi başlatmaz.';
export const CONTACT_INFO = {
  address: 'Örnek Mah. Örnek Cad. No:1 İstanbul',
  phone: '+90 212 000 00 00',
  email: 'info@ornek-hukuk.com'
};
export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'in' },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: 'ig' }
];
export interface Sector { slug:string; title:string; intro:string; bullets:string[] }
export const SECTORS: Sector[] = [
  { slug:'bankacilik-ve-finans', title:'Bankacılık ve Finans', intro:'Bankacılık ve finansal hizmet sağlayıcılarının regülasyon, sözleşme ve uyum süreçlerinde çevik destek.', bullets:['Regülasyon uyum değerlendirmesi','Kredi ve teminat dokümantasyonu','Fintech sözleşme analizleri'] },
  { slug:'bilgi-teknolojileri', title:'Bilgi Teknolojileri', intro:'Yazılım, SaaS ve platform modellerinde sözleşme, lisans ve veri koruma odaklı yaklaşım.', bullets:['SaaS lisans modelleri','API / veri paylaşım protokolleri','Açık kaynak uyum incelemesi'] },
  { slug:'enerji', title:'Enerji', intro:'Elektrik, yenilenebilir ve dağıtık enerji projelerinde izin, sözleşme ve yapılandırma.', bullets:['Lisans ve izin süreçleri','EPC & tedarik sözleşmeleri','Yatırım ve hisse devri incelemeleri'] },
  { slug:'finans-ve-yatirim', title:'Finans ve Yatırım', intro:'Yatırım fonları, girişim sermayesi ve alternatif finansman modellerinde hukuki çerçeve.', bullets:['Fon dokümantasyonu','Yatırım sözleşmeleri','Çıkış stratejisi planlama'] },
  { slug:'gayrimenkul', title:'Gayrimenkul', intro:'Proje geliştirme, kira ve inşaat sözleşmelerinde risk ve hak dengesi optimizasyonu.', bullets:['Kat karşılığı / inşaat sözleşmeleri','Tadilat & FIDIC hükümleri','Kira portföy dokümantasyonu'] },
  { slug:'hizmet', title:'Hizmet', intro:'Çeşitli hizmet sağlayıcılarında operasyonel sözleşme ve sorumluluk yönetimi.', bullets:['Çerçeve hizmet sözleşmeleri','SLA ve performans kriterleri','Tazminat yapılandırması'] },
  { slug:'insaat', title:'İnşaat', intro:'İnşaat ve altyapı projelerinde sözleşme ve hak takip süreçleri.', bullets:['Sözleşme / değişiklik emirleri','Gecikme ve hak talepleri','Alt yüklenici yönetimi'] },
  { slug:'madencilik', title:'Madencilik', intro:'Arama, işletme ve çevresel izin süreçlerinde mevzuat uyumu.', bullets:['Lisans / ruhsat süreçleri','Çevresel raporlama','İş güvenliği protokolleri'] },
  { slug:'medya', title:'Medya', intro:'İçerik üretimi, yayın ve lisanslama süreçlerinde fikri hak odaklı yaklaşım.', bullets:['Lisans / yayın sözleşmeleri','Reklam & sponsorluk','Hak takibi ve ihlal yönetimi'] },
  { slug:'perakende', title:'Perakende', intro:'Çok kanallı satış ve tedarik zinciri sözleşmelerinde ölçeklenebilirlik ve uyum.', bullets:['Distribütörlük / bayilik','Tedarik zinciri dokümantasyonu','Tüketici hukuku uyumu'] },
  { slug:'reklam', title:'Reklam', intro:'Ajans ve marka ilişkilerinde fikri hak ve sorumluluk dengesi.', bullets:['Ajans sözleşmeleri','Kampanya onay süreçleri','Gizlilik & veri kullanımı'] },
  { slug:'saglik', title:'Sağlık', intro:'Sağlık hizmet sunucuları ve medtech girişimlerinde mevzuat, veri ve sözleşme süreçleri.', bullets:['KVKK & sağlık verisi uyumu','Tedarik / hizmet sözleşmeleri','Klinik süreç dokümantasyonu'] },
  { slug:'savunma-sanayi', title:'Savunma Sanayi', intro:'Savunma tedarik zinciri, gizlilik ve ihracat kontrol odaklı hukuki destek.', bullets:['Gizlilik & güvenlik protokolleri','İhracat kontrol uyumu','Tedarik / offset sözleşmeleri'] },
  { slug:'tasma-ve-lojistik', title:'Taşıma ve Lojistik', intro:'Multimodal taşıma, depolama ve dağıtım ağlarında sözleşme ve sorumluluk yönetimi.', bullets:['Taşıma sorumluluk hükümleri','Depolama / SLA yapılandırma','Sigorta & rücu analizleri'] },
  { slug:'turizm', title:'Turizm', intro:'Konaklama, seyahat ve destinasyon hizmetlerinde sözleşme ve tüketici hukuku.', bullets:['Tedarik & hizmet sözleşmeleri','Marka lisanslama','Tüketici şikayet yönetimi'] }
];
