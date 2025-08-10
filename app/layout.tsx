import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Open_Sans, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { SITE_NAME, DISCLAIMER, CONTACT_INFO, SOCIAL_LINKS } from './lib/constants';
import { cookies } from 'next/headers';
import NavMenu from './ui/NavMenu';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: `${SITE_NAME} | Stratejik Hukuki Çözüm Ortağınız`,
  description: 'İşletmenizin hukuki ihtiyaçlarına stratejik ve güvenilir çözümler sunan uzman hukuk bürosu. (Genel bilgilendirme, hukuki danışmanlık değildir.)',
  metadataBase: new URL('https://www.ornek-domain.com'),
  openGraph: {
    title: 'Stratejik Hukuki Çözüm Ortağınız',
    description: 'Kurumsal, güven veren hukuk bürosu web sitesi.',
    url: 'https://www.ornek-domain.com',
    siteName: SITE_NAME,
    locale: 'tr_TR',
    type: 'website'
  },
  other: { hreflang: 'tr-TR' }
};

const MAIN_NAV = [
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/uzmanlik', label: 'Uzmanlık Alanları' },
  { href: '/sektorler', label: 'Sektörler' },
  { href: '/ekip', label: 'Ekip' },
  { href: '/iletisim', label: 'Danışmanlık Talep Et', cta: true }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  const themeCookie = cookies().get('pref-theme')?.value;
  const themeClass = themeCookie === 'dark' ? 'dark' : '';
  const initialDark = themeCookie === 'dark';
  return (
    <html lang="tr" className={`${openSans.variable} ${playfair.variable} ${themeClass}`}> 
      <head>
        {/* Hızlı inline script (cookie yoksa localStorage fallback) */}
        <script dangerouslySetInnerHTML={{__html:`(function(){try{var c=document.cookie.match(/(^| )pref-theme=([^;]+)/);var cv=c?c[2]:null;var ls=localStorage.getItem('pref-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var useDark=(cv==='dark')||( !cv && ls==='dark')||(!cv && !ls && m);if(useDark)document.documentElement.classList.add('dark');}catch(e){}})();`}} />
        {/* JSON-LD script */}
        <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: SITE_NAME,
          image: 'https://www.ornek-domain.com/logo.png',
          url: 'https://www.ornek-domain.com',
          address: { '@type': 'PostalAddress', addressCountry: 'TR' },
          areaServed: 'TR'
        }) }} />
      </head>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo" aria-label="Ana Sayfa">{SITE_NAME}</a>
            <NavMenu items={MAIN_NAV} initialDark={initialDark} />
          </div>
        </header>
        <main id="icerik" tabIndex={-1}>{children}</main>
        <footer className="site-footer">
          <div className="col">
            <p>© {new Date().getFullYear()} {SITE_NAME}. {DISCLAIMER}</p>
            <address style={{fontStyle:'normal', lineHeight:1.4}}>
              {CONTACT_INFO.address}<br/>
              Tel: <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g,'')}`}>{CONTACT_INFO.phone}</a> · E-posta: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </address>
            <nav aria-label="Alt menü">
              <a href="/kvkk">KVKK</a> · <a href="/yasal-uyari">Yasal Uyarı</a> · <a href="/cerez-politikasi">Çerez Politikası</a>
            </nav>
            <ul style={{listStyle:'none',display:'flex',gap:'0.75rem',padding:0,margin:'0.75rem 0 0'}} aria-label="Sosyal medya">
              {SOCIAL_LINKS.map(s => <li key={s.name}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.name}</a></li>)}
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
