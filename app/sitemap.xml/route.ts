import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://www.ornek-domain.com'; const paths = ['/', '/hakkimizda','/uzmanlik','/sektorler','/ekip','/kvkk','/yasal-uyari','/iletisim']; return paths.map(p => ({ url: base + p, lastModified: new Date() })); }
