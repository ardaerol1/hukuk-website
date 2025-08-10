import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
  const formData = await req.formData();
  if(formData.get('hp-field')) return NextResponse.json({ ok:true });
  const name = (formData.get('name')||'').toString().trim();
  const email = (formData.get('email')||'').toString().trim();
  const subject = (formData.get('subject')||'').toString().trim();
  const message = (formData.get('message')||'').toString().trim();
  if(!name || !email || !subject || !message) return NextResponse.json({ error:'invalid'}, { status:400 });
  // TODO: Integrate with email service (e.g., Resend / SES) securely
  console.log('CONTACT_FORM', { name, email, subject, len: message.length });
  return NextResponse.json({ ok:true });
}
