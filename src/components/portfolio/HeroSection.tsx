import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Star, Zap, Award, Crown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Stars background component
const StarsBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

// Shooting stars
const ShootingStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${10 + i * 20}%`,
            right: '0%',
            boxShadow: '0 0 6px 2px rgba(255,255,255,0.6), -100px 0 60px 5px rgba(255,255,255,0.3)',
          }}
          initial={{ x: 100, y: -100, opacity: 0 }}
          animate={{
            x: [-100, -800],
            y: [0, 400],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 4,
            repeatDelay: 8,
          }}
        />
      ))}
    </div>
  );
};

// Floating particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 
              ? 'hsl(262 83% 58% / 0.6)' 
              : 'hsl(173 80% 40% / 0.6)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Stars */}
      <StarsBackground />
      <ShootingStars />
      <FloatingParticles />
      
      {/* Animated Orbs with enhanced glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/40 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px]"
      />
      
      {/* Center glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-primary/30 via-transparent to-transparent rounded-full animate-pulse-slow" />
      
      {/* Grid Pattern with glow */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(262 83% 58% / 0.1) 0%, transparent 70%),
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 80px 80px, 80px 80px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Floating icons around heading */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 left-10 md:left-20"
            >
              <Star className="w-8 h-8 text-primary/60" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-32 right-10 md:right-20"
            >
              <Crown className="w-10 h-10 text-accent/60" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-40 left-20"
            >
              <Zap className="w-6 h-6 text-primary/50" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-60 right-20"
            >
              <Award className="w-8 h-8 text-accent/50" />
            </motion.div>
          </div>

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full mb-8 shine"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-foreground">
              🏆 Top Rated Freelancer • Available Worldwide
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            </motion.div>
          </motion.div>

          {/* Main Heading with glow effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">I'm </span>
            <motion.span 
              className="text-gradient text-glow-strong relative inline-block"
              animate={{ 
                textShadow: [
                  '0 0 20px hsl(262 83% 58% / 0.5)',
                  '0 0 40px hsl(262 83% 58% / 0.8)',
                  '0 0 20px hsl(262 83% 58% / 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Danish Jani
              <motion.span
                className="absolute -top-2 -right-4"
                animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.span>
            <br />
            <span className="text-foreground text-4xl md:text-5xl lg:text-6xl">Creative</span>{' '}
            <span className="relative inline-block">
              <span className="text-gradient-rainbow font-futuristic">PROFESSIONAL</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-primary origin-left rounded-full glow"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12"
          >
            🎨 <span className="text-foreground font-medium">Graphic Designer</span> • 
            🎬 <span className="text-foreground font-medium">Video Editor</span> • 
            💻 <span className="text-foreground font-medium">Web Developer</span>
            <br />
            <span className="text-lg">Serving 50+ International Clients in Live Streaming Industry</span>
          </motion.p>

          {/* CTA Buttons with center glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary CTA with intense glow */}
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-primary text-primary-foreground rounded-full font-bold text-lg flex items-center gap-3 overflow-hidden"
              style={{
                boxShadow: '0 0 30px hsl(262 83% 58% / 0.5), 0 0 60px hsl(262 83% 58% / 0.3), 0 0 100px hsl(262 83% 58% / 0.2)'
              }}
            >
              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.a>
            
            {/* Secondary CTA */}
            <motion.a
              href="https://wa.me/923400278535"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 border-animated"
            >
              <Play className="w-5 h-5 text-primary" />
              <span>Let's Talk</span>
              <span className="text-green-400">💬</span>
            </motion.a>
          </motion.div>

          {/* Stats with glowing cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { value: '3+', label: 'Years Experience', icon: '⚡' },
              { value: '150+', label: 'Projects Done', icon: '🚀' },
              { value: '50+', label: 'Global Clients', icon: '🌍' },
              { value: '#1', label: 'Top Rated', icon: '👑' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 glass-card rounded-2xl text-center group cursor-pointer"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <motion.span 
                  className="text-2xl mb-2 block"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.icon}
                </motion.span>
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-7 h-12 border-2 border-primary/50 rounded-full flex justify-center pt-2 glow"
        >
          <motion.div 
            className="w-2 h-3 bg-gradient-primary rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
