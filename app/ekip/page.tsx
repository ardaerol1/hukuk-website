import PageHeader from '../ui/PageHeader';
import Image from 'next/image';

interface Member { name:string; role:string; langs:string[]; photo:string; education:string[]; barYear:number; email:string }

const MEMBERS: Member[] = [
  { name:'Av. Örnek Kişi', role:'Kurucu Ortak', langs:['TR','EN'], photo:'/members/placeholder.jpg', education:['İstanbul Üniversitesi Hukuk Fakültesi','Galatasaray Üniversitesi (LL.M)'], barYear:2012, email:'ornek@domain.com' },
  { name:'Av. İkinci Üye', role:'Kıdemli Avukat', langs:['TR','EN','DE'], photo:'/members/placeholder.jpg', education:['Ankara Üniversitesi Hukuk Fakültesi'], barYear:2015, email:'ikinci@domain.com' },
  { name:'Av. Genç Uzman', role:'Avukat', langs:['TR','EN'], photo:'/members/placeholder.jpg', education:['Marmara Üniversitesi Hukuk Fakültesi'], barYear:2021, email:'genc@domain.com' }
];

export const metadata = { title: 'Ekip | Hukuk Bürosu' };

export default function TeamPage(){
  return (
    <>
      <PageHeader title="Ekip" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'Ekip'}]} subtitle="Uzman kadromuz." />
      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <h2 id="team-title" className="visually-hidden">Liste</h2>
          <ul className="team-list" style={{listStyle:'none',padding:0,margin:'1.5rem 0',display:'flex',flexDirection:'column',gap:'1.25rem'}}>
            {MEMBERS.map(m => (
              <li key={m.name} className="team-item" style={{display:'flex',gap:'1rem',alignItems:'flex-start',background:'var(--surface)',border:'1px solid var(--border)',padding:'1rem 1.1rem',borderRadius:'14px'}}>
                <Image src={m.photo} alt={m.name} width={72} height={72} style={{borderRadius:'50%',objectFit:'cover',flexShrink:0}} />
                <div>
                  <h3 style={{margin:'0 0 .35rem',fontSize:'1.05rem'}}>{m.name}</h3>
                  <p style={{margin:'0 0 .5rem',fontSize:'.85rem',fontWeight:600,color:'var(--brand)'}}>{m.role}</p>
                  <p style={{margin:'0 0 .35rem',fontSize:'.75rem',fontWeight:600}}>Eğitim:</p>
                  <ul style={{margin:'0 0 .55rem',paddingLeft:'1.1rem',fontSize:'.75rem'}}>
                    {m.education.map(ed => <li key={ed}>{ed}</li>)}
                  </ul>
                  <p style={{margin:'0 0 .3rem',fontSize:'.75rem',color:'var(--text-muted)'}}>Yabancı Diller: {m.langs.join(', ')}</p>
                  <p style={{margin:'0 0 .3rem',fontSize:'.75rem'}}>Baroya Kayıt: {m.barYear}</p>
                  <p style={{margin:0,fontSize:'.75rem'}}>E-posta: <a href={`mailto:${m.email}`}>{m.email}</a></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
