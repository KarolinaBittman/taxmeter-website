import { useState } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedButton from './AnimatedButton'

function LanguageToggle() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('de') ? 'de' : 'en'

  return (
    <motion.div
      className="flex items-center bg-card rounded-lg border border-border overflow-hidden"
      whileHover={{ y: -1, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {['EN', 'DE'].map((lang) => {
        const isActive = currentLang === lang.toLowerCase()
        return (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang.toLowerCase())}
            className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide border-none cursor-pointer transition-colors duration-200 ${
              isActive
                ? 'text-dark'
                : 'text-muted hover:text-text bg-transparent'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="lang-active"
                className="absolute inset-0 bg-accent rounded-md"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{lang}</span>
          </button>
        )
      })}
    </motion.div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('de') ? 'de' : 'en'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  const navLinks = [
    { key: 'features', href: '#features' },
    { key: 'howItWorks', href: '#how-it-works' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-dark/80 border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'backdrop-blur-none bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2.5 no-underline"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.img
            src="/logo.png"
            alt="TaxMeter logo"
            className="w-14 h-14 object-contain"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <span className="text-text font-semibold text-lg tracking-tight">TaxMeter</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <motion.a
              key={key}
              href={href}
              className="text-muted hover:text-text transition-colors text-sm no-underline relative group"
              whileHover={{ y: -1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {t(`nav.${key}`)}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </motion.a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <AnimatedButton href="#download" variant="nav">
            {t('nav.download')}
          </AnimatedButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span className="block w-5 h-0.5 bg-text" animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} />
          <motion.span className="block w-5 h-0.5 bg-text" animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span className="block w-5 h-0.5 bg-text" animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/[0.04] px-6 py-6 flex flex-col gap-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ key, href }, i) => (
              <motion.a
                key={key}
                href={href}
                className="text-muted hover:text-text text-base no-underline"
                onClick={() => setMobileOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {t(`nav.${key}`)}
              </motion.a>
            ))}

            {/* Mobile language toggle */}
            <motion.div
              className="flex items-center gap-3 py-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {['EN', 'DE'].map((lang) => {
                const isActive = currentLang === lang.toLowerCase()
                return (
                  <button
                    key={lang}
                    onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold border-none cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? 'bg-accent text-dark'
                        : 'bg-transparent text-muted hover:text-text'
                    }`}
                  >
                    {lang}
                  </button>
                )
              })}
            </motion.div>

            <motion.a
              href="#download"
              className="bg-accent text-dark font-semibold text-sm px-5 py-2.5 rounded-xl text-center no-underline"
              onClick={() => setMobileOpen(false)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('nav.download')}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
