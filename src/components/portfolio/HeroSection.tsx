import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Star, Award, Users, Globe, Briefcase, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import profileMain from '@/assets/profile-main.jpg';

// Floating particles with professional blue theme
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; type: 'circle' | 'code' | 'design' }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
      type: ['circle', 'code', 'design'][i % 3] as 'circle' | 'code' | 'design',
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
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

// Grid background pattern
const GridPattern = () => (
  <div 
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px'
    }}
    aria-hidden="true"
  />
);

// Roles/titles
const roles = [
  'Graphic Designer',
  'Video Editor', 
  'Web Developer',
  'UI/UX Designer',
  'Digital Marketer',
];

// Social links
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
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      
      {/* Particles & Grid */}
      <FloatingParticles />
      <GridPattern />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Profile Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex-shrink-0 order-2 lg:order-1"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-110" aria-hidden="true" />
              
              {/* Profile Image */}
              <motion.div
                animate={{ boxShadow: ['0 0 30px hsla(220 80% 55% / 0.3)', '0 0 50px hsla(220 80% 55% / 0.5)', '0 0 30px hsla(220 80% 55% / 0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30"
              >
                <img 
                  src={profileMain} 
                  alt="Danish Jani - Professional Freelance Creative"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </motion.div>
              
              {/* Floating Badge - Award */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg" aria-hidden="true">
                  <Award className="w-7 h-7 text-white" />
                </div>
              </motion.div>
              
              {/* Floating Badge - Star */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-2"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg" aria-hidden="true">
                  <Star className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </motion.div>
            </motion.div>

            {/* Content - Right Side */}
            <div className="text-center lg:text-left flex-1 order-1 lg:order-2">
              
              {/* Social Links - Top */}
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
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">
                  🏆 Worldwide Top Rated • Available 24/7
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight"
              >
                <span className="text-foreground">Danish Jani</span>
              </motion.h1>

              {/* Rotating Roles */}
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
                    className="text-2xl md:text-4xl font-display font-bold text-gradient"
                  >
                    {roles[currentRoleIndex]}
                  </motion.div>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Creative Professional • Global Manager • Agency Owner
                <br />
                <span className="text-foreground font-medium">3+ Years Experience • 150+ Projects • 50+ Global Clients</span>
              </motion.p>

              {/* CTA Buttons */}
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
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3"
                >
                  <Play className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>View Portfolio</span>
                </motion.a>
              </motion.div>

              {/* Quick Stats */}
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
                    className="text-center glass-card p-4 rounded-2xl"
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

      {/* Scroll Indicator */}
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
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
