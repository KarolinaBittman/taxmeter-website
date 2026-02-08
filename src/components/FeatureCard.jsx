import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function FeatureCard({ icon, title, description, index = 0 }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rawRotateX = useTransform(y, [-100, 100], [8, -8])
  const rawRotateY = useTransform(x, [-100, 100], [-8, 8])
  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 20 })

  const spotlightX = useTransform(x, [-100, 100], [0, 100])
  const spotlightY = useTransform(y, [-100, 100], [0, 100])

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function resetMouse() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className="group bg-card rounded-2xl p-8 md:p-10 cursor-default relative overflow-hidden border border-transparent hover:border-accent/10 transition-colors duration-500"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
      }}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 4px 20px rgba(78,205,196,0.1)',
      }}
    >
      {/* Mouse spotlight */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(78,205,196,0.06) 0%, transparent 70%)',
          left: spotlightX,
          top: spotlightY,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="mb-5 text-muted group-hover:text-accent transition-colors duration-300"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-text mb-3">{title}</h3>
        <p className="text-muted leading-relaxed text-[15px]">{description}</p>
      </div>
    </motion.div>
  )
}
