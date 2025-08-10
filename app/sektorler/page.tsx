import PageHeader from '../ui/PageHeader';
import Link from 'next/link';
import { SECTORS, Sector } from '../lib/constants';

export const metadata = { title: 'Sektörler | Hukuk Bürosu' };

export default function SectorsPage(){
  return (
    <>
      <PageHeader title="Sektörler" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'Sektörler'}]} subtitle="Hizmet verdiğimiz ana endüstri dikeyleri." />
      <section className="section" aria-labelledby="sectors-title">
        <div className="container">
          <h2 id="sectors-title" className="visually-hidden">Liste</h2>
          <div className="areas-grid">
            {SECTORS.map(s => (
              <Link key={s.slug} href={`/sektorler/${s.slug}`} className="area-card" aria-label={`${s.title} sektör detayı`}>
                <h3>{s.title}</h3>
                <p className="area-short">{s.intro}</p>
                <ul className="area-bullets">{s.bullets.slice(0,3).map(b => <li key={b}>{b}</li>)}</ul>
                <span className="read-more">Detay »</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
