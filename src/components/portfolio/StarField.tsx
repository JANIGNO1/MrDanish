import { motion } from 'framer-motion';
import { useEffect, useState, memo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface StarFieldProps {
  count?: number;
  className?: string;
}

const StarField = memo(({ count = 60, className = '' }: StarFieldProps) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setStars(generated);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
            boxShadow: [
              `0 0 ${star.size * 2}px hsl(var(--primary) / 0.3)`,
              `0 0 ${star.size * 4}px hsl(var(--primary) / 0.6)`,
              `0 0 ${star.size * 2}px hsl(var(--primary) / 0.3)`,
            ],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-white"
            style={{
              boxShadow: `0 0 ${star.size * 3}px hsl(var(--primary) / 0.5), 0 0 ${star.size * 6}px hsl(var(--primary) / 0.3)`,
            }}
          />
        </motion.div>
      ))}
      
      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 15}%`,
            boxShadow: '0 0 10px #fff, 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))',
          }}
          animate={{
            x: [0, -200],
            y: [0, 200],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 5 + 2,
            repeatDelay: 8,
            ease: 'easeOut',
          }}
        >
          <div 
            className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-white via-primary to-transparent origin-left -rotate-45"
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>
      ))}
    </div>
  );
});

StarField.displayName = 'StarField';

export default StarField;
