import Link from 'next/link';
import PageHeader from '../ui/PageHeader';
import { PRACTICE_AREAS } from '../lib/practiceAreas';

export const metadata = { title: 'Uzmanlık Alanları | Hukuk Bürosu' };

export default function AreasPage(){
  return (
    <>
      <PageHeader title="Uzmanlık Alanları" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'Uzmanlık Alanları'}]} subtitle="Temel çalışma ve danışmanlık başlıklarımız." />
      <section className="section" aria-labelledby="areas-title">
        <div className="container">
          <h2 id="areas-title" className="visually-hidden">Liste</h2>
          <div className="areas-grid">
            {PRACTICE_AREAS.map(a => (
              <Link key={a.slug} href={`/uzmanlik/${a.slug}`} className="area-card" aria-label={`${a.title} detay sayfası`}>
                <h3>{a.title}</h3>
                <p className="area-short">{a.short}</p>
                <ul className="area-bullets">{a.odakBasliklar.slice(0,3).map(b => <li key={b}>{b}</li>)}</ul>
                <span className="read-more">Detay »</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
