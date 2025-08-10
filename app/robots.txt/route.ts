function baseUrl(){
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if(envUrl) return envUrl.replace(/\/$/,'');
  const vercel = process.env.VERCEL_URL?.trim();
  if(vercel) return `https://${vercel.replace(/\/$/,'')}`;
  return 'http://localhost:3000';
}

export function GET(){
  const b = baseUrl();
  const body = [`User-agent: *`,`Allow: /`,`Sitemap: ${b}/sitemap.xml`].join('\n');
  return new Response(body,{ headers:{'Content-Type':'text/plain'} });
}
