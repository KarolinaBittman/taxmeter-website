import { motion } from 'framer-motion'

export default function SolarisOrb({ size = 180 }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Outer glow — backlight layer */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 1.8,
          height: size * 1.8,
          background: 'radial-gradient(circle, rgba(78,205,196,0.18) 0%, rgba(78,205,196,0.06) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Core orb with heartbeat pulse */}
      <motion.div
        className="relative rounded-full"
        style={{
          width: size,
          height: size,
          background: 'radial-gradient(circle at 35% 35%, #4ECDC4 0%, #2ea89f 30%, #1a7a73 60%, #0d4f4a 100%)',
          boxShadow: '0 0 60px rgba(78,205,196,0.3), 0 0 120px rgba(78,205,196,0.1)',
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Inner highlight */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          top: '20%',
          left: '22%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
