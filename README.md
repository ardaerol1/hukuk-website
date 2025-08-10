# Hukuk Bürosu Web Sitesi (Next.js App Router)

Kurumsal bir hukuk bürosu için modern, erişilebilir ve SEO odaklı web sitesi iskeleti. Next.js 14 (App Router) + TypeScript kullanır.

## Öne Çıkan Özellikler
- Sayfalar: Ana Sayfa, Hakkımızda, Uzmanlık Alanları (liste + dinamik detay), Sektörler (liste + dinamik detay), Ekip, KVKK, Yasal Uyarı, İletişim
- Dinamik route'lar: `/uzmanlik/[slug]`, `/sektorler/[slug]`
- Yapısal veri (JSON-LD: LegalService) + dinamik `sitemap.xml` + `robots.txt`
- Işık / Karanlık tema (cookie + FOUC önleyici inline script) ve erişilebilirlik (skip link, breadcrumb, semantic HTML)
- Veri katmanı: Ayrı TypeScript dosyalarında uzmanlık ve sektör veri setleri
- İletişim formu: Basit doğrulama + honeypot alanı (spam azaltma)
- Duyarlı (responsive) tasarım, modern tipografi, vurgulu call‑to‑action blokları
- Tek CSS dosyasında tasarım tokenları ve bileşen stilleri

## Proje Kurulumu
```bash
npm install
npm run dev
```
Tarayıcı: http://localhost:3000

## Komutlar
| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm start` | Build sonrası çalıştırma |
| `npm run lint` | (Eklenirse) Lint kontrolü |

## Klasör Yapısı (Özet)
```
app/
  layout.tsx          -> Global layout, tema scripti, navigasyon
  page.tsx            -> Ana sayfa (hero, about, CTA, uzmanlık, neden biz, sektörler)
  globals.css         -> Tasarım tokenları ve tüm stiller
  lib/
    practiceAreas.ts  -> Uzmanlık veri seti
    constants.ts      -> Site adı, iletişim bilgisi, sektör verileri, sabitler
  uzmanlik/[slug]/    -> Dinamik uzmanlık detay sayfaları
  sektorler/[slug]/   -> Dinamik sektör detay sayfaları
  ekip/               -> Ekip sayfası
  hakkimizda/         -> Hakkımızda sayfası
  iletisim/           -> İletişim + form bileşeni
  kvkk/ / yasal-uyari/ -> Yasal metinler
  sitemap.xml/route.ts -> Dinamik site haritası
  robots.txt/route.ts  -> Robots çıktısı
public/
  members/            -> Görseller (ekip placeholder vs.)
```

## Tema (Dark Mode)
- Kullanıcı tercihi `pref-theme` cookie + localStorage fallback
- İlk boyamada inline script ile sınıf eklenerek flicker engellenir

## Veri Yapısı Örnekleri
Uzmanlık ve sektörler TypeScript objeleri olarak saklanır; `generateStaticParams` ile statik ön üretim yapılabilir.

## Çevre Değişkenleri
Şu an zorunlu `.env` alanı yok. E-posta / SMTP entegrasyonu eklerken örn:
```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```
`app/api/contact/route.ts` içinde kullanılabilir (geliştirilecek).

## Geliştirme Notları
- Blog ve SSS (FAQ) konseptleri çıkarıldı; repo geçmişinde varsa artık kullanılmıyor.
- Liste & kart bileşenleri erişilebilir (role, aria-label) şekilde işaretlendi.
- İleri adımlar: Mobil menü (hamburger), form backend entegrasyonu, ek Schema.org (BreadcrumbList), içerik revizyonu.

## Dağıtım (Deployment)
1. `npm run build`
2. Vercel önerilir (App Router native destek). Veya Node barındırma: `npm start`
3. Cache / Edge optimizasyonları: Varsayılan Next.js davranışı (statik + dinamik karışık).

## Lisans
Bu iskelet projeyi kendi kurumsal siteniz için uyarlayabilirsiniz. Metin içerikleri örnek / placeholder niteliğindedir.

---
Tüm içerikler genel bilgilendirme niteliğindedir; hukuki görüş değildir.
