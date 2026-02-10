import Section from './Section'
import FeatureCard from './FeatureCard'
import { Activity, ScanLine, QrCode, Receipt } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const featureIcons = [
  <Activity className="w-7 h-7" strokeWidth={1.5} />,
  <ScanLine className="w-7 h-7" strokeWidth={1.5} />,
  <QrCode className="w-7 h-7" strokeWidth={1.5} />,
  <Receipt className="w-7 h-7" strokeWidth={1.5} />,
]

export default function Features() {
  const { t } = useTranslation()
  const cards = t('features.cards', { returnObjects: true })

  return (
    <Section id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
          {t('features.headline')}
          <br />
          <span className="text-accent">{t('features.headlineAccent')}</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          {t('features.subheading')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((f, i) => (
          <FeatureCard key={i} icon={featureIcons[i]} title={f.title} description={f.description} index={i} />
        ))}
      </div>
    </Section>
  )
}
