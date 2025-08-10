import { notFound, redirect } from 'next/navigation';
import PageHeader from '../../ui/PageHeader';
import { PRACTICE_AREA_MAP, PRACTICE_AREAS } from '../../lib/practiceAreas';

interface Params { params: { slug: string } }

// Eski / alternatif kısa slug'lar için eşlemeler
const ALIASES: Record<string,string> = {
  'ticaret-hukuku': 'sirketler-ve-ticaret-hukuku',
  'sirketler-hukuku': 'sirketler-ve-ticaret-hukuku',
  'fikri-ve-sinai-haklar': 'fikri-mulkiyet-hukuku',
  'kvkk': 'kvkk'
};

export function generateStaticParams(){
  return PRACTICE_AREAS.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params) {
  const real = ALIASES[params.slug] || params.slug;
  const data = PRACTICE_AREA_MAP[real];
  if (!data) return {} as any;
  return { title: `${data.title} | Hukuk Bürosu`, description: data.metaDesc || data.short };
}

export default function AreaDetail({ params }: Params) {
  const real = ALIASES[params.slug] || params.slug;
  if (ALIASES[params.slug] && ALIASES[params.slug] !== params.slug) {
    redirect(`/uzmanlik/${real}`);
  }
  const data = PRACTICE_AREA_MAP[real];
  if (!data) notFound();
  return (
    <>
      <PageHeader title={data.title} crumbs={[{href:'/',label:'Ana Sayfa'},{href:'/uzmanlik',label:'Uzmanlık Alanları'},{label:data.title}]} subtitle={data.short} />
      <section className="section" aria-labelledby="area-title">
        <div className="container">
          <h2 id="area-title" className="visually-hidden">{data.title} İçerik</h2>
          {data.intro.map(p => <p key={p}>{p}</p>)}
          <h3>Odak Başlıklar</h3>
            <ul>{data.odakBasliklar.map(t => <li key={t}>{t}</li>)}</ul>
          <h3>Sık Sorulanlar</h3>
          <dl>
            {data.typical.map(item => (
              <div key={item.q}><dt>{item.q}</dt><dd>{item.a}</dd></div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
