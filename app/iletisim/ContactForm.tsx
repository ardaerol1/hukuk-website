'use client';
import { useState } from 'react';
import { CONTACT_NOTICE } from '../lib/constants';
export default function ContactForm(){
  const [status,setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget; const fd = new FormData(form);
    if(fd.get('hp-field')) return; // honeypot bot koruması
    setStatus('sending');
    try {
      const res = await fetch('/api/contact',{ method:'POST', body: fd });
      if(!res.ok) throw new Error('err');
      setStatus('sent'); form.reset();
    } catch { setStatus('error'); }
  }
  return (
    <form className="form contact-form" onSubmit={handleSubmit} aria-describedby="contact-disclaimer" autoComplete="on">
      <div className="honeypot" aria-hidden="true" style={{position:'absolute', left:'-5000px'}}>
        <input name="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>
      <label>Ad Soyad<input name="name" required maxLength={120} autoComplete="name" /></label>
      <label>E-posta<input name="email" type="email" required maxLength={160} autoComplete="email" /></label>
      <label>Telefon<input name="phone" type="tel" pattern="[0-9+\s()-]{6,}" maxLength={30} autoComplete="tel" /></label>
      <label>Konu<input name="subject" required maxLength={140} autoComplete="off" /></label>
      <label>Mesaj<textarea name="message" required maxLength={2000} rows={6} autoComplete="off"></textarea></label>
      <div className="kvkk-inline">
        <input id="kvkk-ok" type="checkbox" required />
        <label htmlFor="kvkk-ok">KVKK aydınlatma metnini okudum.</label>
      </div>
      <button disabled={status==='sending'}>{status==='sending' ? 'Gönderiliyor…' : 'Gönder'}</button>
      {status==='sent' && <p role="status" className="form-success">Talebiniz alındı.</p>}
      {status==='error' && <p role="alert" className="form-error">Gönderilirken sorun oluştu.</p>}
      <p id="contact-disclaimer" className="form-disclaimer">{CONTACT_NOTICE}</p>
    </form>
  );
}
