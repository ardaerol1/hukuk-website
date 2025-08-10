"use client";
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

interface Item { href: string; label: string; cta?: boolean }
interface Props { items: Item[]; initialDark: boolean }

const BREAKPOINT = 972; // px

export default function NavMenu({ items, initialDark }: Props){
  const [open,setOpen] = useState(false);
  const [ready,setReady] = useState(false);
  useEffect(()=>{
    function onKey(e:KeyboardEvent){ if(e.key==='Escape') setOpen(false); }
    function onResize(){ if(window.innerWidth > BREAKPOINT && open){ setOpen(false); } }
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    // Hydration sonrası animasyonların ilk frame'de tetiklenmemesi için ready bayrağı
    requestAnimationFrame(()=> setReady(true));
    return ()=> { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  },[open]);
  function handleLinkClick(){ setOpen(false); }
  return (
    <nav aria-label="Ana menü" className="nav-root">
      <button type="button" className="main-nav-toggle" aria-expanded={open} aria-controls="site-main-nav" onClick={()=>setOpen(o=>!o)}>
        <span className="bars" aria-hidden="true"><span></span><span></span><span></span></span>
        <span className="label">Menü</span>
      </button>
  <div id="site-main-nav" className={`main-nav-wrapper${open ? ' open':''}${!ready ? ' pre-init':''}`}>
        <ul className="main-nav">
          {items.map(i => (
            <li key={i.href}>
              <a href={i.href} className={i.cta ? 'cta' : undefined} onClick={handleLinkClick}>{i.label}</a>
            </li>
          ))}
          <li className="dark-li"><DarkModeToggle variant="nav" initialDark={initialDark} /></li>
        </ul>
      </div>
    </nav>
  );
}
