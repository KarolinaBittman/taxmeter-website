import Section from './Section'
import { motion } from 'framer-motion'
import { AlertTriangle, FileQuestion, QrCode } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'The Tax Reserve Mystery',
    description:
      'Every quarter, you wonder: "How much should I set aside?" Too little and you face a surprise bill. Too much and your cash flow suffers.',
  },
  {
    icon: FileQuestion,
    title: 'Steuerrechnung Confusion',
    description:
      'The provisional tax bill arrives. Numbers from the canton, the municipality, AHV/IV — none of it matches your expectations. Which is correct?',
  },
  {
    icon: QrCode,
    title: 'Manual QR Invoicing',
    description:
      'Creating SIX-compliant QR invoices by hand is tedious and error-prone. One wrong IBAN prefix and your client\'s bank rejects the payment.',
  },
]

export default function Problem() {
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
          Selbständig in Zürich?
        </motion.h2>
        <motion.p
          className="text-muted text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          If any of this sounds familiar, you're not alone.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              className="group bg-card rounded-2xl p-8 border border-transparent hover:border-accent/10 transition-colors duration-500"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(78,205,196,0.05)',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-7 h-7 text-muted group-hover:text-accent transition-colors duration-300 mb-5" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-semibold text-text mb-3">{item.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
