import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedButton from './AnimatedButton'

const textReveal = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, -3])
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7], [0.2, 0])

  const stats = [
    { value: '95%', label: t('hero.stats.accuracy') },
    { value: '2026', label: t('hero.stats.ready') },
    { value: '20+', label: t('hero.stats.municipalities') },
  ]

  return (
    <section
      ref={ref}
      className="relative lg:min-h-screen lg:flex lg:items-center"
      style={{
        background: '#0C0F1A',
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 70% 80%, rgba(78, 205, 196, 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 30% 90%, rgba(155, 127, 184, 0.06) 0%, transparent 50%)',
        overflow: 'visible',
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(78,205,196,0.3) 0%, rgba(78,205,196,0.05) 40%, transparent 70%)',
          filter: 'blur(80px)',
          scale: glowScale,
          opacity: glowOpacity,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main grid — single column below 1024px, two columns above */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full px-6 sm:px-8 lg:px-16 pt-[120px] pb-16 lg:pb-0">
        {/* Text column */}
        <motion.div initial="hidden" animate="visible" className="max-lg:text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-accent/10"
            variants={textReveal}
            custom={0}
            whileHover={{ scale: 1.05, borderColor: 'rgba(78,205,196,0.3)' }}
          >
            <span>🇨🇭</span> {t('hero.badge')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-[80px] font-bold text-text leading-[1.05] tracking-tight mb-6"
            variants={textReveal}
            custom={1}
          >
            {t('hero.headline')}{' '}
            <motion.span
              className="text-accent inline-block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {t('hero.headlineAccent')}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mb-10 max-lg:mx-auto"
            variants={textReveal}
            custom={2}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10 max-lg:justify-center max-sm:items-stretch"
            variants={textReveal}
            custom={3}
          >
            <AnimatedButton href="#download" variant="primary">
              {t('hero.ctaPrimary')}
            </AnimatedButton>
            <AnimatedButton href="#how-it-works" variant="ghost">
              {t('hero.ctaSecondary')} <span className="text-muted">↓</span>
            </AnimatedButton>
          </motion.div>

          {/* Trust line */}
          <motion.p
            className="text-muted text-sm flex items-center gap-2 mb-12 max-lg:justify-center"
            variants={textReveal}
            custom={4}
          >
            <motion.svg
              className="w-4 h-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </motion.svg>
            {t('hero.trustLine')}
          </motion.p>

          {/* Stats */}
          <motion.div className="flex gap-8 sm:gap-10 lg:gap-14 max-lg:justify-center" variants={textReveal} custom={5}>
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1, type: 'spring' }}
              >
                <p className="font-mono text-xl sm:text-2xl lg:text-3xl font-semibold text-text">{value}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* iPhone mockup */}
        <motion.div
          className="flex justify-center items-center relative mt-10 lg:mt-0"
          style={{ overflow: 'visible' }}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Glow behind phone */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(78,205,196,0.12) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            style={{ y: phoneY, rotate: phoneRotate }}
            className="relative flex items-center justify-center"
          >
            <motion.img
              src="/iphone-mockup.png"
              alt="TaxMeter app dashboard showing tax reserve of 3,884 CHF"
              className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none lg:w-auto h-auto relative z-10"
              style={{
                maxHeight: '580px',
                transform: 'rotate(2deg)',
                filter: 'drop-shadow(0 20px 40px rgba(78,205,196,0.12))',
              }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
          animate={{ borderColor: ['rgba(255,255,255,0.1)', 'rgba(78,205,196,0.3)', 'rgba(255,255,255,0.1)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-accent/60 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
