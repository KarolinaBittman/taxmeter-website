import Section from './Section'
import { motion } from 'framer-motion'

const badges = [
  { title: 'AHV/IV Compliant', description: 'Automatic 14.3% reserve calculations' },
  { title: 'Canton Zürich', description: '20+ municipalities with exact Steuerfüsse' },
  { title: 'QR-Bill Standard', description: 'Fully compliant Swiss invoices' },
]

export default function Privacy() {
  return (
    <Section id="privacy">
      {/* Main privacy message */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-16">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
          <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Your financial data stays on your phone. Period.
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            We understand the complexity of Swiss taxation — AHV/IV contributions,
            cantonal variations, municipal rates, and federal obligations. TaxMeter.ch
            handles it all automatically using a local SQLite database. Zero data leaves your device.
            No servers. No accounts. No tracking.
          </p>
        </div>
      </div>

      {/* Compliance badges */}
      <div className="grid md:grid-cols-3 gap-4">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.title}
            className="bg-card rounded-xl p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-accent font-semibold text-sm mb-1">{badge.title}</h3>
            <p className="text-muted text-sm">{badge.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
