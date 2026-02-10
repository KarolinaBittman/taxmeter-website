import Section from './Section'
import { motion } from 'framer-motion'

const badges = [
  {
    title: 'AHV/IV Compliant',
    description: 'Automatic reserve calculations based on the current 14.3% contribution rate. Covers AHV, IV, EO, and ALV — so you always know exactly what you owe before the bill arrives.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm1.498 4.5h.008v.008h-.008v-.008zm0-2.25h.008v.008h-.008v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Canton Zürich',
    description: 'Covers 20+ municipalities with exact Steuerfüsse, updated annually. Whether you\'re in Winterthur or Uster, your cantonal and communal tax rates are already built in.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'QR-Bill Standard',
    description: 'Generate fully compliant Swiss QR invoices that meet SIX Interbank Clearing standards. Your clients can scan and pay directly from their banking app — no manual entry needed.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
      </svg>
    ),
  },
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
      <div className="grid md:grid-cols-3 gap-5">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.title}
            className="bg-card rounded-xl px-6 py-7 border border-border hover:border-accent/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 transition-all duration-300 ease-in-out hover:bg-accent/25 hover:scale-105 hover:-translate-y-1">
              {badge.icon}
            </div>
            <h3 className="text-text font-semibold text-[15px] mb-2">{badge.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{badge.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
