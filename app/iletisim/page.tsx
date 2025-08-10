import ContactForm from './ContactForm';
import PageHeader from '../ui/PageHeader';
import { CONTACT_INFO } from '../lib/constants';

export const metadata = { title: 'İletişim | Hukuk Bürosu' };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="İletişim" crumbs={[{href:'/',label:'Ana Sayfa'},{label:'İletişim'}]} subtitle="Talebinizi güvenli şekilde iletin." />
      <section className="section" aria-labelledby="page-title">
        <div className="container">
          <h2 id="page-title" className="visually-hidden">İletişim Formu ve Bilgiler</h2>
          <div className="contact-layout">
            <div className="contact-left">
              <p>Form üzerinden ilettiğiniz bilgiler yalnızca talebinizin değerlendirilmesi amacıyla işlenir.</p>
              <ContactForm />
            </div>
            <aside className="contact-info" aria-labelledby="info-title">
              <h3 id="info-title">İletişim Bilgileri</h3>
              <ul className="contact-list">
                <li><strong>Adres:</strong><br />{CONTACT_INFO.address}</li>
                <li><strong>Telefon:</strong><br /><a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g,'')}`}>{CONTACT_INFO.phone}</a></li>
                <li><strong>E-posta:</strong><br /><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
