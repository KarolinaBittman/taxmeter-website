import { motion } from 'framer-motion'

export default function AnimatedButton({
  href = '#',
  children,
  variant = 'primary',
  className = '',
}) {
  const base = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl no-underline overflow-hidden transition-all duration-300'
  const variants = {
    primary: 'bg-accent text-dark px-7 py-3.5 text-base hover:bg-[#4fd1c5] hover:shadow-[0_0_20px_rgba(78,205,196,0.4)]',
    ghost: 'border border-white/10 text-text hover:bg-white/5 px-7 py-3.5 text-base',
    large: 'bg-accent text-dark px-10 py-4 text-lg hover:bg-[#4fd1c5] hover:shadow-[0_0_24px_rgba(78,205,196,0.5)]',
    nav: 'bg-accent text-dark text-sm px-5 py-2.5 hover:bg-[#4fd1c5] hover:shadow-[0_0_16px_rgba(78,205,196,0.4)]',
  }

  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Shine sweep effect */}
      {variant !== 'ghost' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
          initial={{ x: '-200%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  )
}
