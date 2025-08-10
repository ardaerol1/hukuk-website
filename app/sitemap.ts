import { MetadataRoute } from 'next';
import { PRACTICE_AREAS } from './lib/practiceAreas';
import { SECTORS } from './lib/constants';

// Base URL öncelik sırası: NEXT_PUBLIC_SITE_URL > VERCEL_URL > localhost
function getBaseUrl(){
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if(envUrl) return envUrl.replace(/\/$/,'');
  const vercel = process.env.VERCEL_URL?.trim();
  if(vercel) return `https://${vercel.replace(/\/$/,'')}`;
  return 'http://localhost:3000';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = getBaseUrl();
  const staticRoutes = [
    '/', '/hakkimizda', '/uzmanlik', '/sektorler', '/ekip', '/kvkk', '/yasal-uyari', '/iletisim'
  ];
  const dynamicAreaRoutes = PRACTICE_AREAS.map(a => `/uzmanlik/${a.slug}`);
  const dynamicSectorRoutes = SECTORS.map(s => `/sektorler/${s.slug}`);
  const now = new Date();
  return [...staticRoutes, ...dynamicAreaRoutes, ...dynamicSectorRoutes].map(p => ({ url: BASE_URL + p, lastModified: now }));
}
