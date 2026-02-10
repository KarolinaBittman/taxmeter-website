import { motion } from 'framer-motion'

export default function FeatureCard({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      className="bg-card rounded-2xl p-8 md:p-10 border border-transparent hover:border-accent/10 transition-colors duration-500"
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div className="mb-5 text-muted hover:text-accent transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text mb-3">{title}</h3>
      <p className="text-muted leading-relaxed text-[15px]">{description}</p>
    </motion.div>
  )
}
