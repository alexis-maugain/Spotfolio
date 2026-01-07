import { motion } from 'motion/react';

interface WrappedBannerProps {
  onStart: () => void;
}

export function WrappedBanner({ onStart }: WrappedBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-8 md:p-12 overflow-hidden mb-10 cursor-pointer group"
      onClick={onStart}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Wavy lines decoration */}
        <svg className="absolute top-0 left-0 w-1/3 h-full opacity-20" viewBox="0 0 200 400">
          <path
            d="M 0 0 Q 50 100 0 200 T 0 400"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 20 0 Q 70 100 20 200 T 20 400"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        
        {/* Checkered flag pattern */}
        <div className="absolute bottom-8 left-8 w-24 h-16 opacity-80">
          <div className="grid grid-cols-4 grid-rows-3 w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`${
                  (Math.floor(i / 4) + (i % 4)) % 2 === 0
                    ? 'bg-red-500'
                    : 'bg-black'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute bottom-8 right-8 w-32 h-32">
          <svg viewBox="0 0 100 100" className="opacity-30">
            <path
              d="M 10 50 Q 30 20 50 50 T 90 50"
              stroke="black"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-black mb-3"
          style={{ fontSize: '2.5rem', fontWeight: 700 }}
        >
          Mon Wrapped 2025
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-black/70 mb-6 text-lg"
        >
          Revivez mes créations marquantes de l'année.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition-colors shadow-lg cursor-pointer"
          style={{ fontSize: '1.1rem', fontWeight: 600 }}
        >
          C'est parti !
        </motion.button>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-2xl" />
    </motion.div>
  );
}