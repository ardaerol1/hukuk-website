'use client';
import { useEffect, useState } from 'react';

interface Props { variant?: 'nav'; initialDark?: boolean }

export default function DarkModeToggle({ variant, initialDark }: Props){
  const [mounted,setMounted] = useState(false);
  const [isDark,setIsDark] = useState(!!initialDark);

  useEffect(()=>{ 
    setMounted(true); 
    try {
      const doc = document.documentElement;
      // Eğer SSR'da class zaten varsa yeniden ekleme.
      const stored = localStorage.getItem('pref-theme');
      const cookieMatch = document.cookie.match(/(^| )pref-theme=([^;]+)/);
      const cookieVal = cookieMatch?cookieMatch[2]:null;
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const dark = (cookieVal === 'dark') || (stored === 'dark') || (!cookieVal && !stored && prefers);
      if(dark){ doc.classList.add('dark'); setIsDark(true); }
      else if(!dark){ doc.classList.remove('dark'); setIsDark(false); }
    } catch(e) {}
  },[]);

  function toggle(){
    const doc = document.documentElement;
    const willDark = !doc.classList.contains('dark');
    doc.classList.toggle('dark');
    localStorage.setItem('pref-theme', willDark ? 'dark' : 'light');
    // cookie (1 yıl)
    try { document.cookie = `pref-theme=${willDark ? 'dark':'light'}; path=/; max-age=${60*60*24*365}`; } catch(e) {}
    setIsDark(willDark);
  }

  const cls = variant === 'nav' ? 'dark-toggle nav' : 'dark-toggle';
  const label = isDark ? 'Aydınlık moda geç' : 'Karanlık moda geç';
  return (
    <button type="button" className={cls} aria-label={label} title={label} onClick={toggle} data-mode={isDark ? 'dark':'light'}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
function MoonIcon(){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
    </svg>
  );
}
