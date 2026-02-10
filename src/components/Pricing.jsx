import Section from './Section'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedButton from './AnimatedButton'

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <Section id="download" className="text-center relative">
      {/* Background accent glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(78,205,196,0.06) 0%, transparent 50%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.h2
        className="text-3xl md:text-5xl font-bold text-text mb-4 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('pricing.headline')}
      </motion.h2>
      <motion.p
        className="text-muted text-lg mb-3 max-w-lg mx-auto relative"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t('pricing.subheading')}
      </motion.p>
      <motion.p
        className="text-accent font-semibold text-lg mb-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t('pricing.highlight')}
      </motion.p>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <AnimatedButton href="#" variant="large">
          {t('pricing.cta')}
        </AnimatedButton>
      </motion.div>
    </Section>
  )
}
