import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Section from './Section'

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer"
        onClick={onToggle}
      >
        <span className="text-text font-medium text-base pr-4">{q}</span>
        <motion.span
          className="text-muted text-xl shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-muted text-[15px] leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true })

  return (
    <Section id="faq">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          {t('faq.headline')}
        </h2>
        <div>
          {items.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
