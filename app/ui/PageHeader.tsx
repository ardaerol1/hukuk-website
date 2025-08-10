import React from 'react';

interface Crumb { href?: string; label: string }
interface PageHeaderProps { title: string; crumbs: Crumb[]; subtitle?: string }

export default function PageHeader({ title, crumbs, subtitle }: PageHeaderProps) {
  return (
    <div className="page-head" role="banner">
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          <ol className="breadcrumbs">
            {crumbs.map((c,i) => (
              <li key={i} className={i === crumbs.length -1 ? 'current' : undefined}>
                {c.href && i !== crumbs.length -1 ? <a href={c.href}>{c.label}</a> : <span aria-current={i === crumbs.length -1 ? 'page': undefined}>{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
