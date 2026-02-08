import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'

const faqs = [
  {
    q: 'How accurate are the tax calculations?',
    a: 'TaxMeter.ch uses official cantonal and municipal tax rates for Canton Zürich, updated annually. Our engine accounts for AHV/IV contributions (14.3%), cantonal income tax, municipal multipliers (Steuerfüsse), and federal direct tax. Current accuracy is 95% across supported municipalities.',
  },
  {
    q: 'Which regions are supported?',
    a: 'Optimized for the 20+ largest municipalities in Canton Zurich — including Zürich, Winterthur, Uster, Dübendorf, Dietikon, Wädenswil, Horgen, Bülach, Kloten, Opfikon, Illnau-Effretikon, Volketswil, Adliswil, Wetzikon, Regensdorf, Thalwil, Küsnacht, Maur, Zollikon, and Meilen — with exact Steuerfüsse for each. More municipalities are being added.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. You can export all your financial data as CSV or PDF at any time. The data is stored locally in SQLite, so you always have full ownership and control.',
  },
  {
    q: 'Is it really free?',
    a: 'During Early Access, yes — completely free with all features unlocked. We\'ll introduce a fair pricing model later, with advance notice to all users.',
  },
  {
    q: 'What about data privacy?',
    a: 'All data stays on your iPhone. We use a local SQLite database — nothing is transmitted to any server. No account needed. No analytics. No tracking. Your finances are yours alone.',
  },
]

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

  return (
    <Section id="faq">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Frequently asked questions
        </h2>
        <div>
          {faqs.map((faq, i) => (
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
