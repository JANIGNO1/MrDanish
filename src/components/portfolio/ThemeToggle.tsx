import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-16 h-8 rounded-full bg-secondary/50 border border-border/50 flex items-center p-1 transition-all duration-300 overflow-hidden group"
      style={{
        boxShadow: isDark 
          ? '0 0 20px hsl(262 83% 58% / 0.3), inset 0 0 10px hsl(262 83% 58% / 0.1)' 
          : '0 0 20px hsl(45 100% 50% / 0.3), inset 0 0 10px hsl(45 100% 50% / 0.1)'
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-50"
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, hsl(262 83% 58% / 0.2), hsl(280 90% 65% / 0.2))' 
            : 'linear-gradient(135deg, hsl(45 100% 50% / 0.2), hsl(35 100% 55% / 0.2))'
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Stars/sparkles for dark mode */}
      <AnimatePresence>
        {isDark && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1, 0.8],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 20}%`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Toggle circle */}
      <motion.div
        className="relative w-6 h-6 rounded-full flex items-center justify-center z-10"
        animate={{
          x: isDark ? 0 : 32,
          background: isDark 
            ? 'linear-gradient(135deg, hsl(262 83% 58%), hsl(280 90% 65%))' 
            : 'linear-gradient(135deg, hsl(45 100% 50%), hsl(35 100% 55%))',
          boxShadow: isDark
            ? '0 0 15px hsl(262 83% 58% / 0.8)'
            : '0 0 15px hsl(45 100% 50% / 0.8)'
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3.5 h-3.5 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3.5 h-3.5 text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: isDark
            ? 'inset 0 0 20px hsl(262 83% 58% / 0.3)'
            : 'inset 0 0 20px hsl(45 100% 50% / 0.3)'
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
