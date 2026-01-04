import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Star, Award, Users, Globe, Briefcase, Linkedin, Twitter, Instagram, Crown, Zap } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import profileMain from '@/assets/profile-main.jpg';
import StarField from './StarField';

// Floating particles with professional blue theme
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 70%)',
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary) / 0.3)`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Roles/titles with 2025 trending keywords - E-E-A-T optimized
const roles = [
  '#1 Live Streaming Expert',
  'AI-Powered Digital Growth',
  'Global Agency Owner',
  'Super Admin Worldwide',
  'Remote Work Freelancer',
  'Content Creator 2025',
];

// Social links with glow effect
const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/danishjani', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/janigno1', label: 'X/Twitter' },
  { icon: Instagram, href: 'https://instagram.com/danishjanig', label: 'Instagram' },
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section introducing Danish Jani"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Star Field */}
      <StarField count={80} />
      
      {/* Animated Gradient Orbs with Glow */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]"
        aria-hidden="true"
      />
      
      {/* Particles */}
      <FloatingParticles />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Profile Image - Left Side with Star Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex-shrink-0 order-2 lg:order-1"
            >
              {/* Star Burst Background */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{ 
                  boxShadow: [
                    '0 0 40px hsl(220 80% 55% / 0.3), 0 0 80px hsl(220 80% 55% / 0.2)',
                    '0 0 60px hsl(220 80% 55% / 0.5), 0 0 120px hsl(220 80% 55% / 0.3)',
                    '0 0 40px hsl(220 80% 55% / 0.3), 0 0 80px hsl(220 80% 55% / 0.2)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ 
                  background: 'radial-gradient(circle, hsl(220 80% 55% / 0.15) 0%, transparent 60%)',
                  transform: 'scale(1.3)'
                }}
                aria-hidden="true" 
              />
              
              {/* Profile Image */}
              <motion.div
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                animate={{ 
                  boxShadow: [
                    '0 0 30px hsl(220 80% 55% / 0.4), inset 0 0 30px hsl(220 80% 55% / 0.1)',
                    '0 0 50px hsl(220 80% 55% / 0.6), inset 0 0 50px hsl(220 80% 55% / 0.15)',
                    '0 0 30px hsl(220 80% 55% / 0.4), inset 0 0 30px hsl(220 80% 55% / 0.1)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ border: '3px solid hsl(220 80% 55% / 0.5)' }}
              >
                <img 
                  src={profileMain} 
                  alt="Danish Jani - #1 Global Live Streaming Expert 2025, Agency Owner, Super Admin | Trusted by Hong Kong, Malaysia, Singapore"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  title="Danish Jani - Top-Rated Remote Work Freelancer & AI-Powered Digital Growth Expert"
                />
              </motion.div>
              
              {/* Floating Badge - Crown */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center glow-gold" aria-hidden="true">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              {/* Floating Badge - Star */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-4"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center glow" aria-hidden="true">
                  <Star className="w-7 h-7 text-white" fill="currentColor" />
                </div>
              </motion.div>

              {/* Floating Badge - Zap */}
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 -right-6"
              >
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center border-glow" aria-hidden="true">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            </motion.div>

            {/* Content - Right Side */}
            <div className="text-center lg:text-left flex-1 order-1 lg:order-2">
              
              {/* Social Links - Top with Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-start gap-3 mb-6"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all card-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Top Badge with Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full mb-6"
                style={{ boxShadow: '0 0 20px hsl(220 80% 55% / 0.2)' }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                </motion.div>
                <span className="text-sm font-medium text-foreground">
                  🏆 #1 Worldwide Live Streaming Expert 2025 • Available 24/7
                </span>
              </motion.div>

              {/* Main Heading with Text Glow */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight"
              >
                <span className="text-foreground text-glow-white">Danish Jani</span>
              </motion.h1>

              {/* Rotating Roles with Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="h-12 md:h-14 overflow-hidden">
                  <motion.div
                    key={currentRoleIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl font-display font-bold text-gradient text-glow"
                  >
                    {roles[currentRoleIndex]}
                  </motion.div>
                </div>
              </motion.div>

              {/* Tagline - 2025 Trending Keywords */}

              {/* CTA Buttons with Enhanced Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                {/* Primary CTA */}
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary px-8 py-4 text-white rounded-full font-semibold text-lg flex items-center gap-3 shine"
                  aria-label="Hire Me Now - Go to contact section"
                >
                  <span>Hire Me Now</span>
                  <ArrowDown className="w-5 h-5" />
                </motion.button>
                
                {/* Secondary CTA */}
              </motion.div>

              {/* Quick Stats with Glow */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  { icon: Briefcase, value: '150+', label: 'Projects' },
                  { icon: Users, value: '50+', label: 'Clients' },
                  { icon: Globe, value: '15+', label: 'Countries' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center glass-card p-4 rounded-2xl card-glow"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
      >
        <div className="flex items-center justify-center gap-3 p-4 glass-card rounded-2xl">
          <Globe className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-sm md:text-base font-medium text-foreground text-center">
            Trusted by Hong Kong, Malaysia, Singapore & Global Live Streaming Industries
          </span>
        </div>
      </motion.div>

      {/* Scroll Indicator with Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ boxShadow: ['0 0 10px hsl(220 80% 55% / 0.3)', '0 0 20px hsl(220 80% 55% / 0.5)', '0 0 10px hsl(220 80% 55% / 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full glass-card"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
