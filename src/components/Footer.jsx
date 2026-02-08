export default function Footer() {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: 'mailto:hello@taxmeter.ch' },
  ]

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="TaxMeter logo" className="w-8 h-8 object-contain" />
            <span className="text-muted text-sm">TaxMeter · Made in Zürich 🇨🇭</span>
          </div>

          {/* Center — nav links */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted text-sm hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — email */}
          <a
            href="mailto:hello@taxmeter.ch"
            className="text-muted text-sm hover:text-accent transition-colors"
          >
            hello@taxmeter.ch
          </a>
        </div>
      </div>

      {/* Disclaimer bar */}
      <div className="border-t border-border py-6 px-6 md:px-8">
        <p className="max-w-6xl mx-auto text-xs leading-relaxed text-center" style={{ color: '#586280' }}>
          Disclaimer: TaxMeter is for informational purposes only and does not constitute tax, legal, or financial advice. Tax calculations are estimates based on publicly available ZH cantonal tax tables and may differ from your actual tax assessment. Always consult a qualified Treuhänder or tax advisor for your specific situation. © 2026 TaxMeter.
        </p>
      </div>
    </footer>
  )
}
