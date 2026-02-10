import Section from './Section'
import { motion } from 'framer-motion'
import { AlertTriangle, FileQuestion, QrCode } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const icons = [AlertTriangle, FileQuestion, QrCode]

export default function Problem() {
  const { t } = useTranslation()
  const cards = t('problem.cards', { returnObjects: true })

  return (
    <Section id="problem">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('problem.headline')}
        </motion.h2>
        <motion.p
          className="text-muted text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('problem.subheading')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((item, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={i}
              className="group bg-card rounded-2xl p-8 border border-transparent hover:border-accent/10 transition-colors duration-500"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
            >
              <div className="mb-5 inline-block transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1">
                <Icon className="w-7 h-7 text-muted group-hover:text-accent transition-colors duration-300 ease-in-out" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">{item.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
