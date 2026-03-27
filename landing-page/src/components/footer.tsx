const columns = [
  {
    heading: 'PRODUCT',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  },
  {
    heading: 'RESOURCES',
    links: ['Docs', 'API Reference', 'SDK', 'Examples', 'Blog'],
  },
  {
    heading: 'COMPANY',
    links: ['About', 'Research', 'Careers', 'Security', 'Legal'],
  },
  {
    heading: 'CONNECT',
    links: ['GitHub', 'Discord', 'X / Twitter', 'LinkedIn', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <polygon points="10,1 18.5,6 18.5,14 10,19 1.5,14 1.5,6" fill="rgba(37,99,235,0.12)" />
                <polygon points="10,1 18.5,6 18.5,14 10,19 1.5,14 1.5,6" stroke="#2563EB" strokeWidth="1.2" fill="none" />
                <polygon points="10,5.5 14.5,8.5 14.5,12 10,15 5.5,12 5.5,8.5" fill="#2563EB" />
              </svg>
              <span className="font-display font-bold text-ink text-sm">aegis</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Eval infrastructure for AI teams. Stripe for agent reliability.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs uppercase tracking-widest text-muted font-mono mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ink hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-8">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <polygon points="10,1 18.5,6 18.5,14 10,19 1.5,14 1.5,6" stroke="#2563EB" strokeWidth="1.2" fill="none" />
              <polygon points="10,5.5 14.5,8.5 14.5,12 10,15 5.5,12 5.5,8.5" fill="#2563EB" />
            </svg>
            <span className="font-sans font-medium text-ink text-sm">aegis</span>
          </div>
          <p className="text-xs text-muted font-mono">© {new Date().getFullYear()} Aegis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
