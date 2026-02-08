import Section from './Section'
import FeatureCard from './FeatureCard'
import { Activity, ScanLine, QrCode, Receipt } from 'lucide-react'

const features = [
  {
    icon: <Activity className="w-7 h-7" strokeWidth={1.5} />,
    title: 'Solaris Dashboard',
    description:
      'Your financial health at a glance. The glowing Solaris Orb shows exactly what\'s yours to keep, with smart reserves calculated in real-time.',
  },
  {
    icon: <ScanLine className="w-7 h-7" strokeWidth={1.5} />,
    title: 'Bill Buster OCR',
    description:
      'Scan tax bills instantly. Spot discrepancies between canton estimates and your reality, then generate adjustment requests with one tap.',
  },
  {
    icon: <QrCode className="w-7 h-7" strokeWidth={1.5} />,
    title: 'QR Invoicing',
    description:
      'Create Swiss-compliant QR-bills in seconds. Just enter client details and amount — we handle the rest. Share PDFs instantly. Fully SIX-standard compliant.',
  },
  {
    icon: <Receipt className="w-7 h-7" strokeWidth={1.5} />,
    title: 'Expense Tracking',
    description:
      'Snap a photo of any receipt. Automatic extraction of vendor, amount, and category. Never lose a deduction again.',
  },
]

export default function Features() {
  return (
    <Section id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
          Four powerful tools.
          <br />
          <span className="text-accent">One seamless experience.</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Everything you need to manage your taxes and invoices on the go.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
    </Section>
  )
}
