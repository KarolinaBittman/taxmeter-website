import { motion } from 'framer-motion'

export default function Section({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`py-[120px] md:py-[160px] px-6 md:px-8 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}
