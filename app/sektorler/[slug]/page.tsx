import { notFound } from 'next/navigation';
import PageHeader from '../../ui/PageHeader';
import { SECTORS } from '../../lib/constants';

const MAP = Object.fromEntries(SECTORS.map(s => [s.slug, s]));

export function generateStaticParams(){
  return SECTORS.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params:{slug:string} }){
  const data = MAP[params.slug];
  if(!data) return {} as any;
  return { title: `${data.title} | Sektörler`, description: data.intro };
}

export default function SectorDetail({ params }: { params:{slug:string} }){
  const data = MAP[params.slug];
  if(!data) notFound();
  return (
    <>
      <PageHeader title={data.title} crumbs={[{href:'/',label:'Ana Sayfa'},{href:'/sektorler',label:'Sektörler'},{label:data.title}]} subtitle={data.intro} />
      <section className="section" aria-labelledby="sector-title">
        <div className="container">
          <h2 id="sector-title" className="visually-hidden">{data.title} İçerik</h2>
          <p>{data.intro}</p>
          <h3>Odak Konular</h3>
          <ul>{data.bullets.map(b => <li key={b}>{b}</li>)}</ul>
          <h3>Yaklaşım</h3>
          <p>Bu sektörde sözleşme mimarisi, regülasyon uyumu ve risk önceliklendirme bakış açısıyla entegre ilerliyoruz.</p>
        </div>
      </section>
    </>
  );
}
