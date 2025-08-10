import PageHeader from '../ui/PageHeader';
import Image from 'next/image';

interface Member { name:string; role:string; langs:string[]; photo:string; education:string[]; barYear:number; email:string }

const MEMBERS: Member[] = [
  { name:'Av. Örnek Kişi', role:'Kurucu Ortak', langs:['TR','EN'], photo:'/members/lawyer1.jpg', education:['İstanbul Üniversitesi Hukuk Fakültesi','Galatasaray Üniversitesi (LL.M)'], barYear:2012, email:'ornek@domain.com' },
  { name:'Av. İkinci Üye', role:'Kıdemli Avukat', langs:['TR','EN','DE'], photo:'/members/lawyer2.jpg', education:['Ankara Üniversitesi Hukuk Fakültesi'], barYear:2015, email:'ikinci@domain.com' },
  { name:'Av. Genç Uzman', role:'Avukat', langs:['TR','EN'], photo:'/members/lawyer3.jpg', education:['Marmara Üniversitesi Hukuk Fakültesi'], barYear:2021, email:'genc@domain.com' }
];

export const metadata = { title: 'Ekip | Hukuk Bürosu' };

export default function TeamPage(){
  return (
    <>
      <PageHeader title="Ekip" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'Ekip'}]} subtitle="Uzman kadromuz." />
      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <h2 id="team-title" className="visually-hidden">Liste</h2>
      <ul className="team-list">
            {MEMBERS.map(m => (
        <li key={m.name} className="team-item">
                <div className="team-photo-box">
                  <Image src={m.photo} alt={m.name} width={240} height={320} />
                </div>
                <div className="team-body">
                  <h3 className="team-name">{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                  <p className="team-label">Eğitim</p>
                  <ul className="team-edu">
                    {m.education.map(ed => <li key={ed}>{ed}</li>)}
                  </ul>
                  <p className="team-meta">Yabancı Diller: {m.langs.join(', ')}</p>
                  <p className="team-meta">Baroya Kayıt: {m.barYear}</p>
                  <p className="team-meta">E-posta: <a href={`mailto:${m.email}`}>{m.email}</a></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
