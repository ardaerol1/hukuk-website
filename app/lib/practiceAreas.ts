export interface PracticeArea {
  slug: string;
  title: string;
  short: string;        // Liste sayfasında özet cümle
  intro: string[];       // 1-3 paragraf giriş
  odakBasliklar: string[]; // Madde listesi (hizmet kapsam / alt başlıklar)
  typical: { q: string; a: string }[]; // Sık gelen sorular
  metaDesc?: string;     // SEO açıklama override
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'sirketler-ve-ticaret-hukuku',
    title: 'Şirketler ve Ticaret Hukuku',
    short: 'Kuruluş, yapısal işlemler, sözleşmeler ve kurumsal yönetişim desteği.',
    intro: [
      'Şirketlerin kuruluşundan günlük kurumsal işleyişlerine, yapısal değişikliklerden (birleşme, bölünme, hisse devri) stratejik sözleşmelere kadar uçtan uca süreç tasarlıyoruz.',
      'Önleyici yaklaşım ile risklerin erken tespiti, karar alma hızının artırılması ve mevzuata uyum hedeflerini birlikte ele alıyoruz.'
    ],
    odakBasliklar: [
      'Kuruluş, şube & yapılandırma',
      'Ana sözleşme ve pay sahipleri anlaşmaları',
      'Birleşme / devralma ön inceleme (legal due diligence)',
      'Hisse devir süreçleri & kapanış checklist yönetimi',
      'Kurumsal yönetişim ve iç yönergeler',
      'Genel kurul ve yönetim kurulu süreçleri'
    ],
    typical: [
      { q: 'Pay devri sürecinde ilk adım ne olmalı?', a: 'İşlem modelini ve kapanış koşullarını netleştiren kısa bir term sheet ile risk haritası çıkarılmalı.' },
      { q: 'Hangi dokümanlar standartlaşmalı?', a: 'Tekrarlayan ticari sözleşmeler (tedarik, distribütörlük, çerçeve hizmet) versiyon yönetimli şablonlara dönüştürülmeli.' }
    ]
  },
  {
    slug: 'medeni-ve-borclar-hukuku',
    title: 'Medeni ve Borçlar Hukuku',
    short: 'Sözleşme yaşam döngüsü, sorumluluk ve özel hukuk uyuşmazlıklarında çözüm.',
    intro: [
      'Borçlar hukuku çerçevesinde sözleşme tasarımı ve müzakere sürecini işletme hedefleri ile uyumlu hale getiriyoruz.',
      'Uyuşmazlık çıkmadan önce belirsizlik ve yorum risklerini azaltan net hüküm mimarisi oluşturuyoruz.'
    ],
    odakBasliklar: [
      'Sözleşme lifecycle (taslak – müzakere – revizyon)',
      'Risk & yükümlülük matrisi analizleri',
      'Temerrüt ve fesih stratejileri',
      'Tazminat & sorumluluk sınırlandırmaları'
    ],
    typical: [
      { q: 'Standart şablon yeterli mi?', a: 'Kritik ticari modeller için sektör ve taraf konumuna göre özelleştirilmiş hükümler gerekir.' },
      { q: 'Fesih maddesi nasıl dengelenir?', a: 'Objektif tetikleyiciler + makul cure süresi + sonuç hükümleri birlikte kurgulanmalı.' }
    ]
  },
  {
    slug: 'is-ve-sosyal-guvenlik-hukuku',
    title: 'İş ve Sosyal Güvenlik Hukuku',
    short: 'İstihdam döngüsü, iç politika uyumu ve ihtilaf yönetimi.',
    intro: [
      'İşe alımdan iş sözleşmesinin sona ermesine kadar tüm aşamalarda uyumlu, şeffaf ve ölçülebilir süreçler kuruyoruz.',
      'İç düzenlemeler ile operasyonel uygulamalar arasındaki boşlukları kapatmayı hedefliyoruz.'
    ],
    odakBasliklar: [
      'İş sözleşmesi ve yan hak dokümantasyonu',
      'Çalışan verisi & gizlilik protokolleri',
      'Disiplin ve performans yönetimi',
      'Fesih öncesi risk analizi',
      'İşe iade & alacak davaları stratejisi'
    ],
    typical: [
      { q: 'Politika güncellemeleri hangi sıklıkta?', a: 'Regülasyon / iç süreç değişimlerinde yılda en az bir kapsamlı gözden geçirme önerilir.' },
      { q: 'Performans feshi nasıl dokümante edilmeli?', a: 'Önceden belirlenmiş objektif metrikler ve yazılı geri bildirim kayıtları ile.' }
    ]
  },
  {
    slug: 'idare-ve-vergi-hukuku',
    title: 'İdare ve Vergi Hukuku',
    short: 'İdari süreçler, uyum ve vergi uyuşmazlıklarında temsil.',
    intro: [
      'İdari başvuru, izin, lisans ve vergi inceleme süreçlerinde mevzuat takibi ve savunma stratejisini bütünleşik kurguluyoruz.'
    ],
    odakBasliklar: [
      'İdari başvuru & itiraz dosyaları',
      'Vergi tarhiyat ve uzlaşma stratejisi',
      'Uyum / iç kontrol tavsiyeleri',
      'İdari yaptırım savunmaları'
    ],
    typical: [
      { q: 'İnceleme öncesi hazırlık?', a: 'Riskli işlem kategorileri ve doküman erişilebilirliği için iç ön denetim yapılmalı.' }
    ]
  },
  {
    slug: 'fikri-mulkiyet-hukuku',
    title: 'Fikri Mülkiyet Hukuku',
    short: 'Marka, patent, tasarım ve lisans süreçlerinde koruma & strateji.',
    intro: [
      'Portföy oluşturma, tescil, lisans ve ihlal takibinde ticari hedeflerle uyumlu hak stratejisi geliştiriyoruz.'
    ],
    odakBasliklar: [
      'Marka & tasarım tescil planlaması',
      'Lisans / devir sözleşmeleri',
      'İhlal ve itiraz süreçleri',
      'Ticari sır koruma protokolleri'
    ],
    typical: [
      { q: 'Ön araştırma gerekli mi?', a: 'Başvuru maliyetinden önce ayırt edicilik ve risk analizi tasarruf sağlar.' }
    ]
  },
  {
    slug: 'rekabet-hukuku',
    title: 'Rekabet Hukuku',
    short: 'Uyum programları ve otorite süreçlerinde destek.',
    intro: [
      'Dağıtım modelleri, dikey anlaşmalar ve bilgi paylaşım süreçlerinde rekabet risklerini haritalıyoruz.'
    ],
    odakBasliklar: [
      'Uyum politikası & eğitim',
      'Ön inceleme (dawn raid) hazırlığı',
      'Muafiyet & izin başvuruları',
      'İnceleme sonrası savunma stratejisi'
    ],
    typical: [
      { q: 'Dawn raid ilk adım?', a: 'Önceden tanımlı iç iletişim zinciri ve kayıt altı protokolü tetiklenmeli.' }
    ]
  },
  {
    slug: 'icra-ve-iflas-hukuku',
    title: 'İcra ve İflas Hukuku',
    short: 'Alacak tahsil stratejisi ve yeniden yapılandırma.',
    intro: [
      'Alacak tahsilinde hız, masraf optimizasyonu ve teminat değerinin korunmasına odaklanıyoruz.'
    ],
    odakBasliklar: [
      'Takip türü seçimi & yol haritası',
      'Önleyici teminat analizi',
      'İtiraz / şikayet süreçleri',
      'Yapılandırma & uzlaşma görüşmeleri'
    ],
    typical: [
      { q: 'Hangi takip öncelik verilmeli?', a: 'Teminatlı alacaklarda hızlı kıymet kaybı riski varsa haciz / rehin paraya çevirme önceliklenir.' }
    ]
  },
  {
    slug: 'kvkk',
    title: 'Kişisel Verilerin Korunması (KVKK)',
    short: 'Veri envanteri, uyum projeleri ve sürekli iyileştirme.',
    intro: [
      'Veri işleme faaliyetlerini haritalayarak hukuki dayanak, saklama süresi ve risk skorlarını ilişkilendiriyoruz.'
    ],
    odakBasliklar: [
      'Veri envanteri & süreç haritalama',
      'Aydınlatma & açık rıza dokümantasyonu',
      'Politika ve prosedür setleri',
      'İhlal müdahale planları'
    ],
    typical: [
      { q: 'Envanterin güncelleme periyodu?', a: 'Yeni sistem / süreç devreye girişlerinde ve yılda en az bir kez tam güncelleme yapılmalı.' }
    ]
  }
];

export const PRACTICE_AREA_MAP: Record<string, PracticeArea> = Object.fromEntries(
  PRACTICE_AREAS.map(a => [a.slug, a])
);
