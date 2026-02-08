import Section from './Section'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Setup',
    description: 'Enter your canton, income estimate, and filing status. Takes under 2 minutes.',
  },
  {
    num: '02',
    title: 'Log',
    description: 'Record income and expenses as they happen. Snap receipts, send invoices, scan bills.',
  },
  {
    num: '03',
    title: 'Watch the Orb',
    description: 'The Solaris Orb recalculates in real-time. Always know exactly what\'s yours to keep.',
  },
]

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How it works
        </motion.h2>
        <motion.p
          className="text-muted text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Three steps. Two minutes. Total clarity.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line with draw-on animation */}
        <motion.div
          className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(78,205,196,0.3), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="text-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Step number with pulse ring */}
            <motion.div
              className="relative mx-auto mb-6 w-14 h-14"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center relative z-10">
                <span className="font-mono text-accent font-semibold text-sm">{step.num}</span>
              </div>
            </motion.div>

            <h3 className="text-xl font-semibold text-text mb-3">{step.title}</h3>
            <p className="text-muted text-[15px] leading-relaxed max-w-xs mx-auto">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
