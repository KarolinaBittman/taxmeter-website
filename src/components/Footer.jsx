import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { label: t('footer.features'), href: '#features' },
    { label: t('footer.privacy'), href: '#privacy' },
    { label: t('footer.faq'), href: '#faq' },
    { label: t('footer.support'), href: 'mailto:hello@taxmeter.ch' },
  ]

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="TaxMeter logo" className="w-8 h-8 object-contain" />
            <span className="text-muted text-sm">{t('footer.tagline')} 🇨🇭</span>
          </div>

          {/* Center — nav links */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
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
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  )
}
