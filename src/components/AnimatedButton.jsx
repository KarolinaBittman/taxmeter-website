import { motion } from 'framer-motion'

export default function AnimatedButton({
  href = '#',
  children,
  variant = 'primary',
  className = '',
}) {
  const base = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors no-underline overflow-hidden'
  const variants = {
    primary: 'bg-accent text-dark px-7 py-3.5 text-base',
    ghost: 'border border-white/10 text-text hover:bg-white/5 px-7 py-3.5 text-base',
    large: 'bg-accent text-dark px-10 py-4 text-lg',
    nav: 'bg-accent text-dark text-sm px-5 py-2.5',
  }

  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Shine effect */}
      {variant !== 'ghost' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-200%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  )
}
