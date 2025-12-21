import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Star, Zap, Award, Crown, Users, Globe, Shield, Coins } from 'lucide-react';
import { useEffect, useState } from 'react';

// Stars background component
const StarsBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
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
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: star.id % 3 === 0 ? 'hsl(262 83% 70%)' : star.id % 2 === 0 ? 'hsl(173 80% 60%)' : 'white',
            boxShadow: star.id % 3 === 0 ? '0 0 6px hsl(262 83% 70%)' : 'none',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.3, 0.8],
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
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${5 + i * 15}%`,
            right: '0%',
            boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), -100px 0 60px 8px rgba(255,255,255,0.4)',
          }}
          initial={{ x: 100, y: -100, opacity: 0 }}
          animate={{
            x: [-100, -1000],
            y: [0, 500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 3,
            repeatDelay: 6,
          }}
        />
      ))}
    </div>
  );
};

// Floating particles with enhanced glow
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            background: i % 3 === 0 
              ? 'radial-gradient(circle, hsl(262 83% 70% / 0.8), hsl(262 83% 58% / 0.2))'
              : i % 2 === 0
              ? 'radial-gradient(circle, hsl(173 80% 60% / 0.8), hsl(173 80% 40% / 0.2))'
              : 'radial-gradient(circle, hsl(45 100% 60% / 0.8), hsl(45 100% 50% / 0.2))',
            boxShadow: i % 3 === 0 
              ? '0 0 15px hsl(262 83% 58% / 0.6)' 
              : i % 2 === 0 
              ? '0 0 15px hsl(173 80% 40% / 0.6)'
              : '0 0 15px hsl(45 100% 50% / 0.6)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Roles with icons
const roles = [
  { title: 'Global Manager', icon: Globe, color: 'from-violet-500 to-purple-600' },
  { title: 'Super Admin', icon: Shield, color: 'from-cyan-400 to-teal-500' },
  { title: 'BD Official', icon: Users, color: 'from-pink-500 to-rose-600' },
  { title: 'Coins Seller', icon: Coins, color: 'from-yellow-400 to-orange-500' },
  { title: 'Agency Owner', icon: Crown, color: 'from-amber-400 to-yellow-500' },
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/50 rounded-full blur-[180px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/50 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/30 rounded-full blur-[200px]"
      />
      
      {/* Center spotlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-primary/40 via-transparent to-transparent rounded-full animate-pulse-slow" />
      
      {/* Grid Pattern with enhanced glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(262 83% 58% / 0.15) 0%, transparent 70%),
                            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 60px 60px, 60px 60px'
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
              <Star className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_10px_hsl(45_100%_50%_/_0.8)]" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-32 right-10 md:right-20"
            >
              <Crown className="w-12 h-12 text-amber-400 drop-shadow-[0_0_15px_hsl(45_100%_50%_/_0.8)]" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-40 left-20"
            >
              <Zap className="w-8 h-8 text-primary drop-shadow-[0_0_10px_hsl(262_83%_58%_/_0.8)]" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-60 right-20"
            >
              <Award className="w-10 h-10 text-accent drop-shadow-[0_0_10px_hsl(173_80%_40%_/_0.8)]" />
            </motion.div>
          </div>

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full mb-8 shine"
            style={{
              boxShadow: '0 0 30px hsl(262 83% 58% / 0.3)'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-foreground">
              🏆 Worldwide Top Rated • Available 24/7
            </span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_5px_hsl(45_100%_50%)]" fill="currentColor" />
            </motion.div>
          </motion.div>

          {/* Main Heading with intense glow effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold mb-6 leading-tight"
          >
            <span className="text-foreground drop-shadow-[0_0_30px_hsl(0_0%_100%_/_0.3)]">I'm </span>
            <motion.span 
              className="text-gradient text-glow-strong relative inline-block"
              animate={{ 
                textShadow: [
                  '0 0 30px hsl(262 83% 58% / 0.6)',
                  '0 0 60px hsl(262 83% 58% / 0.9)',
                  '0 0 30px hsl(262 83% 58% / 0.6)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Danish Jani
              <motion.span
                className="absolute -top-3 -right-6 text-2xl"
                animate={{ rotate: [0, 20, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.span>
            <br />
            <span className="text-foreground text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_20px_hsl(0_0%_100%_/_0.2)]">Creative</span>{' '}
            <span className="relative inline-block">
              <span className="text-gradient-rainbow font-futuristic text-glow">PROFESSIONAL</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-primary origin-left rounded-full"
                style={{ boxShadow: '0 0 20px hsl(262 83% 58% / 0.8)' }}
              />
            </span>
          </motion.h1>

          {/* Rotating Role Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: currentRoleIndex === index ? 1.1 : 1,
                    boxShadow: currentRoleIndex === index 
                      ? '0 0 30px hsl(262 83% 58% / 0.5)' 
                      : '0 0 0px transparent'
                  }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full glass-card border ${
                    currentRoleIndex === index 
                      ? 'border-primary/50 bg-primary/10' 
                      : 'border-border/30'
                  }`}
                >
                  <role.icon className={`w-4 h-4 ${currentRoleIndex === index ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`text-sm font-semibold ${currentRoleIndex === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {role.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-12"
          >
            🎨 <span className="text-foreground font-semibold">Graphic Designer</span> • 
            🎬 <span className="text-foreground font-semibold">Video Editor</span> • 
            💻 <span className="text-foreground font-semibold">Web Developer</span>
            <br />
            <span className="text-lg text-foreground/80">Serving 50+ International Clients in Live Streaming Industry</span>
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
                boxShadow: '0 0 40px hsl(262 83% 58% / 0.6), 0 0 80px hsl(262 83% 58% / 0.4), 0 0 120px hsl(262 83% 58% / 0.2)'
              }}
            >
              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
              className="group relative px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 border-animated bg-card/50"
            >
              <Play className="w-5 h-5 text-primary" />
              <span className="text-foreground">Let's Talk</span>
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
              { value: '3+', label: 'Years Experience', icon: '⚡', glow: 'hsl(262 83% 58%)' },
              { value: '150+', label: 'Projects Done', icon: '🚀', glow: 'hsl(173 80% 40%)' },
              { value: '50+', label: 'Global Clients', icon: '🌍', glow: 'hsl(280 90% 65%)' },
              { value: '#1', label: 'Top Rated', icon: '👑', glow: 'hsl(45 100% 50%)' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="relative p-6 glass-card rounded-2xl text-center group cursor-pointer overflow-hidden"
                style={{
                  boxShadow: `0 0 30px ${stat.glow} / 0.2`
                }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `inset 0 0 20px ${stat.glow} / 0.3, 0 0 40px ${stat.glow} / 0.3`
                  }}
                />
                
                <motion.span 
                  className="text-3xl mb-2 block"
                  animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.icon}
                </motion.span>
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2 text-glow">
                  {stat.value}
                </div>
                <div className="text-foreground/80 text-sm font-medium">{stat.label}</div>
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
          className="w-7 h-12 border-2 border-primary/60 rounded-full flex justify-center pt-2"
          style={{ boxShadow: '0 0 15px hsl(262 83% 58% / 0.5)' }}
        >
          <motion.div 
            className="w-2 h-3 bg-gradient-primary rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-xs text-foreground/60 mt-2 text-center font-medium">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
