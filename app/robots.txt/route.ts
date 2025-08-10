export function GET(){
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://www.ornek-domain.com/sitemap.xml` ,{ headers:{'Content-Type':'text/plain'} });
}
